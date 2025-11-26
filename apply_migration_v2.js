import postgres from 'postgres';
import dotenv from 'dotenv';

dotenv.config();

const sql = postgres(process.env.DB_URL, {
    ssl: { rejectUnauthorized: false },
    connect_timeout: 10,
    idle_timeout: 10,
    max_lifetime: 10,
});

async function migrate() {
    try {
        console.log('Starting migration (v2)...');

        console.log('1. Adding batch to attendance...');
        await sql`ALTER TABLE attendance ADD COLUMN IF NOT EXISTS batch text NOT NULL DEFAULT ''`;
        console.log('✓ Attendance updated');

        console.log('2. Adding batch to internal_marks...');
        await sql`ALTER TABLE internal_marks ADD COLUMN IF NOT EXISTS batch text NOT NULL DEFAULT ''`;
        console.log('✓ Internal Marks updated');

        console.log('Migration SUCCESS!');
    } catch (error) {
        console.error('Migration FAILED:', error);
    } finally {
        await sql.end();
        console.log('Connection closed.');
        process.exit(0);
    }
}

migrate();
