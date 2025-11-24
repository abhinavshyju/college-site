import { createClient } from '@supabase/supabase-js';
import dotenv from 'dotenv';

dotenv.config();

const supabase = createClient(
    process.env.SUPABASE_URL,
    process.env.SUPABASE_SERVICE_ROLE_KEY
);

async function migrate() {
    try {
        console.log('Starting migration with Supabase client...');

        // Add batch column to attendance table
        console.log('Adding batch column to attendance table...');
        const { error: error1 } = await supabase.rpc('exec_sql', {
            sql: `ALTER TABLE attendance ADD COLUMN IF NOT EXISTS batch text NOT NULL DEFAULT ''`
        });

        if (error1) {
            console.error('Error on attendance table:', error1);
            // Try alternative approach
            console.log('Trying direct SQL execution...');
            const { error: altError1 } = await supabase
                .from('attendance')
                .select('batch')
                .limit(1);

            if (altError1 && altError1.message.includes('does not exist')) {
                console.log('Column does not exist, manual migration required');
            }
        } else {
            console.log('✓ Attendance table updated');
        }

        // Add batch column to internal_marks table
        console.log('Adding batch column to internal_marks table...');
        const { error: error2 } = await supabase.rpc('exec_sql', {
            sql: `ALTER TABLE internal_marks ADD COLUMN IF NOT EXISTS batch text NOT NULL DEFAULT ''`
        });

        if (error2) {
            console.error('Error on internal_marks table:', error2);
        } else {
            console.log('✓ Internal marks table updated');
        }

        console.log('\nMigration completed!');

    } catch (error) {
        console.error('Migration failed:', error);
        console.log('\n⚠️  Please apply the migration manually via Supabase Dashboard');
    }
}

migrate();
