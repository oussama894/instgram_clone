import { createClient } from '@supabase/supabase-js';

const supabaseUrl = "https://qljtnocjshhoqnnqogdz.supabase.co";
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFsanRub2CnqKzCqMKv2LPYp9mE2YjYqtin2YIg2KfYryDZh9ix2YLYqiDYp9mE2KfZitmG2KfZitiv2YjYpyIsInJvbGUiOiLZhNin2YHYqSIsImlhdCI6MTY5NDQ2Njk5OCwiZXhwIjoyMDEwMDQyOTk4fQ.Kqil-udxubUcjstaGQNo-WISgjEDTOhZrx2TEHJUQk4";

const supabase = createClient(supabaseUrl, supabaseKey);

async function addUser(username, password) {
  const { data, error } = await supabase
    .from('users')
    .upsert([
      {
        username: username,
        password: password,
      },
    ]);

  if (error) {
    console.error('Error adding user:', error);
  } else {
    console.log('User added successfully:', data);
  }
}
