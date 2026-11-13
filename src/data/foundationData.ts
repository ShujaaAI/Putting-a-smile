import { DonationTier, ProjectCause, TestimonialItem, UpcomingEvent, BlogPost } from '../types';

export const FOUNDATION_META = {
  name: "Putting a Smile On Them Foundation",
  shortName: "Putting a Smile On Them",
  tagline: "Putting smiles where pain once lived.",
  announcement: "Registration finalized in May 2026 • Join our founding partners and transform lives.",
  hqLocation: "Eldoret, Uasin Gishu County, Kenya",
  location: "Eldoret, Uasin Gishu County, Kenya",
  address: "Eldoret, Uasin Gishu County, Kenya",
  logoUrl: "https://i.ibb.co/s9Q5Y8Zv/logo-smile.png",
  heroImage: "https://i.ibb.co/1YbFtLTQ/Whats-App-Image-2026-05-15-at-08-24-24-1.jpg",
  founderImage: "https://i.ibb.co/rf4mHppL/Whats-App-Image-2026-05-21-at-17-04-55.jpg",
  founderImg: "https://i.ibb.co/rf4mHppL/Whats-App-Image-2026-05-21-at-17-04-55.jpg",
  localFallbackImage: "/assets/aistudio/0c94d764051b263a253cc377356a49fb_b884add9.jpg",

  // Official Payment Details
  mpesaTill: "3131630",
  mpesaPaybill: "3131630",
  mpesaAccount: "3131630",
  mpesaType: "Buy Goods and Services",
  bankName: "Kingdom Bank",
  bankAccount: "4012107537002",

  // Official Contacts
  phoneGrace: "0721880023",
  phoneFavour: "0706733065",
  whatsappGrace: "https://wa.me/254721880023",
  whatsappFavour: "https://wa.me/254706733065",
  email: "partners@puttingasmileonthem.org",

  // Social
  youtubeUrl: "https://www.youtube.com/@puttingsmileonthemfoundation",

  founderStory:
    "Putting a Smile on Them Foundation was born from a dream placed in the founder's heart in 2018: to return and uplift children and families after surviving life on the streets. In 2024, that promise took shape through practical love, emergency support, and long-term empowerment programs.",
  founderQuote:
    "putting a smile on them Foundation was born from a dream God placed in my heart in 2018 — a promise that if I overcame street life, I would return to uplift and support vulnerable children and communities. In 2024, that dream became a reality through acts of love, hope, and giving back.",
  vision:
    "A compassionate society where every child is safe, every widow is empowered, and every vulnerable family has a pathway to dignity and hope.",
  mission:
    "To restore lives through nutrition, education sponsorship, family support, and community partnerships that break the cycle of poverty and street vulnerability.",
};

export const CORE_STATS = [
  { value: "1,000+", label: "Lives Touched", icon: "Users" },
  { value: "500+", label: "Meals Weekly", icon: "Heart" },
  { value: "50+", label: "Widows Supported", icon: "HandHeart" },
  { value: "100%", label: "Transparency Focus", icon: "ShieldCheck" },
];

export const ACTION_DOMAINS = [
  {
    id: "education",
    title: "Education Pathways",
    description: "Expand sustainable school sponsorships, uniforms, and learning kits for rescued street children in Eldoret.",
    image: "https://i.ibb.co/9m4JGL1Z/Whats-App-Image-2026-05-23-at-11-56-03.jpg",
    badgeBg: "bg-[#063BAD]",
    iconName: "GraduationCap",
    causeTitle: "Education Pathways & School Sponsorship",
    detailedStory:
      "We rescue children from street life and walk alongside them into safe classrooms. Each sponsorship provides durable school shoes, uniforms, exercise books, and ongoing mentorship so learners like Wangui and JuJu can thrive.",
  },
  {
    id: "nutrition",
    title: "Nutrition & Feeding",
    description: "Delivering 500+ weekly meals and emergency food hampers to vulnerable households and street children.",
    image: "/assets/aistudio/0c94d764051b263a253cc377356a49fb_b884add9.jpg",
    badgeBg: "bg-[#224EA6]",
    iconName: "Utensils",
    causeTitle: "Weekly Feeding & Food Security Program",
    detailedStory:
      "Our Eldoret community outreach team coordinates weekly hot meals and emergency staple food baskets (maize flour, beans, oil, greens) so no child sleeps hungry.",
  },
  {
    id: "rescue",
    title: "Street Rescue & Care",
    description: "Rescue and reintegrate children from street survival into safe environments with counseling and structure.",
    image: "https://i.ibb.co/JRznQVKn/Whats-App-Image-2026-05-23-at-11-55-43.jpg",
    badgeBg: "bg-[#689FF1]",
    iconName: "Home",
    causeTitle: "Street Rescue & Safe Reintegration",
    detailedStory:
      "Born out of our founder's own journey surviving street life, we conduct compassionate street outreach to connect vulnerable youth like Karis with stable shelter, mentorship, and school routines.",
  },
  {
    id: "widows",
    title: "Widows Empowerment",
    description: "Supporting 50+ widows through mentorship, table-banking, and income-generating micro-enterprise grants.",
    image: "https://i.ibb.co/rf4mHppL/Whats-App-Image-2026-05-21-at-17-04-55.jpg",
    badgeBg: "bg-[#1D3C6E]",
    iconName: "HandHeart",
    causeTitle: "Widows Livelihood & Empowerment Initiative",
    detailedStory:
      "When widows are equipped with seed capital, small-business coaching, and peer mentorship, entire households achieve lasting dignity and self-reliance.",
  },
  {
    id: "center",
    title: "Community Center",
    description: "Building and operationalizing our permanent community support center and safe haven in Eldoret.",
    image: "https://i.ibb.co/qFnnn1xm/Whats-App-Image-2026-05-23-at-11-55-48.jpg",
    badgeBg: "bg-[#C02523]",
    iconName: "Building2",
    causeTitle: "Permanent Eldoret Community Support Center",
    detailedStory:
      "With 1 center currently in progress, every brick and donation accelerates a permanent hub for meals, learning support, widow training, and safe refuge in Uasin Gishu County.",
  },
];

