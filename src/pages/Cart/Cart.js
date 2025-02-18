import React, { useEffect, useState } from 'react';
import "./Cart.css"; 
import { Link } from 'react-router-dom';
import { useTranslation } from "react-i18next";
import i18next from 'i18next';


export default function Cart() {
  var[arrayCart,setArrayCart]=useState(JSON.parse(localStorage.getItem("Cart")));

  var [numofHeader,setNumOfHeader] = useState(arrayCart.length); 
  // console.log ("JSON.parse(localStorage.getItem(Cart) = " ,JSON.parse(localStorage.getItem("Cart")));
  const { t } = useTranslation();
  var [priceAll , setPriceAll] = useState(0) ; 




  function Header() {
    // var [CartNumChild,setCartNumChild] = useState([]) ;
  const { i18n } = useTranslation();
  const { t } = useTranslation();
    return (
    <div className='allHeader'>
      <Link  to="/"><h1 className='logo'>{t("styleGold")}</h1></Link> 
      <div className="three">
      <div className="cartIcon">
      <i class="fa-solid fa-cart-shopping"></i>
        <span>{numofHeader}</span>
      </div>
      <i onClick={()=>{ 
        if ( i18n.language == "ar") {
          i18n.changeLanguage("en");
        }else {
          i18n.changeLanguage("ar");
        }
        }}  class="fa-solid fa-globe"></i>   
      <i
      onClick={()=> {      
      var themee = localStorage.getItem("themee") ; 
      if (themee == "llight" ){ 
      localStorage.setItem("themee", "ddark")
      document.documentElement.style.setProperty("--white", "#000000"); 
      document.documentElement.style.setProperty("--black", "#ffffff"); 
      document.documentElement.style.setProperty("--lessBack", "#3d433dc7"); 
      document.documentElement.style.setProperty("--spanColor", "#86a577"); 
      document.documentElement.style.setProperty("--ActiveOne", "#3a582a"); 
      document.documentElement.style.setProperty("--ActiveTwo", "#575656ee"); 
      document.documentElement.style.setProperty("--btn2Color", "#797777ee"); 
      document.documentElement.style.setProperty("--redd", "#ffd7d7"); 
      } else {
        localStorage.setItem("themee", "llight")
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
 }
           class="fa-solid fa-circle-half-stroke"></i>
      </div>


      <div id='Home' className="taginHeader">

      <Link  to="/"><a href="#Home">{t("Home")}</a></Link>  
      <Link  to="/"><a href="#Shopp">{t("Shop")}</a></Link>  
      <Link  to="/"><a href="#Aboutt">{t("About Us")}</a></Link>  
          {/* <h1>Num = {countCard}</h1> */}
      </div>



    </div>
  )
}


// localStorage.setItem("Cart", JSON.stringify([{
//   image :"back4.jpg", 
//   header:"baby" , 
//   title :"shose" , 
//   oldprice:40 , 
//   newprice:100, 
//   id:17,
//   type:"baby",
//   category :"shose",
//   num :1
//   }
//   ]));






if ( arrayCart == null ) { 
  arrayCart= [] ;
}
useEffect( ()=>{ 
  setNumOfHeader(arrayCart.length) ; 
},[]) ;

    useEffect ( ()=> { 
      var numbers =0 ; 
      arrayCart.forEach(element => {
      numbers += (element.newprice*element.num) ;         
      });

      setPriceAll(numbers) ;   
      

    } ,[ ])  ;

function Cartrr({props}) {
  const { i18n } = useTranslation();

  return (
    <div className="contentInFuntionCart">

      <img src={require(`../../images/imageProduct/${props.image}`)} />
      <div className="TextCart">
        <h3>{i18n.language == "ar"?props.header_ar: props.header  }</h3>
        <div className="justtext">
          <h5>Number: <span>{props.num}</span></h5>
          <h5>Price: <span>${props.newprice * props.num}</span></h5>
        </div>
        <button onClick={ ()=>{ 
          var newArray =[] ; 
            for ( var i=0;i<arrayCart.length ; ++i ) {
                if (arrayCart[i].id!= props.id) { 
                      newArray.push( arrayCart[i] ) ;
                }
            }

            setPriceAll ( priceAll- (props.num*props.newprice ) ) ; 
            localStorage.setItem("Cart", JSON.stringify(newArray));
            setArrayCart(newArray) ;
            setNumOfHeader(newArray.length) ; 


        }}> {t("Remove From Cart")}</button>
      </div>
    </div>
  );
} 

return (
    
    <div>
      <Header/>

      <div className="AllContent">
        
      <h1>{t("Cart")}</h1>

<div className="contentInCart">
     
      
      <div className="displayCard">
    {arrayCart.map( function (e) { 
      return ( 

        <Cartrr props={e}/>


      )
    })}
    
    
    <div className="totalPrice">
    <h1> {t("Total Price")} </h1> <h1> : {priceAll} $</h1>
    
    </div>

    </div>
</div>

      </div>
      
    </div>
  )
}
