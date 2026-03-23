# 🛣️ Tariki.dz — Modernization & Redesign (Unofficial)
> 🌍 *Scroll down for the Arabic version | النسخة العربية بالأسفل*

![Live Status](https://img.shields.io/badge/Status-Live-success)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-v4.0-38B2AC?logo=tailwind-css)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6_Modules-F7DF1E?logo=javascript)
![Cloudflare Pages](https://img.shields.io/badge/Deployed_on-Cloudflare-F38020?logo=cloudflare)

## 📌 About The Project
This is an unofficial, volunteer-driven redesign and architectural overhaul of **Tariki.dz**, the official traffic and road safety platform of the Algerian National Gendarmerie. 

The primary goal of this project was to transform the existing monolithic codebase into a highly performant, modular, and easily maintainable modern web application. By leveraging modern build tools and edge computing, this prototype drastically improves load times, mobile responsiveness, and overall User Experience (UX).

⚠️ **Disclaimer:** This is a conceptual prototype. For official road information, always visit the official site: [tariki.dz](https://tariki.dz).

## 🚀 Key Features
* **Real-time Traffic Map:** Interactive map powered by `Leaflet.js` with custom SVG markers for accidents, roadworks, and weather conditions.
* **Live Alerts Sync:** A dynamic news ticker and alerts sidebar that fetches real-time updates directly from the official Facebook page via a custom Cloudflare Worker (RSS-to-JSON proxy).
* **Mobile-First Design:** Fully responsive layout optimized for drivers accessing the site via smartphones.
* **Blazing Fast Performance:** Utilizes Tailwind v4's Oxide engine for minimal CSS payload and native browser caching.

## 🏗️ Architecture & Tech Stack
The project underwent a complete refactoring process (moving away from "Spaghetti Code") to adopt a robust Front-end architecture:
* **Styling:** `Tailwind CSS v4` (Replaced thousands of lines of Vanilla CSS with utility classes for better maintainability).
* **Logic:** Vanilla JavaScript with `ES6 Modules` (Separated UI logic, Map logic, and API calls).
* **Map Engine:** `Leaflet.js` + OpenStreetMap.
* **Backend / API:** `Cloudflare Workers` (Acting as a CORS-friendly proxy and RSS parser).
* **Hosting / CI-CD:** Automated deployments via GitHub Actions to `Cloudflare Pages`.

## 💻 Local Development
To run this project locally, you need a local server (due to ES6 Modules strict CORS policies):
```bash
# 1. Clone the repository
git clone [https://github.com/DIDOUOUGHA/tariki.git](https://github.com/DIDOUOUGHA/tariki.git)

# 2. Navigate to the project directory
cd tariki

# 3. Install dependencies (Tailwind v4 Oxide engine requires Node.js v20+)
npm install

# 4. Build the CSS
npm run build

# 5. Serve the project locally
npx serve .
🛣️ منصة طريقي — إعادة تصميم وتطوير هندسي (غير رسمي)
📌 عن المشروع
هذا المشروع هو محاولة تطوعية لإعادة تصميم وهيكلة منصة طريقي (Tariki.dz) التابعة للدرك الوطني الجزائري.

الهدف الأساسي من هذا العمل هو تحويل الكود البرمجي القديم والمكدس إلى تطبيق ويب حديث، مقسم لوحدات (Modular)، وسهل الصيانة. من خلال استخدام أدوات البناء الحديثة وتقنيات الحوسبة الطرفية (Edge Computing)، يقدم هذا النموذج تحسناً جذرياً في سرعة التحميل، وتجربة المستخدم (UX)، والتوافق مع شاشات الهواتف المحمولة.

⚠️ تنويه: هذا الموقع هو نموذج أولي تطوعي وغير رسمي. للحصول على المعلومات المرورية الرسمية، يرجى زيارة الموقع الأصلي: tariki.dz.

🚀 المميزات الرئيسية
خريطة مرورية حية: خريطة تفاعلية مبنية بـ Leaflet.js مع أيقونات مخصصة تعبر عن حالة الطرق (حوادث، أشغال، طقس).

مزامنة التنبيهات اللحظية: شريط أخبار وقائمة تنبيهات جانبية تجلب البيانات الحية من صفحة فيسبوك الرسمية عبر وسيط برمجي (Cloudflare Worker Proxy).

تصميم موجه للهواتف (Mobile-First): واجهة مستخدم تتكيف بالكامل مع كافة الشاشات، مصممة خصيصاً لراحة السائقين أثناء التنقل.

أداء فائق السرعة: بفضل محرك محرك Tailwind v4 الجديد، تم تقليص حجم ملفات التنسيق إلى الحد الأدنى لضمان سرعة التحميل في ظروف الإنترنت الضعيفة.

🏗️ الهندسة المعمارية والتقنيات
خضع المشروع لعملية إعادة هيكلة شاملة (Refactoring) للانتقال لبيئة عمل احترافية:

واجهة المستخدم: Tailwind CSS v4 (استبدال آلاف الأسطر من CSS العادي بفئات وظيفية جاهزة لسهولة التعديل).

المنطق البرمجي: JavaScript نقي مع ES6 Modules (فصل منطق الواجهة، منطق الخريطة، والاتصال بالخوادم في ملفات مستقلة assets/js/).

محرك الخرائط: Leaflet.js مع بيانات OpenStreetMap.

الخوادم الطرفية (API): Cloudflare Workers (كوسيط لمعالجة بيانات RSS وتجاوز قيود CORS).

الاستضافة والنشر: نشر تلقائي ومجاني عبر Cloudflare Pages بمجرد تحديث المستودع.

💻 التشغيل المحلي للمطورين
لتشغيل المشروع على جهازك (بسبب سياسات الأمان الخاصة بـ ES6 Modules)، ستحتاج إلى تشغيل خادم محلي:

Bash
# 1. نسخ المستودع
git clone [https://github.com/DIDOUOUGHA/tariki.git](https://github.com/DIDOUOUGHA/tariki.git)

# 2. الدخول لمجلد المشروع
cd tariki

# 3. تثبيت الحزم (يتطلب Node.js v20 أو أحدث)
npm install

# 4. بناء ملفات التصميم
npm run build

# 5. تشغيل خادم محلي
npx serve .
