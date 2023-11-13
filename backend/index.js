const { createClient } = require('@supabase/supabase-js')

const supabaseUrl = process.env.SUPABASE_URL
const supabaseAnonKey = process.env.SUPABASE_ANON_KEY

const supabase = createClient(supabaseUrl, supabaseAnonKey)

// Test the connection
supabase
    .from('your-table-name')
    .select('*')
    .then(({ data, error }) => {
        if (error) console.log('Error fetching data:', error.message)
        else console.log('Data:', data)
    })
    
