-- Add batch column to attendance table
ALTER TABLE attendance ADD COLUMN IF NOT EXISTS batch text NOT NULL DEFAULT '';

-- Add batch column to internal_marks table
ALTER TABLE internal_marks ADD COLUMN IF NOT EXISTS batch text NOT NULL DEFAULT '';
