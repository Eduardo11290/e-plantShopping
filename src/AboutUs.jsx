import React from 'react';
import './AboutUs.css';

function AboutUs() {
  return (
    <div className="about-us-container">
      <h1 className="about-us-heading">AutoRent Premium</h1>
      <p className="about-us-description">
        Bun venit la AutoRent Premium, partenerul tău de încredere pentru mobilitate de top. 
        Indiferent dacă ai nevoie de o mașină compactă pentru oraș sau de o limuzină de lux 
        pentru evenimente speciale, suntem aici să îți oferim experiența perfectă la volan.
      </p>
      
      <p className="about-us-content">
        Flota noastră este compusă din modele noi, verificate tehnic și igienizate, gata de drum. 
        Ne mândrim cu transparența costurilor și cu suportul oferit clienților noștri 24/7.
        De la modele electrice prietenoase cu mediul, până la SUV-uri puternice pentru vacanțe 
        cu familia, AutoRent Premium îți pune cheile în mână rapid și simplu.
      </p>

      {/* Putem elimina imaginile cu plante și punem ceva neutru sau legat de drum */}
      {/* <div className="plant_logo_left"><img src="..." /></div> */} 
    </div>
  );
}

export default AboutUs;