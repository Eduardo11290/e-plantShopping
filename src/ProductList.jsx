import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import './ProductList.css';
import CartItem from './CartItem';
import { addItem } from './CartSlice';

function ProductList({ onHomeClick }) {
    const [showCart, setShowCart] = useState(false);
    const [addedToCart, setAddedToCart] = useState({});
    const dispatch = useDispatch();

   const carsArray = [
    {
        category: "Economic & Compact",
        cars: [
            { 
                name: "Toyota Corolla", 
                image: "https://ireland.apollo.olxcdn.com/v1/files/xbnijot1n4hd3-AUTOVITRO/image;s=644x461", 
                description: "Toyota Corolla este alegerea ideală pentru deplasările urbane și extraurbane. Oferă un consum redus de combustibil, fiabilitate dovedită și un interior confortabil pentru până la 5 pasageri. Perfectă pentru cei care caută o mașină practică, sigură și ușor de condus.", 
                cost: "€45" 
            },
            { 
                name: "Volkswagen Golf 8", 
                image: "https://ireland.apollo.olxcdn.com/v1/files/mrfnp7hz7gm2-AUTOVITRO/image;s=644x461", 
                description: "Volkswagen Golf 8 combină designul modern cu tehnologia avansată și un nivel ridicat de confort. Este ușor de manevrat în oraș, dar suficient de stabil pentru drumuri lungi, fiind o alegere excelentă pentru șoferii care doresc echilibru între stil și funcționalitate.", 
                cost: "€65" 
            },
            { 
                name: "Ford Focus", 
                image: "https://ireland.apollo.olxcdn.com/v1/files/krkhq7w7tgfk2-AUTOVITRO/image;s=644x461", 
                description: "Ford Focus oferă o experiență de condus plăcută, cu o manevrabilitate excelentă și un interior ergonomic. Este potrivit atât pentru oraș, cât și pentru călătorii mai lungi, oferind confort, siguranță și spațiu suficient pentru pasageri și bagaje.", 
                cost: "€58" 
            }
        ]
    },
    {
        category: "Luxury & Executive",
        cars: [
            { 
                name: "Mercedes-Benz S-Class", 
                image: "https://ireland.apollo.olxcdn.com/v1/files/hfsoh6is1nzg3-AUTOVITRO/image;s=644x461", 
                description: "Mercedes-Benz S-Class reprezintă standardul suprem al luxului auto. Interiorul rafinat, tehnologiile avansate și nivelul excepțional de confort transformă fiecare călătorie într-o experiență premium, ideală pentru evenimente speciale sau deplasări de afaceri.", 
                cost: "€230" 
            },
            { 
                name: "BMW Seria 7", 
                image: "https://ireland.apollo.olxcdn.com/v1/files/lucdujgwhjuv-AUTOVITRO/image;s=644x461", 
                description: "BMW Seria 7 oferă un echilibru perfect între performanță sportivă și confort de lux. Designul elegant, tehnologia de ultimă generație și spațiul generos din interior îl fac alegerea ideală pentru cei care doresc rafinament și dinamism.", 
                cost: "€190" 
            }
        ]
    },
    {
        category: "SUV & Family",
        cars: [
            { 
                name: "Range Rover Sport", 
                image: "https://ireland.apollo.olxcdn.com/v1/files/8daz3offo1b72-AUTOVITRO/image;s=644x461", 
                description: "Range Rover Sport este un SUV puternic și versatil, conceput pentru confort maxim indiferent de drum. Oferă spațiu generos, poziție de condus înaltă și un interior premium, fiind ideal atât pentru aventuri, cât și pentru călătorii în familie.", 
                cost: "€150" 
            },
            { 
                name: "Volvo XC90", 
                image: "https://ireland.apollo.olxcdn.com/v1/files/zw86f7bxnm541-AUTOVITRO/image;s=644x461", 
                description: "Volvo XC90 este SUV-ul perfect pentru familii, punând accent pe siguranță, confort și spațiu. Interiorul elegant și bine organizat oferă o experiență relaxantă la drum lung, fiind potrivit atât pentru oraș, cât și pentru vacanțe.", 
                cost: "€130" 
            }
        ]
    },
    {
        category: "Electric & Hybrid",
        cars: [
            { 
                name: "Tesla Model 3", 
                image: "https://ireland.apollo.olxcdn.com/v1/files/t6w0ezrjbebw-AUTOVITRO/image;s=644x461", 
                description: "Tesla Model 3 este o alegere modernă pentru cei care doresc o experiență de condus silențioasă și eficientă. Designul minimalist, tehnologia avansată și autonomia generoasă o fac ideală pentru oraș și deplasări pe distanțe mai mari.", 
                cost: "€110" 
            }
        ]
    }
];


    const styleObj = {
        backgroundColor: '#2c3e50',
        color: '#fff',
        padding: '15px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        fontSize: '20px',
        boxShadow: '0 4px 8px rgba(0,0,0,0.2)'
    };

    const styleObjUl = {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        gap: '20px',
        paddingRight: '20px'
    };

    const styleA = {
        color: 'white',
        fontSize: '18px',
        textDecoration: 'none',
        fontWeight: 'bold',
        cursor: 'pointer'
    };

    const handleHomeClick = (e) => {
        e.preventDefault();
        onHomeClick();
    };

    const handleCartClick = (e) => {
        e.preventDefault();
        setShowCart(true);
    };

    const handleCarsClick = (e) => {
        e.preventDefault();
        setShowCart(false);
    };

    const handleContinueShopping = (e) => {
        e.preventDefault();
        setShowCart(false);
    };

    const handleAddToCart = (product) => {
        dispatch(addItem(product));
        setAddedToCart((prevState) => ({
            ...prevState,
            [product.name]: true,
        }));
    };

    return (
        <div className="main-container">
            <div className="navbar" style={styleObj}>
                <div className="tag">
                    <div className="luxury" style={{display: 'flex', alignItems: 'center', gap: '10px'}}>
                        <img src="https://cdn-icons-png.flaticon.com/512/3202/3202926.png" alt="car-logo" style={{width: '50px', filter: 'invert(1)'}} />
                        <a href="/" onClick={handleHomeClick} style={{textDecoration: 'none'}}>
                            <div>
                                <h3 style={{ color: 'white', margin: 0 }}>AutoRent Premium</h3>
                                <i style={{ color: '#ccc', fontSize: '14px' }}>Drive the Experience</i>
                            </div>
                        </a>
                    </div>
                </div>

                <div style={styleObjUl}>
                    <div><a href="#" onClick={handleCarsClick} style={styleA}>Flota Auto</a></div>
                    <div>
                        <a href="#" onClick={handleCartClick} style={styleA}>
                            <div className="cart" style={{display: 'flex', alignItems: 'center', gap: '5px'}}>
                                <span style={{fontSize: '30px'}}>🛒</span>
                            </div>
                        </a>
                    </div>
                </div>
            </div>

            {!showCart ? (
                <div className="product-grid">
                    {carsArray.map((category, index) => (
                        <div key={index}>
                            <h2 style={{borderBottom: '2px solid #2c3e50', paddingBottom: '10px', marginTop: '30px', color: '#333'}}>
                                {category.category}
                            </h2>
                            <div className="product-list">
                                {category.cars.map((car, i) => (
                                    <div className="product-card" key={i}>
                                        <div className="image-container">
                                            <img className="product-image" src={car.image} alt={car.name} />
                                        </div>
                                        <div className="product-details">
                                            <div className="product-title">{car.name}</div>
                                            <div className="product-description">{car.description}</div>
                                            <div className="product-cost">{car.cost} / zi</div>
                                            <button 
                                                className="product-button" 
                                                onClick={() => handleAddToCart(car)}
                                                disabled={addedToCart[car.name]}
                                                style={{
                                                    backgroundColor: addedToCart[car.name] ? '#ccc' : '#2c3e50',
                                                    cursor: addedToCart[car.name] ? 'default' : 'pointer',
                                                }}
                                            >
                                                {addedToCart[car.name] ? 'Rezervat' : 'Rezervă Acum'}
                                            </button>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            ) : (
                <CartItem onContinueShopping={handleContinueShopping} />
            )}
        </div>
    );
}

export default ProductList;