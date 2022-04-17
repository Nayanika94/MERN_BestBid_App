import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import axios from 'axios';





const Product = (props) => {


  let { id } = useParams();
  const [product, setProduct] = useState([]);


  useEffect(() => {
    sendGetRequest();
  }, []);

  const sendGetRequest = async () => {
    try {
      let token = localStorage.getItem("token");

      let config = {
        headers: {
          "Content-Type": "application/json",
          "x-auth-token": token,
        },
      };

      const response = await axios.get(
        `http://localhost:5000/api/product/${id}`,
        config
      );
      setProduct(response.data);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="container">
      <div className="container m-auto">
        <div className="m-4 mainWindow shadow bg-white-rounded p-1">
          <div className="d-flex flex-row flex-no-wrap bg-1">
            <div className="flex-grow-1 m-2">
              <img className="product-img p-2" style={{ objectFit: "scale-down", maxWidth: "25rem", marginTop: "50px", marginBottom: "50px" }} src={product.photo} alt={product.id} />
            </div>
            <div className="flex-grow-1 m-2 p-1">
              <div className="d-flex flex-column">
                <div className="desc p-1 d-flex justify-content-between">
                  <h4> {product.title} </h4>
                  <h4>C${product.price}</h4>
                </div>
                <div className="">
                  {/* seller-name p-1 */}
                  <small>{product.date}</small>
                </div>
                <div className="">
                  {product.description}
                </div>
                <div className="">
                  {/* sizes mt-1 pr-1 */}
                  <br />

                  <input type="number" placeholder={`Min C$${product.price}.00`} />
                  <button
                    type="button"
                    className="btn btn-xs mb-1 btn-primary mr-3"
                  >
                    Place Bid
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    // <div className="container">
    //   <div className="col-lg-8 border p-3 main-section bg-white">
    //     <div className="row m-0">
    //       <div className="col-lg-4 left-side-product-box pb-3">
    //         <img className="product-img p-2" style={{ objectFit: "scale-down", maxWidth: "25rem", margin: "50px" }} src={product.photo} alt={product.id} class="border p-3" />
    //       </div>
    //       <div className="col-lg-8">
    //         <div className="right-side-pro-detail border p-3 m-0">
    //           <div className="row">
    //             <div className="col-lg-12">
    //               <p class="m-0 p-0">{product.title}</p>
    //             </div>
    //             <div className="col-lg-12">
    //               <p className="m-0 p-0 price-pro">${product.price}</p>
    //               <hr className="p-0 m-0" />
    //             </div>
    //             <div className="col-lg-12 pt-2">
    //               <h5>Product Detail</h5>
    //               <span>{product.description}</span>
    //               <hr className="m-0 pt-2 mt-2" />
    //             </div>
    //             <div className="sizes mt-1 pr-1">
    //               {/**/}
    //               <br />

    //               <input type="number" placeholder={`Min C$${product.price}.00`} />
    //               <div >
    //                 <button
    //                   type="button"
    //                   className="btn btn-xs mb-1 btn-primary mr-3"
    //                 >
    //                   Place Bid
    //                 </button>
    //               </div>
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
};

export default Product;


