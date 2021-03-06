import * as React from "react";
import { useState } from "react";
import { IProductCaution } from "../interfaces";

interface productGuideProps {
  productCaution: IProductCaution[] | undefined;
  name: string;
  size: string;
}

function ProductGuide(props: productGuideProps) {
  const [isVisibleGuide, setIsVisibleGuide] = useState<boolean>(false);
  const [activeTab, setActiveTab] = useState<number>(1);

  const handleGuideClick = (e: React.MouseEvent) => {
    e.preventDefault();

    setIsVisibleGuide(!isVisibleGuide);
  };

  const handleTabClick = (e: React.MouseEvent) => {
    e.preventDefault();

    const id = e.currentTarget.id.split("_")[2];

    switch (id) {
      case "1":
        setActiveTab(1);
        break;
      case "2":
        setActiveTab(2);
        break;
    }
  };

  return (
    <div className="productGuide">
      <div
        className="productGuide__size-popup"
        style={isVisibleGuide ? undefined : { display: "none" }}
      >
        <span className="size-popup__closeBtn" onClick={handleGuideClick}>
          <span className="closeBtn__wrap">
            <span className="wrap__line1"></span>
            <span className="wrap__line2"></span>
          </span>
        </span>
        <img src={`${process.env.REACT_APP_CLOUDFRONT_URI}/${props.size}`} />
      </div>
      <span className="productGuide__size">
        <a
          href="#"
          target="_blank"
          rel="noopener noreferrer"
          onClick={handleGuideClick}
        >
          SIZE GUIDE
        </a>
      </span>
      <ul className="productGuide__nav">
        <li>
          <a
            id="productGuide_tab_1"
            className={activeTab == 1 ? "nav__tab-active" : undefined}
            href="#"
            onClick={handleTabClick}
          >
            CAUTION
          </a>
        </li>
        <li>
          <a
            id="productGuide_tab_2"
            className={activeTab == 2 ? "nav__tab-active" : undefined}
            href="#"
            onClick={handleTabClick}
          >
            DELIVERY
          </a>
        </li>
      </ul>
      <div className="productGuide__stage">
        <div
          className="state-1"
          style={activeTab === 1 ? undefined : { display: "none" }}
        >
          <p>
            {props.productCaution &&
              props.productCaution.map((caution, index) => {
                return (
                  <React.Fragment key={index}>
                    {caution.caution}
                    <br />
                    <br />
                  </React.Fragment>
                );
              })}
          </p>
        </div>
        <div
          className="stage-2"
          style={activeTab === 2 ? undefined : { display: "none" }}
        >
          <p>
            <strong>?????? ??????</strong>
            <br />
            ??????????????? ???????????? ????????? ?????? ????????? ????????? ????????????. ??????,
            ??????????????? ????????? ????????? ????????? ?????? ????????? ??? ????????????.
            <br />
            ???????????? ??? 2~4??? ????????????, ?????? ?????? ????????? ?????? ????????? ????????? ??????
            ???????????????.
            <br />
            <br />
            <strong>?????? ??? ??????</strong>
            <br />- ?????? ??? ????????? ??????????????? ???????????? ?????? ?????? ???????????? ??????
            ???????????? ??? ????????? ?????? ????????? ????????? ????????????.
            <br />- ?????? ??? ?????? ????????? ????????? ????????? ?????? ?????? 7??? ??????
            ???????????????, 14??? ????????? ????????? ????????? ??????????????? ???????????????.
            <br />- ???????????? : 02-0000-0000
          </p>
        </div>
      </div>
    </div>
  );
}

export default ProductGuide;
