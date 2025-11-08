(function () {
  const translations = {
    en: {
      'nav.home': 'Home',
      'nav.features': 'Features',
      'nav.about': 'About Us',
      'nav.plans': 'Plans',
      'nav.testimonials': 'Testimonials',
      'nav.contact': 'Contact',
      'loader.loading': 'Loading...',
      'hero.title': 'Make Your Business More Profitable',
      'hero.subtitle': 'Start. Grow. Sell. with <span class="text-primary fw-semibold">Nomo</span> — Where Online Business Begins.<br>Build your brand. Scale your dream. Own your market at all platforms.',
      'hero.cta': 'See More',
      'features.title': 'Nomo Core Features',
      'features.lead': 'Built for growth, powered by every modern eCommerce feature. Nomo gives you everything to start, scale, and succeed online.',
      'features.store.title': 'Store Configuration',
      'features.store.desc': 'Manage bilingual storefronts, multiple currencies and languages, and tax settings — all from one unified dashboard.',
      'features.inventory.title': 'Product &amp; Inventory Management',
      'features.inventory.desc': 'Organize unlimited products and categories, adjust prices, apply discounts and coupons, and control stock with advanced inventory tools.',
      'features.sales.title': 'Sales &amp; Payments',
      'features.sales.desc': 'Streamline order and invoice management, connect payment gateways and shipping carriers, gift cards, and reward points.',
      'features.marketing.title': 'Marketing &amp; Engagement',
      'features.marketing.desc': 'Engage customers with product reviews, affiliate programs, newsletters, and content marketing tools that boost visibility and loyalty.',
      'features.analytics.title': 'Analytics &amp; Reporting',
      'features.analytics.desc': 'Access detailed dashboards and exportable reports on sales, performance, and customer behavior to guide smarter business decisions.',
      'features.support.title': 'Support &amp; Management',
      'features.support.desc': 'Empower your team with multi-user access, mobile apps, and priority support — ensuring smooth operation and quick issue resolution.',
      'featureBlocks.title': 'Communicate and gather feedback',
      'featureBlocks.textA': 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem neque nisi architecto autem molestias corrupti officia veniam.',
      'featureBlocks.textB': 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem neque nisi architecto autem molestias corrupti officia veniam',
      'featureBlocks.role': 'Co-Founder, XYZ Inc.',
      'featureBlocks.quote': '&ldquo;Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus vitae ipsa asperiores inventore aperiam iure?&rdquo;',
      'about.title': 'About Us',
      'about.mission.title': 'Our Mission',
      'about.mission.body': 'Eos cumque optio dolores excepturi rerum temporibus magni recusandae eveniet, totam omnis consectetur maxime quibusdam expedita dolorem dolor nobis dicta labore quaerat esse magnam unde, aperiam delectus! At maiores, itaque.',
      'about.mission.point1': 'Laborum enim quasi at modi',
      'about.mission.point2': 'Ad at tempore',
      'about.mission.point3': 'Labore quaerat esse',
      'about.cta': 'Contact Us',
      'testimonials.title': 'Testimonials',
      'testimonials.quote1': '&ldquo;Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur unde reprehenderit aperiam quaerat fugiat repudiandae explicabo animi minima fuga beatae illum eligendi incidunt consequatur. Amet dolores excepturi earum unde iusto.&rdquo;',
      'testimonials.quote2': '&ldquo;Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur unde reprehenderit aperiam quaerat fugiat repudiandae explicabo animi minima fuga beatae illum eligendi incidunt consequatur. Amet dolores excepturi earum unde iusto.&rdquo;',
      'testimonials.quote3': '&ldquo;Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur unde reprehenderit aperiam quaerat fugiat repudiandae explicabo animi minima fuga beatae illum eligendi incidunt consequatur. Amet dolores excepturi earum unde iusto.&rdquo;',
      'contact.title': 'Contact Us',
      'contact.form.title': 'Contact Form',
      'contact.form.firstName': 'First Name',
      'contact.form.firstNamePlaceholder': 'First Name',
      'contact.form.lastName': 'Last Name',
      'contact.form.lastNamePlaceholder': 'Last Name',
      'contact.form.email': 'Email',
      'contact.form.emailPlaceholder': 'Email',
      'contact.form.subject': 'Subject',
      'contact.form.subjectPlaceholder': 'Subject',
      'contact.form.message': 'Message',
      'contact.form.messagePlaceholder': 'Leave your message here...',
      'contact.form.submit': 'Send Message',
      'footer.rights.prefix': 'Copyright &copy;',
      'footer.rights.suffix': 'All rights reserved'
    },
    ar: {
      'nav.home': 'الرئيسية',
      'nav.features': 'المزايا',
      'nav.about': 'من نحن',
      'nav.plans': 'الباقات',
      'nav.testimonials': 'آراء العملاء',
      'nav.contact': 'تواصل',
      'loader.loading': 'جارٍ التحميل...',
      'hero.title': 'اجعل عملك أكثر ربحية',
      'hero.subtitle': 'ابدأ. نمِّ. بِع. مع <span class="text-primary fw-semibold">نومو</span> — حيث تبدأ الأعمال الرقمية.<br>ابنِ علامتك التجارية. نمِّ حلمك. وامتلك سوقك على كل المنصات.',
      'hero.cta': 'اكتشف المزيد',
      'features.title': 'مزايا نومو الأساسية',
      'features.lead': 'منصة مصممة للنمو ومدعومة بكل مزايا التجارة الإلكترونية الحديثة. تمنحك نومو كل ما تحتاجه للانطلاق والتوسع والنجاح عبر الإنترنت.',
      'features.store.title': 'تهيئة المتجر',
      'features.store.desc': 'أدر واجهات متعددة اللغات والعملات وإعدادات الضرائب من لوحة تحكم موحدة وسهلة.',
      'features.inventory.title': 'إدارة المنتجات والمخزون',
      'features.inventory.desc': 'نظّم عددًا غير محدود من المنتجات والأقسام، وعدّل الأسعار، وفعّل الخصومات والكوبونات، وتحكّم في المخزون بأدوات متقدمة.',
      'features.sales.title': 'المبيعات والمدفوعات',
      'features.sales.desc': 'بسّط إدارة الطلبات والفواتير، واربط بوابات الدفع وشركات الشحن، وفعّل بطاقات الهدايا ونقاط المكافآت.',
      'features.marketing.title': 'التسويق والتفاعل',
      'features.marketing.desc': 'تفاعل مع عملائك من خلال المراجعات والبرامج التابعة والنشرات البريدية وأدوات المحتوى التي تعزز الظهور والولاء.',
      'features.analytics.title': 'التحليلات والتقارير',
      'features.analytics.desc': 'احصل على لوحات معلومات تفصيلية وتقارير قابلة للتصدير حول المبيعات والأداء وسلوك العملاء لاتخاذ قرارات أذكى.',
      'features.support.title': 'الدعم والإدارة',
      'features.support.desc': 'مكّن فريقك من الوصول المتعدد للمستخدمين، وتطبيقات الهاتف، والدعم ذي الأولوية لضمان التشغيل السلس وحل المشكلات بسرعة.',
      'featureBlocks.title': 'تواصل واجمع الآراء',
      'featureBlocks.textA': 'لوريم إيبسوم دولور سيت أميت كونسيكتيتور أديبيسيسينغ إيليت. فولوبتاتيم نيكي نيسي أركيتكتو أوتام موليستياز كوروبتي أوفيسيا فينيام.',
      'featureBlocks.textB': 'لوريم إيبسوم دولور سيت أميت كونسيكتيتور أديبيسيسينغ إيليت. فولوبتاتيم نيكي نيسي أركيتكتو أوتام موليستياز كوروبتي أوفيسيا فينيام',
      'featureBlocks.role': 'الشريك المؤسس، شركة XYZ',
      'featureBlocks.quote': '&ldquo;لوريم إيبسوم دولور سيت أميت، كونسيكتيتور أديبيسيسينغ إيليت. دوكيموس فيتاي إيبسا أسبيريوريس إينفينتور أبيريامل يوري؟&rdquo;',
      'about.title': 'من نحن',
      'about.mission.title': 'رسالتنا',
      'about.mission.body': 'نقدم حلولًا مرنة تجمع بين التقنية والإبداع لتلبية احتياجاتك التجارية، مع حرصٍ دائم على الجودة والابتكار والنتائج الملموسة.',
      'about.mission.point1': 'نهج عملي يناسب طموحاتك',
      'about.mission.point2': 'خبرة تراكمية تعزز نجاحك',
      'about.mission.point3': 'شراكة مستمرة ودعم موثوق',
      'about.cta': 'تواصل معنا',
      'testimonials.title': 'آراء العملاء',
      'testimonials.quote1': '&ldquo;لوريم إيبسوم دولور سيت أميت كونسيكتيتور أديبيسيسينغ إيليت. كونسيكتيتور أوندي ريهبريهينديريت أبيريامل كوارِت فوغات ريبيوديانداي إكسبليكابو أنيمي. أمِت دولوريس إكسبتشوري إيروم أوندي يوستو.&rdquo;',
      'testimonials.quote2': '&ldquo;لوريم إيبسوم دولور سيت أميت كونسيكتيتور أديبيسيسينغ إيليت. كونسيكتيتور أوندي ريهبريهينديريت أبيريامل كوارِت فوغات ريبيوديانداي إكسبليكابو أنيمي. أمِت دولوريس إكسبتشوري إيروم أوندي يوستو.&rdquo;',
      'testimonials.quote3': '&ldquo;لوريم إيبسوم دولور سيت أميت كونسيكتيتور أديبيسيسينغ إيليت. كونسيكتيتور أوندي ريهبريهينديريت أبيريامل كوارِت فوغات ريبيوديانداي إكسبليكابو أنيمي. أمِت دولوريس إكسبتشوري إيروم أوندي يوستو.&rdquo;',
      'contact.title': 'تواصل معنا',
      'contact.form.title': 'نموذج التواصل',
      'contact.form.firstName': 'الاسم الأول',
      'contact.form.firstNamePlaceholder': 'الاسم الأول',
      'contact.form.lastName': 'اسم العائلة',
      'contact.form.lastNamePlaceholder': 'اسم العائلة',
      'contact.form.email': 'البريد الإلكتروني',
      'contact.form.emailPlaceholder': 'البريد الإلكتروني',
      'contact.form.subject': 'الموضوع',
      'contact.form.subjectPlaceholder': 'الموضوع',
      'contact.form.message': 'الرسالة',
      'contact.form.messagePlaceholder': 'اكتب رسالتك هنا...',
      'contact.form.submit': 'إرسال الرسالة',
      'footer.rights.prefix': 'حقوق النشر &copy;',
      'footer.rights.suffix': 'جميع الحقوق محفوظة'
    }
  };

  const htmlElement = document.documentElement;

  function applyTranslations(language) {
    const dictionary = translations[language] || translations.en;
    document.querySelectorAll('[data-i18n-key]').forEach((node) => {
      const key = node.getAttribute('data-i18n-key');
      const translation = dictionary[key] ?? translations.en[key];
      if (translation !== undefined) {
        node.innerHTML = translation;
      }
    });

    document.querySelectorAll('[data-i18n-placeholder]').forEach((node) => {
      const key = node.getAttribute('data-i18n-placeholder');
      const translation = dictionary[key] ?? translations.en[key];
      if (translation !== undefined) {
        node.setAttribute('placeholder', translation);
      }
    });

    document.querySelectorAll('[data-i18n-value]').forEach((node) => {
      const key = node.getAttribute('data-i18n-value');
      const translation = dictionary[key] ?? translations.en[key];
      if (translation !== undefined) {
        node.value = translation;
      }
    });
  }

  function setLanguage(language) {
    const targetLang = translations[language] ? language : 'en';
    localStorage.setItem('preferredLanguage', targetLang);
    htmlElement.lang = targetLang;
    htmlElement.dir = targetLang === 'ar' ? 'rtl' : 'ltr';
    document.body.classList.toggle('lang-ar', targetLang === 'ar');
    document.body.classList.toggle('lang-en', targetLang !== 'ar');

    applyTranslations(targetLang);

    document.querySelectorAll('.language-option').forEach((button) => {
      const isActive = button.getAttribute('data-lang') === targetLang;
      button.classList.toggle('active', isActive);
      button.setAttribute('aria-pressed', isActive ? 'true' : 'false');
    });
  }

  document.addEventListener('DOMContentLoaded', () => {
    const storedLanguage = localStorage.getItem('preferredLanguage') || 'en';
    setLanguage(storedLanguage);

    document.querySelectorAll('.language-option').forEach((button) => {
      button.addEventListener('click', () => {
        const language = button.getAttribute('data-lang');
        setLanguage(language);
      });
    });
  });
})();