export const TEAM_MEMBERS = [
  {
    roleCategory: "Founding Member",
    name: "Director Sheila Mmbone",
    description: "Founding member providing strategic direction, partnership leadership, and program oversight across all Eldoret outreach initiatives.",
    avatarBadge: "SM",
    image: "https://i.ibb.co/rf4mHppL/Whats-App-Image-2026-05-21-at-17-04-55.jpg",
  },
  {
    roleCategory: "Treasurer",
    name: "Ms. Auma Grace Achieng",
    description: "Oversees financial stewardship, transparent fund allocation, and accountable resource tracking across all Eldoret programs.",
    avatarBadge: "AG",
    image: "",
  },
  {
    roleCategory: "Field Team",
    name: "Community Outreach Team",
    description: "Coordinates weekly food distribution, beneficiary follow-up, and family support in Eldoret and surrounding areas.",
    avatarBadge: "CO",
    image: "",
  },
];

export const BENEFICIARIES = [
  {
    id: "wangui",
    name: "Wangui",
    role: "Back in School · Eldoret",
    title: "Back in School & Rebuilding Life",
    description:
      "Rescued from street survival and now back in school, Wangui is rebuilding her life with safety, structure, and renewed confidence.",
    image: "https://i.ibb.co/9m4JGL1Z/Whats-App-Image-2026-05-23-at-11-56-03.jpg",
    link: "https://ibb.co/nq1TRvYP",
  },
  {
    id: "karis",
    name: "Karis",
    role: "Classroom Mentorship · Eldoret",
    title: "Thriving in Focused Mentorship",
    description:
      "Karis moved from instability to focused learning support and is now thriving in classroom routines and mentorship.",
    image: "https://i.ibb.co/JRznQVKn/Whats-App-Image-2026-05-23-at-11-55-43.jpg",
    link: "https://ibb.co/RpC2yf92",
  },
  {
    id: "juju",
    name: "JuJu",
    role: "Sponsored Learner · Eldoret",
    title: "Educational Journey & Hope",
    description:
      "With consistent sponsorship and care, JuJu has transitioned away from street life and into a brighter educational journey.",
    image: "https://i.ibb.co/qFnnn1xm/Whats-App-Image-2026-05-23-at-11-55-48.jpg",
    link: "https://ibb.co/93vvvYGy",
  },
];

export const ABOUT_PILLARS = [
  {
    id: "story",
    title: "100% Transparency",
    description: "We guarantee transparent management and accountable stewardship of every shilling and dollar.",
    icon: "ShieldCheck",
  },
  {
    id: "impact",
    title: "Measurable Impact",
    description: "500+ meals served weekly and 50+ widows actively supported across Uasin Gishu County.",
    icon: "HeartHandshake",
  },
  {
    id: "team",
    title: "Committed Team",
    description: "Led by Founding Member Director Sheila Mmbone, Treasurer Ms. Auma Grace Achieng, and dedicated Eldoret field coordinators.",
    icon: "Users",
  },
  {
    id: "center",
    title: "Permanent Center Goal",
    description: "Rescuing children from street life and completing our permanent community support center.",
    icon: "Building2",
  },
];

export const DONATION_TIERS: DonationTier[] = [
  {
    id: "weekly_meals",
    usdAmount: 10,
    kesAmount: 1500,
    label: "Weekly Meal Sponsor",
    impactDescription: "Provides emergency flour, beans, and fresh greens feeding a vulnerable child & family in Eldoret.",
    badge: "Most Common",
  },
  {
    id: "school_kit",
    usdAmount: 35,
    kesAmount: 5000,
    label: "Education Kit & Uniform",
    impactDescription: "Covers a complete school uniform, textbooks, shoes, and term stationery for a rescued street child.",
    badge: "High Impact",
  },
  {
    id: "widow_support",
    usdAmount: 75,
    kesAmount: 10000,
    label: "Widow Micro-Support",
    impactDescription: "Provides seed funding, training, and tools for a widowed mother's small business.",
  },
  {
    id: "center_builder",
    usdAmount: 150,
    kesAmount: 20000,
    label: "Community Center Brick",
    impactDescription: "Direct support towards constructing and furnishing the permanent community and rescue shelter in Eldoret.",
  },
];

