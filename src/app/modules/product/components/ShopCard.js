import React from 'react';
import '../../../assets/custom.css';

export const ShopCard = () => {
  return(
    <div className="col-md-3">
      <div className="shop-card">
        <div className="shop-card-details">
          <img className="shop-card-image"
            src="https://thumbs.dreamstime.com/z/demo-sign-icon-stamp-blue-vector-92101308.jpg"/>
          <div className="shop-card-text-container">
            <div>Apex</div>
            <div>Apex</div>
            <div>Apex</div>
          </div>
        </div>
        <div className="shop-card-options">
          <button className="chat-button">Chat</button>
          <button className="buy-button">Buy</button>
        </div>
      </div>
    </div>
  )
}
