import express from "express";
import cors from "cors";
import pkg from "pg";
import dotenv from "dotenv";

dotenv.config();

const { Pool } = pkg;
const app = express();

const isDev = process.env.NODE_ENV !== "production";

// CORS
const allowedOrigins = [
  "http://localhost:5173",
  "http://localhost:3000",
  process.env.FRONTEND_URL,
];

app.use(
  cors({
    origin: function (origin, callback) {
      if (!origin) return callback(null, true);

      if (
        allowedOrigins.includes(origin) ||
        origin?.includes("netlify.app")
      ) {
        callback(null, true);
      } else {
        callback(new Error("Not allowed by CORS"));
      }
    },
    credentials: true,
  })
);

app.use(express.json());

// Pool Neon
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: { rejectUnauthorized: false },
});

// Reset automático
async function checkAndResetClicks() {
  await pool.query("SELECT public.reset_clicks_if_needed();");
}

// GET /products
app.get("/products", async (req, res, next) => {
  try {
    await checkAndResetClicks();

    const result = await pool.query(`
      SELECT 
        id,
        title,
        image_url as "imageUrl",
        store,
        link,
        catalog_number as "catalogNumber",
        tag,
        category,
        clicks
      FROM public.products_with_clicks
      ORDER BY clicks DESC, catalog_number DESC
    `);

    res.json(result.rows);
  } catch (err) {
    next(err);
  }
});

// POST /products/click
app.post("/products/click", async (req, res, next) => {
  try {
    const { productId } = req.body;

    if (!productId) {
      return res.status(400).json({ error: "productId is required" });
    }

    const result = await pool.query(
      `
      INSERT INTO public.product_clicks (product_id, clicks, last_reset)
      VALUES ($1, 1, CURRENT_TIMESTAMP)
      ON CONFLICT (product_id) 
      DO UPDATE SET 
        clicks = product_clicks.clicks + 1,
        updated_at = CURRENT_TIMESTAMP
      RETURNING clicks
    `,
      [productId]
    );

    res.json({
      success: true,
      clicks: result.rows[0].clicks,
    });
  } catch (err) {
    next(err);
  }
});

// POST /reset-clicks
app.post("/reset-clicks", async (req, res, next) => {
  try {
    await pool.query(`
      UPDATE public.product_clicks
      SET 
        clicks = 0,
        last_reset = CURRENT_TIMESTAMP,
        updated_at = CURRENT_TIMESTAMP
    `);

    res.json({ success: true });
  } catch (err) {
    next(err);
  }
});

// GET /stats
app.get("/stats", async (req, res, next) => {
  try {
    const stats = await pool.query(`
      SELECT 
        COUNT(*) as total_products,
        SUM(clicks) as total_clicks,
        MAX(last_reset) as last_reset
      FROM public.product_clicks
    `);

    const topProducts = await pool.query(`
      SELECT 
        p.title,
        pc.clicks
      FROM public.products p
      JOIN public.product_clicks pc ON p.id = pc.product_id
      WHERE pc.clicks > 0
      ORDER BY pc.clicks DESC
      LIMIT 5
    `);

    res.json({
      general: stats.rows[0],
      topProducts: topProducts.rows,
    });
  } catch (err) {
    next(err);
  }
});

// GET /health
app.get("/health", async (req, res, next) => {
  try {
    await pool.query("SELECT 1");
    res.json({
      status: "ok",
      timestamp: new Date().toISOString(),
    });
  } catch (err) {
    next(err);
  }
});

// Root
app.get("/", (req, res) => {
  res.json({
    name: "ShopTrend API",
    version: "2.0.0",
  });
});

// Middleware global de erro
app.use((err, req, res, next) => {
  if (isDev) {
    console.error(err);
  }

  res.status(500).json({
    error: "Internal server error",
  });
});

const PORT = process.env.PORT || 3001;

app.listen(PORT);