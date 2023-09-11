const mysql = require('mysql');

// معلومات قاعدة البيانات
const host = 'sql11.freesqldatabase.com';
const user = 'sql11645793';
const password = '8iLaBZfe2S';
const database = 'sql11645793';

// إنشاء اتصال بقاعدة البيانات
const connection = mysql.createConnection({
  host,
  user,
  password,
  database,
});

// الاتصال بقاعدة البيانات
connection.connect((err) => {
  if (err) {
    console.error('خطأ في الاتصال: ' + err.stack);
    return;
  }
  console.log('تم الاتصال بنجاح');

  // بيانات المستخدم
  const username = 'اسم المستخدم';
  const password = 'كلمة المرور';

  // استخدام SQL لحفظ بيانات المستخدم
  const insertQuery = 'INSERT INTO users (username, password) VALUES (?, ?)';
  connection.query(insertQuery, [username, password], (err, results) => {
    if (err) {
      console.error('حدث خطأ أثناء حفظ بيانات المستخدم: ' + err.message);
      return;
    }
    console.log('تم حفظ بيانات المستخدم بنجاح');
  });

  // إغلاق اتصال قاعدة البيانات عند الانتهاء
  connection.end();
});