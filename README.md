<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
</head>
<body>

<h1>ShopTrend Hub</h1>

<p>Plataforma de curadoria de produtos integrada com Neon PostgreSQL e Netlify Functions.</p>

<hr>

<h2>Estrutura do Projeto</h2>

<pre>
/
│├── services/
│   │   └── api.ts
│├── components/
│└── ...
├── netlify/
│   └── functions/
│       ├── products.ts
├── dist/ (gerado no build)
├── netlify.toml
└── README.html
</pre>

<hr>

<h2>Arquivo: services/api.ts</h2>

<p>Este arquivo centraliza todas as requisições HTTP do frontend.</p>

<p>Ele define automaticamente a URL base dependendo do ambiente:</p>

<pre>
const API_BASE_URL =
  import.meta.env.DEV
    ? "http://localhost:8888/.netlify/functions"
    : "/.netlify/functions";
</pre>

<h3>Em Desenvolvimento</h3>

<p>Utiliza:</p>

<pre>
http://localhost:8888/.netlify/functions
</pre>

<p>Executado com:</p>

<pre>
netlify dev
</pre>

<h3>Em Produção (Netlify)</h3>

<p>Utiliza:</p>

<pre>
/.netlify/functions
</pre>

<p>Exemplo real de endpoint:</p>

<pre>
https://sshoptrend.netlify.app/.netlify/functions/products
</pre>

<hr>

<h2>Deploy na Netlify</h2>

<h3>Configurações necessárias</h3>

<ul>
  <li><strong>Build command:</strong> npm run build</li>
  <li><strong>Publish directory:</strong> dist</li>
</ul>

<p>O Vite gera a pasta <strong>dist</strong> contendo:</p>

<ul>
  <li>index.html</li>
  <li>assets/</li>
  <li>bundle JS</li>
  <li>bundle CSS</li>
</ul>

<hr>

<h2>Netlify Functions</h2>

<p>Localizadas em:</p>

<pre>
/netlify/functions
</pre>

<p>Cada arquivo vira automaticamente um endpoint:</p>

<table border="1" cellpadding="6">
  <tr>
    <th>Arquivo</th>
    <th>Endpoint</th>
  </tr>
  <tr>
    <td>products.ts</td>
    <td>/.netlify/functions/products</td>
  </tr>
  <tr>
    <td>stats.ts</td>
    <td>/.netlify/functions/stats</td>
  </tr>
  <tr>
    <td>health.ts</td>
    <td>/.netlify/functions/health</td>
  </tr>
  <tr>
    <td>reset-clicks.ts</td>
    <td>/.netlify/functions/reset-clicks</td>
  </tr>
</table>

<hr>

<h2>Fluxo da Aplicação</h2>

<pre>
Frontend (React + Vite)
        ↓
Netlify Functions
        ↓
Neon PostgreSQL
</pre>

<hr>

<h2>Variáveis de Ambiente</h2>

<h3>Local (.env)</h3>

<pre>
DATABASE_URL=...
</pre>

<p>Não utilizar VITE_API_URL apontando para localhost em produção.</p>

<h3>Netlify</h3>

<p>Configurar em:</p>

<p>Site Settings → Environment Variables</p>

<pre>
DATABASE_URL
</pre>

<hr>

<h2>Problemas Comuns</h2>

<h3>Erro: ERR_CONNECTION_REFUSED</h3>

<p>Causa: tentativa de acesso a localhost em produção.</p>
<p>Solução: usar "/.netlify/functions" em produção.</p>

<h3>Erro: MIME type text/html para CSS</h3>

<p>Causa: inclusão manual de &lt;link rel="stylesheet" href="/index.css" /&gt; no index.html.</p>
<p>Solução: remover essa linha, pois o Vite injeta o CSS automaticamente no build.</p>

<hr>

<h2>Comandos Úteis</h2>

<h3>Rodar local com Functions</h3>

<pre>
netlify dev
</pre>

<h3>Build para produção</h3>

<pre>
npm run build
</pre>

<hr>

<h2>Arquitetura</h2>

<ul>
  <li>React + Vite</li>
  <li>Netlify Functions</li>
  <li>Neon PostgreSQL</li>
  <li>Deploy via GitHub + Netlify</li>
</ul>

</body>
</html>
