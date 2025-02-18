import "./ShopPage.css"; 
import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import { useEffect, useState } from 'react';
import { useForkRef } from "@mui/material";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";






var array = [
  // {
  // image :"back2.png", 
  // header:"male" , 
  // title :"hody " , 
  // oldprice:20 , 
  // newprice:30, 
  // id:1,
  // type:"male",
  // category :"hody",
  // num:1
  // }
] ;


array  = JSON.parse(localStorage.getItem("LocalStore"));
  // localStorage.setItem("LocalStore", JSON.stringify(array));

if ( JSON.parse(localStorage.getItem("LocalStore")) == null ) {
     localStorage.setItem("LocalStore", JSON.stringify(array));
  }else {
     array  = JSON.parse(localStorage.getItem("LocalStore"));
  }




function Cardd(arr) { 
    const { i18n } = useTranslation();
  
  return (

    <Link onClick={()=> { 
      localStorage.setItem("ShowItem", JSON.stringify(arr));
    }

    } to="/show-product">
      <Card  className="Cardd" sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image= {require(`../../images/imageProduct/${arr.arr.image}`)}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div" sx={{fontSize: "18px" }}>
          {i18n.language == "ar"? arr.arr.header_ar: arr.arr.header   }
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary', fontSize: "13px" }}>
            { arr.arr.newprice} $
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    </Link>

  );


}



