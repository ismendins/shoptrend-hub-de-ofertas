import pkg from 'pg';
const { Pool } = pkg;

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: { rejectUnauthorized: false },
});

export async function handler(event, context) {
  // CORS headers
  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Allow-Methods': 'GET, OPTIONS',
    'Content-Type': 'application/json',
  };

  // Handle OPTIONS request for CORS
  if (event.httpMethod === 'OPTIONS') {
    return { statusCode: 200, headers, body: '' };
  }

  // Handle GET request
  if (event.httpMethod === 'GET') {
    try {
      const result = await pool.query(`
        SELECT 
          p.id,
          p.title,
          p.image_url as "imageUrl",
          p.store,
          p.link,
          p.catalog_number as "catalogNumber",
          p.tag,
          c.label as category,
          p.clicks
        FROM products p
        JOIN categories c ON p.category_id = c.id
        ORDER BY p.clicks DESC, p.catalog_number DESC
      `);

      return {
        statusCode: 200,
        headers,
        body: JSON.stringify(result.rows),
      };
    } catch (error) {
      console.error('Database error:', error);
      return {
        statusCode: 500,
        headers,
        body: JSON.stringify({ error: 'Erro ao buscar produtos' }),
      };
    }
  }

  return {
    statusCode: 405,
    headers,
    body: JSON.stringify({ error: 'Method not allowed' }),
  };
}