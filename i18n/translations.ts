export const translations = {
  en: {
    content: {
      guide: {
        referenceLabel: "References",
        title: "CT Scan Guide & Understanding Risk",
        sections: [
          {
            heading: "1. Overview of Computed Tomography",
            paragraphs: [
              "Computed Tomography (CT) is an advanced medical imaging tool. It uses X-rays and computers to create clear, 3D pictures of the inside of the body. It gives much better details than a regular X-ray. Doctors use CT scans to find many conditions, such as tumors, bleeding, broken bones, and blood vessel problems. Modern CT machines use low-dose scanning, which keeps patients safe from unnecessary radiation. New methods like spiral and helical scanning are very fast. They give immediate results, which is highly useful in emergencies. CT can also guide doctors during biopsies and surgeries, leading to safer treatments and better outcomes for patients. (1)",
            ],
          },
          {
            heading: "2. Why Doctors Use CT Scans (Diagnostic Benefits)",
            paragraphs: [
              "CT scans are famous as one of the top five medical advances of the past 50 years. In fact, its inventors won the Nobel Prize in Medicine in 1979. The best part about a CT scan is that it shows internal organs clearly without other body parts blocking the view. This tells radiologists the exact size and texture of an organ. Clinically, CT scans help patients by showing if they truly need surgery, which prevents unnecessary operations. In emergencies, it quickly detects internal bleeding to save lives. It also helps in diagnosing cancer, shortens hospital stays, and helps manage patients in intensive care. Even if a scan shows no problems, it brings peace of mind by ruling out dangerous conditions. No other tool can check the whole body this quickly and clearly. (2)",

              "Doctors always balance the medical value of a CT scan against its risks. It is a life-saving tool that reduces patient deaths. For example, when checking for appendicitis, using a CT scan instead of an ultrasound dropped unnecessary surgeries from 10% down to just 2.5%. Studies show that CT results change the doctor’s original diagnosis in 50% of patients and improve treatment plans in 54% of cases. (3)",
            ],
          },
          {
            heading: "3. How CT Scans Work (Basic Principles)",
            paragraphs: [
              "A CT machine uses a motorized table that moves the patient through a doughnut-shaped ring called a gantry. Inside, an X-ray source and electronic detectors rotate around the patient. The machine shoots a thin, fan-shaped beam through the body, and a computer turns this data into detailed images. In older axial CT, the table stops for each picture layer. In newer helical (spiral) CT, the table moves smoothly without stopping, making a spiral scan. Modern machines use multiple rows of detectors to capture many slices at the exact same time, which makes the scan incredibly fast. (4)",
            ],
          },
          {
            heading: "4. Radiation Concerns and Patient Safety",
            paragraphs: [
              "Even though CT scans are only a small part of all medical imaging tests, they give a large portion of medical radiation. This cumulative dose can raise the lifetime risk of developing cancer. This risk depends on the radiation dose to specific organs, the patient's age during their first scan, their biological sex, and how many scans they have had in total. Medical models suggest that any amount of radiation carries a small risk (the linear no-threshold model). While the overall lifetime risk remains very low, it is still a real concern for young patients or people who get many high-dose scans. Because of this, hospitals must track total radiation doses and ensure every scan has a clear medical reason. (5)",

              'The International Commission on Radiological Protection (ICRP) states that radiation safety must follow the rule of "justification." This means a CT scan should only happen if the medical benefit is bigger than the radiation risk. This protects patients from getting too much radiation compared to the average person. To do this, the ICRP uses "dose constraints." These are not strict legal limits, but active safety benchmarks to make sure radiation is kept as low as possible without losing image quality. (6)',

              "The debate about radiation risk is ongoing. Current risk numbers are based on mathematical formulas that might overestimate the danger for real patients. Experts argue that the danger of treating a patient without a CT scan is much higher than the small, theoretical risk of radiation. This is true in life-or-death emergencies like a torn artery or severe trauma. For example, in children with head injuries, the benefit of finding a dangerous brain injury is high (400 to 500 out of 10,000 patients), while the theoretical risk of cancer from the scan is very low (1 out of 10,000 patients). Therefore, while scientists keep reducing doses, CT scans remain essential because they save lives and prevent worse medical outcomes. (3)",
            ],
          },
          {
            heading: "5. Understanding Your Results & Methodology",
            paragraphs: [
              "Technical radiation metrics (Effective Dose) can often feel abstract or alarming. To provide clear and meaningful context, this app processes calculations based on validated global radiological standards and translates your exam's dose into three real-world benchmarks:",

              "1. Natural Background Radiation: Everyone naturally receives radiation from the earth and cosmic rays every day (averaging 3.0 mSv per year). The app shows how many equivalent days or years of normal environmental exposure match your scan's dose. (7)",

              "2. Chest X-Ray Equivalence: Your calculated dose is mapped against a standard baseline chest X-ray (approximately 0.1 mSv) to help you easily visualize the scale of your procedure. (7)",

              "3. Transatlantic Flight Translation: Since high-altitude travel increases cosmic radiation exposure, your dose is translated into the equivalent number of one-way transatlantic flights, where a standard 10-hour flight subjects a passenger to approximately 0.03 mSv of cosmic radiation. (8, 9)",

              "Understanding Your True Risk: The theoretical risk calculated by this system is not an independent, newly created oncological danger. Instead, the algorithm presents this fractional probability alongside your natural lifetime baseline cancer risk—which statistically stands at approximately 41.6% for males and 39.6% for females. (10) The final output shows the calculated incremental change to this baseline based on your specific exposure, serving as an objective statistical reference to support shared decision-making paradigms between patients and healthcare providers.",
            ],
          },
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
        sections: [],
        disclaimerTitle: "Disclaimer",
        disclaimerBody:
          "Educational purposes only. Not a substitute for professional medical advice, diagnosis, or treatment. Please consult your physician.",
      },
      terms: {
        title: "Privacy & Terms",
        checkboxLabel:
          "I have read and agree to the Privacy Policy and Terms of Use.",
        sections: [
          {
            heading: "3.1 Terms and Conditions of Use",
            paragraphs: [
              "Please read these Terms and Conditions carefully before using this application. By using this app, you agree to these terms. The developers reserve the right to update these terms at any time, and your continued use of the app means you accept those changes.",

              "Medical Disclaimer (Not Medical Advice):",
              "This app is for educational purposes only. It estimates the theoretical risk of cancer from medical imaging based on statistical averages. It does not provide medical advice. Averages cannot predict exactly what will happen to you. This information is meant to help patients and doctors stay informed when weighing the pros and cons of medical imaging.",

              "Not a Substitute for a Doctor:",
              "This app does not replace regular medical check-ups, professional diagnosis, or your doctor’s judgment. Never delay or disregard professional medical advice because of something you read in this app. Using this app and its calculators is strictly at your own risk.",

              "Limitation of Liability:",
              'While we try to ensure all calculations are accurate, the app is provided "as is." We do not guarantee that the app will always be error-free or uninterrupted. We assume no liability for data corruption, internet delays, or damages caused by the improper use of the tools.',

              "Copyright and App Improvement:",
              "All tools, calculators, and graphics in this app belong to the developers. You may use this material solely for personal, non-commercial purposes. User behavior and interactions within the app are tracked in a completely anonymous and non-identifiable manner, strictly for statistical analysis, fixing technical errors, and improving app performance. This app does not host any advertisements.",
            ],
          },
          {
            heading: "3.2 Privacy Policy",
            paragraphs: [
              "We are deeply committed to protecting your privacy. You can use this application safely without revealing your personal identity.",

              "Information We Collect:",
              "This app does not request, collect, or store sensitive personal data such as your name, phone number, or exact date of birth. Your email address is strictly used for secure authentication and login purposes via official store services (like Google Play or standard device accounts). Any data entered regarding age or biological sex is used strictly for medical risk calculations and processed anonymously. Your information will never be shared with third parties or used for advertising.",

              "User Behavior Tracking (Technical Analytics):",
              "To administer our system, fix software bugs, and improve app performance, user interactions within the app are tracked and analyzed in a completely anonymous and non-identifiable manner, without collecting any device personal data. This aggregate statistical data is never shared with third parties.",

              "Security:",
              "We incorporate standard safeguards to protect the app's data. However, no internet transmission is 100% secure, and users transmit data at their own risk.",

              "Contact Us:",
              "If you have any questions or concerns about these Terms or this Privacy Policy, please contact us at: ctcalc.support@gmail.com",
            ],
          },
        ],
        contactEmail: "ctcalc.support@gmail.com",
      },
    },

    common: {
      appName: "RadiDose Insight",
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
        "Hello! I am here to calculate the dose and risk of your CT scan. Please select one of the options below or tap Next to continue:",
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
    onboarding: {
      title: "Your subscriptions, in your language.",
      subtitle: "Switch between English and Persian anytime.",
    },
  },
  fa: {
    content: {
      guide: {
        referenceLabel: "منابع",
        title: "１.	  راهنمای سی‌تی‌اسکن و درک ریسک ",

        sections: [
          {
            heading: "1. نمای کلی سی‌تی‌اسکن",
            paragraphs: [
              "سی‌تی‌اسکن یک روش تصویربرداری تشخیصی پیشرفته است که از پرتوهای ایکس و تکنیک‌های بازسازی تصویری کامپیوتری استفاده می‌کند تا تصاویری دقیق از ساختارهای داخلی بدن ایجاد کند. این روش در مقایسه با تصویربرداری سنتی با پرتو ایکس، نتایج تشخیصی ارتقایافته‌ای ارائه می‌دهد. فناوری سی‌تی‌اسکن در تشخیص طیف وسیعی از شرایط پزشکی از جمله تومورها، خونریزی‌ها، شکستگی‌ها و ناهنجاری‌های عروقی کاربرد دارد. قابلیت‌های اسکن با دوز پایین تضمین می‌کنند که بیمار در معرض سطوح غیرضروری تشعشع قرار نگیرد. ترکیب روش‌های سی‌تی‌اسکن مارپیچی و حلزونی نتایج تصویربرداری بهتری ارائه می‌دهد، زیرا زمان کمتری برای اسکن نیاز دارد و می‌تواند نتایج فوری ایجاد کند که متخصصان پزشکی می‌توانند در شرایط اضطراری از آن‌ها استفاده کنند. فرآیندهای پزشکی تحت هدایت سی‌تی‌اسکن برای نمونه‌برداری و جراحی‌ها دقیق‌تر هستند و به پزشکان در انتخاب گزینه‌های درمانی بهتر و ایجاد نتایج مطلوب‌تر برای بیماران کمک می‌کنند. (۱)",
            ],
          },
          {
            heading: "2. دلایل تشخیصی سی‌تی‌اسکن",
            paragraphs: [
              "دلیل تشخیصی سی‌تی‌اسکن عمدتاً بر اساس توانایی آن در بهبود مدیریت پزشکی از طریق ارائه چندین مزیت بالینی مهم است. بررسی‌های پزشکی اخیر نشان داده‌اند که سی‌تی‌اسکن یکی از پنج پیشرفت پزشکی مهم در نیم قرن گذشته است. این جایگاه با اعطای جایزه نوبل پزشکی در سال ۱۹۷۹ به مخترعان این روش تأیید شده است. مزیت اصلی سی‌تی‌اسکن این است که می‌تواند هم‌پوشانی ساختارهای آناتومیک (که یک نقص رایج در تصاویر پرتو ایکس سنتی است) را از بین ببرد و در نتیجه اطلاعات بدون ابهامی در مورد اندازه، تراکم و بافت اندام‌های داخلی در اختیار رادیولوژیست‌ها قرار دهد. از دیدگاه بالینی، سی‌تی‌اسکن با ارزیابی دقیق نیاز به جراحی و کاهش چشمگیر نیاز به روش‌های اکتشافی تهاجمی، نتایج بیماران را بهبود می‌بخشد. سرعت آن به‌ویژه در شرایط اضطراری اهمیت دارد، جایی که اجازه ارزیابی سریع خونریزی‌ها و جراحات داخلی را می‌دهد و تضمین می‌کند که مداخلات جراحی به‌درستی هدف‌گذاری شده‌اند. علاوه بر این، سی‌تی‌اسکن تشخیص و درمان کارآمدتر سرطان را امکان‌پذیر می‌کند، مدت اقامت در بیمارستان را کاهش می‌دهد و بستری بیماران را در بخش‌های مراقبت‌های ویژه بهینه‌سازی می‌کند. حتی اگر یک اسکن هیچ ناهنجاری را نشان ندهد، اطلاعات حیاتی برای کمک به ارائه‌دهندگان مراقبت‌های بهداشتی جهت رد کردن شرایط جدی و جلوگیری از نگرانی‌های پزشکی غیرضروری فراهم می‌کند. در حال حاضر، هیچ روش تصویربرداری دیگری توانایی دریافت سریع اطلاعات واضح و مشخص برای کل بدن را در یک جلسه ارائه نمی‌دهد. بنابراین، این یک ابزار برتر در استدلال تشخیصی مدرن است. (۲)",

              "این دلایل تشخیصی از بررسی ارزش بالینی سی‌تی‌اسکن در برابر خطرات بالقوه آن برای ارائه بهترین مراقبت از بیمار پشتیبانی می‌کند. تصویربرداری سی‌تی‌اسکن یکی از مهم‌ترین پیشرفت‌های پزشکی در ۱۰۰ سال گذشته است که داده‌های حیاتی را ارائه می‌دهد که مستقیماً دقت تشخیصی را بهبود بخشیده و مرگ‌ومیر را کاهش می‌دهد. تحقیقات نشان می‌دهد مزایای سی‌تی‌اسکن واضح است؛ به عنوان مثال، در موارد مشکوک به آپاندیسیت، سی‌تی‌اسکن جراحی‌های غیرضروری را در مقایسه با سونوگرافی از ۱۰ درصد به ۲.۵ درصد کاهش داد. همچنین نشان داده شده است که نتایج سی‌تی‌اسکن تشخیص اولیه را در ۵۰ درصد بیماران و مدیریت بالینی را تا ۵۴ درصد تغییر می‌دهد. (۳)",
            ],
          },
          {
            heading: "3. اصول اولیه سی‌تی‌اسکن",
            paragraphs: [
              "اصول اساسی سی‌تی‌اسکن به عنوان یک سیستم مکانیکی هماهنگ توصیف می‌شود که در آن یک تخت موتوردار بیمار را از میان یک دهانه حلقه‌ای شکل حرکت می‌دهد و یک منبع پرتو ایکس و آشکارسازها به صورت همگام می‌چرخند. منبع پرتو ایکس یک پرتو باریک و بادبزنی‌شکل را به اندام مورد نظر می‌تاباند. یک فرآیند کامپیوتری روی داده‌های اسکن اعمال می‌شود تا تصاویر سه‌بعدی دقیق تولید کند. تفاوت بین دو روش اسکن در حرکت تخت است. در سی‌تی‌اسکن محوری، تخت در طول هر چرخش حرکت نمی‌کند و لایه‌های مجزا را ثبت می‌کند. در سی‌تی‌اسکن حلزونی (مارپیچی)، تخت به طور مداوم در طول چرخش حرکت می‌کند تا یک مسیر اسکن مارپیچی پیوسته ایجاد کند. پیشرفت‌های اخیر در این هندسه، به‌ویژه استفاده از چندین ردیف آشکارساز در کنار هم، اجازه می‌دهد تا چندین لایه به طور همزمان ثبت شوند که زمان کلی اسکن را به شدت کاهش می‌دهد و سرعت و دقت رادیولوژی تشخیصی را متحول می‌کند. (۴)",
            ],
          },
          {
            heading: "4. نگرانی‌ها در مورد مواجهه با تشعشع و ایمنی بیمار",
            paragraphs: [
              "تعداد رو به افزایش سی‌تی‌اسکن‌ها و سهم آن‌ها در دوز تشعشع تجمعی، خطرات ایمنی بالاتر برای بیمار و مشکلات مواجهه با تشعشع ایجاد می‌کند. فرآیندهای سی‌تی‌اسکن تنها سهم کوچکی از کل آزمایش‌های تصویربرداری را ایجاد می‌کنند، با این حال تشعشع مفرطی را تحویل می‌دهند که خطر ابتلا به سرطان را در طول کل زندگی فرد افزایش می‌دهد. فاکتورهای خطر شامل میزان دوز تشعشع به اندام‌های بدن، سن بیمار در اولین مواجهه، جنسیت بیولوژیکی و میزان تصویربرداری پزشکی دریافت شده است. مدل‌های خطر تشعشع نشان می‌دهند که تمام سطوح مواجهه با تشعشع یونیزان خطر ابتلا به سرطان را افزایش می‌دهد که این امر از مدل تشعشع خطی بدون آستانه پشتیبانی می‌کند. خطر ابتلا به سرطان در طول زندگی ناشی از سی‌تی‌اسکن طبق برآوردها پایین باقی می‌ماند، اما همچنان یک تهدید جدی برای بیماران جوان‌تر و کسانی است که تحت تصویربرداری‌های مکرر یا با دوز بالا قرار می‌گیرند. نظارت بر دوز تشعشع مؤثر کل باید با ایجاد دلایل واضح برای انجام سی‌تی‌اسکن همراه باشد که این دو با هم از بیماران در برابر مشکلات سلامتی آینده محافظت کرده و ایمنی آن‌ها را حفظ می‌کنند. (۵)",

              "در این چارچوب، کمیسیون بین‌المللی حفاظت رادیولوژیکی بیان می‌کند که ایمنی تشعشع باید بر اساس اصل توجیه باشد که تضمین می‌کند سود بالینی یک فرآیند سی‌تی‌اسکن همیشه بر ضرر بالقوه تشعشع سنگینی خواهد کرد. این امر برای جلوگیری از هرگونه بی‌عدالتی در مواجهه است (یعنی برخی افراد ممکن است دوزهایی بسیار بالاتر از میانگین جمعیت دریافت کنند). برای انجام این فرآیند بهینه‌سازی، کمیسیون مفهوم محدودیت‌های دوز را به عنوان ابزارهای اساسی معرفی کرده است. این محدودیت‌ها صرفاً مقادیر هدف یا مرزهای قانونی سخت‌گیرانه نیستند، بلکه معیارهای پیشگیرانه‌ای هستند که برای بررسی اینکه آیا حفاظت واقعاً به کمترین سطوح قابل دستیابی بدون فدا کردن کیفیت تشخیصی بهینه‌سازی شده است یا خیر، استفاده می‌شوند. (۶)",

              "بحث بر سر خطر سرطان ناشی از تشعشع ادامه دارد و برآوردهای فعلی اغلب بر اساس مدل‌های ریاضی هستند که ممکن است خطرات را در جمعیت‌های بالینی بیش از حد پیش‌بینی کنند. این نکته مطرح می‌شود که خطر فوری مدیریت بیمار بدون اطلاعات ارائه شده توسط سی‌تی‌اسکن بسیار بیشتر از خطر تئوریک کوچک و طولانی‌مدت تشعشع است، به‌ویژه در شرایط حاد مانند پارگی آئورت یا آسیب‌های شدید ناشی از تصادف. به عنوان مثال، در آسیب‌های سر کودکان، فایده تشخیص آسیب‌های جدی (۴۰۰ تا ۵۰۰ مورد در هر ۱۰,۰۰۰ بیمار) بسیار فراتر از خطر تئوریک بیماری‌های بدخیم ناشی از تشعشع (۱ مورد در هر ۱۰,۰۰۰ بیمار) است. بنابراین، در حالی که فیزیکدانان پزشکی همچنان دوزها را بهینه‌سازی خواهند کرد، دلیل تشخیصی برای سی‌تی‌اسکن اساساً توسط تأثیر نجات‌بخش آن و پیشگیری از نتایج پزشکی بدتر پشتیبانی می‌شود. (۳)",
            ],
          },
          {
            heading: "5. روش محاسبات و درک نتایج برنامه",
            paragraphs: [
              "اعداد فنی مربوط به میزان اشعه (دوز مؤثر) معمولاً مبهم و گاهی نگران‌کننده به نظر می‌رسند. این اپلیکیشن برای ساده‌سازی این مفاهیم، محاسبات خود را بر اساس معتبرترین استانداردهای بین‌المللی رادیولوژی انجام می‌دهد و برای درک بهتر، دوز تصویربرداری شما را به ۳ روش ملموس مقایسه می‌کند:",

              "۱. معادل‌سازی با تشعشعات طبیعی زمین: هر انسان به طور طبیعی در زندگی روزمره، از زمین و کیهان اشعه دریافت می‌کند (به طور متوسط 3.0 mSv در سال). برنامه مشخص می‌کند دوز اسکن شما معادل چند روز یا چند سال زندگی عادی در طبیعت است. (۷)",

              "۲. معادل‌سازی با عکس ساده قفسه سینه: مبنای این مقایسه، یک عکس رادیوگرافی ساده سینه (حدود 0.1 mSv) است تا بتوانید مقیاس و اندازه آزمایش خود را بهتر تصور کنید. (۷)",

              "۳. شبیه‌سازی با پروازهای بین‌قاره‌ای: از آنجا که در ارتفاعات بالا مواجهه با اشعه کیهانی بیشتر است، دوز تصویربرداری شما به معادل تعداد پروازهای رفت یا برگشت بین‌قاره‌ای (ترانس‌اتلانتیک) تبدیل می‌شود؛ جایی که هر پرواز ده‌ساعته دوزی معادل 0.03 mSv دارد. (۸، ۹)",

              "ریسک واقعی چقدر است؟ ریسک تئوریک محاسبه‌شده در این برنامه، یک فاکتور خطر مستقل یا بیماری جدید نیست؛ بلکه نشان‌دهنده میزان تغییر احتمالی در ریسک پایه و طبیعی ابتلا به سرطان در طول زندگی است. طبق آمارهای اپیدمیولوژیک، نرخ طبیعی ابتلا به سرطان در طول حیات به طور متوسط 41.6% برای آقایان و 39.6% برای خانم‌ها تخمین زده می‌شود. (۱۰) عدد خروجی این اپلیکیشن، میزان افزوده شدنِ احتمالی و فرکشنال (جزئی) به این نرخ پایه را بر اساس دوز دریافت‌شده نشان می‌دهد تا به عنوان یک داده آماری، در فرآیند تصمیم‌گیری مشترک میان بیمار و پزشک مورد استفاده قرار گیرد.",
            ],
          },
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
        title: "محاسبه دوز و ریسک",

        // TODO(content): این بخش کاملاً خالی است و باید محتوای
        // «درک نتایج و روش محاسبات» که توسط تیم تهیه شده است در اینجا قرار گیرد.

        sections: [],

        disclaimerTitle: "سلب مسئولیت",
        disclaimerBody:
          "این اطلاعات صرفاً برای اهداف آموزشی ارائه شده‌اند و جایگزین توصیه‌های پزشکی حرفه‌ای، تشخیص یا درمان نیستند. لطفاً با پزشک خود مشورت کنید.",
      },
      terms: {
        title: "حریم خصوصی و شرایط استفاده",
        checkboxLabel:
          "من سیاست حفظ حریم خصوصی و شرایط استفاده را مطالعه کرده‌ام و با آن‌ها موافقم.",
        sections: [
          {
            heading: "۳.۱ قوانین و مقررات استفاده از برنامه",
            paragraphs: [
              "لطفاً قبل از استفاده از این اپلیکیشن، قوانین و مقررات زیر را به دقت مطالعه کنید. استفاده شما از این برنامه به معنای پذیرش کامل این شرایط است. طراحان برنامه این حق را برای خود محفوظ می‌دارند که در هر زمان، تغییراتی در این قوانین ایجاد کنند و ادامه استفاده شما به معنای موافقت با تغییرات جدید است.",

              "سلب مسئولیت پزشکی (این برنامه توصیه پزشکی ارائه نمی‌دهد):",
              "هدف این اپلیکیشن صرفاً افزایش آگاهی و ارائه اطلاعات آموزشی درباره ریسک تئوریک ابتلا به سرطان بر اساس میانگین‌های آماری تصویربرداری‌های پزشکی است. اطلاعات این برنامه به هیچ وجه «توصیه پزشکی» محسوب نمی‌شود. اعداد و میانگین‌ها نمی‌توانند دقیقاً پیش‌بینی کنند که چه اتفاقی برای شخص شما رخ خواهد داد؛ بلکه این داده‌ها برای آگاهی بیشتر شما و پزشکتان جهت سنجش فواید و خطرات تصویربرداری ارائه شده‌اند.",

              "جایگزین پزشک نیست:",
              "این برنامه هرگز جایگزین معاینات منظم پزشکی، تشخیص، درمان یا قضاوت بالینی پزشک شما نمی‌شود. هرگز به دلیل مطالب این برنامه، دریافت توصیه‌های پزشکی را به تأخیر نیندازید یا آن‌ها را نادیده نگیرید. استفاده از ابزارها و محاسبات این برنامه با مسئولیت خود کاربر است.",

              "مسئولیت اطلاعات و قطعی خدمات:",
              "تمام تلاش ما برای اطمینان از صحت محاسبات انجام شده است، با این حال هیچ تضمینی وجود ندارد که عملکرد برنامه همیشه بدون خطا یا بدون وقفه باشد. ما هیچ مسئولیتی در قبال مشکلات ناشی از قطع اینترنت یا آسیب‌های ناشی از استفاده نادرست از ابزارها بر عهده نمی‌گیریم.",

              "حق مالکیت و ارتقای نرم‌افزار:",
              "تمام ابزارها، محاسبات و طرح‌های گرافیکی موجود در این برنامه متعلق به طراحان آن است. شما مجاز هستید از این اطلاعات صرفاً برای استفاده‌های شخصی و غیرتجاری استفاده کنید. رفتار کاربری و نحوه تعامل با بخش‌های مختلف برنامه، به صورت کاملاً ناشناس و بدون ثبت اطلاعات هویتی، صرفاً جهت بررسی‌های آماری، رفع خطاهای فنی و ارتقای عملکرد نرم‌افزار رصد می‌شود. این برنامه فاقد هرگونه تبلیغات تجاری است.",
            ],
          },
          {
            heading: "۳.۲ سیاست حفظ حریم خصوصی کاربران",
            paragraphs: [
              "ما به امنیت و حفظ حریم خصوصی آنلاین شما متعهد هستیم. شما می‌توانید با خیال راحت و بدون فاش شدن هویت فردی خود از این برنامه استفاده کنید.",

              "چه اطلاعاتی جمع‌آوری می‌شود؟",
              "این برنامه هیچ‌گونه اطلاعات هویتی حساس مانند نام، نام خانوادگی، شماره تلفن یا تاریخ تولد دقیق شما را درخواست یا ذخیره نمی‌کند. نشانی ایمیل شما صرفاً جهت احراز هویت اولیه و ورود امن از طریق سرویس‌های رسمی (مانند گوگل‌پلی یا حساب‌های استاندارد دستگاه) استفاده می‌شود. همچنین، اطلاعات مربوط به سن و جنسیت بیولوژیکی که در برنامه وارد می‌کنید، صرفاً برای انجام محاسبات دوز و تخمین ریسک پزشکی استفاده شده و به صورت کاملاً ناشناس پردازش می‌شوند. این داده‌ها به هیچ عنوان در اختیار شخص ثالث یا شرکت‌های تبلیغاتی قرار نخواهد گرفت.",

              "رصد رفتار کاربری (تحلیل فنی):",
              "برای مدیریت بهتر سیستم، رفع خطاهای نرم‌افزاری و ارتقای کیفیت خدمات، نحوه تعامل شما با بخش‌های مختلف اپلیکیشن به صورت کاملاً ناشناس (بدون اینکه به هویت واقعی شما متصل باشد یا اطلاعات حساسی از دستگاه شما ذخیره شود) رصد و تحلیل می‌شود. این داده‌های کلی و آماری هرگز به هیچ شخص یا شرکت ثالثی واگذار نخواهد شد.",

              "امنیت:",
              "ما از راهکارهای امنیتی استاندارد برای محافظت از ساختار برنامه استفاده می‌کنیم. با این حال، انتقال داده‌ها در بستر اینترنت هیچ‌گاه ۱۰۰ درصد ایمن نیست و استفاده از برنامه با پذیرش این شرایط توسط کاربر انجام می‌شود.",

              "اگر سؤال یا ابهامی در مورد این «قوانین و مقررات» یا «سیاست حفظ حریم خصوصی» دارید، می‌توانید از طریق نشانی ایمیل زیر با ما در ارتباط باشید:",
              "ctcalc.support@gmail.com",
            ],
          },
        ],
        contactEmail: "ctcalc.support@gmail.com",
      },
    },
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
    onboarding: {
      title: "اشتراک هایت را به زبان خودت مدیریت کن.",
      subtitle: "هر زمان خواستی بین فارسی و انگلیسی جابه جا شو.",
    },
  },
} as const;

export type Language = keyof typeof translations;
export type TranslationTree = typeof translations.en;
