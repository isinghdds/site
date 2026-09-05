export const practiceInfo = {
  name: "Dr. Isha Singh, DDS",
  title: "Cosmetic & Comprehensive Family Dentistry",
  domain: "www.ishasinghdds.com",
  phone: "(555) 321-9876",
  email: "care@ishasinghdds.com",
  address: "742 Evergreen Terrace, Suite 200, Metro City, NY 10001",
  tagline: "Gentle Care. Radiant Smiles. Modern Dentistry.",
  shortBio: "Dedicated to providing gentle, compassionate, state-of-the-art dental care for patients of all ages.",
  fullBio: `Dr. Isha Singh, DDS, is a renowned dentist committed to elevating oral health through precision, empathy, and cutting-edge technology. After earning her Doctor of Dental Surgery degree with top honors, Dr. Singh completed advanced post-doctoral training in cosmetic dentistry, dental implantology, and clear aligner therapy. 

She believes that a healthy smile is the foundation of confidence and overall well-being. Dr. Singh treats every patient like family, taking time to understand their individual needs, alleviate dental anxiety, and craft customized treatment plans.`,
  stats: [
    { label: "Years of Experience", value: "12+" },
    { label: "Happy Smiles Restored", value: "6,500+" },
    { label: "5-Star Patient Reviews", value: "500+" },
    { label: "Patient Satisfaction Rate", value: "99.4%" }
  ],
  hours: [
    { day: "Monday - Thursday", time: "8:00 AM - 5:30 PM" },
    { day: "Friday", time: "8:00 AM - 3:00 PM" },
    { day: "Saturday", time: "9:00 AM - 2:00 PM (By Appt)" },
    { day: "Sunday", time: "Closed (Emergency On-Call)" }
  ]
};

export const serviceCategories = [
  { id: "all", label: "All Services" },
  { id: "cosmetic", label: "Cosmetic Dentistry" },
  { id: "preventive", label: "Preventive Care" },
  { id: "restorative", label: "Restorative Dentistry" },
  { id: "ortho", label: "Clear Aligners" },
  { id: "emergency", label: "Emergency Care" }
];

export const servicesList = [
  {
    id: "teeth-whitening",
    category: "cosmetic",
    title: "Professional Teeth Whitening",
    shortDesc: "Brighten your smile by up to 8 shades in a single in-office session or with custom take-home kits.",
    fullDesc: "Our medical-grade whitening treatments effectively eliminate years of stubborn stains caused by coffee, wine, and aging without causing enamel damage or tooth sensitivity.",
    highlights: ["In-Office 60-Minute Session", "Custom Take-Home Trays", "Low-Sensitivity Formula", "Long-Lasting Results"],
    icon: "Sparkles"
  },
  {
    id: "porcelain-veneers",
    category: "cosmetic",
    title: "Porcelain Veneers",
    shortDesc: "Custom-crafted ultra-thin ceramic shells designed to perfect tooth shape, shade, and alignment.",
    fullDesc: "Veneers can instantly correct chipped, discolored, gapped, or slightly misaligned teeth with natural translucency and stain-resistant durability.",
    highlights: ["Custom Shade Matching", "Stain-Resistant Porcelain", "Minimal Tooth Preparation", "10-15+ Year Lifespan"],
    icon: "Smile"
  },
  {
    id: "clear-aligners",
    category: "ortho",
    title: "Clear Aligners & Invisalign®",
    shortDesc: "Straighten your teeth discreetly with clear, removable aligners engineered for comfort.",
    fullDesc: "Achieve a straight, harmonious smile without wires or brackets. Our 3D digital intraoral scanning ensures a precision fit for faster, predictable tooth movement.",
    highlights: ["Virtually Invisible", "Removable for Eating & Cleaning", "3D Digital Treatment Preview", "Fewer Office Visits"],
    icon: "ShieldCheck"
  },
  {
    id: "dental-implants",
    category: "restorative",
    title: "Dental Implants",
    shortDesc: "The gold standard permanent solution for replacing missing teeth with natural look and feel.",
    fullDesc: "Implants replace both the root and crown of a missing tooth, preserving jawbone density and providing permanent stability for chewing and speaking confidence.",
    highlights: ["Permanent Root Replacement", "Prevents Jaw Bone Loss", "Looks & Feels Like Natural Teeth", "High Success Rate"],
    icon: "Activity"
  },
  {
    id: "preventive-cleanings",
    category: "preventive",
    title: "Cleanings & Digital Exams",
    shortDesc: "Comprehensive oral hygiene care, ultrasonic scaling, fluoride, and low-radiation 3D X-rays.",
    fullDesc: "Preventative dental care keeps your teeth and gums healthy for life. We use ultrasonic cleaning instruments for gentle plaque removal and early detection.",
    highlights: ["Ultrasonic Plaque Removal", "Ultra-Low Radiation Digital X-Rays", "Oral Cancer Screenings", "Gentle Gum Care"],
    icon: "HeartPulse"
  },
  {
    id: "crowns-bridges",
    category: "restorative",
    title: "Crowns & Bridges",
    shortDesc: "Durable, tooth-colored porcelain restorations to rebuild damaged or cracked teeth.",
    fullDesc: "Restore full strength and beauty to weakened or heavily restored teeth using premium metal-free ceramic crowns custom engineered to match your bite.",
    highlights: ["Same-Day Emergency Temporary", "Metal-Free Zirconia/Porcelain", "Exact Color Match", "Protects Weakened Teeth"],
    icon: "Award"
  },
  {
    id: "emergency-dentistry",
    category: "emergency",
    title: "Same-Day Emergency Care",
    shortDesc: "Immediate relief for severe toothaches, broken teeth, lost fillings, or dental trauma.",
    fullDesc: "We reserve daily appointments for urgent dental needs. Call us right away for rapid pain management and immediate emergency restorations.",
    highlights: ["Same-Day Appointments", "Rapid Pain Relief", "Emergency Extractions & Repair", "After-Hours Support Line"],
    icon: "Zap"
  },
  {
    id: "root-canal",
    category: "restorative",
    title: "Gentle Root Canal Therapy",
    shortDesc: "Painless procedures designed to save infected teeth and relieve severe tooth distress.",
    fullDesc: "Modern root canal therapy is no more uncomfortable than a routine filling. We gently eliminate infection inside the tooth chamber and seal it to save your natural tooth.",
    highlights: ["Painless Anesthesia Protocol", "Saves Natural Tooth Structure", "Immediate Relief from Pressure", "High Preservation Rate"],
    icon: "Stethoscope"
  }
];

