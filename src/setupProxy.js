/**
 * CRA dev-server proxy — eliminates CORS for local development.
 *
 * Requests to /azure-upload/<blob> are forwarded server-to-server to
 * Azure Blob Storage, so the browser never makes a cross-origin request.
 *
 * This file is only used by `react-scripts start` (development).
 * In production you must configure CORS on the Azure Storage account:
 *   Azure Portal → Storage account → Resource sharing (CORS) → Blob service
 *     Allowed origins:  https://your-production-domain.com
 *     Allowed methods:  PUT, OPTIONS
 *     Allowed headers:  content-type, x-ms-blob-type
 *     Exposed headers:  (leave blank)
 *     Max age:          600
 */
const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(
    '/azure-upload',
    createProxyMiddleware({
      target: 'https://accidentreport.blob.core.windows.net',
      changeOrigin: true,
      pathRewrite: { '^/azure-upload': '/accidentreports' },
    })
  );
};
