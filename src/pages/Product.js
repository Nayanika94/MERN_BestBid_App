import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const styles = {
  card: {
    width: "650px",
    background: "white",
    margin: "0 auto",
    top: "50%",
    left: "20%",
    transform: "translate(-50%, -0%)",
    boxShadow:
      "0 2px 5px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12)",
    transition: "all 0.3s",
  },
  photo: {
    padding: "30px",
    width: "45%",
    textAlign: "center",
    float: "left",
  },
  img: {
    maxHeight: "240px",
  },
  description: {
    padding: "30px",
    float: "left",
    width: "55%",
    borderLeft: "2px solid #efefef",
  },
  descHeader: {
    color: "#515151",
    fontWeight: "300",
    paddingTop: "15px",
    margin: "0",
    fontSize: "30px",
  },
  descHeader2: {
    color: "#515151",
    margin: "0",
    textTransform: "uppercase",
    fontWeight: "500",
  },
  descPara: {
    fontSize: "12px",
    lineHeight: "20px",
    color: "#727272",
    padding: "20px 0",
    margin: "0",
  },
  button: {
    outline: 0,
    background: "#4CAF50",
    border: "1px solid #d9d9d9",
    padding: "8px 0px",
    marginBottom: "30px",
    color: "#fff",
    textTransform: "uppercase",
    width: "125px",
    fontFamily: "inherit",
    marginRight: "5px",
    transition: "all 0.3s ease",
    fontWeight: "500",
  },
};

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

  const placeBid = () => {
    console.log("here");
  };

  return (
    <div className="container" style={{ width: "800px" }}>
      <h4 style={{ textAlign: "center" }}>Product Detail</h4>
      <div className="container m-auto">
        <div className="m-4 mainWindow shadow bg-white-rounded p-1">
          <div className="d-flex flex-row flex-no-wrap">
            <div className="flex-grow-1 m-2" style={styles.photo}>
              <img
                className="product-img p-2"
                style={{
                  objectFit: "scale-down",
                  maxWidth: "15rem",
                  margin: "px",
                }}
                src={product.photo}
                alt={product.id}
              />
            </div>
            <div class="vr"></div>
            <div className="flex-grow-1 m-2 p-1">
              <div className="d-flex flex-column">
                <div className="title">
                  <h4> {product.title} </h4>
                </div>

                <div className="desc" style={{ fontSize: "15px" }}>
                  {product.description}
                </div>
                <h4>C${product.price}</h4>
                {/* <div className="mt-1 pr-1">
                  <input type="number" placeholder={`Min C$${product.price}.00`} />
                </div> */}
                <div className="input-group mb-3">
                  <div className="input-group-prepend">
                    <span className="input-group-text">$</span>
                  </div>
                  <input
                    type="text"
                    className="form-control"
                    aria-label="Amount (to the nearest dollar)"
                    placeholder={`Min C$${product.price}.00`}
                  />
                </div>
                <div className="mt-1 pr-2">
                  <button
                    onClick={placeBid}
                    style={styles.button}
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
  );
};

export default Product;

{
  /* <div className="container">
<div className="container m-auto">
  <div className="m-4 mainWindow shadow bg-white-rounded p-1">
    <div className="d-flex flex-row flex-no-wrap">
      <div className="flex-grow-1 m-2" style={styles.photo}>
        <img className="product-img p-2" style={{ objectFit: "scale-down", maxWidth: "25rem", margin: "px" }} src={product.photo} alt={product.id} />
      </div>
      <div className="flex-grow-1 m-2 p-1">
        <div className="d-flex flex-column">
          <div className="">
            <h4> {product.title} </h4>
          </div>
          <div className="">
            {product.description}
          </div>
          <h4>C${product.price}</h4>
          <div className="mt-1 pr-1">
            <input type="number" placeholder={`Min C$${product.price}.00`} />
          </div>
          <div className="mt-4 pr-2">
            <button style={styles.button}
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
</div> */
}

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
