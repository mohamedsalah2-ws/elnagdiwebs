// --- 1. الترجمات ---
const translations = {
    en: {
        brandName: 'ELNAGDI', brandTag: 'Services & Trading',
        navHome: 'Home', navAbout: 'About Us', navServices: 'Services', navContact: 'Contact',
        heroBadge: 'Premium Services',
        heroTitle: 'Excellence in', heroSubtitle: 'Business Solutions',
        heroDesc: 'ELNAGDI Services & Trading is your premier partner for comprehensive corporate consulting and strategic growth globally.',
        heroBtn1: 'Explore Services', heroBtn2: 'Contact Us',
        servicesTitle: 'Our Services', servicesDesc: 'Comprehensive solutions tailored to your unique needs.',
        quickLinks: 'Quick Links', contactInfo: 'Contact Info',
        location: 'Main Headquarters, Business District',
        footerDesc: 'Your trusted partner for comprehensive business solutions.',
        aboutTitle: 'About Us', aboutSubtitle: 'Building the future with excellence.',
        whoWeAre: 'Who We Are',
        story: 'ELNAGDI is a premier establishment providing top-tier solutions. We combine local expertise with global standards.',
        mission: 'Our Mission', missionDesc: 'To empower businesses with innovative solutions.',
        vision: 'Our Vision', visionDesc: 'To be the leading partner for sustainable growth.',
        valuesTitle: 'Our Core Values',
        contactTitle: 'Get in Touch', contactSubtitle: 'We are here to help you elevate your business.',
        formTitle: 'Send us a Message', formBtn: 'Send Message',
        hoursTitle: 'Business Hours', hoursDesc: 'Sun - Thu: 9:00 AM - 6:00 PM',
        connectTitle: 'Connect With Us'
    },
    ar: {
        brandName: 'النجدي', brandTag: 'للخدمات والتجارة',
        navHome: 'الرئيسية', navAbout: 'من نحن', navServices: 'خدماتنا', navContact: 'اتصل بنا',
        heroBadge: 'خدمات متميزة',
        heroTitle: 'التميز في', heroSubtitle: 'حلول الأعمال',
        heroDesc: 'مؤسسة النجدي للخدمات والتجارة هي شريكك الأول للاستشارات المؤسسية الشاملة والنمو الاستراتيجي عالمياً.',
        heroBtn1: 'خدماتنا', heroBtn2: 'تواصل معنا',
        servicesTitle: 'خدماتنا', servicesDesc: 'حلول شاملة مصممة خصيصاً لاحتياجاتك الفريدة.',
        quickLinks: 'روابط سريعة', contactInfo: 'معلومات الاتصال',
        location: 'المقر الرئيسي، منطقة الأعمال',
        footerDesc: 'شريكك الموثوق لحلول الأعمال الشاملة.',
        aboutTitle: 'من نحن', aboutSubtitle: 'نبني المستقبل بتميز وابتكار.',
        whoWeAre: 'هويتنا',
        story: 'النجدي هي مؤسسة رائدة تقدم حلولاً من الطراز الأول. نجمع بين الخبرة المحلية والمعايير العالمية.',
        mission: 'رسالتنا', missionDesc: 'تمكين الشركات بحلول مبتكرة وجودة لا تهاون فيها.',
        vision: 'رؤيتنا', visionDesc: 'أن نكون الشريك الرائد للنمو المستدام.',
        valuesTitle: 'قيمنا الجوهرية',
        contactTitle: 'تواصل معنا', contactSubtitle: 'نحن هنا لمساعدتك في الارتقاء بأعمالك.',
        formTitle: 'أرسل لنا رسالة', formBtn: 'إرسال الرسالة',
        hoursTitle: 'ساعات العمل', hoursDesc: 'الأحد - الخميس: 9:00 ص - 6:00 م',
        connectTitle: 'تواصل معنا'
    }
};

