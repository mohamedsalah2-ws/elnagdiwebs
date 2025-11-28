// 1. Translations Object (تم تحديث النصوص بناءً على المحتوى الجديد)
const translations = {
    en: {
        brandName: 'ELNAGDI',
        brandTag: 'Services & Trading',
        
        // Nav
        navHome: 'Home', navAbout: 'About Us', navServices: 'Services', navContact: 'Contact',
        quickLinks: 'Quick Links', contactInfo: 'Contact Info',
        footerDesc: 'Your strategic partner for integrated logistics, trading, and consulting solutions.',
        location: '',
        
        // Home Specific
        heroBadge: 'Integrated Solutions',
        heroTitle: 'Leading the Future of', heroSubtitle: 'Services & Trading',
        heroDesc: 'A leading company providing integrated solutions in logistics, general trading, management consulting, and IT to bridge market gaps with high quality.',
        heroBtn1: 'Our Services', heroBtn2: 'Contact Us',
        servicesTitle: 'Our Core Services', servicesDesc: 'Innovative, high-quality services meeting local and regional needs.',
        
        // About Page
        aboutTitle: 'About ELNAGDI', aboutSubtitle: 'Bridging market gaps through innovation and excellence.',
        whoWeAre: 'Who We Are',
        story: 'ELNAGDI is a pioneering company established to bridge market gaps by providing innovative, high-quality services. We aim to meet the needs of local and regional clients through integrated solutions.',
        mission: 'Our Mission', missionDesc: 'Delivering distinguished services that enhance client value, support partner growth, and contribute to sustainable development.',
        vision: 'Our Vision', visionDesc: 'To become the premier strategic partner in the region, locally and regionally, through excellence in services and trading.',
        valuesTitle: 'Our Core Values',
        
        // Contact Page
        contactTitle: 'Get in Touch', contactSubtitle: 'We are here to support your growth and answer your inquiries.',
        formTitle: 'Send us a Message',
        formBtn: 'Send Message',
        hoursTitle: 'Business Hours', hoursDesc: 'Sun - Thu: 9:00 AM - 5:00 PM',
        connectTitle: 'Connect With Us'
    },
    ar: {
        brandName: 'النجدي',
        brandTag: 'للخدمات والتجارة',
        
        // Nav
        navHome: 'الرئيسية', navAbout: 'من نحن', navServices: 'خدماتنا', navContact: 'اتصل بنا',
        quickLinks: 'روابط سريعة', contactInfo: 'معلومات الاتصال',
        footerDesc: 'شريكك الاستراتيجي لحلول الخدمات اللوجستية والتجارة والاستشارات.',
        location: 'الرياض، المملكة العربية السعودية',
        
        // Home Specific
        heroBadge: 'حلول متكاملة',
        heroTitle: 'الريادة في عالم', heroSubtitle: 'الخدمات والتجارة',
        heroDesc: 'شركة رائدة في تقديم حلول متكاملة في الخدمات اللوجستية، التجارة العامة، والاستشارات الإدارية لسد الفجوات السوقية بجودة عالية.',
        heroBtn1: 'خدماتنا', heroBtn2: 'تواصل معنا',
        servicesTitle: 'أبرز خدماتنا', servicesDesc: 'خدمات مبتكرة ذات جودة عالية تلبي احتياجات العملاء المحليين والإقليميين.',
        
        // About Page
        aboutTitle: 'عن النجدي', aboutSubtitle: 'نسد الفجوات السوقية عبر الابتكار والتميز.',
        whoWeAre: 'من نحن',
        story: 'شركة النجدي هي شركة رائدة تأسست بهدف سد الفجوات السوقية عبر توفير خدمات مبتكرة ذات جودة عالية تلبي احتياجات العملاء المحليين والإقليميين في مجالات متعددة.',
        mission: 'رسالتنا', missionDesc: 'تقديم خدمات متميزة تعزز من قيمة عملائنا، تدعم نمو شركائنا، وتسهم في التنمية المستدامة.',
        vision: 'رؤيتنا', visionDesc: 'أن نصبح الشريك الاستراتيجي الأول في المنطقة، محلياً وإقليمياً، عبر التميز في الخدمات والتجارة.',
        valuesTitle: 'القيم الأساسية',

        // Contact Page
        contactTitle: 'تواصل معنا', contactSubtitle: 'نحن هنا لدعم نموك والإجابة على استفساراتك.',
        formTitle: 'أرسل لنا رسالة',
        formBtn: 'إرسال الرسالة',
        hoursTitle: 'ساعات العمل', hoursDesc: 'الأحد - الخميس: 9:00 ص - 5:00 م',
        connectTitle: 'تواصل معنا'
    }
};

