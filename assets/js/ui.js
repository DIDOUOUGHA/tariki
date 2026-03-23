// assets/js/ui.js

export function initUI() {
    // 1. إغلاق بانر التنبيه غير الرسمي
    const bannerBtn = document.querySelector('#unofficial-banner button');
    if (bannerBtn) {
        bannerBtn.addEventListener('click', () => {
            document.getElementById('unofficial-banner').style.display = 'none';
            document.getElementById('banner-spacer').style.display = 'none';
        });
    }

    // 2. قائمة الهاتف (Mobile Menu Toggle)
    const navToggle = document.getElementById('nav-toggle');
    const navLinks = document.getElementById('nav-links');
    if (navToggle && navLinks) {
        // نتحكم فقط في كلاس الإخفاء الخاص بالهواتف (max-md:hidden)
        navToggle.addEventListener('click', () => {
            navLinks.classList.toggle('max-md:hidden');
        });

        // إغلاق القائمة عند الضغط على أي رابط (للهواتف فقط)
        navLinks.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                if (window.innerWidth < 768) {
                    navLinks.classList.add('max-md:hidden');
                }
            });
        });
    }
    // 3. أزرار فلترة الخريطة (تغيير الألوان عند الضغط)
    const filterBtns = document.querySelectorAll(".map-filter-btn");
    filterBtns.forEach(btn => {
        btn.addEventListener("click", () => {
            // إزالة التفعيل من جميع الأزرار
            filterBtns.forEach(b => {
                b.classList.remove("active", "bg-primary", "text-white", "border-primary");
                b.classList.add("bg-slate-50", "text-slate-500", "border-slate-200");
            });
            // إضافة التفعيل للزر المضغوط
            btn.classList.remove("bg-slate-50", "text-slate-500", "border-slate-200");
            btn.classList.add("active", "bg-primary", "text-white", "border-primary");
        });
    });


    
}