export const smileGalleryData = [
  {
    title: "Full Smile Makeover",
    procedure: "Porcelain Veneers & Laser Gum Reshaping",
    timeframe: "2 Visits",
    beforeText: "Discolored & uneven wear",
    afterText: "Radiant, symmetric Hollywood smile",
    imageBefore: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=600&q=80",
    imageAfter: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=600&q=80"
  },
  {
    title: "Clear Aligner Transformation",
    procedure: "Invisalign® Clear Aligners",
    timeframe: "8 Months",
    beforeText: "Front tooth crowding & gap",
    afterText: "Perfectly aligned arch",
    imageBefore: "https://images.unsplash.com/photo-1598256989800-fe5f95da9787?auto=format&fit=crop&w=600&q=80",
    imageAfter: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=600&q=80"
  },
  {
    title: "In-Office Teeth Whitening",
    procedure: "Medical Grade Whitening System",
    timeframe: "60 Minutes",
    beforeText: "Severe coffee & tea staining",
    afterText: "7 shades brighter naturally",
    imageBefore: "https://images.unsplash.com/photo-1571772996211-2f02c9727629?auto=format&fit=crop&w=600&q=80",
    imageAfter: "https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&w=600&q=80"
  }
];

export const testimonials = [
  {
    id: 1,
    name: "Sarah Jenkins",
    role: "Patient since 2021",
    rating: 5,
    comment: "Dr. Isha Singh completely transformed my dental experience! I used to have severe dental anxiety, but her warm demeanor, gentle touch, and clear explanations put me at total ease. My veneers look incredibly natural!",
    location: "Metro City",
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=150&q=80"
  },
  {
    id: 2,
    name: "Michael Ross",
    role: "Invisalign Patient",
    rating: 5,
    comment: "I finished my Invisalign treatment with Dr. Singh in just 7 months. The office is super modern, spotless, and the staff never keeps you waiting. Highly recommend her practice to anyone seeking top-notch dental care.",
    location: "Upper East Side",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80"
  },
  {
    id: 3,
    name: "Elena Rostova",
    role: "Family Care Patient",
    rating: 5,
    comment: "Bringing my kids to Dr. Singh was the best decision. She is so patient, kind, and knowledgeable. The clinic feels like a boutique spa rather than a traditional doctor's office!",
    location: "Brooklyn Heights",
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=150&q=80"
  }
];

export const faqsList = [
  {
    question: "Do you accept new patients?",
    answer: "Yes, Dr. Isha Singh is currently accepting new patients of all ages! We offer comprehensive initial exams, digital x-rays, and consultations tailored to your oral health goals."
  },
  {
    question: "What insurance plans do you accept?",
    answer: "We work with most major PPO dental insurance providers (including Delta Dental, Cigna, MetLife, Aetna, Guardian, and Humana). Our front office team will happily verify your coverage and file claims on your behalf."
  },
  {
    question: "How often should I visit the dentist?",
    answer: "The American Dental Association recommends routine dental checkups and professional cleanings every 6 months to detect potential issues early and maintain healthy gums."
  },
  {
    question: "What should I do in a dental emergency?",
    answer: "Call our emergency line immediately at (555) 321-9876. We hold dedicated same-day emergency slots every weekday for acute toothaches, chipped teeth, or lost crowns."
  },
  {
    question: "Is professional teeth whitening safe for my enamel?",
    answer: "Absolutely. Under Dr. Singh's professional supervision, our dental-grade whitening formulations are designed to brighten your teeth without damaging enamel or irritating sensitive gums."
  }
];
