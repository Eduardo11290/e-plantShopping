import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeItem, updateQuantity } from './CartSlice';
import { Link } from 'react-router-dom'; // Importăm Link
import './CartItem.css'; 

const CartItem = () => { // Nu mai avem nevoie de props
  const cart = useSelector(state => state.cart.items);
  const dispatch = useDispatch();

  const calculateTotalAmount = () => {
    let total = 0;
    cart.forEach((item) => {
        total += item.cost * item.quantity;
    });
    return total;
  };

  const handleIncrement = (item) => {
    dispatch(updateQuantity({ id: item.id, quantity: item.quantity + 1 }));
  };

  const handleDecrement = (item) => {
    if (item.quantity > 1) {
      dispatch(updateQuantity({ id: item.id, quantity: item.quantity - 1 }));
    } else {
      dispatch(removeItem(item.id));
    }
  };

  const handleRemove = (item) => {
    dispatch(removeItem(item.id));
  };

  const handleCheckoutShopping = () => {
    alert('Funcționalitatea de plată urmează să fie implementată!');
  };

  return (
    <div className="cart-container">
      {/* Navbar simplu pentru Cart */}
      <div style={{ marginBottom: '20px', borderBottom: '1px solid #ddd', paddingBottom: '10px' }}>
          <Link to="/cars" style={{ textDecoration: 'none', color: '#ff4d4d', fontWeight: 'bold' }}>
              ← Înapoi la Flotă
          </Link>
      </div>

      <h2 style={{ color: 'black' }}>Coșul tău de rezervări</h2>
      
      {cart.length === 0 ? (
        <div className="empty-cart">
            <p>Nu ai nicio mașină rezervată momentan.</p>
            <Link to="/cars">
                <button className="get-started-btn">Înapoi la Flotă</button>
            </Link>
        </div>
      ) : (
        <div>
            <div className="cart-items-list">
                {cart.map(item => (
                <div className="cart-item" key={item.id}>
                    <img className="cart-item-image" src={item.images ? item.images[0] : item.image} alt={item.name} />
                    <div className="cart-item-details">
                        <div className="cart-item-name">{item.name}</div>
                        <div className="cart-item-cost">€{item.cost} / zi</div>
                        
                        <div className="cart-item-quantity">
                            <button className="cart-item-button cart-item-button-dec" onClick={() => handleDecrement(item)}>-</button>
                            <span className="cart-item-count">{item.quantity}</span>
                            <button className="cart-item-button cart-item-button-inc" onClick={() => handleIncrement(item)}>+</button>
                        </div>
                        
                        <div className="cart-item-total">Subtotal: €{item.cost * item.quantity}</div>
                        <button className="cart-item-delete" onClick={() => handleRemove(item)}>Șterge</button>
                    </div>
                </div>
                ))}
            </div>
            
            <div className="cart-summary">
                <div className="total_cart_amount" style={{ marginTop: '20px', color: 'black' }}>
                    Total estimat (1 zi): <strong>€{calculateTotalAmount()}</strong>
                </div>
                
                <div className="continue_shopping_btn">
                    <Link to="/cars">
                        <button className="get-started-btn">Continuă Navigarea</button>
                    </Link>
                    <br />
                    <button className="get-started-btn1" onClick={handleCheckoutShopping} style={{backgroundColor: '#ff4d4d', color: 'white', marginTop: '10px'}}>
                        Finalizează Rezervarea
                    </button>
                </div>
            </div>
        </div>
      )}
    </div>
  );
};

export default CartItem;