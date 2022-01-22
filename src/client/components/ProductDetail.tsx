import * as React from "react";
import { IProductDetail } from "../interfaces";

interface productDetailProps {
  brandName: string;
  productName: string;
  productDetail: IProductDetail[];
}

function ProductDetail(props: productDetailProps) {
  return (
    <div className="productDetail">
      <div className="productDetail__contents">
        <div className="contents__box">
          <div className="box__name">
            <a href="" className="name__brandName">
              {props.brandName}
            </a>
            <h5 className="name__productName">{props.productName}</h5>
          </div>
          <div className="box__detail">
            {props.productDetail.map((detail, index) => {
              return (
                <React.Fragment key={index}>
                  <br />
                  {detail.detail}
                </React.Fragment>
              );
            })}
            <br />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;
