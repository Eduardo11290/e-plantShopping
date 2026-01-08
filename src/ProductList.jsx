import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import './ProductList.css';
import { addItem } from './CartSlice';
import carsData from './carsData'; 

function ProductList() {
    const dispatch = useDispatch();
    const cartItems = useSelector(state => state.cart.items);

    useEffect(() => {
        const savedScroll = sessionStorage.getItem('scrollPosition');
        if (savedScroll) {
            window.scrollTo(0, parseInt(savedScroll));
        }
    }, []);

    const saveScrollPosition = () => {
        sessionStorage.setItem('scrollPosition', window.scrollY);
    };

    const isAddedToCart = (carId) => {
        return cartItems.some(item => item.id === carId);
    };

    // --- AICI ESTE MODIFICAREA PENTRU REZERVARE RAPIDĂ ---
    const handleAddToCart = (product) => {
        // Calculăm automat: Azi -> Mâine (1 zi)
        const today = new Date();
        const tomorrow = new Date(today);
        tomorrow.setDate(tomorrow.getDate() + 1);

        const startDate = today.toISOString().split('T')[0];
        const endDate = tomorrow.toISOString().split('T')[0];

        // Trimitem mașina în coș cu aceste date
        dispatch(addItem({
            ...product,
            quantity: 1,
            startDate: startDate,
            endDate: endDate
        }));
    };

    const navbarStyle = {
        backgroundColor: '#000', color: '#fff', padding: '15px 30px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', position: 'fixed', top: 0, left: 0, width: '100%', zIndex: 1000, borderBottom: '1px solid #333', boxSizing: 'border-box'
    };

    return (
        <div className="main-container">
            {/* Navbar-ul global e gestionat de App.jsx, aici e doar conținutul */}
            
            <div className="product-grid">
                {carsData.map((category, index) => (
                    // Adăugăm ID-uri pentru scroll-ul din Navbar
                    <div key={index} id={`cat-${index}`} style={{ marginBottom: '50px', scrollMarginTop: '100px' }}>
                        <h2>{category.category}</h2>
                        
                        <div className="product-list">
                            {category.cars.map((car) => (
                                <div className="product-card" key={car.id}>
                                    <Link to={`/cars/${car.id}`} onClick={saveScrollPosition} style={{ height: '200px', overflow: 'hidden', cursor: 'pointer', position: 'relative' }}>
                                        <img src={car.images[0]} alt={car.name} />
                                        <div style={{position: 'absolute', bottom: 0, left: 0, width: '100%', height: '50px', background: 'linear-gradient(to top, rgba(0,0,0,0.8), transparent)'}}></div>
                                    </Link>
                                    
                                    <div style={{ padding: '25px', flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
                                        <h3 style={{ margin: '0 0 10px 0', color: 'white', fontSize: '1.4rem' }}>{car.name}</h3>
                                        <p style={{ color: '#aaa', fontSize: '14px', flexGrow: 1, lineHeight: '1.6', marginBottom: '20px' }}>
                                            {car.description.substring(0, 80)}...
                                        </p>
                                        
                                        <div style={{ fontSize: '22px', fontWeight: 'bold', color: '#ff4d4d', marginBottom: '20px' }}>
                                            €{car.cost} <span style={{fontSize: '14px', color: '#888', fontWeight: 'normal'}}>/ zi</span>
                                        </div>

                                        <Link 
                                            to={`/cars/${car.id}`} 
                                            onClick={saveScrollPosition}
                                            style={{ 
                                                display: 'block', textAlign: 'center', textDecoration: 'none', color: 'white', 
                                                background: '#333', padding: '12px', borderRadius: '8px', marginBottom: '10px', fontWeight: '600', transition: '0.3s'
                                            }} 
                                            className="details-btn"
                                        >
                                            Vezi Detalii & Dotări
                                        </Link>

                                        <button 
                                            onClick={() => handleAddToCart(car)}
                                            disabled={isAddedToCart(car.id)}
                                            style={{
                                                width: '100%', 
                                                padding: '12px', 
                                                backgroundColor: isAddedToCart(car.id) ? '#444' : '#ff4d4d', 
                                                color: isAddedToCart(car.id) ? '#aaa' : 'white',
                                                border: 'none', 
                                                borderRadius: '6px', 
                                                cursor: isAddedToCart(car.id) ? 'default' : 'pointer', 
                                                fontWeight: 'bold',
                                                textTransform: 'uppercase'
                                            }}
                                        >
                                            {isAddedToCart(car.id) ? 'În Coș' : 'Rezervă Acum'}
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ProductList;