/**
 * ============================================================
 *  IBRAHIM ELMAKKY — CONTENT FILE
 * ============================================================
 * This is the ONLY file you should need to edit to update the
 * website's text, links, services, brands, photos and videos.
 *
 * Everything is written in pairs: { ar: "...", en: "..." }
 * so the site can switch between Arabic and English.
 *
 * MEDIA (photos & videos):
 * - Local images: put files in /public/media/ and reference
 *   them as "/media/your-file.jpg"
 * - Remote images: paste any direct image URL
 * - Videos: paste an MP4 URL, a YouTube URL, or a Vimeo URL.
 *   The player figures out the type automatically.
 * - "poster" is the still image shown before a video plays.
 * ============================================================
 */

export const siteInfo = {
  name: { ar: 'إبراهيم المكي', en: 'Ibrahim Elmakky' },
  shortName: { ar: 'المكي', en: 'ELMAKKY' },
  profession: { ar: 'مصور فوتوغرافي ومصور فيديو', en: 'Photographer & Videographer' },
  location: { ar: 'القاهرة، مصر', en: 'Cairo, Egypt' },
  dob: { ar: '26 أغسطس 1999', en: '26 August 1999' },
  since: { ar: 'منذ 2017', en: 'Since 2017' },
  email: 'Ibrahimalmaaki80@gmail.com',
  whatsapp: '+20 114 449 7062',
  instagram:
    'https://www.instagram.com/ibrahimalmakky?igsi=MWM1ZjFnaTBpZHRwbA%3D%3D&utm_source=qr',
  behance: 'https://www.behance.net/Ibtahimalmba60',
  portraitImage: '/media/ibrahim-portrait.webp', // IMAGE 1 — main hero / profile image
};

export const nav = {
  home: { ar: 'الرئيسية', en: 'Home' },
  about: { ar: 'عن إبراهيم', en: 'About' },
  services: { ar: 'الخدمات', en: 'Services' },
  work: { ar: 'الأعمال', en: 'Work' },
  clients: { ar: 'العملاء', en: 'Clients' },
  contact: { ar: 'تواصل', en: 'Contact' },
};

/**
 * ------------------------------------------------------------
 * HERO
 * ------------------------------------------------------------
 */
export const hero = {
  credo: {
    ar: 'لا أكتفي بالتقاط الصور. أصنع محتوى بصريًا يساعد البراندات على التواصل.',
    en: "I don't just capture images. I create visual content that helps brands communicate.",
  },
  intro: {
    ar: 'أصنع محتوى بصريًا يحوّل الأفكار إلى صور وفيديو لها حضور وتأثير.',
    en: 'I create visual content that turns ideas into photography and film with presence and purpose.',
  },
  supportingLine: {
    ar: 'اعمل مع البراندات والشركات والأفراد لتحويل أفكارهم إلى محتوى بصري احترافي.',
    en: 'Working with brands, businesses, and individuals to turn ideas into professional visual content.',
  },
  ctaPrimary: { ar: 'استعرض الأعمال', en: 'View Selected Work' },
  ctaSecondary: { ar: 'ابدأ مشروعك', en: 'Start a Project' },
};

/**
 * ------------------------------------------------------------
 * ABOUT
 * The Arabic and English biographies are each split into an
 * array of short paragraphs for elegant, readable typography.
 * The string '__HIGHLIGHT__' marks where the editorial pull
 * quote ("Emotion. Memory. Soul.") should be inserted.
 * ------------------------------------------------------------
 */
