import postgres from 'postgres';

// Reuse one client across hot reloads in dev so connections don't pile up.
const globalForSql = globalThis as unknown as { sql?: postgres.Sql };

export const sql =
  globalForSql.sql ??
  postgres(process.env.POSTGRES_URL!, {
    ssl: 'require',
    max: 5,
    prepare: false, // required for Supabase transaction-mode pooler (port 6543)
  });

if (process.env.NODE_ENV !== 'production') globalForSql.sql = sql;
