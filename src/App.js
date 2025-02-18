import { useEffect, useState } from "react";
import "./App.css";
import "./pages/Header/Header";
import Header from "./pages/Header/Header";
import AboutUs from "./pages/AbouUs/AboutUs";
// import "./pages/shopPage/ShopPage.css";
import ShopPage from "./pages/shopPage/ShopPage";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
  Link,
} from "react-router-dom";
import ShowProduct from "./pages/ShowProduct/ShowProduct";
import { v4 as uuidv4 } from "uuid";
import Cart from "./pages/Cart/Cart";
import i18n from "i18next";
import { useTranslation, initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import HttpApi from "i18next-http-backend";

//   Background Body    //
const images = ["back1.png", "back2.png", "back3.jpg", "back4.jpg"];



var themee = localStorage.getItem("themee") ; 
if ( themee == null ) { 
  localStorage.setItem("themee", "llight")
}  else {
  if (themee != "llight" ){ 
      document.documentElement.style.setProperty("--white", "#000000"); 
    document.documentElement.style.setProperty("--black", "#ffffff"); 
    document.documentElement.style.setProperty("--lessBack", "#3d433dc7"); 
    document.documentElement.style.setProperty("--spanColor", "#86a577"); 
    document.documentElement.style.setProperty("--ActiveOne", "#3a582a"); 
    document.documentElement.style.setProperty("--ActiveTwo", "#575656ee"); 
    document.documentElement.style.setProperty("--btn2Color", "#797777ee"); 
    document.documentElement.style.setProperty("--redd", "#ffd7d7"); 
    } else {
      document.documentElement.style.setProperty("--white", "#ffffff"); 
      document.documentElement.style.setProperty("--black", "#520a2d"); 
      document.documentElement.style.setProperty("--lessBack", "#3d433dc7"); 
      document.documentElement.style.setProperty("--spanColor", "#ccffb3"); 
      document.documentElement.style.setProperty("--ActiveOne", "#82bc65"); 
      document.documentElement.style.setProperty("--ActiveTwo", "#979797ee"); 
      document.documentElement.style.setProperty("--btn2Color", "#cbc8c8ee"); 
      document.documentElement.style.setProperty("--redd", "#ff0000"); 
    }
  
}

var array = [
  {
    image: "jacket1.jpg",
    header: " Classic Leather Jacket",
    title: "A jacket made of genuine leather with an elegant classic design, featuring a high collar and a front zipper. The smooth leather finish gives it a timeless appeal, making it a versatile choice for both formal and casual occasions. It offers a comfortable fit with a soft inner lining, ensuring warmth and style. The sturdy construction and durable material make it a long-lasting wardrobe staple, suitable for different seasons and various fashion styles.",
    oldprice: 50,
    newprice: 40,
    id: 11,
    type: "male",
    category: "Jacket",
    num: 1,
    title_ar: "جاكيت مصنوع من الجلد الطبيعي بتصميم كلاسيكي أنيق، يتميز بياقة مرتفعة وسحاب أمامي. يتمتع بلمسة نهائية ناعمة تمنحه مظهراً جذاباً وخالداً، مما يجعله خياراً متعدد الاستخدامات للمناسبات الرسمية والكاجوال. يوفر مقاساً مريحاً بفضل البطانة الداخلية الناعمة، مما يضمن الدفء والأناقة. بفضل تصميمه المتين وخاماته عالية الجودة، يُعد هذا الجاكيت قطعة أساسية تدوم طويلاً، ويمكن ارتداؤه في مختلف المواسم وأنماط الأزياء المتنوعة.",
    header_ar: "جاكيت جلد كلاسيكي ",
  },

  {
    image: "pegama1.png",
    header: "Kids Fleece Pajama Set",
    title: "A warm and soft kids' pajama set made from cozy fleece fabric, offering warmth for children in cold weather. It includes a long-sleeve t-shirt and long pants with an elastic waistband for added comfort during sleep. The pajama features fun and playful designs, adding a touch of joy to bedtime. The fleece fabric ensures warmth and comfort, making it perfect for winter. Available in various colors such as red, blue, and pink to suit different preferences.",
    oldprice: 30,
    newprice: 10,
    id: 21,
    type: "baby",
    category: "Pajamas",
    num: 1,
    title_ar: "بيجامة أطفال ناعمة ومريحة مصنوعة من القطن 100%، مثالية للارتداء أثناء النوم أو اللعب في المنزل. تتكون من تيشيرت بأكمام قصيرة وسروال مريح بخصر مرن، مما يوفر حرية الحركة للطفل. تتميز بتصميم ملون مفعم بالحيوية مع رسومات مميزة لشخصيات كرتونية محبوبة، مما يجعلها خياراً محبباً للأطفال. توفر الراحة التامة بفضل القماش الناعم الذي يسمح للبشرة بالتنفس، كما أنها سهلة الغسل لتحافظ على جودتها طوال الوقت. متوفرة بألوان وأشكال متنوعة تناسب الأولاد والبنات.",
    header_ar: "بيجامة أطفال فوال قطن",
  },
  {
    image: "jacket2.jpg",
    header: "Padded Winter Jacket",
    title: "A thick, padded jacket that provides warmth in cold weather, featuring a removable hood and side pockets with a zipper closure. Designed with high-quality insulation, it effectively traps heat, keeping you warm even in freezing temperatures. The outer shell is water-resistant, protecting against rain and snow, making it an ideal choice for winter outings. With its stylish yet functional design, this jacket combines comfort, practicality, and modern fashion in one piece.",
    oldprice: 200,
    newprice: 100,
    id: 12,
    type: "male",
    category: "Jacket",
    num: 1,
    title_ar: "جاكيت سميك مبطن يوفر الدفء في الأجواء الباردة، يحتوي على قبعة قابلة للإزالة وجيوب جانبية بسحاب للإغلاق. مصمم بعزل عالي الجودة يحبس الحرارة بفعالية، مما يجعلك تشعر بالدفء حتى في درجات الحرارة المنخفضة. يتميز سطحه الخارجي بمقاومة الماء، مما يحمي من الأمطار والثلوج، مما يجعله خياراً مثالياً للخروج في فصل الشتاء. يجمع هذا الجاكيت بين التصميم العصري والعملية، ليمنحك الراحة والأناقة في آنٍ واحد.",
    header_ar: "جاكيت مبطن شتوي",
  },
  {
    image: "pegama2.jpg",
    header: "Cotton Kids Pajama Set  ",
    title: "A soft and comfortable kids' pajama set made from 100% cotton, perfect for sleep or play at home. It includes a short-sleeve t-shirt and cozy pants with an elastic waistband for free movement. The pajama features a colorful and vibrant design with beloved cartoon characters, making it a favorite among children. It offers complete comfort with the breathable fabric that’s gentle on the skin and easy to wash, maintaining its quality over time. Available in a variety of colors and patterns for boys and girls.",
    oldprice: 12,
    newprice: 10,
    id: 22,
    type: "baby",
    category: "Pajamas",
    num: 1,
    title_ar: "بيجامة أطفال ناعمة ومريحة مصنوعة من القطن 100%، مثالية للارتداء أثناء النوم أو اللعب في المنزل. تتكون من تيشيرت بأكمام قصيرة وسروال مريح بخصر مرن، مما يوفر حرية الحركة للطفل. تتميز بتصميم ملون مفعم بالحيوية مع رسومات مميزة لشخصيات كرتونية محبوبة، مما يجعلها خياراً محبباً للأطفال. توفر الراحة التامة بفضل القماش الناعم الذي يسمح للبشرة بالتنفس، كما أنها سهلة الغسل لتحافظ على جودتها طوال الوقت. متوفرة بألوان وأشكال متنوعة تناسب الأولاد والبنات.",
    header_ar: "بيجامة أطفال قطنية",
  },

  
  {
    image: "jacket3.jpg",
    header: "Modern Bomber Jacket",
    title: "A short, sporty jacket with elastic sleeves, offering a modern and lightweight design, perfect for daily wear in mild weather. The ribbed cuffs, collar, and hem provide a snug fit, enhancing both comfort and style. Made from high-quality materials, this jacket is breathable and easy to wear for different activities. Whether you're going for a casual walk or a night out, the sleek and minimalistic design makes it a trendy and practical choice. Available in various colors and patterns, it suits different fashion preferences.",
    oldprice: 60,
    newprice: 50,
    id: 13,
    type: "male",
    category: "Jacket",
    num: 1,
    title_ar: "جاكيت رياضي قصير بأكمام مطاطية، يتميز بتصميم عصري وخفيف الوزن، مثالي للارتداء اليومي في الطقس المعتدل. الأساور المطاطية والياقة والحواف توفر مقاساً مريحاً وتعزز من الأناقة. مصنوع من مواد عالية الجودة، مما يجعله مريحاً وقابلاً للتهوية وسهل الارتداء لمختلف الأنشطة. سواء كنت في نزهة كاجوال أو في خروج مسائي، فإن التصميم الأنيق والبسيط لهذا الجاكيت يجعله خياراً عملياً وعصرياً. متوفر بألوان ونقوش متعددة ليناسب مختلف الأذواق.",
    header_ar: "جاكيت بومبر عصري  ",
  },
//          // 
  {
    image: "Jense1.jpg",
    header: "Skinny Jeans",
    title: "Slim-fitting skinny jeans that hug the body from the waist to the ankles, providing a sleek and modern look. Made from a blend of cotton and elastane, they offer flexibility and comfort for easy movement. Their minimalist design makes them ideal for casual and trendy outfits, pairing well with a t-shirt or a shirt for a stylish, well-coordinated appearance. Available in multiple colors like classic blue, black, and gray to suit different tastes.",
    oldprice: 25,
    newprice: 20,
    id: 14,
    type: "male",
    category: "Jense",
    num: 15,
    title_ar: "بنطلون جينز ضيق يتميز بقصّة نحيفة تلتصق بالجسم من الخصر حتى الكاحل، مما يمنح مظهراً عصرياً أنيقاً. مصنوع من مزيج من القطن والإيلاستين لتوفير الراحة والمرونة أثناء الحركة. تصميمه البسيط يجعله مناسباً للإطلالات الكاجوال والعصرية، حيث يمكن ارتداؤه مع تيشيرت أو قميص لإطلالة أنيقة ومتناسقة. متوفر بألوان متعددة مثل الأزرق الكلاسيكي، الأسود، والرمادي، ليناسب مختلف الأذواق.",
    header_ar: "بنطلون جينز سكيني  ",
  },
  
  {
    image: "jelbab1.jpg",
    header: "Classic Loose-Fit Jilbab",
    title: "A traditional women’s jilbab with a loose-fitting design that offers comfort and modesty. Made from lightweight and soft fabrics such as crepe or lined chiffon, making it ideal for daily wear or religious occasions. It features a flowy cut with long wide sleeves, allowing for easy movement while maintaining elegance. It includes a front zipper or buttons for easy wear, along with an attached hood or the option to pair it with a matching hijab. Available in various colors such as black, navy blue, and beige to suit different tastes and occasions.",
    oldprice: 90,
    newprice: 75,
    id: 19,
    type: "fmale",
    category: "Jilbab",
    num: 1,
    title_ar: "جلباب نسائي بتصميم كلاسيكي واسع يمنح الراحة والاحتشام، مصنوع من قماش خفيف وناعم مثل الكريب أو الشيفون المبطن، مما يجعله مثالياً للارتداء اليومي أو المناسبات الدينية. يتميز بقصّة فضفاضة وأكمام طويلة واسعة، مما يسمح بحرية الحركة مع الحفاظ على الأناقة. يحتوي على سحاب أمامي أو أزرار لسهولة الارتداء، بالإضافة إلى قبعة مدمجة أو إمكانية تنسيقه مع حجاب متناسب. متوفر بألوان متعددة مثل الأسود، الكحلي، والبيج ليناسب جميع الأذواق والمناسبات.",
    header_ar: "جلباب نسائي كلاسيكي",
  },
  {
    image: "Jense2.jpg",
    header: " Straight-Leg Jeans",
    title: "Classic straight-leg jeans designed to offer a comfortable fit from the hips to the ankles, making them a versatile choice for everyday wear. Made from durable denim fabric that becomes more comfortable over time, they feature a button and zipper closure with functional front and back pockets. Easily paired with casual or formal shirts, these jeans are a practical option for all seasons and occasions.",
    oldprice: 20,
    newprice: 14,
    id: 16,
    type: "male",
    category: "Jense",
    num: 1,
    title_ar: "بنطلون جينز بتصميم كلاسيكي ذو قصّة مستقيمة من الورك إلى الكاحل، مما يجعله خياراً مريحاً ومناسباً لمختلف الإطلالات اليومية. مصنوع من قماش الجينز المتين الذي يوفر الراحة مع مرور الوقت، ويتميز بأزرار وسحاب للإغلاق مع جيوب أمامية وخلفية عملية. يمكن تنسيقه بسهولة مع قمصان كاجوال أو رسمية، مما يجعله خياراً متعدد الاستخدامات لكل المواسم والمناسبات.. ",
    header_ar: "بنطلون جينز مستقيم القصّة  ",
  },

  //  hody 
  {
    image: "hody1.jpg",
    header: "Oversized Hoodie",
    title: "A loose-fitting oversized hoodie that offers a relaxed feel and a trendy fashion statement, making it ideal for youthful casual looks. Made from thick fabric that provides warmth in cold weather, it features a soft inner lining for added comfort. Designed with a wide collar, a large hood, and a spacious front pocket for a practical touch. Available in various colors such as black, gray, and navy blue, it pairs well with sweatpants or jeans for a fashionable yet comfortable appearance",
    oldprice: 20,
    newprice: 17,
    id: 17,
    type: "male",
    category: "hody",
    num: 1,
    title_ar: "هودي واسع بتصميم أوفرسايز يمنح إحساساً مريحاً ولمسة عصرية في الموضة، مما يجعله مثالياً للإطلالات الكاجوال الشبابية. مصنوع من خامة ثقيلة توفر الدفء في الطقس البارد، مع بطانة داخلية ناعمة لمزيد من الراحة. يتميز بياقة واسعة وقبعة كبيرة، بالإضافة إلى جيب أمامي كبير لإضفاء لمسة عملية. متوفر بألوان متعددة مثل الأسود، الرمادي، والكحلي، ويمكن ارتداؤه مع بنطلون رياضي أو جينز لمظهر عصري ومريح في نفس الوقت.",
    header_ar: "هودي أوفرسايز ",
  },
  {
    image: "hody2.jpg",
    header: " Classic Zip-Up Hoodie",
    title: "A comfortable men's hoodie with a classic design featuring a full front zipper, making it a practical and easy-to-wear choice. Made from a soft blend of cotton and polyester, it provides warmth while remaining breathable. It includes an adjustable hood with drawstrings and side pockets to keep your hands warm or store small items. Its simple design makes it perfect for casual and sporty looks, easily paired with jeans or sweatpants for a stylish and modern o.",
    oldprice: 200,
    newprice: 125,
    id: 18,
    type: "male",
    category: "hody",
    num: 1,
    title_ar: "هودي رجالي مريح بتصميم كلاسيكي مزود بسحاب أمامي كامل، مما يجعله خياراً عملياً وسهل الارتداء. مصنوع من مزيج ناعم من القطن والبوليستر، مما يوفر الدفء والتهوية في نفس الوقت. يتميز بقبعة قابلة للتعديل بحبال سحب وجيوب جانبية لإبقاء يديك دافئتين أو لحمل الأشياء الصغيرة. تصميمه البسيط يجعله مناسباً للإطلالات الكاجوال والرياضية، حيث يمكن تنسيقه بسهولة مع بنطلون جينز أو رياضي لمظهر أنيق وعصري.",
    header_ar: "هودي كلاسيكي بسحاب ",
  },

  {
    image: "jacketFmale.jpg",
    header: "Classic Wool Jacket",
    title: "An elegant jacket made from high-quality soft wool, providing warmth and comfort during fall and winter. It features a classic straight cut that offers a refined look suitable for both formal and casual outfits. Designed with a high collar or wide lapel, and front buttons or a zipper for closure, adding a touch of sophisticated practicality. It can be paired with dress pants or a dress for a stylish and coordinated look. Available in warm feminine colors such as beige, gray, and black to match different styles and occasions.",
    oldprice: 13,
    newprice: 9,
    id: 20,
    type: "fmale",
    category: "Jacket",
    num: 1,
    title_ar: "جاكيت أنيق مصنوع من الصوف الناعم عالي الجودة، يوفر الدفء والراحة خلال فصلي الخريف والشتاء. يتميز بقصّة كلاسيكية مستقيمة تمنحه مظهراً راقياً يناسب الإطلالات الرسمية والكاجوال. يحتوي على ياقة مرتفعة أو طية صدر واسعة، مع أزرار أمامية أو سحاب للإغلاق، مما يضيف لمسة من الأناقة العملية. يمكن ارتداؤه مع بنطلون رسمي أو فستان لإطلالة أنيقة ومتناسقة. متوفر بألوان أنثوية دافئة مثل البيج، الرمادي، والأسود ليناسب مختلف الأذواق والمناسبات.",
    header_ar: "جاكيت صوف نسائي كلاسيكي",
  },




];
// localStorage.setItem("LocalStore", JSON.stringify(array));

if (JSON.parse(localStorage.getItem("LocalStore")) == null) {
  localStorage.setItem("LocalStore", JSON.stringify(array));
} else {
  array = JSON.parse(localStorage.getItem("LocalStore"));
}


var AllCart = JSON.parse(localStorage.getItem("Cart"));
  if ( AllCart == null ) {
    localStorage.setItem("Cart", []);

  }


// localStorage.setItem("Cart", JSON.stringify([{
//   image :"back4.jpg",
//   header:"baby" ,
//   title :"shose" ,
//   oldprice:40 ,
//   newprice:100,
//   id:4,
//   type:"baby",
//   category :"shose",
//   num :0
//   },
//   ]));

if (JSON.parse(localStorage.getItem("Cart")) == null) {
  localStorage.setItem("Cart", JSON.stringify(0));
}

i18n
  .use(initReactI18next)
  .use(LanguageDetector)
  .use(HttpApi)
  .init({
    fallbackLng: "en",
    detection: {
      order: [
        "htmlTag",
        "cookie",
        "localStorage",
        "sessionStorage",
        "navigator",
        "path",
        "subdomain",
      ],
      caches: ["cookie"],
    },
    backend: {
      loadPath: "/locales/{{lng}}/translation.json",
    },
  });

function Home() {
  const { t } = useTranslation();

  //       BackgroundImage      //
  var [index, setIndex] = useState(0);
  var [Hint, SetHint] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % images.length);
      
    }, 3000);

    return () => clearInterval(interval);
  }, []);

    

  setInterval(() => {
     console.log ( "Smaeer " ); 
  }, 3000);



  // var [CartNum,setCartNum] =useState(20) ;
  //  useState (JSON.parse(localStorage.getItem("Cart")) );
  return (
    <div className="content">
      <Header />

      <div
        style={{
          // backgroundImage: `url(${require(`./images/BackgroundImage/${images[index]}`)})`
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${require(`./images/BackgroundImage/${images[index]}`)})`,
        }}
        className="TextInHead"
      >
        <h2>
          {t("headText")} <br />
          {t("under")}
        </h2>
        <h3>
          {t("with")}
          <span>{t("styleGold")}</span>
        </h3>
        <button>
          <a href="#Shopp">{t("Shop")}</a>{" "}
        </button>
      </div>

      
      <ShopPage />
      <AboutUs />

      <div className="JustAdmin">
        <h1>JustAdmin</h1>
        <h5>Add Product</h5>

        <div className="allInput">
          <input type="text" id="header" placeholder="header" />
          <input type="text" id="headerar" placeholder="العنوان بالعربي" />
          <textarea type="text" id="title" placeholder="title" />
          <textarea type="text" id="titlear" placeholder="التفاصيل بالعربية" />
          <input type="text" id="type" placeholder="type" />
          <input type="text" id="category" placeholder="category" />
          <input type="text" id="oldprice" placeholder="oldprice" />
          <input type="text" id="newprice" placeholder="newprice" />
          <input
            type="password"
            id="Passwoard"
            placeholder="Passwoard = 123"
          />
        </div>

        <button
          onClick={() => {
            let storedArray =
              JSON.parse(localStorage.getItem("LocalStore")) || [];
            const headerr = document.getElementById("header");
            const title = document.getElementById("title");
            const typee = document.getElementById("type");
            const category = document.getElementById("category");
            const oldprice = document.getElementById("oldprice");
            const newprice = document.getElementById("newprice");
            const Passwoard = document.getElementById("Passwoard");
            const titlear = document.getElementById("titlear");
            const headerar = document.getElementById("headerar");

            if (
              headerr.value != "" ||
              (title.value != "" &&
                typee.value != "" &&
                newprice.value != "" &&
                category.value != "" &&
                oldprice.value != "" &&
                Passwoard.value != "" &&
                headerar.value != "" &&
                titlear.value != "")
            ) {
              if (Passwoard.value == "123") {
                let newItem = {
                  image: "newnew.jpg",
                  header: headerr.value,
                  title: title.value,
                  oldprice: 50,
                  newprice: 25,
                  id: storedArray.length + 1,
                  type: typee.value,
                  category: category.value,
                  oldprice: oldprice.value,
                  newprice: newprice.value,
                  num: 1,
                  title_ar: titlear.value,
                  header_ar: headerar.value,
                };
                storedArray.push(newItem);
                localStorage.setItem("LocalStore", JSON.stringify(storedArray));
                SetHint("تمت الاضافة بنجاح ");
                headerr.value = "";
                title.value = "";
                titlear.value = "";
                headerar.value = "";
                typee.value = "";
                category.value = "";
                oldprice.value = "";
                newprice.value = "";
                Passwoard.value = "";
              } else {
                SetHint("كلمة السر خاطئه");
              }
            } else {
              SetHint("الرجاء ملئ حميع الحقول ");
            }
          }}
        >
          {" "}
          Added{" "}
        </button>
        <h4>{Hint}</h4>
      </div>
    </div>
  );
}

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/show-product" element={<ShowProduct />} />
          <Route path="/Cart" element={<Cart />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
