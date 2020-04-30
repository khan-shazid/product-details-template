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
            <p className="shop-address">{item.shop_address}</p>
            <p>{item.price} BDT</p>
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
  return(
    <img
      onClick={()=>setAsSelected(source)}
      className={selected ? 'selected' : ''}
      style={{height:dimen,width:dimen}}
      src={source}/>
  )
}

export const ProductDescriptionComponent = ({product}) => {
  return(
    <>
      <h2>{product.product_name}</h2>
      <h6>SKU - {product.sku}</h6>
      <h5>BRAND - {product.brand_name}</h5>
      <p>{product.product_description}</p>
    </>
  )
}

export const Attributes = ({attributes,selectedObj,setIndexs}) => {
    let arr = [];
    attributes.map((item,i)=>{
      let temp = []
      arr.push(<h2 key={i}>{item.attribute_name}</h2>)
      item.attribute_values.map((item2,j)=>{
        temp.push(<button key={j}
                          className={"attribute-button "+(selectedObj[item.attribute_name]==item2.key ? 'selected' : '')}
                          onClick={()=>setIndexs(item.attribute_name,item2.key)}>
                          {item2.value}
                  </button>
            )
      })
      arr.push(
        <div className="row" key={i+50}>
          <div className="col-md-12">
          {temp}
          </div>
        </div>
      )
    })
    return arr;
}