// 2. تحديث البيانات (الخدمات، القيم، الإحصائيات)

const servicesData = [
    { 
        icon: 'truck', // أيقونة مناسبة للوجستيات
        title_en: 'Logistics Services', title_ar: 'الخدمات اللوجستية', 
        desc_en: 'Supply chain management, storage, distribution, and customs clearance.', 
        desc_ar: 'إدارة سلاسل التوريد، تخزين وتوزيع المنتجات، شحن وتخليص جمركي.' 
    },
    { 
        icon: 'package', 
        title_en: 'General Trading', title_ar: 'التجارة العامة', 
        desc_en: 'Import/Export, foodstuff trading, and construction materials distribution.', 
        desc_ar: 'استيراد وتصدير، تجارة المواد الغذائية، وتوزيع منتجات البناء.' 
    },
    { 
        icon: 'briefcase', 
        title_en: 'Management Consulting', title_ar: 'الاستشارات الإدارية', 
        desc_en: 'Corporate restructuring, process improvement, and digital transformation.', 
        desc_ar: 'إعادة هيكلة الشركات، تحسين العمليات، ودعم التحول الرقمي.' 
    },
    { 
        icon: 'monitor', 
        title_en: 'IT Solutions', title_ar: 'تقنية المعلومات', 
        desc_en: 'Software development, ERP system support, and information security.', 
        desc_ar: 'تطوير البرمجيات، دعم نظم ERP، وأمن المعلومات.' 
    }
];

// استخدمنا قسم الإحصائيات لعرض "لماذا تختار النجدي" كنقاط قوة
const statsData = [
    { val: 'GCC', label_en: 'Regional Presence', label_ar: 'تغطية خليجية' },
    { val: '+Egypt', label_en: 'Africa Network', label_ar: 'مصر وأفريقيا' },
    { val: '100%', label_en: 'Custom Solutions', label_ar: 'حلول مخصصة' },
    { val: 'CSR', label_en: 'Social Responsibility', label_ar: 'مسؤولية مجتمعية' }
];

const valuesData = [
    { icon: 'award', title_en: 'Excellence', title_ar: 'التميز', desc_en: 'Exceeding customer expectations.', desc_ar: 'تقديم خدمات تفوق التوقعات.' },
    { icon: 'lightbulb', title_en: 'Innovation', title_ar: 'الابتكار', desc_en: 'Adopting future solutions.', desc_ar: 'تبني الحلول المستقبلية.' },
    { icon: 'users', title_en: 'Partnership', title_ar: 'الشراكة', desc_en: 'Building long-term relationships.', desc_ar: 'بناء علاقات طويلة الأمد.' },
    { icon: 'shield-check', title_en: 'Reliability', title_ar: 'الموثوقية', desc_en: 'Commitment to quality & transparency.', desc_ar: 'أعلى معايير الجودة والشفافية.' }
];

const contactInfoData = [
    { icon: 'phone', title_en: 'Call Us', title_ar: 'اتصل بنا', val: '+966 XX XXX XXXX', link: 'tel:+' },
    { icon: 'mail', title_en: 'Email Us', title_ar: 'راسلنا', val: 'info@alnajdi.com', link: 'mailto:' },
    { icon: 'map-pin', title_en: 'Visit Us', title_ar: 'زورنا', val: 'Riyadh, Saudi Arabia', link: '#' }
];

// --- Initialization Logic (نفس الكود السابق بدون تغيير) ---
document.getElementById('year').textContent = new Date().getFullYear();
let currentLang = localStorage.getItem('lang') || 'ar'; // العربية افتراضية
let currentTheme = localStorage.getItem('theme') || 'light';

