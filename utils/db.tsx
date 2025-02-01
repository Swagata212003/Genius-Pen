import { neon } from '@neondatabase/serverless';
import { drizzle } from 'drizzle-orm/neon-http';
import * as schema from './schema'
// const sql = neon(process.env.NEXT_PUBLIC_DRIZZILE_DB_URL);
const sql = neon(process.env.NEXT_PUBLIC_DRIZZILE_DB_URL ?? 'default_connection_string_here');

export const db = drizzle(sql,{schema});
