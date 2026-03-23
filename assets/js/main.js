// assets/js/main.js

// 1. استيراد الوظائف من الملفات المنفصلة
import { initUI } from './ui.js';
import { loadFacebookNews } from './api.js';
import { initMap } from './map.js';

// 2. انتظار تحميل شجرة الموقع (DOM) بالكامل قبل تنفيذ أي كود
document.addEventListener('DOMContentLoaded', () => {
    
    // تشغيل تفاعلات الواجهة (القوائم، البانر، الأزرار)
    initUI();

    // تشغيل جلب أخبار فيسبوك في شريط التنبيهات
    loadFacebookNews();
    
    // تحديث شريط التنبيهات كل 10 دقائق
    setInterval(loadFacebookNews, 10 * 60 * 1000);

    // تشغيل الخريطة (فقط إذا كان عنصر الخريطة موجوداً في الصفحة)
    if (document.getElementById('map')) {
        initMap();
    }
    
    console.log("✅ تمت تهيئة منصة طريقي بنجاح!");
});
