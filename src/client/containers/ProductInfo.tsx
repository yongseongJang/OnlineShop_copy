import * as React from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../reducers/types";
import { productActions } from "../actions";
import {
  ProductDetail,
  ProductImage,
  ProductGuide,
  ProductOption,
  TopMenu,
} from "../components";

interface ProductInfoProps {
  category: string;
  productId: number;
}

function ProductInfo(props: ProductInfoProps) {
  const [browserWidth, setBrowserWidth] = useState<number>(
    window.innerHeight ? window.innerWidth : document.body.clientWidth,
  );

  const dispatch = useDispatch();
  const { product } = useSelector((state: RootState) => state.productReducer);

  let resizeTimer = setTimeout(() => {
    return 0;
  }, 0);
  const handleResize = () => {
    if (resizeTimer) {
      clearTimeout(resizeTimer);
    }

    resizeTimer = setTimeout(() => {
      setBrowserWidth(
        window.innerHeight ? window.innerWidth : document.body.clientWidth,
      );
    }, 100);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);

    dispatch(
      productActions.requestProductDetail(props.category, props.productId),
    );

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="productInfo">
      <TopMenu />
      {product ? (
        <>
          <section className="productInfo__image">
            <img
              src={`${process.env.REACT_APP_S3_URI}/${product.image}`}
              alt=""
            />
          </section>
          <section className="productInfo__left">
            <ProductDetail
              brandName={props.category}
              productName={product.name}
              productDetail={product.productDetail}
            ></ProductDetail>
          </section>
          <section className="productInfo__center">
            <ProductImage productImage={product.productImage}></ProductImage>
          </section>
          <section
            className="productInfo__right"
            style={{ inset: `0px auto auto ${browserWidth * 0.75}px` }}
          >
            <div className="right__wrap">
              <div className="wrap__contents">
                <div className="contents__box">
                  <ProductOption
                    productName={product.name}
                    price={product.price}
                    salePrice={product.salePrice}
                    productSize={product.productSize}
                  ></ProductOption>
                  <div className="box__order-wrap">
                    <a className="order-wrap__leftBtn" href="">
                      BUY NOW
                    </a>
                    <a className="order-wrap__rightBtn" href="">
                      ADD TO CART
                    </a>
                  </div>
                  <ProductGuide
                    productCaution={product.productCaution}
                    name={product.name}
                    size={product.size}
                  ></ProductGuide>
                </div>
              </div>
            </div>
          </section>
        </>
      ) : null}
    </div>
  );
}

export default ProductInfo;
