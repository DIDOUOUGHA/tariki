// assets/js/api.js

export const WORKER_URL = "https://tariki-proxy.ougha-didou.workers.dev/";

// دالة حساب الوقت
function getTimeAgo(date) {
    const diff = Math.floor((Date.now() - date) / 1000);
    if (diff < 60) return "الآن";
    if (diff < 3600) return `منذ ${Math.floor(diff / 60)} دقيقة`;
    if (diff < 86400) return `منذ ${Math.floor(diff / 3600)} ساعة`;
    return `منذ ${Math.floor(diff / 86400)} يوم`;
}

// دالة جلب أخبار فيسبوك
export async function loadFacebookNews() {
    try {
        const res = await fetch(`${WORKER_URL}news`);
        const data = await res.json();
        
        if (!data.items?.length) return;

        const container = document.getElementById("alerts-list");
        if (!container) return;

        container.innerHTML = data.items.slice(0, 8).map(item => {
            const date = new Date(item.date);
            const timeAgo = getTimeAgo(date);
            // تلوين الهاشتاجات
            const text = item.title.replace(/#\w+/g, t => 
                `<span class="text-primary font-bold">${t}</span>`
            );
            
            return `
                <div class="p-4 border-r-4 border-danger bg-white hover:bg-slate-50 transition-colors">
                    <p class="mb-2 text-[13px] text-slate-800 leading-relaxed font-semibold">
                        ${text.substring(0, 140)}...
                    </p>
                    <div class="flex justify-between items-center">
                        <small class="text-slate-500 text-[11px] font-bold">🕐 ${timeAgo}</small>
                        <a href="${item.link}" target="_blank" class="text-[11px] text-danger font-bold hover:underline">
                            قراءة المزيد ←
                        </a>
                    </div>
                </div>
            `;
        }).join("");

    } catch (e) {
        console.warn("خطأ في جلب الأخبار:", e);
        const container = document.getElementById("alerts-list");
        if(container) container.innerHTML = `<div class="p-4 text-center text-sm text-danger">تعذر تحميل التنبيهات حالياً.</div>`;
    }
}
