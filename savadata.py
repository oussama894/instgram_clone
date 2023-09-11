import mysql.connector

# معلومات قاعدة البيانات
host = "sql11.freesqldatabase.com"
user = "sql11645793"
password = "8iLaBZfe2S"
database = "sql11645793"

# إنشاء اتصال بقاعدة البيانات
conn = mysql.connector.connect(
    host=host,
    user=user,
    password=password,
    database=database
)

# التحقق من الاتصال بقاعدة البيانات
if conn.is_connected():
    print("تم الاتصال بنجاح")

# بيانات المستخدم
username = "اسم المستخدم"
password = "كلمة المرور"

# استخدام SQL لحفظ بيانات المستخدم
cursor = conn.cursor()
insert_query = "INSERT INTO users (username, password) VALUES (%s, %s)"
cursor.execute(insert_query, (username, password))
conn.commit()
cursor.close()

# إغلاق اتصال قاعدة البيانات
conn.close()
