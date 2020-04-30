import React from 'react';
// import logo from './logo.svg';
import '../../assets/custom.css';
import ReactImageZoom from 'react-image-zoom';

import { ShopCard } from './components/ShopCard';

function ProductDetails() {
  return (
    <>
      <div class="jumbotron text-center">
        <h1>Product Details</h1>
      </div>

      <div class="container">
        <div class="row">
          <div class="col-sm-6 text-center" style={{background:'#e8e5e5',padding:10}}>
            <div className="imgBox" style={{padding:10}}>
              <ReactImageZoom
                width={500}
                height={500}
                zoomWidth={400}
                zoomStyle='opacity: 1;z-index:999;'
                img="https://cdn.shopify.com/s/files/1/0008/8814/3931/products/6_8_10_12_x_3_SQ_1200x1200.png?v=1520206731"
                />
            </div>

            <div style={{display:'flex',justifyContent:'space-between',marginTop:20}}>
              <img style={{height:100,width:100}}
                src="https://thumbs.dreamstime.com/z/demo-sign-icon-stamp-blue-vector-92101308.jpg"/>
              <img style={{height:100,width:100}}
                src="https://thumbs.dreamstime.com/z/demo-sign-icon-stamp-blue-vector-92101308.jpg"/>
              <img style={{height:100,width:100}}
                src="https://thumbs.dreamstime.com/z/demo-sign-icon-stamp-blue-vector-92101308.jpg"/>
              <img style={{height:100,width:100}}
                src="https://thumbs.dreamstime.com/z/demo-sign-icon-stamp-blue-vector-92101308.jpg"/>
              <img style={{height:100,width:100}}
                src="https://thumbs.dreamstime.com/z/demo-sign-icon-stamp-blue-vector-92101308.jpg"/>
            </div>
          </div>
          <div class="col-sm-6 text-right">
            <h2>Name</h2>
            <h6>SKU - </h6>
            <h5>BRAND - </h5>
            <p>Apple vision has always been to create an iPhone mobile that is entirely screen. One so immersive the smartphone device itself disappears into the experience. And so intelligent it can respond to a tap, your voice, and even a glance. With iPhone X mobile phone, that vision is now a reality. Say hello to the future.

Apple vision has always been to create an iPhone mobile that is entirely screen. One so immersive the smartphone device itself disappears into the experience. And so intelligent it can respond to a tap, your voice, and even a glance. With iPhone X mobile phone, that vision is now a reality. Say hello to the future.
Apple vision has always been to create an iPhone mobile that is entirely screen. One so immersive the smartphone device itself disappears into the experience. And so intelligent it can respond to a tap, your voice, and even a glance. With iPhone X mobile phone, that vision is now a reality. Say hello to the future.</p>
          </div>
        </div>
        <div class="row" style={{marginTop:100,marginBottom:200}}>
          <ShopCard />
          <ShopCard />
          <ShopCard />
          <ShopCard />
          <ShopCard />
          <ShopCard />
          <ShopCard />
          <ShopCard />
        </div>
      </div>
    </>

  );
}

export default ProductDetails;
