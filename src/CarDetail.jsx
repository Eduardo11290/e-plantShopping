import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addItem } from './CartSlice';
import carsData from './carsData'; // <--- IMPORTĂM DATELE EXTERNE
import './CarDetail.css'; 

const CarDetail = () => {
    const { id } = useParams();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const cartItems = useSelector(state => state.cart.items);

    // Căutăm mașina în fișierul extern de date
    const car = carsData
        .flatMap(category => category.cars)
        .find(c => c.id === id);

    const [currentImgIndex, setCurrentImgIndex] = useState(0);
    const [startDate, setStartDate] = useState("");
    const [endDate, setEndDate] = useState("");
    const [totalPrice, setTotalPrice] = useState(0);
    const [days, setDays] = useState(0);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    if (!car) {
        return (
            <div style={{padding: '50px', textAlign: 'center', background: '#050505', minHeight: '100vh', color: 'white'}}>
                <h2>Mașina nu a fost găsită.</h2>
                <div onClick={() => navigate(-1)} style={{color: '#ff4d4d', cursor: 'pointer', textDecoration: 'underline'}}>
                    Înapoi la Flotă
                </div>
            </div>
        );
    }

    const isAdded = cartItems.some(item => item.id === car.id);

    const nextImage = () => setCurrentImgIndex((prev) => (prev === car.images.length - 1 ? 0 : prev + 1));
    const prevImage = () => setCurrentImgIndex((prev) => (prev === 0 ? car.images.length - 1 : prev - 1));

    const handleCalculate = () => {
        if (startDate && endDate) {
            const start = new Date(startDate);
            const end = new Date(endDate);
            const diffTime = end - start;
            const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)); 

            if (diffDays > 0) {
                setDays(diffDays);
                setTotalPrice(diffDays * car.cost);
            } else {
                alert("Data de returnare incorectă!");
            }
        } else {
            alert("Te rog selectează ambele date!");
        }
    };

    const handleAddToCart = () => {
        if (!isAdded) {
            const quantity = days > 0 ? days : 1;
            dispatch(addItem({ ...car, quantity }));
        }
    };

    return (
        <div className="car-detail-page">
            {/* NAVBAR FIX */}
            <div style={{background: '#000', padding: '15px 30px', borderBottom: '1px solid #333', display: 'flex', justifyContent: 'space-between', alignItems: 'center', position: 'fixed', top: 0, left: 0, width: '100%', zIndex: 1000, boxSizing: 'border-box'}}>
                <div style={{display: 'flex', alignItems: 'center'}}>
                    <div onClick={() => navigate(-1)} style={{color: '#aaa', textDecoration: 'none', fontWeight: 'bold', fontSize: '16px', display: 'flex', alignItems: 'center', cursor: 'pointer'}}>
                        <span style={{marginRight: '5px'}}>‹</span> Înapoi
                    </div>
                    <span style={{marginLeft: '20px', color: '#ff4d4d', fontWeight: 'bold'}}> | {car.name}</span>
                </div>
                <Link to="/cart" style={{textDecoration: 'none', color: 'white'}}>
                    <div style={{ fontSize: '24px', position: 'relative', cursor: 'pointer' }}>
                        🛒 
                        {cartItems.length > 0 && (
                            <span style={{position: 'absolute', top: '-5px', right: '-10px', background: '#ff4d4d', color: 'white', borderRadius: '50%', fontSize: '12px', padding: '2px 6px'}}>
                                {cartItems.length}
                            </span>
                        )}
                    </div>
                </Link>
            </div>

            <div className="detail-container" style={{paddingTop: '100px'}}>
                <div className="left-content">
                    <h1 className="car-title">{car.name}</h1>
                    
                    {/* SLIDER IMAGINI */}
                    <div className="image-gallery-box">
                        <img src={car.images[currentImgIndex]} alt={car.name} className="main-image" />
                        {car.images.length > 1 && (
                            <>
                                <button className="slider-btn left-btn" onClick={prevImage}>❮</button>
                                <button className="slider-btn right-btn" onClick={nextImage}>❯</button>
                                <div className="slide-counter">{currentImgIndex + 1} / {car.images.length}</div>
                            </>
                        )}
                    </div>
                    
                    {/* DESCRIERE ȘI SPECIFICAȚII DINAMICE */}
                    <div className="section-card">
                        <h3>Despre Mașină</h3>
                        <p style={{lineHeight: '1.6', color: '#ccc', marginBottom: '20px', fontSize: '1.05rem'}}>
                            {car.description}
                        </p>
                        
                        <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gap: '15px', background: '#1a1a1a', padding: '20px', borderRadius: '15px'}}>
                            {car.specs && Object.entries(car.specs).map(([key, value]) => (
                                <div key={key} style={{display: 'flex', flexDirection: 'column'}}>
                                    <span style={{fontSize: '12px', color: '#888', textTransform: 'uppercase'}}>{key}</span>
                                    <span style={{fontWeight: 'bold', color: 'white'}}>{value}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* DOTĂRI (Features) */}
                    <div className="features-container">
                        <h3 className="section-title" style={{marginTop: '40px', marginBottom: '20px'}}>Dotări și Echipamente</h3>
                        {car.features && (
                            <>
                                <details className="feature-accordion" open>
                                    <summary>Audio și Tehnologie</summary>
                                    <ul className="feature-list">
                                        {car.features.audio.map((item, i) => <li key={i}>✓ {item}</li>)}
                                    </ul>
                                </details>
                                <details className="feature-accordion">
                                    <summary>Confort</summary>
                                    <ul className="feature-list">
                                        {car.features.comfort.map((item, i) => <li key={i}>✓ {item}</li>)}
                                    </ul>
                                </details>
                                <details className="feature-accordion">
                                    <summary>Siguranță</summary>
                                    <ul className="feature-list">
                                        {car.features.safety.map((item, i) => <li key={i}>✓ {item}</li>)}
                                    </ul>
                                </details>
                            </>
                        )}
                    </div>
                </div>

                {/* SIDEBAR CALCULATOR (PREMIUM) */}
                <div className="right-sidebar">
                    <div className="calculator-card">
                        <div className="price-tag">
                            €{car.cost} <span style={{fontSize: '14px', color: '#888', fontWeight: 'normal'}}>/ zi</span>
                        </div>

                        <div className="calc-inputs">
                            <div className="date-group">
                                <div className="date-field">
                                    <label>📅 Preluare</label>
                                    <input type="date" onChange={(e) => setStartDate(e.target.value)} className="premium-date-input"/>
                                </div>
                                <div className="date-field">
                                    <label>📅 Returnare</label>
                                    <input type="date" onChange={(e) => setEndDate(e.target.value)} className="premium-date-input"/>
                                </div>
                            </div>
                            <button onClick={handleCalculate} className="calc-btn">Calculează Preț</button>
                        </div>

                        {totalPrice > 0 && (
                            <div className="result-box">
                                <div className="result-row"><span>Durată:</span><strong>{days} Zile</strong></div>
                                <div className="result-total"><span>Total:</span><strong>€{totalPrice}</strong></div>
                                <button 
                                    className="finalize-btn"
                                    onClick={handleAddToCart}
                                    disabled={isAdded}
                                    style={{
                                        backgroundColor: isAdded ? '#333' : '#ff4d4d',
                                        color: isAdded ? '#777' : 'white',
                                        cursor: isAdded ? 'default' : 'pointer',
                                        marginTop: '15px', width: '100%', padding: '15px', border: 'none', borderRadius: '8px', fontWeight: 'bold', textTransform: 'uppercase'
                                    }}
                                >
                                    {isAdded ? 'Rezervat ✓' : 'Rezervă Acum'}
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CarDetail;