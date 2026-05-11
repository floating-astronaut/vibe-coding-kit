const express = require('express');
const app = express();
app.get('/health', (_req, res) => res.json({ ok: true }));
if (process.argv.includes('--smoke')) {
  console.log('smoke ok');
  process.exit(0);
}
app.listen(process.env.PORT || 3000, () => console.log('api ready'));
