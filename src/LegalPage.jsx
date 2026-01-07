import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const LegalPage = ({ title }) => {
    // Scroll sus când intri pe pagină
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div style={{
            padding: '120px 20px', 
            background: '#050505', 
            minHeight: '100vh', 
            color: 'white', 
            fontFamily: 'Roboto, sans-serif'
        }}>
            <div style={{maxWidth: '800px', margin: '0 auto'}}>
                <h1 style={{color: '#ff4d4d', borderBottom: '1px solid #333', paddingBottom: '20px'}}>{title}</h1>
                
                <p style={{marginTop: '30px', lineHeight: '1.8', color: '#ccc'}}>
                    Aceasta este o pagină demonstrativă pentru <strong>{title}</strong>. 
                    Într-un proiect real, aici ar fi textul juridic complet.
                </p>
                
                <p style={{marginTop: '20px', lineHeight: '1.8', color: '#ccc'}}>
                    AutoRent Premium respectă standardele GDPR și legislația în vigoare privind închirierea de autovehicule.
                </p>

                <Link to="/" style={{
                    display: 'inline-block', 
                    marginTop: '40px', 
                    color: '#ff4d4d', 
                    textDecoration: 'none', 
                    fontWeight: 'bold',
                    border: '1px solid #ff4d4d',
                    padding: '10px 20px',
                    borderRadius: '5px'
                }}>
                    ← Înanpoi la Prima Pagină
                </Link>
            </div>
        </div>
    );
};

export default LegalPage;