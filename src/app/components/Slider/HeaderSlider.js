import React, { Fragment } from "react";
import { Button, Carousel } from "react-bootstrap";
import "./HeaderSlider.css";
function HeaderSlider() {
  return (
    <Fragment>
      <Carousel variant="dark" style={{ maxHeihgt: "650px" }}>
        <Carousel.Item>
          <img
            className="d-block w-100"
            style={{ height: "100vh", objectFit: "contain" }}
            src="https://5.imimg.com/data5/JT/GF/XA/SELLER-15610517/musqari-multipurpose-leather-handbags-for-ladies-cum-shoulder-bag.jpg"
            alt="pure pu ladies bag"
          />
          <Carousel.Caption className="bg-white">
            <h5>Summer Collection Pure PU Ladies Shoulder Bag </h5>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            <div className="mb-3">
              <Button variant="dark">Shop Now</Button>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            style={{ height: "100vh", objectFit: "contain" }}
            src="https://purendesi.in/wp-content/uploads/2022/03/cold-pressed-mustard-oil-2.jpeg"
            alt="pure mustard oil"
          />
          <Carousel.Caption className="bg-white">
            <h5>Organic Pure Mustard Oil</h5>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            <div className="mb-3">
              <Button variant="dark">Shop Now</Button>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            style={{ height: "100vh", objectFit: "contain" }}
            src="https://myborosil.com/cdn/shop/products/my-borosil-food-mixers-blenders-nutrifresh-pb31-29490968264842.jpg?v=1690956757"
            alt="smart blender home appliance"
          />
          <Carousel.Caption className="bg-white">
            <h5>Decorate Your Smart Kitchen</h5>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            <div className="mb-3">
              <Button variant="dark">Shop Now</Button>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </Fragment>
  );
}

export default HeaderSlider;