function init() {
    setTheme(currentTheme);
    setLanguage(currentLang);
    renderDynamicContent();
    
    if(typeof AOS !== 'undefined') AOS.init({ duration: 800, once: true });
    if(typeof lucide !== 'undefined') lucide.createIcons();

    window.addEventListener('scroll', () => {
        const nav = document.getElementById('navbar');
        if(nav) {
            if (window.scrollY > 20) nav.classList.add('bg-white/90', 'dark:bg-dark/90', 'backdrop-blur-md', 'shadow-md');
            else nav.classList.remove('bg-white/90', 'dark:bg-dark/90', 'backdrop-blur-md', 'shadow-md');
        }
    });
    highlightActiveLink();
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
            if(el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
                el.placeholder = translations[lang][key];
            } else {
                el.textContent = translations[lang][key];
            }
        }
    });
    
    // تعديل مكان زر الواتساب
    const waBtn = document.querySelector('a[href*="wa.me"]');
    if(waBtn) {
        if(lang === 'ar') { waBtn.classList.remove('right-8'); waBtn.classList.add('left-8'); }
        else { waBtn.classList.remove('left-8'); waBtn.classList.add('right-8'); }
    }
    
    highlightActiveLink();
}

function highlightActiveLink() {
    const currentPage = window.location.pathname.split("/").pop() || 'index.html';
    const links = document.querySelectorAll('.nav-link'); // تم استخدام كلاس .nav-link
    links.forEach(link => {
        if (link.getAttribute('href') === currentPage) {
            link.classList.add('text-primary', 'font-bold');
            link.classList.remove('text-gray-800', 'dark:text-white');
        } else {
            link.classList.remove('text-primary', 'font-bold');
            link.classList.add('text-gray-800', 'dark:text-white');
        }
    });
}

function renderDynamicContent() {
    // 1. Render Services
    const servicesGrid = document.getElementById('services-grid');
    if (servicesGrid) {
        servicesGrid.innerHTML = servicesData.map(s => `
            <div class="group bg-white dark:bg-gray-800 rounded-xl p-8 shadow-sm hover:shadow-xl transition-all border border-gray-100 dark:border-gray-700" data-aos="fade-up">
                <div class="w-12 h-12 bg-secondary/10 text-secondary rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-white transition-colors">
                    <i data-lucide="${s.icon}" class="w-6 h-6"></i>
                </div>
                <h3 class="text-xl font-bold mb-2 text-gray-900 dark:text-white">${currentLang === 'en' ? s.title_en : s.title_ar}</h3>
                <p class="text-gray-500 dark:text-gray-400 text-sm leading-relaxed">${currentLang === 'en' ? s.desc_en : s.desc_ar}</p>
            </div>
        `).join('');
    }

    // 2. Render Stats (Why Choose Us)
    const statsGrid = document.getElementById('stats-grid');
    if (statsGrid) {
        statsGrid.innerHTML = statsData.map(s => `
            <div class="p-6 border border-gray-100 dark:border-gray-700 rounded-2xl bg-white/50 dark:bg-gray-800/50 backdrop-blur hover:border-primary transition-colors" data-aos="zoom-in">
                <h3 class="text-2xl font-extrabold text-primary mb-2">${s.val}</h3>
                <p class="text-gray-600 dark:text-gray-300 font-medium text-sm">${currentLang === 'en' ? s.label_en : s.label_ar}</p>
            </div>
        `).join('');
    }

    // 3. Render Values
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

    // 4. Render Contact Cards
    const contactGrid = document.getElementById('contact-cards');
    if (contactGrid) {
        contactGrid.innerHTML = contactInfoData.map(c => `
            <a href="${c.link}${c.val}" class="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg border-b-4 border-primary text-center hover:-translate-y-2 transition-transform">
                <div class="w-14 h-14 bg-gray-50 dark:bg-gray-700 rounded-full flex items-center justify-center mx-auto mb-4 text-primary">
                    <i data-lucide="${c.icon}" class="w-6 h-6"></i>
                </div>
                <h3 class="text-lg font-bold text-gray-900 dark:text-white mb-1">${currentLang === 'en' ? c.title_en : c.title_ar}</h3>
                <p class="text-gray-500 dark:text-gray-400 text-sm dir-ltr">${c.val}</p>
            </a>
        `).join('');
    }

    lucide.createIcons();
}

init();
