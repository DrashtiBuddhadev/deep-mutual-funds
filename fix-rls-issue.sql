-- Fix RLS Issue for Blogs Table
-- Run this in your Supabase SQL Editor

-- Step 1: Check current RLS status
SELECT schemaname, tablename, rowsecurity 
FROM pg_tables 
WHERE tablename = 'blogs';

-- Step 2: Check existing policies
SELECT schemaname, tablename, policyname, permissive, roles, cmd, qual, with_check 
FROM pg_policies 
WHERE tablename = 'blogs';

-- Step 3: Drop existing policies if they exist
DROP POLICY IF EXISTS "Allow public read access" ON blogs;
DROP POLICY IF EXISTS "Enable read access for all users" ON blogs;
DROP POLICY IF EXISTS "Public read access" ON blogs;

-- Step 4: Create a new, more permissive policy
CREATE POLICY "Allow public read access" ON blogs
FOR SELECT 
TO public
USING (true);

-- Step 5: Verify the policy was created
SELECT schemaname, tablename, policyname, permissive, roles, cmd, qual, with_check 
FROM pg_policies 
WHERE tablename = 'blogs';

-- Step 6: Test the policy by checking if we can read data
SELECT COUNT(*) as total_blogs FROM blogs;

-- Step 7: Show sample data to verify
SELECT id, title, created_at FROM blogs ORDER BY created_at DESC LIMIT 5; 