export const CORE_PILLARS = [
  {
    id: "food_security",
    title: "Food Security Programs",
    subtitle: "Zero Hunger at the Grassroots",
    description: "We organize weekly hot meal feeding kitchens, emergency grain distribution, and backyard permaculture training so no child goes to bed with an empty stomach.",
    highlights: ["Weekly community nutritional kitchens", "Drought & inflation relief food hampers", "Community garden seed distribution"],
  },
  {
    id: "education_pathways",
    title: "Education Pathways",
    subtitle: "Dignity Through Learning",
    description: "Every child has the right to learn without fear of exclusion. We supply school uniforms, textbooks, shoes, exam fees, and after-school remedial mentorship.",
    highlights: ["Complete school kit sponsorships", "Girls' sanitary health & stay-in-school drives", "Youth digital literacy & reading hubs"],
  },
  {
    id: "community_support",
    title: "Community Support & Widows",
    subtitle: "Sustainable Empowerment",
    description: "Restoring hope to widows and vulnerable caregivers through micro-business grants, table-banking circles, and grief counseling so families remain self-reliant.",
    highlights: ["Seed funding for smallholder businesses", "Widow peer-support & legal advocacy", "Free community health & wellness camps"],
  },
];

export const PROJECT_CAUSES: ProjectCause[] = [
  {
    id: "cause_education",
    title: "Education For All: Eldoret Children",
    category: "Education",
    location: "Huruma & Langas Settlements",
    summary: "Providing quality learning materials, school shoes, and remedial books to children at risk of dropping out.",
    detailedStory: "In Huruma and Langas informal settlements on the outskirts of Eldoret, hundreds of children face dropping out due to lacking basic uniforms and exercise books.",
    targetAmountUSD: 18000,
    raisedAmountUSD: 14200,
    targetAmountKES: 2700000,
    raisedAmountKES: 2130000,
    beneficiariesCount: 450,
    imageFallbackGradient: "from-[#063BAD] to-[#1D3C6E]",
    iconName: "BookOpen",
  },
  {
    id: "cause_food",
    title: "Emergency Food & Nutrition Support",
    category: "Food Security",
    location: "Maili Nne & Kaptagat",
    summary: "Delivering weekly nutritional hampers and setting up weekend community meal centers for vulnerable families.",
    detailedStory: "Rising grain prices have strained households where single caregivers and grandparents care for multiple orphaned children.",
    targetAmountUSD: 12000,
    raisedAmountUSD: 9800,
    targetAmountKES: 1800000,
    raisedAmountKES: 1470000,
    beneficiariesCount: 620,
    imageFallbackGradient: "from-[#C02523] to-[#1D3C6E]",
    iconName: "Utensils",
  },
];

export const TESTIMONIALS: TestimonialItem[] = [
  {
    id: "test_1",
    quote: "Putting a Smile On Them changed my life. Today, I am preparing for my secondary school exams with hope and confidence.",
    name: "Faith Chebet",
    role: "Scholarship Recipient",
    location: "Eldoret",
    avatarSeed: "Faith",
    verified: true,
  },
];

export const UPCOMING_EVENTS: UpcomingEvent[] = [
  {
    id: "evt_1",
    day: "25",
    month: "NOV",
    year: "2026",
    title: "Annual Back-to-School Supply Distribution Drive",
    location: "Huruma Social Hall, Eldoret",
    time: "09:00 AM - 02:00 PM",
    description: "Handing out backpacks, uniforms, shoes, and stationery sets to registered vulnerable pupils.",
    capacity: 250,
    rsvpCount: 182,
  },
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: "blog_1",
    date: "November 4, 2026",
    readTime: "4 min read",
    title: "How Education Sponsorships Break Generational Poverty in Eldoret",
    category: "Field Stories",
    summary: "Meet three students from our 2024 cohort who just qualified for secondary school against insurmountable odds.",
    author: "Grace, Field Lead",
  },
];

export const FINANCIAL_ALLOCATION = [
  {
    category: "Direct Frontline Aid (Nutrition & School Sponsorships)",
    percentage: 85,
    description: "Direct purchase of grain baskets, school tuition, uniforms, medical care, and widow grants.",
    color: "bg-[#063BAD]",
  },
  {
    category: "Rescue Logistics & Field Operations",
    percentage: 10,
    description: "Transport, volunteer outreach, family follow-ups, and field home assessments in Eldoret.",
    color: "bg-[#C02523]",
  },
  {
    category: "Administration & Center Development",
    percentage: 5,
    description: "Accountability auditing, bank transactions, and regulatory compliance.",
    color: "bg-[#689FF1]",
  },
];
