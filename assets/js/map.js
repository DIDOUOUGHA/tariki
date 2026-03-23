// assets/js/map.js 

import { WORKER_URL } from './api.js';

export function initMap() {
    const map = L.map("map", { zoomControl: true }).setView([28.5, 2.5], 5);
    
    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution: "© OpenStreetMap",
        maxZoom: 18
    }).addTo(map);

    // 💡 هذا هو السطر السحري لحل مشكلة المساحة الرمادية
    setTimeout(() => {
        map.invalidateSize();
    }, 500);

    loadMapAlerts(map);
    setInterval(() => loadMapAlerts(map), 5 * 60 * 1000);

    return map;
}

// دالة جلب البيانات الحية للخريطة
async function loadMapAlerts(map) {
    try {
        const res = await fetch(WORKER_URL);
        const txt = await res.text();
        const xml = new DOMParser().parseFromString(txt, "application/xml");

        xml.querySelectorAll("marker").forEach(m => {
            const lat    = parseFloat(m.getAttribute("lat"));
            const lng    = parseFloat(m.getAttribute("lng"));
            const type   = m.getAttribute("type");
            const color  = m.getAttribute("color");
            const desc   = m.getAttribute("desc");
            const road   = m.getAttribute("road");
            const wilaya = m.getAttribute("wilaya");
            const time   = m.getAttribute("time");

            // إضافة العلامة للخريطة مع Popup بتنسيق Tailwind
            L.marker([lat, lng], { icon: getIcon(type, color) })
                .addTo(map)
                .bindPopup(`
                    <div dir="rtl" class="font-cairo min-w-[200px]">
                        <div style="background:${color}" class="text-white py-1.5 px-3 rounded-lg font-bold mb-2 shadow-sm text-[13px]">
                            🛣️ ${road}
                        </div>
                        <p class="my-1.5 text-[13px] text-slate-700 font-semibold leading-relaxed">${desc}</p>
                        <small class="text-slate-500 text-[11px] font-bold">📍 ${wilaya} &nbsp;|&nbsp; 🕐 ${time}</small>
                    </div>
                `);
        });
    } catch (e) {
        console.warn("تعذر جلب بيانات الخريطة:", e);
    }
}

// دالة توليد أيقونات مخصصة للخريطة
function getIcon(type, color) {
    const icons = {
        accident: "🚨", travaux: "🚧", neige: "❄️", glissant: "⚠️",
        pluie: "🌧️", inondation: "🌊", vent: "💨", chute: "🪨",
        verglas: "🧊", manifestation: "🚫", eclairage: "💡",
        degradee: "🛣️", chameaux: "🐪", attention: "⚠️"
    };

    const emoji = icons[type] || "📍";

    return L.divIcon({
        // استخدمنا فئات Tailwind داخل الأيقونة (w-9 h-9 rounded-full...)
        html: `<div style="background:${color};" class="w-9 h-9 rounded-full border-[3px] border-white flex items-center justify-center text-lg shadow-md transition-transform hover:scale-110">
            ${emoji}
        </div>`,
        iconSize: [36, 36],
        iconAnchor: [18, 18],
        className: "" // إفراغ الكلاس الافتراضي لـ Leaflet
    });
}
