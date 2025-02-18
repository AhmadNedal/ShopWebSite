import React, { useEffect, useState } from 'react'
import "./ShowProduct.css"
import App from '../../App';
import { Link } from 'react-router-dom';
import { useTranslation } from "react-i18next";
import "../Header/Header.css";


export default function ShowProduct() {
  var AllCart = JSON.parse(localStorage.getItem("Cart"));
  let storedArray = JSON.parse(localStorage.getItem("ShowItem")) || [];
  var [bol,setBol] = useState(false); 
  var [num,setNum] = useState(1); 
  var [countCard,any]=useState (JSON.parse(localStorage.getItem("Cart")) ); 
  var [numofHeader,setnumofHeader] = useState(countCard.length) ;
  const { t } = useTranslation();
  const { i18n } = useTranslation();
  
  useEffect(function(){
    setNum(storedArray.arr.num); 
  },[]); 

  function Header() {
    // var [CartNumChild,setCartNumChild] = useState([]) ;
    

    return (
    <div className='allHeader2'>
      <Link  to="/"><h1 className='logo'>{t("styleGold")}</h1></Link> 
      <div className="three">
      <Link to="/Cart">
      <div className="cartIcon">
      <i class="fa-solid fa-cart-shopping"></i>
        <span>{numofHeader}</span>
      </div>
      </Link>
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
   }}
      class="fa-solid fa-circle-half-stroke"></i>
      </div>


      <div id='Home' className="taginHeader">

      <Link  to="/"><a href="#Home">{t("Home")}</a></Link>  
      <Link  to="/"><a href="#Shopp">{t("Shop")}</a></Link>  
      <Link  to="/"><a href="#Aboutt">{t("About Us")}</a></Link>  
  
      </div>



    </div>
  )
}

function ButtonAddRemove() {

  setBol(()=>false) ;

  for (let i=0;i<AllCart.length;++i) {
      if(AllCart[i].id==storedArray.arr.id){
        setBol(()=>true) ;
        setNum((AllCart[i].num)) ; 
      }
  }
  
}



function AddOrRemove(){

  return  (
<>
    {!bol ? (

      <div>
      <div className="numOfProduct">
      <button onClick={function() { 
         if (num == 0 ) {
          // Remove From Local Sorage // 
            setBol(false); 
         }else {
         setNum(num-1) ;
        } 
      }}>-</button>
      <input value={num} disabled={true}/>
      <button onClick={function() { 
         setNum(num+1) ;
      }}>+</button>
      </div>
     <button
      onClick={()=>{ 
        storedArray.arr["num"]=num ;
        // newarray.num =newarray.num+num;
        var newCart = JSON.parse(localStorage.getItem("Cart")); 
        if ( newCart == null ) { 
          newCart = [] ; 
        }
        newCart.push (storedArray.arr); 
        setnumofHeader(numofHeader+1) ; 
        localStorage.setItem("Cart", JSON.stringify(newCart));
        setBol(true) ;  
        setBol(()=>true) ;  


      }}  
     
     className='AddToCart'>{t("Add To Cart")}</button>       
   </div>

    ) :(


      
      <div>
      <div className="numOfProduct">
      <button onClick={function() { 
         if (num == 0 ) {
          // Remove From Local Sorage // 
            setBol(false); 
         }else {
         setNum(num-1) ;
        } 
      }}>-</button>
      <input value={num} disabled={true}/>
      <button onClick={function() { 
         setNum(num+1) ;
      }}>+</button>
      </div>
     <button
      onClick={()=>{ 
        storedArray.arr.num =num ;
        // newarray.num =newarray.num+num;
        var newCart = JSON.parse(localStorage.getItem("Cart")); 
        for (var i=0;i<newCart.length ;++i) {
          if ( newCart[i].id ==storedArray.arr.id) {
            newCart[i].num = num ; 
          }
        }
        // newCart.push (storedArray.arr); 
        // setnumofHeader(numofHeader+1) ; 
        localStorage.setItem("Cart", JSON.stringify(newCart));
        setBol(()=>{return false }) ;  
        setBol(false);


      }}  
     
     className='AddToCart'> {t("Edite value")}</button>  

     
    
     <button

     onClick={()=> { 
        // newarray.num =newarray.num+num;
        var newCart = JSON.parse(localStorage.getItem("Cart")); 
        
        var newnewCart = newCart.filter(function(e) { 
          return (e.id!=storedArray.arr.id)
        })
         
        setnumofHeader(numofHeader-1) ; 
        localStorage.setItem("Cart", JSON.stringify(newnewCart));
        setBol(false) ;  
        setBol(()=>false) ;  
        setNum(()=>1) ; 
     }}

      className='AddToCart'
     >{t("Remove From Cart")}</button>
    
   </div>

    )}
    </>
)

}

    useEffect(()=>{

      ButtonAddRemove(); 
      AddOrRemove() ; 

    },[bol])


  return (
    <div className='allShowProduct'>
      <Header/>
        <div className="allContentShowProduct">
        <h1 className='headernameinShow'>{i18n.language == "ar"?storedArray.arr.header_ar: storedArray.arr.header   }</h1>
        <div className="container">
          <img className='showw' src={require(`../../images/imageProduct/${storedArray.arr.image}`)} alt="" />
            <div className="textcontainer">
            <p className='titleInShowProduct'>
              {i18n.language == "ar"?storedArray.arr.title_ar: storedArray.arr.title }
            </p>
            
            <div className="price">
            <h5>Price : </h5>
            <h5> {(storedArray.arr.newprice)*num}$ </h5>
            <h5 className='old'>{(storedArray.arr.oldprice)*num}$</h5>

            </div>
            <AddOrRemove/>

            </div>
        </div>
        </div>
    </div>
  )
}
