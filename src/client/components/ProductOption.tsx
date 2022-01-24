import * as React from "react";
import { useState } from "react";
import { IProductSize } from "../interfaces";

interface productOptionProps {
  productName: string;
  price: number;
  salePrice: number;
  productSize: IProductSize[] | undefined;
}

interface option {
  [size: string]: number;
}

function ProductOption(props: productOptionProps) {
  const [option, setOption] = useState<option>({});
  const [totalPrice, setTotalPrice] = useState<number>(0);

  const handleSizeClick = (e: React.MouseEvent) => {
    e.preventDefault();

    const size = e.currentTarget.getAttribute("data-size");
    if (size && !option.size) {
      setOption({ ...option, [size]: 1 });
    }
  };

  const handleQuantityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/[^0-9]/g, "");
    const inputValue = value === "" ? 1 : Number(value);

    const size = e.currentTarget.parentElement
      ? e.currentTarget.parentElement.getAttribute("data-size")
      : null;

    if (size) {
      setOption({ ...option, [size]: inputValue });
    }
  };

  const handleRemoveClick = (e: React.MouseEvent) => {
    const size = e.currentTarget.getAttribute("data-size");

    if (size) {
      const tmp = option;
      delete tmp[size];

      setOption({ ...tmp });
    }
  };

  return (
    <div className="productOption">
      <table className="productOption__info">
        <tbody>
          <tr>
            <td>
              <span>
                <strong
                  style={
                    props.salePrice
                      ? { textDecoration: "line-through" }
                      : undefined
                  }
                >{`KRW ${props.price}`}</strong>
              </span>
            </td>
          </tr>
          <tr>
            <td>
              {props.salePrice ? (
                <span>
                  {`KRW ${props.salePrice}`}
                  <span>{` ( KRW ${props.price - props.salePrice} 할인)`}</span>
                </span>
              ) : null}
            </td>
          </tr>
        </tbody>
      </table>
      <table className="productOption__size">
        <tbody>
          <tr>
            <th scope="row">SIZE</th>
            <td>
              <ul>
                {props.productSize
                  ? props.productSize.map((size, index) => {
                      return (
                        <li key={index}>
                          <a
                            data-size={size.size}
                            href=""
                            onClick={handleSizeClick}
                          >
                            <span>{size.size}</span>
                          </a>
                        </li>
                      );
                    })
                  : null}
              </ul>
            </td>
          </tr>
        </tbody>
      </table>
      <div className="box__selectedOption">
        <table>
          <colgroup>
            <col style={{ width: "230px" }} />
            <col style={{ width: "60px" }} />
          </colgroup>
          <tbody>
            {option
              ? Object.keys(option).map((size, index) => {
                  return (
                    <tr className="selectedOption__product" key={index}>
                      <td>
                        <p>
                          {props.productName}
                          <br />-<span>{size}</span>
                        </p>
                      </td>
                      <td>
                        <span data-size={size}>
                          <input
                            value={option[size]}
                            onChange={handleQuantityChange}
                          />
                          <a href="">
                            <img src="" alt="수량증가" />
                          </a>
                          <a href="">
                            <img src="" alt="수량감소" />
                          </a>
                        </span>
                        <a href="" data-size={size} onClick={handleRemoveClick}>
                          <img src="" alt="삭제" />
                        </a>
                      </td>
                    </tr>
                  );
                })
              : null}
          </tbody>
        </table>
      </div>
      <div className="box__totalPrice">
        <strong>{`Total `}</strong>:
        <span className="totalPrice__total">
          <strong>
            <em>{totalPrice == 0 ? ` 0` : ` KRW ${totalPrice}`}</em>
          </strong>
        </span>
      </div>
    </div>
  );
}

export default ProductOption;
