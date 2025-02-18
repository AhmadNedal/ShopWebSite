import React from 'react'; 
import "./AboutUs.css"; 
import { useTranslation } from "react-i18next";


export default function AboutUs() {
  const { t } = useTranslation();

  return (
    <div id='Aboutt' className='AboutUsAll'>
        <h1 className='AboutMe'>{t("About Us")}</h1>
        <div className="container">
          <img src={require("../../images/imageProduct/back2.png")} alt="" />
          
            <div className="textcontainer">
            <h5 className='textAboutMe'>{t("titleAboutUs")}</h5>
            </div>

        </div>
    </div>
  )
}
