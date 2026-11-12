import app from './app.js';
import { env } from './config/env.js';
import { testConnection } from './config/db.js';

try {
  await testConnection();
  console.log('MySQL connected');
} catch (err) {
  console.warn(`MySQL connection failed: ${err.message}`);
  console.warn('The server will still start. Check your .env and that MySQL is running.');
}

app.listen(env.port, () => {
  console.log(`API running at http://localhost:${env.port}`);
});