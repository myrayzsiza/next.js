import postgres from 'postgres';

const connectionString = process.env.POSTGRES_URL;

if (!connectionString) {
  throw new Error('POSTGRES_URL environment variable is required.');
}

export const sql = postgres(connectionString, {
  ssl: 'require',
  max: 5,
  idle_timeout: 5,
});
