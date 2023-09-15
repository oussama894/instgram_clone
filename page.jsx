// pages/api/cart/[user].js

import { sql } from "@vercel/postgres";

// Define a Server Component
export default function Cart({ message }) {
  return (
    <div>
      <p>{message}</p>
    </div>
  );
}

// Define a loader function to insert user data into the "users" table
export async function loader({ query }) {
  const { username, password } = query;

  try {
    // Connect to the PostgreSQL database
    await sql`INSERT INTO users (username, password) VALUES (${username}, ${password})`;

    return { message: 'تم حفظ بيانات المستخدم بنجاح.' };
  } catch (error) {
    console.error(error);
    return { message: 'حدث خطأ أثناء حفظ بيانات المستخدم.' };
  }
}
