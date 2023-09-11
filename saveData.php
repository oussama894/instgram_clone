<?php
// معلومات قاعدة البيانات
$servername = "";
$username = "";
$password = "";
$dbname = "";

// إنشاء اتصال بقاعدة البيانات
$conn = new mysqli($servername, $username, $password, $dbname);

// التحقق من اتصال قاعدة البيانات
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// استقبال المعلومات من النموذج
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $username = $_POST['username'];
    $password = $_POST['password'];

    // استخدام استعلام SQL لإدخال المعلومات في قاعدة البيانات
    $sql = "INSERT INTO user_info (username, password) VALUES ('$username', '$password')";

    if ($conn->query($sql) === TRUE) {
        // لا تقم بطباعة أي شيء هنا
    } else {
        // لا تقم بطباعة أي شيء هنا
    }
}

// إغلاق اتصال قاعدة البيانات
$conn->close();
?>