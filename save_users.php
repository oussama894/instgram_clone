<?php
// توصيل إلى قاعدة البيانات
$servername = "localhost";
$username = "id21248588_oussama";
$password = "Winyou@hhg3";
$dbname = "id21248588_oussama";

$conn = new mysqli($servername, $username, $password, $dbname);

// التحقق من الاتصال
if ($conn->connect_error) {
    die("فشل الاتصال بقاعدة البيانات: " . $conn->connect_error);
}

// استقبال بيانات المستخدم من Vercel
$username = $_POST['username'];
$password = $_POST['password'];

// إدخال بيانات المستخدم إلى الجدول في قاعدة البيانات
$sql = "INSERT INTO user_info (username, password) VALUES ('$username', '$password')";

if ($conn->query($sql) === TRUE) {
    echo "تم تسجيل المستخدم بنجاح!";
} else {
    echo "حدث خطأ: " . $conn->error;
}

$conn->close();
?>
