import postgres from 'postgres';
import dotenv from 'dotenv';

dotenv.config();

const sql = postgres(process.env.DB_URL, { ssl: 'require' });

(async () => {
    try {
        console.log('Testing database connection...');
        const result = await sql`SELECT column_name FROM information_schema.columns WHERE table_name = 'attendance'`;
        console.log('Attendance table columns:', result.map(r => r.column_name));

        const result2 = await sql`SELECT column_name FROM information_schema.columns WHERE table_name = 'internal_marks'`;
        console.log('Internal marks table columns:', result2.map(r => r.column_name));
    } catch (error) {
        console.error('Error:', error);
    } finally {
        await sql.end();
    }
})();