export const about = {
  title: { ar: 'عن إبراهيم', en: 'About' },
  highlight: { ar: 'مشاعر. ذكرى. روح.', en: 'Emotion. Memory. Soul.' },
  imagePrimary: '/media/ibrahim-editorial-close.webp',
  imageSecondary: '/media/ibrahim-editorial-desert.webp',
  bioAr: [
    'منذ عام 2017، بدأت رحلتي مع التصوير، ومع الوقت أصبح التصوير بالنسبة لي أكثر من مجرد وسيلة لالتقاط الصور؛ أصبح طريقة أرى وأفهم بها العالم من حولي.',
    'بدأت رحلتي بتصوير الـ Street Photography، وهناك تعلمت أن ألاحظ قبل أن ألتقط الصورة. هذه التجربة شكّلت الطريقة التي أعمل بها حتى اليوم؛ أن أبحث دائمًا عن زوايا مختلفة، وأن أرى التفاصيل التي قد لا يلاحظها الآخرون.',
    '__HIGHLIGHT__',
    'سواء كنت أعمل على Portraits أو Fashion أو Commercial أو Products أو Events أو Video، دائمًا ما أبحث عن الإحساس الموجود خلف الصورة؛ روح المكان، طاقته، وتفاصيل اللحظة التي تجعل كل مشهد مختلفًا عن غيره.',
    'أحرص دائمًا على متابعة كل ما هو جديد في عالم الصورة، سواء من أفكار أو أساليب أو تقنيات، مع الحفاظ على رؤيتي الخاصة وأسلوب يعبر عني.',
    'على مدار رحلتي، أتيحت لي فرصة العمل مع عدد من الشركات والعلامات التجارية، من بينها Eagle، SODIC، Harby Group، Tidy، Coded، وHottzz، في مشاريع للتصوير الفوتوغرافي والفيديو.',
    'ومن المشاريع التي أعتز بها بشكل خاص تجربتي في العمل مع SODIC، لكنني أؤمن أن كل مشروع له قصته الخاصة ويستحق نفس القدر من الاهتمام والتفاصيل.',
    'بالنسبة لي، التصوير ليس مجرد شيء أحبه.',
    'التصوير جزء من شخصيتي.',
    'أؤمن أن المصور الحقيقي يجب أن يرى الصورة قبل أن يلتقطها؛ ليس بعينه فقط، ولكن بإحساسه أيضًا. أن يفهم روح المكان، وشخصية الشخص، والمشاعر الموجودة في اللحظة.',
    'هدفي بسيط:',
    'أن أجعل الناس يرون العالم من عيني.',
    'أن أصنع صورًا مختلفة، حقيقية، ولها معنى، وأن أحوّل رؤية كل عميل إلى شيء ملموس من خلال منظور قد لا يكون تخيله من قبل.',
  ],
  bioEn: [
    "Since 2017, I've been exploring photography as more than just a way of capturing images — I see it as a way of experiencing and understanding the world.",
    'My journey began with Street Photography, where I learned to observe before I learned to capture. That experience shaped the way I work today: looking beyond the obvious, finding different angles, and noticing details that often go unseen.',
    '__HIGHLIGHT__',
    "Whether I'm working on Portraits, Fashion, Commercial campaigns, Products, Events, or Video, I always look for the feeling behind the frame — the atmosphere, the energy, and the story that makes each moment unique.",
    "I'm constantly exploring new ideas, visual trends, and techniques, while developing a style that stays true to my own perspective.",
    "Over the years, I've had the opportunity to work with brands and organizations including Eagle, SODIC, Harby Group, Tidy, Coded, and Hottzz, across both photography and video projects.",
    "One of the projects I'm particularly proud of is my work with SODIC, but I believe every project carries its own story and deserves the same level of attention.",
    "For me, photography isn't simply something I love doing.",
    "It's part of who I am.",
    'I believe a photographer should see the image before taking it — not only visually, but emotionally. To understand the soul of a place, the character of a person, and the feeling a moment carries.',
    'My goal is simple:',
    'To let people see the world through my eyes.',
    "To create work that feels different, meaningful, and authentic — and to bring each client's vision to life through a perspective they may not have imagined before.",
  ],
};

/**
 * ------------------------------------------------------------
 * SERVICES
 * ------------------------------------------------------------
 */
