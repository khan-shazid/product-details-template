import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../../assets/custom.css';
import ReactImageZoom from 'react-image-zoom';

import { ShopCard, Image, ProductDescriptionComponent, Attributes } from './components/Component';

function ProductDetails() {
  const [data, setdata] = useState({});
  const [zoomedImage, setZoomedImage] = useState('');
  const [selectedProduct, setSelectedProduct] = useState();
  const [width, setWidth] = useState(0);
  const [shopList, setShopList] = useState([]);
  const [attributeFlag, setAttributeFlag] = useState(true);
  const [selectedAttributes, setSelectedAttributes] = useState({});

  useEffect(() => {
    console.log('mounted')
    fetchData();

  }, []);
  async function fetchData(){
    try {
      const response = await axios.get('https://api-dev.evaly.com.bd/core/public/products/colorsize-e7c141f05/');
      // if()
      console.log(response.data);
      if(response.data.success){
        setdata(response.data.data)
        if(response.data.data.product_variants.length>0){
          setSelectedProduct(0);
          setZoomedImage(response.data.data.product_variants[0].product_images[0]);
          fetchShopList(response.data.data.product_variants[0].variant_id);
        }
        setWidth(500/response.data.data.product_variants[0].product_images.length);
      }
    } catch (error) {
      console.error(error);
    }
  }

  async function fetchShopList(variantId){
    try {
      const response = await axios.get('https://api-dev.evaly.com.bd/core/public/product/shops/'+variantId+'/');
      console.log("fetchShopList",response)
      if(response.data.success){
        setShopList(response.data.data)
      }
    } catch (error) {
      console.error(error);
    }
  }

  function setAttriIndex(x,y){
    let temp = selectedAttributes;
    temp[x] = y;
    setSelectedAttributes(selectedAttributes);
    setAttributeFlag(!attributeFlag);
    let flag = false;
    const values = Object.values(temp)
    // console.log("values",values)
    for(let i = 0 ; i < data.product_variants.length ; i++){
      for(let j = 0 ; j < values.length ; j++){
        if(data.product_variants[i].attribute_values.includes(values[j])){
          console.log("checked","true",values[j]);
          flag = true;
        }else{
          break;
          flag = false;
        }
      }
      if(flag){
        console.log("product id",i)
        setSelectedProduct(i);
        if(data.product_variants[i].product_images.length){
          setZoomedImage(data.product_variants[i].product_images[0]);
        }
        fetchShopList(data.product_variants[i].variant_id);
        break;
      }
    }
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
            {
              zoomedImage ?
              <ReactImageZoom
                width={500}
                height={500}
                zoomWidth={400}
                zoomStyle='opacity: 1;z-index:999;'
                img={zoomedImage}
                /> :
                'Loading...'
            }

            </div>

            <div style={{display:'flex',justifyContent:'space-between',marginTop:20}}>
              {
                data.product_variants && selectedProduct >=0 ?
                data.product_variants[selectedProduct].product_images.map((item,i)=>{
                  // console.log(item)
                  return(<Image key={i} source={item} dimen={width} selected={zoomedImage==item} setAsSelected={setZoomedImage} />)
                }) : ''
              }
            </div>
          </div>
          <div className="col-sm-6 text-right">
            {
              selectedProduct >= 0 ? <ProductDescriptionComponent product={data.product_variants[selectedProduct]} /> : 'loading...'
            }
            {
              data.attributes &&
              (
                attributeFlag ?
                  <Attributes
                    attributes={data.attributes}
                    selectedObj={selectedAttributes}
                    setIndexs={setAttriIndex}/>:
                  <Attributes
                    attributes={data.attributes}
                    selectedObj={selectedAttributes}
                    setIndexs={setAttriIndex}/>
                )
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
        <div className="row shop-container">
          {
            shopList.map((item,i)=><ShopCard key={i} item={item} />)
          }
        </div>
      </div>
    </>

  );
}

export default ProductDetails;