export default 
function ShopPage() { 

    const { t } = useTranslation();
  
  var [showArray,setShowArray] = useState([]);

  useEffect(function() { 
    fetchAll() ;
  },[]) ; 
  

    function fetchAll() {
      var querayAll=document.querySelectorAll(".btn") ; 
    querayAll.forEach((e) => {
        if (e.innerText!="All" &&e.innerText!="الكل"  ) { 
          e.classList.remove("active");
        }else {
          e.classList.add("active");
        }
    });
      var newnew = array.map((e)=>{
        return (
          <Cardd arr={e}  />
         )
      });
      setShowArray(
        <div className="allCard">
        {newnew}
      </div>
      ); 
    }

    function HeaderMale() { 

      return ( 

        
      <div className="headOfCard">
      <button
      className="btn2"
      onClick={ ()=> {
        var arr2 = document.querySelectorAll(".btn2"); 
        arr2.forEach(e => {
            if (e.innerText!="Jacket"&& e.innerText!="جكيت" ) {
                e.classList.remove("active2")
            }else {
                e.classList.add("active2");
            }
        });

        var nn = array.filter(function(e) { 
          return (e.type=="male"&&e.category=="Jacket") ; 
      });
      var newnew = nn.map((e)=>{
        return (
          <Cardd arr={e}  />
         )
      });
      setShowArray(<div>
        <HeaderMale/>
      <div className="allCard">
      {newnew}
      </div> 
      </div>); 
      }}
      >{t("Jacket")}</button> 
      <button
      className="btn2"
      onClick={ ()=> {
        var arr2 = document.querySelectorAll(".btn2"); 
        arr2.forEach(e => {
            if (e.innerText!="Jense" &&e.innerText!="جينز") {
                e.classList.remove("active2")
            }else {
                e.classList.add("active2");
            }
        });

        var nn = array.filter(function(e) { 
          return (e.type=="male"&&e.category=="Jense") ; 
      });
      var newnew = nn.map((e)=>{
        return (
          <Cardd arr={e}  />
         )
      });
      setShowArray(<div>
        <HeaderMale/>
      <div className="allCard">
      {newnew}
      </div> 
      </div>); 
      }}
    >{t("Jense")}</button>

      <button 
      
      className="btn2"
      onClick={ ()=> {
        var arr2 = document.querySelectorAll(".btn2"); 
        arr2.forEach(e => {
            if (e.innerText!="Hody" &&e.innerText!="هودي" ) {
                e.classList.remove("active2")
            }else {
                e.classList.add("active2");
            }
        });

        var nn = array.filter(function(e) { 
          return (e.type=="male"&&e.category=="hody") ; 
      });
      var newnew = nn.map((e)=>{
        return (
          <Cardd arr={e}  />
         )
      });
      setShowArray(<div>
        <HeaderMale/>
      <div className="allCard">
      {newnew}
      </div> 
      </div>); 
      }}
      >{t("Hody")}</button> 
      <button 
      
      className="btn2 active2"
      onClick={ ()=> {
        var arr2 = document.querySelectorAll(".btn2"); 
        arr2.forEach(e => {
            if (e.innerText!="All"&&e.innerText!="الكل"   ) {
                e.classList.remove("active2")
            }else {
                e.classList.add("active2");
            }
        });

        var nn = array.filter(function(e) { 
          return (e.type=="male") ; 
      });
      var newnew = nn.map((e)=>{
        return (
          <Cardd arr={e}  />
         )
      });
      setShowArray(<div>
        <HeaderMale/>
      <div className="allCard">
      {newnew}
      </div> 
      </div>); 
      }}
    >{t("All")}</button>
      </div>

      );       
    }
      
    function HeaderFMale() { 

      return ( 
      <div className="headOfCard">
      <button
      className="btn2"
      onClick={ ()=> {

        var arr2 = document.querySelectorAll(".btn2"); 
        arr2.forEach(e => {
            if (e.innerText!="Jacket"&& e.innerText!="جكيت" ) {
                e.classList.remove("active2")
            }else {
                e.classList.add("active2");
            }
        });

        var nn = array.filter(function(e) { 
          return (e.type=="fmale"&&e.category=="Jacket") ; 
      });
      var newnew = nn.map((e)=>{
        return (
          <Cardd arr={e}  />
         )
      });
      setShowArray(<div>
        <HeaderFMale/>
      <div className="allCard">
      {newnew}
      </div> 
      </div>); 
      }}
      >{t("Jacket")}</button> 
      <button
      className="btn2"
      onClick={ ()=> {
        var arr2 = document.querySelectorAll(".btn2"); 
        arr2.forEach(e => {
            if (e.innerText!="Jilbab"&& e.innerText!="جلباب" ) {
                e.classList.remove("active2")
            }else {
                e.classList.add("active2");
            }
        });
        
        var nn = array.filter(function(e) { 
          return (e.type=="fmale"&&e.category=="Jilbab") ; 
      });
      var newnew = nn.map((e)=>{
        return (
          <Cardd arr={e}  />
         )
      });
      setShowArray(<div>
        <HeaderFMale/>
      <div className="allCard">
      {newnew}
      </div> 
      </div>); 
      }}
    >{t("Jilbab")}</button>
      <button   
      className="btn2"
      onClick={ ()=> {

        var arr2 = document.querySelectorAll(".btn2"); 
        arr2.forEach(e => {
            if (e.innerText!="Hody"&& e.innerText!="هودي" ) {
                e.classList.remove("active2")
            }else {
                e.classList.add("active2");
            }
        });
        

        var nn = array.filter(function(e) { 
          return (e.type=="fmale"&&e.category=="hody") ; 
      });
      var newnew = nn.map((e)=>{
        return (
          <Cardd arr={e}  />
         )
      });
      setShowArray(<div>
        <HeaderFMale/>
      <div className="allCard">
      {newnew}
      </div> 
      </div>); 
      }}
      >{t("Hody")}</button> 
      <button
      className="btn2"
      onClick={()=> {

        var arr2 = document.querySelectorAll(".btn2"); 
        arr2.forEach(e => {
            if (e.innerText!="All"&& e.innerText!="الكل" ) {
                e.classList.remove("active2")
            }else {
                e.classList.add("active2");
            }
        });
        
        var nn = array.filter(function(e) { 
          return (e.type=="fmale") ; 
      });
      var newnew = nn.map((e)=>{
        return (
          <Cardd arr={e}  />
         )
      });
      setShowArray(<div>
        <HeaderFMale/>
      <div className="allCard">
      {newnew}
      </div> 
      </div>); 
      }}
    >{t("All")}</button>
      </div>

      );       
    }
        
    function HeaderBaby() { 

      return ( 
      <div className="headOfCard">
      <button
      className="btn2"
      onClick={ ()=> {
        var arr2 = document.querySelectorAll(".btn2"); 
        arr2.forEach(e => {
            if (e.innerText!="Jacket" &&e.innerText!="جكيت" ) {
                e.classList.remove("active2")
            }else {
                e.classList.add("active2");
            }
        });
        var nn = array.filter(function(e) { 
          return (e.type=="baby"&&e.category=="Jacket") ; 
      });
      var newnew = nn.map((e)=>{
        return (
          <Cardd arr={e}  />
         )
      });
      setShowArray(<div>
        <HeaderBaby/>
      <div className="allCard">
      {newnew}
      </div> 
      </div>); 
      }}
      >{t("Jacket")}</button> 
      <button
      className="btn2"
      onClick={ ()=> {

        var arr2 = document.querySelectorAll(".btn2"); 
        arr2.forEach(e => {
            if (e.innerText!="Pajamas" &&e.innerText!="بجامه" ) {
                e.classList.remove("active2")
            }else {
                e.classList.add("active2");
            }
        });
        var nn = array.filter(function(e) { 
          return (e.type=="baby"&&e.category=="Pajamas") ; 
      });
      var newnew = nn.map((e)=>{
        return (
          <Cardd arr={e}  />
         )
      });
      setShowArray(<div>
        <HeaderBaby/>
      <div className="allCard">
      {newnew}
      </div> 
      </div>); 
      }}
    >{t("Pajamas")}</button>
      <button   
      className="btn2"
      onClick={ ()=> {
        var arr2 = document.querySelectorAll(".btn2"); 
        arr2.forEach(e => {
            if (e.innerText!="Hody" &&e.innerText!="هودي" ) {
                e.classList.remove("active2")
            }else {
                e.classList.add("active2");
            }
        });
        var nn = array.filter(function(e) { 
          return (e.type=="baby"&&e.category=="hody") ; 
      });
      var newnew = nn.map((e)=>{
        return (
          <Cardd arr={e}  />
         )
      });
      setShowArray(<div>
        <HeaderBaby/>
      <div className="allCard">
      {newnew}
      </div> 
      </div>); 
      }}
      >{t("Hody")}</button> 
      <button
      className="btn2"
      onClick={()=> {
        var arr2 = document.querySelectorAll(".btn2"); 
        arr2.forEach(e => {
            if (e.innerText!="ALL" &&e.innerText!="الكل" ) {
                e.classList.remove("active2")
            }else {
                e.classList.add("active2");
            }
        });
        var nn = array.filter(function(e) { 
          return (e.type=="baby") ; 
      });
      var newnew = nn.map((e)=>{
        return (
          <Cardd arr={e}  />
         )
      });
      setShowArray(<div>
        <HeaderBaby/>
      <div className="allCard">
      {newnew}
      </div> 
      </div>); 
      }}
    >{t("All")}</button>
      </div>

      );       
    }
  

    function fetchMale() { 

      
      var querayAll=document.querySelectorAll(".btn") ; 
    querayAll.forEach((e) => {
        if (e.innerText!="Male"&&e.innerText!="رجالي" ) { 
          e.classList.remove("active");
        }else {
          e.classList.add("active");
        }

    });
      var nn = array.filter(function(e) { 
          return e.type=="male" ; 
      });
      var newnew = nn.map((e)=>{
        return (
          <Cardd arr={e}  />
         )
      });
      setShowArray(<div>
        <HeaderMale/>
      <div className="allCard">
      {newnew}
      </div> 
      </div>); 
    }

    function fetchFMale() { 
    var querayAll=document.querySelectorAll(".btn") ; 
    querayAll.forEach((e) => {
        if (e.innerText!="Fmale"&&e.innerText!="ستاتي" ) { 
          e.classList.remove("active");
        }else {
          e.classList.add("active");
        }

    });
      console.log("querayAll =  " , querayAll ) ;
      var nn = array.filter(function(e) { 
          return e.type=="fmale" ; 
      });
      
      var newnew = nn.map((e)=>{
        return (
          <Cardd arr={e}  />
         )
      });
      
      
      setShowArray(<div>
        <HeaderFMale/>
      <div className="allCard">
      {newnew}
      </div> 
      </div>); 


    }

    function fetchBaby() { 

      var querayAll=document.querySelectorAll(".btn") ; 
    querayAll.forEach((e) => {
        if (e.innerText!="Baby"&&e.innerText!="اطفال" ) { 
          e.classList.remove("active");
        }else {
          e.classList.add("active");
        }

    });
      var nn = array.filter(function(e) { 
          return e.type=="baby" ; 
      });
      
      var newnew = nn.map((e)=>{
        return (
          <Cardd arr={e}  />
         )
      });


      setShowArray(<div>
        <HeaderBaby/>
      <div className="allCard">
      {newnew}
      </div> 
      </div>); 
    }






    return (
    <div id="Shopp" className='allContentShop'>
        <h1> {t("Shop")} </h1>
    <div className="contentCard">
    <div className="Filters">
    <button className="btn active" onClick={fetchAll }>{t('All')}</button>
    <button className="btn" onClick={fetchMale }>{t('Male')}</button>
    <button className="btn" onClick={fetchFMale}>{t('Fmale')}</button>
    <button className="btn" onClick={fetchBaby }>{t('Baby')}</button>
    </div>

    <div className="AllofInstanse">
    {showArray}
    </div>
    </div>
    </div>

  )
}


