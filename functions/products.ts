import { Pool } from '@neondatabase/serverless';

interface Env {
  DATABASE_URL: string;
}

export async function onRequest(context: { request: Request; env: Env }) {
  const { request, env } = context;

  // CORS headers
  const corsHeaders = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Allow-Methods': 'GET, OPTIONS',
    'Content-Type': 'application/json',
  };

  // Handle OPTIONS request for CORS
  if (request.method === 'OPTIONS') {
    return new Response(null, { status: 200, headers: corsHeaders });
  }

  // Handle GET request
  if (request.method === 'GET') {
    try {
      // Verificar se DATABASE_URL está configurada
      if (!env.DATABASE_URL) {
        console.error('❌ DATABASE_URL não está configurada!');
        return new Response(
          JSON.stringify({ 
            error: 'DATABASE_URL não configurada',
            message: 'Configure DATABASE_URL no arquivo .dev.vars (local) ou no Cloudflare Dashboard (produção)'
          }),
          { status: 500, headers: corsHeaders }
        );
      }

      console.log('📊 Conectando ao banco de dados...');
      const pool = new Pool({ connectionString: env.DATABASE_URL });
      
      console.log('🔍 Executando query...');
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

      await pool.end();

      console.log(`✅ ${result.rows.length} produtos retornados`);

      return new Response(JSON.stringify(result.rows), {
        status: 200,
        headers: corsHeaders,
      });
    } catch (error) {
      console.error('❌ Database error:', error);
      return new Response(
        JSON.stringify({ 
          error: 'Erro ao buscar produtos',
          details: error instanceof Error ? error.message : 'Erro desconhecido'
        }),
        { status: 500, headers: corsHeaders }
      );
    }
  }

  return new Response(
    JSON.stringify({ error: 'Method not allowed' }),
    { status: 405, headers: corsHeaders }
  );
}