// --- 2. البيانات ---
const servicesData = [
    { icon: 'briefcase', title_en: 'Business Setup', title_ar: 'تأسيس الأعمال', desc_en: 'Corporate structuring and registration.', desc_ar: 'هيكلة الشركات وتسجيلها.' },
    { icon: 'scale', title_en: 'Legal Consulting', title_ar: 'استشارات قانونية', desc_en: 'Contracts and compliance advice.', desc_ar: 'العقود وامتثال القوانين.' },
    { icon: 'users', title_en: 'HR & Admin', title_ar: 'الموارد البشرية', desc_en: 'Optimizing team structures.', desc_ar: 'تحسين هيكلة فرق العمل.' },
    { icon: 'package', title_en: 'Trading', title_ar: 'التجارة', desc_en: 'Import, export and logistics.', desc_ar: 'الاستيراد والتصدير واللوجستيات.' },
    { icon: 'calculator', title_en: 'Financial', title_ar: 'خدمات مالية', desc_en: 'Accounting and tax planning.', desc_ar: 'المحاسبة والتخطيط الضريبي.' },
    { icon: 'palette', title_en: 'Creative Design', title_ar: 'تصميم إبداعي', desc_en: 'Branding and digital identity.', desc_ar: 'العلامة التجارية والهوية الرقمية.' }
];

const statsData = [
    { val: '+10', label_en: 'Years Experience', label_ar: 'سنوات خبرة' },
    { val: '+500', label_en: 'Happy Clients', label_ar: 'عميل سعيد' },
    { val: '100%', label_en: 'Satisfaction', label_ar: 'نسبة رضا' },
    { val: '24/7', label_en: 'Support', label_ar: 'دعم فني' }
];

const valuesData = [
    { icon: 'award', title_en: 'Excellence', title_ar: 'التميز', desc_en: 'Striving for perfection.', desc_ar: 'نسعى للكمال.' },
    { icon: 'heart', title_en: 'Integrity', title_ar: 'النزاهة', desc_en: 'Honesty is our policy.', desc_ar: 'الصدق منهجنا.' },
    { icon: 'users', title_en: 'Client First', title_ar: 'العميل أولاً', desc_en: 'Your success is ours.', desc_ar: 'نجاحك هو نجاحنا.' },
    { icon: 'trending-up', title_en: 'Innovation', title_ar: 'الابتكار', desc_en: 'Moving forward.', desc_ar: 'نتطلع للأمام.' }
];

const contactInfoData = [
    { icon: 'phone', title_en: 'Call Us', title_ar: 'اتصل بنا', val: '+000 00 000 0000', link: 'tel:+' },
    { icon: 'mail', title_en: 'Email Us', title_ar: 'راسلنا', val: 'info@elnagdi.com', link: 'mailto:' },
    { icon: 'map-pin', title_en: 'Visit Us', title_ar: 'زورنا', val: 'Main HQ, Business District', link: '#' }
];

// --- المنطق (Logic) ---
let currentLang = localStorage.getItem('lang') || 'en';
let currentTheme = localStorage.getItem('theme') || 'light';

function init() {
    // ضبط السنة في الفوتر
    const yearEl = document.getElementById('year');
    if(yearEl) yearEl.textContent = new Date().getFullYear();

    setTheme(currentTheme);
    setLanguage(currentLang);
    renderDynamicContent();
    
    // تهيئة المكتبات
    if(typeof AOS !== 'undefined') AOS.init({ duration: 800, once: true });
    if(typeof lucide !== 'undefined') lucide.createIcons();

    // تأثير النافبار
    window.addEventListener('scroll', () => {
        const nav = document.getElementById('navbar');
        if(nav) {
            if (window.scrollY > 20) nav.classList.add('bg-white/90', 'dark:bg-dark/90', 'backdrop-blur-md', 'shadow-md');
            else nav.classList.remove('bg-white/90', 'dark:bg-dark/90', 'backdrop-blur-md', 'shadow-md');
        }
    });
}

function toggleTheme() {
    currentTheme = currentTheme === 'light' ? 'dark' : 'light';
    setTheme(currentTheme);
}

function setTheme(theme) {
    document.documentElement.classList.remove('light', 'dark');
    document.documentElement.classList.add(theme);
    localStorage.setItem('theme', theme);
    setTimeout(() => lucide.createIcons(), 50);
}