export const servicesIntro = {
  eyebrow: { ar: 'الخدمات', en: 'Services' },
  headline: {
    ar: 'محتوى بصري يخدم أكثر من مجرد الصورة.',
    en: 'Visual content built for more than just the frame.',
  },
  supporting: {
    ar: 'أصنع صورًا وفيديوهات تساعد البراندات والأشخاص على تحويل أفكارهم إلى محتوى بصري واضح، جذاب، وقابل للاستخدام عبر السوشيال ميديا والحملات والمنصات الرقمية.',
    en: 'I create photography and video content that helps brands and individuals turn their ideas into clear, engaging visual stories built for social media, campaigns, and digital platforms.',
  },
};

export const services = [
  {
    id: 'social-media-content',
    name: { ar: 'صناعة محتوى السوشيال ميديا', en: 'Social Media Content Creation' },
    description: {
      ar: 'صناعة محتوى بصري مخصص للسوشيال ميديا، مصمم ليتناسب مع هوية البراند وطريقة تفاعل الجمهور مع المحتوى.',
      en: 'Creating visual content tailored for social media, built around the brand identity and the way audiences consume and engage with content.',
    },
    bestFor: [
      { ar: 'براند', en: 'Brand' },
      { ar: 'سوشيال ميديا', en: 'Social Media' },
      { ar: 'حملة', en: 'Campaign' },
    ],
  },
  {
    id: 'reels-short-form',
    name: { ar: 'صناعة الريلز والفيديوهات القصيرة', en: 'Reels & Short-Form Video' },
    description: {
      ar: 'تصوير وإنتاج Reels وفيديوهات قصيرة مصممة للسوشيال ميديا، بداية من الفكرة والتصوير وحتى إخراج المحتوى بشكل مناسب للمنصة.',
      en: 'Producing Reels and short-form videos for social platforms, from visual direction and shooting to delivering engaging platform-ready content.',
    },
    bestFor: [
      { ar: 'سوشيال ميديا', en: 'Social Media' },
      { ar: 'براند', en: 'Brand' },
      { ar: 'منتج', en: 'Product' },
    ],
  },
  {
    id: 'commercial-brand-photography',
    name: { ar: 'التصوير التجاري للبراندات', en: 'Commercial Brand Photography' },
    description: {
      ar: 'تصوير احترافي يساعد البراند على تقديم منتجاته وخدماته بصورة قوية ومتناسقة مع هويته البصرية.',
      en: 'Commercial photography created to help brands present their products and services through strong, consistent, and intentional visual storytelling.',
    },
    bestFor: [
      { ar: 'براند', en: 'Brand' },
      { ar: 'شركة', en: 'Business' },
    ],
  },
  {
    id: 'marketing-campaign-visuals',
    name: { ar: 'المحتوى البصري للحملات التسويقية', en: 'Marketing & Campaign Visuals' },
    description: {
      ar: 'تحويل فكرة الحملة التسويقية إلى محتوى بصري متكامل يمكن استخدامه في الإعلانات والسوشيال ميديا والمنصات الرقمية.',
      en: 'Turning marketing campaign ideas into cohesive visual content designed for advertising, social media, and digital platforms.',
    },
    bestFor: [
      { ar: 'حملة', en: 'Campaign' },
      { ar: 'براند', en: 'Brand' },
      { ar: 'سوشيال ميديا', en: 'Social Media' },
    ],
  },
  {
    id: 'product-photography',
    name: { ar: 'تصوير المنتجات', en: 'Product Photography' },
    description: {
      ar: 'تصوير المنتجات بطريقة تبرز التفاصيل والجودة والشخصية البصرية للمنتج، للاستخدام في المتاجر الإلكترونية والإعلانات والسوشيال ميديا.',
      en: 'Product photography focused on highlighting the details, quality, and visual character of products for e-commerce, advertising, and social media.',
    },
    bestFor: [
      { ar: 'منتج', en: 'Product' },
      { ar: 'شركة', en: 'Business' },
    ],
  },
  {
    id: 'fashion-photography',
    name: { ar: 'تصوير الـ Fashion', en: 'Fashion Photography' },
    description: {
      ar: 'تصوير Fashion وEditorial يركز على بناء صورة بصرية قوية للملابس والبراند والشخصية وراء كل مجموعة.',
      en: 'Fashion and editorial photography focused on creating a strong visual identity for fashion brands, collections, and campaigns.',
    },
    bestFor: [
      { ar: 'فاشون', en: 'Fashion' },
      { ar: 'براند', en: 'Brand' },
    ],
  },
  {
    id: 'portrait-personal-branding',
    name: { ar: 'البورتريه والـ Personal Branding', en: 'Portrait & Personal Branding' },
    description: {
      ar: 'تصوير الأشخاص بطريقة تعكس شخصيتهم وهويتهم، سواء للاستخدام الشخصي أو المهني أو لبناء Personal Brand قوي.',
      en: 'Portrait and personal branding photography designed to communicate personality, professionalism, and a strong personal identity.',
    },
    bestFor: [
      { ar: 'شخصي', en: 'Personal Brand' },
      { ar: 'مهني', en: 'Professional' },
    ],
  },
  {
    id: 'event-coverage',
    name: { ar: 'تغطية الفعاليات', en: 'Event Photography & Video' },
    description: {
      ar: 'تغطية فوتوغرافية وفيديو للفعاليات مع التركيز على اللحظات المهمة والتفاصيل والأجواء التي تعكس تجربة الحدث.',
      en: 'Photography and video coverage focused on capturing key moments, atmosphere, details, and the overall experience of an event.',
    },
    bestFor: [
      { ar: 'فعالية', en: 'Event' },
      { ar: 'شركة', en: 'Business' },
    ],
  },
];

