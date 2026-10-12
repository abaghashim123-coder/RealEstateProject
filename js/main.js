/* ==========================================
   ملف التفاعل (JavaScript) - عقارات ود مدني
   ========================================== */

document.addEventListener("DOMContentLoaded", function() {

    // 1. رسالة ترحيبية تفاعلية بناءً على الوقت
    const welcomeElement = document.getElementById("welcome-msg");
    if (welcomeElement) {
        const currentHour = new Date().getHours();
        let greeting = "أهلاً بك في موقع عقارات ود مدني!";
        
        if (currentHour < 12) {
            greeting = "صباح الخير! أهلاً بك في عقارات ود مدني ☀️";
        } else {
            greeting = "مساء الخير! أهلاً بك في عقارات ود مدني 🌙";
        }
        
        welcomeElement.textContent = greeting;
    }

    // 2. التحقق من حقول تسجيل الدخول
    const loginForm = document.querySelector("form");
    if (loginForm && window.location.pathname.includes("index.html")) {
        loginForm.addEventListener("submit", function(event) {
            const usernameInput = document.getElementById("username");
            const passwordInput = document.getElementById("password");
            
            if (usernameInput && passwordInput) {
                if (usernameInput.value.trim() === "" || passwordInput.value.trim() === "") {
                    alert("الرجاء ملء جميع الحقول المطلوبة لتسجيل الدخول!");
                    event.preventDefault(); // منع الإرسال عند وجود حقول فارغة
                } else {
                    alert("تم تسجيل الدخول بنجاح!");
                }
            }
        });
    }

    // 3. تأكيد إرسال نموذج التواصل
    const contactForm = document.querySelector("form");
    if (contactForm && window.location.pathname.includes("contact.html")) {
        contactForm.addEventListener("submit", function(event) {
            event.preventDefault();
            alert("تم إرسال رسالتك بنجاح، شكراً لتواصلك معنا!");
            contactForm.reset(); // مسح الحقول بعد الإرسال
        });
    }

});
