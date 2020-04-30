import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../../assets/custom.css';
import ReactImageZoom from 'react-image-zoom';

import { ShopCard, Image } from './components/ShopCard';

function ProductDetails() {
  const [data, setdata] = useState({});
  const [zoomedImage, setZoomedImage] = useState('https://thumbs.dreamstime.com/z/demo-sign-icon-stamp-blue-vector-92101308.jpg');
  const [selectedProduct, setSelectedProduct] = useState();
  const [width, setWidth] = useState(0);

  useEffect(() => {
    console.log('mounted')
    async function fetchData(){
      try {
        const response = await axios.get('https://api-dev.evaly.com.bd/core/public/products/colorsize-e7c141f05/');
        // if()
        console.log(response.data);
        if(response.data.success){
          setdata(response.data.data)
          if(response.data.data.product_variants.length>0){
            setSelectedProduct(0)
            setZoomedImage(response.data.data.product_variants[0].product_images[0])
          }
          setWidth(500/response.data.data.product_variants[0].product_images.length);
        }
      } catch (error) {
        console.error(error);
      }
    }
    fetchData();

  }, []);

  function showAttributes(){
    let arr = [];
    data.attributes.map((item,i)=>{
      let temp = []
      arr.push(<h2 key={i}>{item.attribute_name}</h2>)
      item.attribute_values.map((item2,j)=>{
        temp.push(<button key={j} style={{margin:5,borderRadius:5}}>{item2.value}</button>)
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
  return (
    <>
      <div className="jumbotron text-center">
        <h1>Product Details</h1>
      </div>

      <div className="container">
        <div className="row">
          <div className="col-sm-6 text-center">
            <div className="imgBox" style={{padding:10}}>
              <ReactImageZoom
                width={500}
                height={500}
                zoomWidth={400}
                zoomStyle='opacity: 1;z-index:999;'
                img={zoomedImage}
                />
            </div>

            <div style={{display:'flex',justifyContent:'space-between',marginTop:20}}>
              {
                data.product_variants && selectedProduct >=0 ?
                data.product_variants[selectedProduct].product_images.map((item,i)=>{
                  // console.log(item)
                  return(<Image key={i} source={item} dimen={width} selected={zoomedImage==item} />)
                }) : ''
              }
            </div>
          </div>
          <div className="col-sm-6 text-right">
            <h2>{selectedProduct >= 0 ? data.product_variants[selectedProduct].product_name : ''}</h2>
            <h6>SKU - {selectedProduct >= 0 ? data.product_variants[selectedProduct].sku : ''}</h6>
            <h5>BRAND - {selectedProduct >= 0 ? data.product_variants[selectedProduct].brand_name : ''}</h5>
            <p>{selectedProduct >= 0 ? data.product_variants[selectedProduct].product_description : ''}</p>
            {
              data.attributes && showAttributes()
            }
            <h2>Specifications</h2>
            <div className="table-responsive">
              <table className="table table-hover">
                <tbody>
                {
                  data.product_specifications &&
                  data.product_specifications.map((item,i)=>{
                    return(
                      <tr key={i}>
                        <td>{item.specification_name}</td>
                        <td>{item.specification_value}</td>
                      </tr>
                    )
                  })
                }
                </tbody>
              </table>
            </div>


          </div>
        </div>
        <div className="row" style={{marginTop:100,marginBottom:200}}>
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
