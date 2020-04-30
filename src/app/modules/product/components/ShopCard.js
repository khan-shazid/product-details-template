import React from 'react';
import '../../../assets/custom.css';

export const ShopCard = ({item}) => {
  return(
    <div className="col-md-3">
      <div className="shop-card">
        <div className="shop-card-details">
          <img className="shop-card-image"
            src={item.shop_image}/>
          <div className="shop-card-text-container">
            <p className="shop-name">{item.shop_name}</p>
            <p style={{fontSize:9,color:'#9e9e9e'}}>{item.shop_address}</p>
            <p style={{fontWeight:'bold'}}>{item.price} BDT</p>
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

export const Image = ({source,dimen,selected,setAsSelected}) => {
  // console.log("selected",selected)
  return(
    <img
      onClick={()=>setAsSelected(source)}
      className={selected ? 'selected-image' : ''}
      style={{height:dimen,width:dimen}}
      src={source}/>
  )
}
