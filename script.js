// بيانات المستخدمين الافتراضيين
const users = [
    { username: "admin", password: "1234", role: "admin" },
    { username: "booking", password: "1234", role: "booking" },
    { username: "report", password: "1234", role: "report" }
];

// تسجيل الدخول: التحقق من اسم المستخدم وكلمة المرور
function login() {
    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value.trim();
    const errorMsg = document.getElementById("error-msg");

    errorMsg.innerText = "";  // إخفاء أي رسالة خطأ سابقة

    if (!username || !password) {
        errorMsg.innerText = "يرجى إدخال اسم المستخدم وكلمة المرور";
        return;
    }

    // البحث عن المستخدم
    const user = users.find(u => u.username === username && u.password === password);

    if (user) {
        // تخزين بيانات المستخدم في الجلسة
        sessionStorage.setItem("loggedInUser", JSON.stringify(user));
        // توجيه المستخدم إلى الصفحة الرئيسية
        window.location.href = "index.html";
    } else {
        errorMsg.innerText = "بيانات الدخول غير صحيحة";
    }
}

// تحقق من حالة الدخول لمنع الدخول بدون تسجيل
function checkAuth() {
    const user = JSON.parse(sessionStorage.getItem("loggedInUser"));
    if (!user) {
        window.location.href = "login.html";
        return null;
    }
    // ممكن تضيف تحقق صلاحيات هنا حسب الحاجة
    return user; // رجع المستخدم لو حبيت تستخدم بياناته
}

// تسجيل الخروج وحذف حالة الدخول
function logout() {
    sessionStorage.removeItem("loggedInUser");
    window.location.href = "login.html";
}
