import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from 'i18next-browser-languagedetector';

const resources = {
  en: {
    translation: {
      "Our technology is designed to provide precise and free background removal.": "Our technology is designed to provide precise and free background removal.",
      "Original":"Original",
      "Background removed":  "Background removed",
      "Select your":"Select your",
      'pics':'pics',
      "Upload":"Upload",
     'cc':     'Our technology is designed to provide precise and quick background removal.We understand the importance of accuracy, especially for e-commerce, presentations, or personal projects.Save time and enhance your productivity with our lightning-fast tool.',
     'aboutus': "    We're a dedicated team of professionals providing high-quality background removal services. With expertise in image editing, we excel in eliminating backgrounds to enhance your visuals. Our focus on precision and customer satisfaction makes us the trusted choice for superior background removal solutions.",
     'Perfect AI Model':'Perfect AI Model',
     "for background removing.":   "for background removing.",
     'Free':'Free',
     "Pics": "Pics",
     "Background":"Background",
     "Removing": "Removing",
     "Faster": "Faster",
     "100% Secured": "100% Secured",
     "Inteligent":"Inteligent",
     "Our advanced algorithm can remove backgrounds from images in just a few seconds, saving you valuable time.": "Our advanced algorithm can remove backgrounds from images in just a few seconds, saving you valuable time.",
     "Rest assured, we never store your images. Your privacy is our top priority, with a 100% data security track record.":"Rest assured, we never store your images. Your privacy is our top priority, with a 100% data security track record.",
     "Our background remover maintains a 98% accuracy rate in removing backgrounds, ensuring your images look flawless.": "Our background remover maintains a 98% accuracy rate in removing backgrounds, ensuring your images look flawless.",
     "Easily remove your":"Easily remove your",
     "BG from pics and videos":"BG from pics and videos",
     "You don't need to be a Photoshop expert to achieve impeccable results. Our user-friendly interface ensures that background removal is a breeze for everyone. Just upload your image, and our intelligent algorithm will do the rest.The days of struggling with complex software are over.":"You don't need to be a Photoshop expert to achieve impeccable results. Our user-friendly interface ensures that background removal is a breeze for everyone. Just upload your image, and our intelligent algorithm will do the rest.The days of struggling with complex software are over.",
     'Let’s try our service now!':'Let’s try our service now!',
"Thousands of satisfied users have already made our background remover their go-to tool. Join our growing community of creatives, businesses, and individuals who rely on us to elevate their visual content.":"Thousands of satisfied users have already made our background remover their go-to tool. Join our growing community of creatives, businesses, and individuals who rely on us to elevate their visual content.",
"A new way to make the background removing easy, reliable and secure.":"A new way to make the background removing easy, reliable and secure.",
"Users trust our service": "Users trust our service",
"Availability": "Availability",
"Users daily":"Users daily"



    }
  },
  ar: {
    translation: {
        "Our technology is designed to provide precise and free background removal.":"تم تصميم تقنيتنا لتوفير إزالة دقيقة ومجانية للخلفية",
      "The Best":"أفضل",
      "Original":"الاصلية",
      "Background removed":"تمت إزالة الخلفية",
      "Select your":"إختـــر",
      'pics':"صورتك",
      "Upload":"ارفــع",
        "cc":"تم تصميم تقنيتنا لتوفير إزالة دقيقة وسريعة للخلفية. نحن ندرك أهمية الدقة، خاصة بالنسبة للتجارة الإلكترونية أو العروض التقديمية أو المشاريع الشخصية. يمكنك توفير الوقت وتعزيز إنتاجيتك باستخدام أداتنا فائقة السرعة.",
        'Perfect AI Model':'نموذج الذكاء الاصطناعي المثالي',
        "for background removing.":"لإزالة الخلفية",
        'Free':"حـــذف",
     "Pics": "مجـــاني",
     "Background":"لخلفيــــــات",
     "Removing": 'الصـــور',
     "Faster": "أسـرع",
     "100% Secured": "100% آمـن",
     "Inteligent":"ذكـي",
     "Our advanced algorithm can remove backgrounds from images in just a few seconds, saving you valuable time.":"يمكن لخوارزميتنا المتـقدمة إزالة الخلفـيات من الصور في ثوانٍ معدودة، مما يوفر لك وقـتًا ثـمينًا",
     "Rest assured, we never store your images. Your privacy is our top priority, with a 100% data security track record.":"كن مطمئنًا، نحن لا نخزن صورك أبدا. خصوصيتك هي أولويتنا القصوى، مع سجل حافل لأمن البيانات %",
     "Our background remover maintains a 98% accuracy rate in removing backgrounds, ensuring your images look flawless.":"يحافظ مزيل الخلفية الخاص بنا على معدل دقة يصل إلى 98% في إزالة الخلفيات، مما يضمن أن تبدو صورك خالية من العيوب.",
     "Easily remove your":"احذف خلفيتك",
     "BG from pics and videos":"من الصور بسهولة",
     "You don't need to be a Photoshop expert to achieve impeccable results. Our user-friendly interface ensures that background removal is a breeze for everyone. Just upload your image, and our intelligent algorithm will do the rest.The days of struggling with complex software are over.":"لست بحاجة إلى أن تكون خبيرًا في فوتوشوب لتحقيق نتائج لا تشوبها شائبة. تضمن واجهتنا سهلة الاستخدام أن إزالة الخلفية أصبحت أمرًا سهلاً للجميع. ما عليك سوى تحميل صورتك، وستقوم الخوارزمية الذكية لدينا بالباقي. لقد انتهت أيام المعاناة مع  البرامج المعقدة",
     'Let’s try our service now!':'دعونا نجرب خدمتنا الآن',
     "Thousands of satisfied users have already made our background remover their go-to tool. Join our growing community of creatives, businesses, and individuals who rely on us to elevate their visual content.":'لقد جعل الآلاف من المستخدمين راضين عن أداة إزالة الخلفية الخاصة بنا فهي الأداة المفضلة لديهم بالفعل. انضم إلى مجتمعنا المتنامي من المبدعين والشركات والأفراد الذين يعتمدون علينا لرفع مستوى المحتوى المرئي الخاص بهم',
     "A new way to make the background removing easy, reliable and secure.":"طريقة جديدة لجعل إزالة الخلفية سهلة وموثوقة وآمنة",
     "Users trust our service": "مستخدم يثق بنا",
"Availability": "تواجد",
"Users daily":"مستخدم يوميا"
    }
  }
};

i18n
    .use(LanguageDetector)
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: "en",

    interpolation: {
      escapeValue: false // react already safes from xss
    },
    react:{
        useSuspense:false
    }
  });

  export default i18n;