import React, { useEffect, useState } from 'react'; 
import "./Header.css"; 
import { Link } from "react-router-dom";
import i18next from 'i18next';
import { useTranslation } from "react-i18next";


export default function Header() {
  const { i18n } = useTranslation();
  const { t } = useTranslation();

    // var [CartNumChild,setCartNumChild] = useState([]) ;
    var [countCard,sss]=useState (JSON.parse(localStorage.getItem("Cart")) ); 
    console.log ( "countCard = " , countCard ); 
      // useEffect(function(){
      //   setCartNumChild(statee.setCartNum);
      // },[]); 

    return (
    <div className='allHeader'>
      <Link  to="/"><h1 className='logo'>{t("styleGold")}</h1></Link> 
      <div className="three">

    
      <Link to="/Cart">
      <div className="cartIcon">
      <i class="fa-solid fa-cart-shopping"></i>
        <span>{countCard.length}</span>
      </div>
      </Link>


      <i onClick={()=>{ 
          if ( i18n.language == "ar") {
            i18n.changeLanguage("en");
          }else {
            i18n.changeLanguage("ar");
          }
       }}class="fa-solid fa-globe"></i>

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
        }}

      class="fa-solid fa-circle-half-stroke"></i>
      </div>
      <div id='Home' className="taginHeader">

        <a href="#Home">{t("Home")}</a>
        <a href="#Shopp">{t("Shop")}</a>
        <a href="#Aboutt">{t("About Us")}</a>
      </div>



    </div>
  )
}