export const servicesCta = { ar: 'ناقش مشروعك', en: 'Discuss a Project' };

/**
 * ------------------------------------------------------------
 * THE MARKETING CONNECTION
 * A short visual flow showing where Ibrahim's work fits within
 * a brand's marketing process. He specializes in the production
 * step — not strategy, media buying, or channel management.
 * ------------------------------------------------------------
 */
export const marketingFlow = {
  eyebrow: { ar: 'كيف يخدم العمل البراند', en: 'Where This Fits' },
  title: {
    ar: 'من الفكرة إلى المحتوى الجاهز للنشر',
    en: 'From idea to publish-ready content',
  },
  steps: [
    { ar: 'فكرة البراند', en: 'Brand Idea' },
    { ar: 'التوجيه الإبداعي', en: 'Creative Direction' },
    { ar: 'إنتاج الصورة والفيديو', en: 'Photo + Video Production' },
    { ar: 'محتوى السوشيال ميديا', en: 'Social Media Content' },
    { ar: 'الحملة / الاستخدام الرقمي', en: 'Campaign / Digital Use' },
  ],
  highlightIndex: 2,
  note: {
    ar: 'يتخصص إبراهيم في مرحلة إنتاج الصورة والفيديو — وليس التخطيط التسويقي أو إدارة المنصات أو الإعلانات الممولة.',
    en: 'Ibrahim specializes in the photo and video production stage — not marketing strategy, media buying, or social media management.',
  },
};

/**
 * ------------------------------------------------------------
 * SELECTED WORK — organized by brand/client, not by category.
 * These are the real brands Ibrahim has worked with. Projects
 * are intentionally left ready for real media — add photos and
 * videos to the `media` array of a brand as they become
 * available. Do not add placeholder/stock imagery here.
 * ------------------------------------------------------------
 * Add photos/videos to a brand by filling its `media` array, e.g.:
 * media: [
 *   { type: 'image', src: '/media/sodic-01.jpg', alt: 'SODIC — campaign image' },
 *   { type: 'video', src: 'https://www.youtube.com/watch?v=...', poster: '/media/sodic-poster.jpg' },
 * ]
 */
export const workSection = {
  eyebrow: { ar: 'الأعمال المختارة', en: 'Selected Work' },
  title: { ar: 'مشاريع مع براندات حقيقية', en: 'Projects With Real Brands' },
  
};

