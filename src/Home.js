import { useEffect, useState } from 'react';
import './App.css';
import "./pages/Header/Header"; 
import Header from './pages/Header/Header';
import AboutUs from './pages/AbouUs/AboutUs';
// import "./pages/shopPage/ShopPage.css";
import ShopPage from './pages/shopPage/ShopPage';


//   Background Body    //
 const images  = [ 
  "back1.png",
  "back2.png",
  "back3.jpg",
  "back4.jpg",
 ] ; 




 function Home() {
  //       BackgroundImage      // 
  var [index,setIndex] = useState(0) ; 
var [Hint ,SetHint] = useState(""); 
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval); 
    }, []);
  

  return (
    <div  
    className="content">
        <Header/>

        <div style={{backgroundImage: `url(${require(`./images/BackgroundImage/${images[index]}`)})` }} className="TextInHead">
          <h2>Everything you need for your home <br />under one roof</h2>
          <h3>All this and more with <span>Shop Now</span></h3>
          <button> Shop </button>
        </div>

      <ShopPage/>
      <AboutUs/>

      <div className="JustAdmin">
        <h1>JustAdmin</h1>
        <h5>Add Product</h5>

        <div className="allInput">
            <input type="text" id='header' placeholder='header' />
            <textarea type="text" id='title' placeholder='title' />
            <input type="text"  id='type' placeholder='type' />
            <input type="text"  id='category' placeholder='category' />
            <input type="text"  id='oldprice' placeholder='oldprice' />
            <input type="text"  id='newprice' placeholder='newprice' />
            <input type="text"  id='Passwoard' placeholder='Passwoard' />
        </div>

        
        <button onClick={()=> {

            let storedArray = JSON.parse(localStorage.getItem("LocalStore")) || [];
            const headerr = document.getElementById("header") ; 
            const title = document.getElementById("title") ; 
            const typee = document.getElementById("type") ; 
            const category = document.getElementById("category") ; 
            const oldprice = document.getElementById("oldprice") ; 
            const newprice = document.getElementById("newprice") ; 
            const Passwoard = document.getElementById("Passwoard") ; 
          
            if (headerr.value!=""||title.value!=""&&
              typee.value!=""&&newprice.value!=""&&
              category.value!=""&&oldprice.value!=""&&
              Passwoard.value!=""
            ) { 

              
          
            let newItem = {
              image :"back2.png", 
              header: headerr.value ,
              title: title.value,
              oldprice: 50,
              newprice: 25,
              id: storedArray.length + 1,
              type:typee.value,
              category: category.value, 
              oldprice : oldprice.value , 
              newprice:newprice.value , 
            };
            console.log (newItem);

            storedArray.push(newItem);

            localStorage.setItem("LocalStore", JSON.stringify(storedArray));
                SetHint("تمت الاضافة بنجاح "); 
                headerr.value=""; 
                title.value=""; 
                typee.value=""; 
                category.value=""; 
                oldprice.value=""; 
                newprice.value=""; 
                Passwoard.value=""; 


    
              }else {

                SetHint("الرجاء ملئ حميع الحقول "); 
          
              }
        }}   > Added </button>

        <h4>{Hint}</h4>

      </div>


    </div>
  );
}

export default Home;
