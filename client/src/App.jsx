import { useEffect, useState } from 'react';
import http from './api/http.js';

export default function App() {
  const [health, setHealth] = useState({ loading: true });

  useEffect(() => {
    http
      .get('/health')
      .then((res) => setHealth({ ok: true, data: res.data }))
      .catch((err) =>
        setHealth({ ok: false, data: err.response?.data, message: err.message })
      );
  }, []);

  return (
    <div className="min-h-screen bg-ink text-white">
      <div className="mx-auto max-w-xl px-6 py-16">
        <div className="mb-8 flex items-center gap-3">
          <div className="h-9 w-9 rounded bg-accent" />
          <h1 className="text-2xl font-bold">Spare Parts Store</h1>
        </div>

        <div className="card p-6 text-ink">
          <h2 className="mb-3 text-lg font-bold">Setup check</h2>
          {health.loading && <p className="text-muted">Contacting the API…</p>}
          {health.ok && (
            <p className="font-semibold text-stock">
              API: {health.data.status} · Database: {health.data.database}
            </p>
          )}
          {health.ok === false && (
            <p className="font-semibold text-red-700">
              {health.data
                ? `API reachable, but database is ${health.data.database}. Check server/.env and MySQL.`
                : `Cannot reach the API (${health.message}). Is the server running on port 5000?`}
            </p>
          )}
          <button className="btn mt-5" type="button">Styled button</button>
        </div>
      </div>
    </div>
  );
}