function toggleLanguage() {
    currentLang = currentLang === 'en' ? 'ar' : 'en';
    setLanguage(currentLang);
    renderDynamicContent();
}

function setLanguage(lang) {
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    localStorage.setItem('lang', lang);
    
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[lang][key]) {
            if(el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') el.placeholder = translations[lang][key];
            else el.textContent = translations[lang][key];
        }
    });
    
    // تعديل مكان زر الواتساب
    const waBtn = document.getElementById('wa-btn');
    if(waBtn) {
        if(lang === 'ar') { waBtn.classList.remove('right-8'); waBtn.classList.add('left-8'); }
        else { waBtn.classList.remove('left-8'); waBtn.classList.add('right-8'); }
    }
}

function renderDynamicContent() {
    // Services
    const servicesGrid = document.getElementById('services-grid');
    if (servicesGrid) {
        servicesGrid.innerHTML = servicesData.map(s => `
            <div class="group bg-white dark:bg-gray-800 rounded-xl p-8 shadow-sm hover:shadow-xl transition-all border border-gray-100 dark:border-gray-700" data-aos="fade-up">
                <div class="w-12 h-12 bg-secondary/10 text-secondary rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-white transition-colors">
                    <i data-lucide="${s.icon}" class="w-6 h-6"></i>
                </div>
                <h3 class="text-xl font-bold mb-2 text-gray-900 dark:text-white">${currentLang === 'en' ? s.title_en : s.title_ar}</h3>
                <p class="text-gray-500 dark:text-gray-400 text-sm">${currentLang === 'en' ? s.desc_en : s.desc_ar}</p>
            </div>
        `).join('');
    }

    // Stats
    const statsGrid = document.getElementById('stats-grid');
    if (statsGrid) {
        statsGrid.innerHTML = statsData.map(s => `
            <div class="p-6 border border-gray-100 dark:border-gray-700 rounded-2xl bg-white/50 dark:bg-gray-800/50 backdrop-blur" data-aos="zoom-in">
                <h3 class="text-4xl font-extrabold text-primary mb-1">${s.val}</h3>
                <p class="text-gray-500 dark:text-gray-400 font-medium">${currentLang === 'en' ? s.label_en : s.label_ar}</p>
            </div>
        `).join('');
    }

    // Values
    const valuesGrid = document.getElementById('values-grid');
    if (valuesGrid) {
        valuesGrid.innerHTML = valuesData.map(v => `
            <div class="text-center p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 hover:-translate-y-2 transition-transform" data-aos="fade-up">
                <div class="w-14 h-14 bg-primary/10 text-primary rounded-full flex items-center justify-center mx-auto mb-4">
                    <i data-lucide="${v.icon}" class="w-7 h-7"></i>
                </div>
                <h3 class="text-lg font-bold mb-2 text-gray-900 dark:text-white">${currentLang === 'en' ? v.title_en : v.title_ar}</h3>
                <p class="text-sm text-gray-500 dark:text-gray-400">${currentLang === 'en' ? v.desc_en : v.desc_ar}</p>
            </div>
        `).join('');
    }

    // Contact Cards
    const contactGrid = document.getElementById('contact-cards');
    if (contactGrid) {
        contactGrid.innerHTML = contactInfoData.map(c => `
            <a href="${c.link}${c.val}" class="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg border-b-4 border-primary text-center hover:-translate-y-2 transition-transform">
                <div class="w-14 h-14 bg-gray-50 dark:bg-gray-700 rounded-full flex items-center justify-center mx-auto mb-4 text-primary">
                    <i data-lucide="${c.icon}" class="w-6 h-6"></i>
                </div>
                <h3 class="text-lg font-bold text-gray-900 dark:text-white mb-1">${currentLang === 'en' ? c.title_en : c.title_ar}</h3>
                <p class="text-gray-500 dark:text-gray-400 text-sm">${c.val}</p>
            </a>
        `).join('');
    }

    lucide.createIcons();
}

// Start
init();