export const brands = [
  {
    id: 'coded',
    name: 'coded',
    logo:  { type: 'image', src: '/media/sodic-01.jpg', alt: 'SODIC — campaign image' },
,
    tagline: { ar: 'تصوير فوتوغرافي ', en: 'Photography & video' },
    year: '',
    location: { ar: '', en: '' },
    role: { ar: 'مصور فوتوغرافي', en: 'Photographer' },
    description: {
      ar: 'لوكال براند متخصص في الفاشون.',
      en: 'local fashion brand.',
    },
    media: [
      {
    type: 'image',
    src: '/media/1.webp',
    alt: ' coded campaign'
  },
  {
    type: 'image',
    src: '/media/2.webp',
    alt: 'coded campaign'
  },
  {
    type: 'image',
    src: '/media/3.webp',
    alt: 'coded campaign'
  },
  {
    type: 'image',
    src: '/media/4.webp',
    alt: 'coded campaign'
  },
  {
    type: 'image',
    src: '/media/5.webp',
    alt: 'coded campaign'
  },
    ],
  },
  {
    id: 'sodic',
    name: 'SODIC',
    logo: null,
    tagline: { ar: 'تصوير فوتوغرافي وفيديو', en: 'Photography & video' },
    year: '',
    location: { ar: '', en: '' },
    role: { ar: 'مصور فوتوغرافي ومصور فيديو', en: 'Photographer & Videographer' },
    description: {
      ar: 'من المشاريع التي يعتز بها إبراهيم بشكل خاص. تفاصيل المشروع ستُضاف قريبًا.',
      en: 'One of the projects Ibrahim is particularly proud of. Project details coming soon.',
    },
    media: [],
  },
  {
    id: 'harby-group',
    name: 'Harby Group',
    logo: null,
    tagline: { ar: 'تصوير فوتوغرافي وفيديو', en: 'Photography & video' },
    year: '',
    location: { ar: '', en: '' },
    role: { ar: 'مصور فوتوغرافي ومصور فيديو', en: 'Photographer & Videographer' },
    description: {
      ar: 'تفاصيل المشروع ستُضاف قريبًا.',
      en: 'Project details coming soon.',
    },
    media: [],
  },
  {
    id: 'tidy',
    name: 'Tidy',
    logo: null,
    tagline: { ar: 'تصوير فوتوغرافي وفيديو', en: 'Photography & video' },
    year: '',
    location: { ar: '', en: '' },
    role: { ar: 'مصور فوتوغرافي ومصور فيديو', en: 'Photographer & Videographer' },
    description: {
      ar: 'تفاصيل المشروع ستُضاف قريبًا.',
      en: 'Project details coming soon.',
    },
    media: [],
  },
  
  {
    id: 'hottzz',
    name: 'Hottzz',
    logo: null,
    tagline: { ar: 'تصوير فوتوغرافي وفيديو', en: 'Photography & video' },
    year: '',
    location: { ar: '', en: '' },
    role: { ar: 'مصور فوتوغرافي ومصور فيديو', en: 'Photographer & Videographer' },
    description: {
      ar: 'تفاصيل المشروع ستُضاف قريبًا.',
      en: 'Project details coming soon.',
    },
    media: [],
  },
];

export const clientsSection = {
  eyebrow: { ar: 'العملاء', en: 'Clients' },
  title: { ar: 'عمل مع', en: 'Worked With' },
};

export const contact = {
  eyebrow: { ar: 'تواصل', en: 'Get in Touch' },
  headline: {
    ar: 'لنصنع شيئًا يستحق أن يُتذكر.',
    en: "Let's create something worth remembering.",
  },
  whatsappLabel: { ar: 'واتساب', en: 'WhatsApp' },
  emailLabel: { ar: 'البريد الإلكتروني', en: 'Email' },
  instagramLabel: { ar: 'إنستغرام', en: 'Instagram' },
  behanceLabel: { ar: 'بيهانس', en: 'Behance' },
};

export const footer = {
  rights: { ar: 'جميع الحقوق محفوظة', en: 'All rights reserved' },
};
