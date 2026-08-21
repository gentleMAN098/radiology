export const translations = {
  en: {
    // inside en: { ... }
    content: {
      guide: {
        title: "CT Scan Guide & Understanding Risk",
        intro:
          "Hello! I am here to calculate the dose and risk of your CT scan. Please select one of the options below:",
        sections: [
          {
            heading: "1. Overview of Computed Tomography",
            paragraphs: [
              "Computed Tomography (CT) is an advanced medical imaging tool. It uses X-rays and computers to create clear, 3D pictures of the inside of the body...",
              // ...rest of paragraph, split into separate strings per paragraph
            ],
          },
          // sections 2–5, same shape
        ],
        references: [
          {
            id: 1,
            text: "StatPearls. in (StatPearls Publishing, Treasure Island (FL), 2023).",
          },
          { id: 2, text: "RadiologyInfo.org. Radiation Dose. (2025)." },
          {
            id: 3,
            text: "McCollough, C. H. & Milman, R. CT scanning and questions about benefit versus risk. J Applied Clin Med Phys 26, e70179 (2025).",
          },
          {
            id: 4,
            text: "Brenner, D. J. & Hall, E. J. Computed tomography--an increasing source of radiation exposure. N Engl J Med 357, 2277–2284 (2007).",
          },
          {
            id: 5,
            text: "Poosiri, S., Krisanachinda, A. & Khamwan, K. Evaluation of patient radiation dose and risk of cancer from CT examinations. Radiol Phys Technol 17, 176–185 (2024).",
          },
          {
            id: 6,
            text: "ICRP. The 2007 Recommendations of the International Commission on Radiological Protection. 37, (2007).",
          },
          {
            id: 7,
            text: "Mettler, F. A., Huda, W., Yoshizumi, T. T., & Mahesh, M. (2008). Effective doses in radiology and diagnostic nuclear medicine.",
            url: undefined,
          },
          {
            id: 8,
            text: "Bundesamt für Strahlenschutz. (2026). Radiation exposure of airline passengers.",
          },
          {
            id: 9,
            text: "Pamuła, H. (2024). Radiation Converter. Omni Calculator.",
            url: "https://www.omnicalculator.com/conversion/radiation-converter",
          },
          {
            id: 10,
            text: "Siegel, R. L., Giaquinto, A. N., & Jemal, A. (2024). Cancer statistics, 2024.",
            url: "https://doi.org/10.3322/caac.21820",
          },
        ],
      },
      doseRisk: {
        title: "Dose & Risk Calculation",
        sections: [
          // your "Understanding Your Results & Methodology" content, same section shape
        ],
        disclaimerTitle: "Disclaimer",
        disclaimerBody:
          "Educational purposes only. Not a substitute for professional medical advice, diagnosis, or treatment. Please consult your physician.",
      },
      terms: {
        title: "Privacy & Terms",
        checkboxLabel:
          "I have read and agree to the Privacy Policy and Terms of Use.",
        sections: [
          // your Terms + Privacy Policy content
        ],
        contactEmail: "ctcalc.support@gmail.com",
      },
    },

    common: {
      appName: "RadiDose",
      ctRiskAppName: "RadiDose Insight",
      english: "English",
      persian: "Persian",
      language: "Language",
      notProvided: "Not provided",
      unknown: "Unknown",
      viewAll: "View all",
      next: "Next",
      back: "Back",
      theme: "Theme",
      light: "Light",
      dark: "Dark",
    },
    assessment: {
      aboutTitle: "Welcome",
      aboutDescription:
        "Hello! I am here to calculate the dose and the risk you CT scan. Please select on of the options below or press Next to continue:",
      step2Title: "Patient Information",
      step3Title: "Scan Selection",
      title: "CT Scan Risk Assessment",
      subtitle:
        "Estimate additional lifetime cancer risk from CT radiation exposure.",
      age: "Age",
      ageYears: "{{count}} years",
      agePlaceholder: "Enter age",
      gender: "Gender",
      male: "Male",
      female: "Female",
      protocol: "CT protocol",
      numberOfScans: "Number of scans",
      calculate: "Calculate risk",
      calculating: "Calculating...",
      ageError: "Age must be between 0 and 120.",
      scansError: "Number of scans must be at least 1.",
      doseUnit: "mSv",
      disclaimer:
        "Educational estimate only. Clinical decisions should be made with a qualified medical professional.",
    },
    report: {
      title: "Patient Report",
      subtitle: "Radiation-associated lifetime cancer risk estimate",
      riskSummary: "Risk Summary",
      additionalRisk: "Additional Lifetime Cancer Risk",
      ratio: "Ratio",
      riskRatio: "1 in {{count}} people",
      backgroundEquivalent: "Equivalent to {{count}} years",
      backgroundEquivalentValue: "Equivalent to {{value}}",
      totalRisk: "Total Risk",
      totalRiskSentence:
        "Your lifetime cancer risk changed from {{baseline}} to {{total}}.",
      benchmarks: "Benchmarks",
      effectiveDose: "Effective dose",
      totalDose: "Total dose",
      backgroundRadiation: "Background Radiation",
      chestXrays: "Chest X-rays",
      chestXrayEquivalent: "Equivalent to {{count}} chest X-rays",
      flights: "Flights",
      flightEquivalent: "Equivalent to {{count}} transatlantic flights",
      scanDetails: "Scan details",
      scanCount: "{{count}} scan(s)",
      recalculate: "Recalculate",
      loading: "Preparing report...",
    },
    home: {
      title: "Welcome to Recurrly",
      onboardingLink: "Go to onboarding",
    },
    onboarding: {
      title: "Your subscriptions, in your language.",
      subtitle: "Switch between English and Persian anytime.",
    },
    subscription: {
      payment: "Payment:",
      category: "Category:",
      started: "Started:",
      renewalDate: "Renewal date:",
      status: "Status:",
      daysLeft: "{{count}} days left",
      lastDay: "Last day",
      statuses: {
        active: "Active",
        paused: "Paused",
        cancelled: "Cancelled",
      },
      frequencies: {
        Monthly: "Monthly",
        Yearly: "Yearly",
      },
      categories: {
        Entertainment: "Entertainment",
        "AI Tools": "AI Tools",
        "Developer Tools": "Developer Tools",
        Design: "Design",
        Productivity: "Productivity",
        Other: "Other",
      },
    },
    createSubscription: {
      title: "New Subscription",
      name: "Name",
      namePlaceholder: "Subscription name",
      price: "Price",
      frequency: "Frequency",
      category: "Category",
      submit: "Create Subscription",
    },
  },
  fa: {
    common: {
      appName: "ریکارلی",
      ctRiskAppName: "بینش پرتو دوز",
      english: "انگلیسی",
      persian: "فارسی",
      language: "زبان",
      notProvided: "وارد نشده",
      unknown: "نامشخص",
      viewAll: "مشاهده همه",
      next: "بعدی",
      back: "بازگشت",
      theme: "پوسته",
      light: "روشن",
      dark: "تیره",
    },
    assessment: {
      aboutTitle: "خوش آمدید",
      aboutDescription:
        "سلام، من برای محاسبه دوز و ریسک آزمون سی تی اسکن شما اینجا هستم. لطفا یکی از گزینه های زیر را انتخاب کنید:",
      step2Title: "اطلاعات بیمار",
      step3Title: "انتخاب اسکن",
      title: "ارزیابی ریسک سی تی اسکن",
      subtitle: "برآورد ریسک افزوده سرطان در طول عمر ناشی از پرتوگیری سی تی.",
      age: "سن",
      ageYears: "{{count}} سال",
      agePlaceholder: "سن را وارد کنید",
      gender: "جنسیت",
      male: "مرد",
      female: "زن",
      protocol: "نوع سی تی",
      numberOfScans: "تعداد اسکن",
      calculate: "محاسبه ریسک",
      calculating: "در حال محاسبه...",
      ageError: "سن باید بین ۰ تا ۱۲۰ باشد.",
      scansError: "تعداد اسکن باید حداقل ۱ باشد.",
      doseUnit: "میلی سیورت",
      disclaimer:
        "این ابزار فقط برای آموزش است. تصمیم های درمانی باید با پزشک متخصص گرفته شود.",
    },
    report: {
      title: "گزارش بیمار",
      subtitle: "برآورد ریسک سرطان در طول عمر مرتبط با پرتوگیری",
      riskSummary: "خلاصه ریسک",
      additionalRisk: "ریسک افزوده سرطان در طول عمر",
      ratio: "نسبت",
      riskRatio: "۱ نفر از هر {{count}} نفر",
      totalRisk: "ریسک کل",
      totalRiskSentence:
        "ریسک سرطان در طول عمر شما از {{baseline}} به {{total}} تغییر کرد.",
      benchmarks: "مقایسه ها",
      effectiveDose: "دوز موثر",
      totalDose: "دوز کل",
      backgroundRadiation: "پرتوگیری طبیعی",
      chestXrays: "عکس قفسه سینه",
      chestXrayEquivalent: "معادل {{count}} عکس قفسه سینه",
      flights: "پروازها",
      backgroundEquivalent: "معادل {{count}} سال",
      backgroundEquivalentValue: "معادل {{value}}",
      flightEquivalent: "معادل {{count}} پرواز بین قاره ای",
      scanDetails: "جزئیات اسکن",
      scanCount: "{{count}} اسکن",
      recalculate: "محاسبه دوباره",
      loading: "در حال آماده سازی گزارش...",
    },
    home: {
      title: "به ریکارلی خوش آمدید",
      onboardingLink: "رفتن به شروع",
    },
    onboarding: {
      title: "اشتراک هایت را به زبان خودت مدیریت کن.",
      subtitle: "هر زمان خواستی بین فارسی و انگلیسی جابه جا شو.",
    },
    subscription: {
      payment: "پرداخت:",
      category: "دسته بندی:",
      started: "شروع:",
      renewalDate: "تاریخ تمدید:",
      status: "وضعیت:",
      daysLeft: "{{count}} روز مانده",
      lastDay: "روز آخر",
      statuses: {
        active: "فعال",
        paused: "متوقف",
        cancelled: "لغو شده",
      },
      frequencies: {
        Monthly: "ماهانه",
        Yearly: "سالانه",
      },
      categories: {
        Entertainment: "سرگرمی",
        "AI Tools": "ابزارهای هوش مصنوعی",
        "Developer Tools": "ابزارهای توسعه",
        Design: "طراحی",
        Productivity: "بهره وری",
        Other: "سایر",
      },
    },
    createSubscription: {
      title: "اشتراک جدید",
      name: "نام",
      namePlaceholder: "نام اشتراک",
      price: "قیمت",
      frequency: "دوره پرداخت",
      category: "دسته بندی",
      submit: "ساخت اشتراک",
    },
  },
} as const;

export type Language = keyof typeof translations;
export type TranslationTree = typeof translations.en;
