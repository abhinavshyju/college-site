import postgres from 'postgres';
import dotenv from 'dotenv';

dotenv.config();

const sql = postgres(process.env.DB_URL, {
    ssl: 'require',
    connect_timeout: 10,
});

async function migrate() {
    try {
        console.error('Starting migration...');
        console.error('Adding batch column to attendance table...');
        await sql`ALTER TABLE attendance ADD COLUMN IF NOT EXISTS batch text NOT NULL DEFAULT ''`;
        console.error('Success: attendance table updated.');

        console.error('Adding batch column to internal_marks table...');
        await sql`ALTER TABLE internal_marks ADD COLUMN IF NOT EXISTS batch text NOT NULL DEFAULT ''`;
        console.error('Success: internal_marks table updated.');
    } catch (error) {
        console.error('Migration failed:', error);
    } finally {
        await sql.end();
        console.error('Done.');
        process.exit(0);
    }
}

migrate();
