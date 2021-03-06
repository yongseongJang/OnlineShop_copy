import { INonMemberInfo, IOrderInfo } from "../interfaces";
import { IShippingInfo, IPaymentInfo } from "../interfaces";

export const orderConstants = {
  REQUEST_ORDER_ADD: "REQUEST_ORDER_ADD",
  SUCCESS_ORDER_ADD: "SUCCESS_ORDER_ADD",
  FAILURE_ORDER_ADD: "FAILURE_ORDER_ADD",
  REQUEST_SHIPPING_INFO: "REQUEST_SHIPPING_INFO",
  REQUEST_SHIPPING_INFO_SUCCESS: "REQUEST_SHIPPING_INFO_SUCCESS",
  REQUEST_SHIPPING_INFO_FAILURE: "REQUEST_SHIPPING_INFO_FAILURE",
  REQUEST_MEMBER_ORDER_INFO: "REQUEST_MEMBER_ORDER_INFO",
  REQUEST_MEMBER_ORDER_INFO_SUCCESS: "REQUEST_MEMBER_ORDER_INFO_SUCCESS",
  REQUEST_MEMBER_ORDER_INFO_FAILURE: "REQUEST_MEMBER_ORDER_INFO_FAILURE",
  REQUEST_NON_MEMBER_ORDER_INFO: "REQUEST_NON_MEMBER_ORDER_INFO",
  REQUEST_NON_MEMBER_ORDER_INFO_SUCCESS:
    "REQUEST_NON_MEMBER_ORDER_INFO_SUCCESS",
  REQUEST_NON_MEMBER_ORDER_INFO_FAILURE:
    "REQUEST_NON_MEMBER_ORDER_INFO_FAILURE",
  REQUEST_MEMBER_PAYMENT: "REQUEST_MEMBER_PAYMENT",
  REQUEST_MEMBER_PAYMENT_SUCCESS: "REQUEST_MEMBER_PAYMENT_SUCCESS",
  REQUEST_MEMBER_PAYMENT_FAILURE: "REQUEST_MEMBER_PAYMENT_FAILURE",
  REQUEST_NON_MEMBER_PAYMENT: "REQUEST_NON_MEMBER_PAYMENT",
  REQUEST_NON_MEMBER_PAYMENT_SUCCESS: "REQUEST_NON_MEMBER_PAYMENT_SUCCESS",
  REQUEST_NON_MEMBER_PAYMENT_FAILURE: "REQUEST_NON_MEMBER_PAYMENT_FAILURE",
  RESET_ERROR: "RESET_ERROR",
  RESET: "RESET",
};

const add = (isAllProduct: boolean, cartList?: number[]) => {
  return {
    type: orderConstants.REQUEST_ORDER_ADD,
    payload: {
      isAllProduct,
      cartList,
    },
  };
};

const addSuccess = (isAllProduct: boolean, cartList?: number[]) => {
  return {
    type: orderConstants.SUCCESS_ORDER_ADD,
    payload: {
      isAllProduct,
      cartList,
    },
  };
};

const addFailure = (err: unknown) => {
  return {
    type: orderConstants.FAILURE_ORDER_ADD,
    payload: {
      err,
    },
  };
};

const requestShippingInfo = (token: string) => {
  return {
    type: orderConstants.REQUEST_SHIPPING_INFO,
    payload: {
      token,
    },
  };
};

const requestShippingInfoSuccess = (shippingInfo: IShippingInfo) => {
  return {
    type: orderConstants.REQUEST_SHIPPING_INFO_SUCCESS,
    payload: {
      shippingInfo,
    },
  };
};

const requestShippingInfoFailure = (err: unknown) => {
  return {
    type: orderConstants.REQUEST_SHIPPING_INFO_FAILURE,
    payload: {
      err,
    },
  };
};

const requestMemberOrderInfo = (token: string) => {
  return {
    type: orderConstants.REQUEST_MEMBER_ORDER_INFO,
    payload: {
      token,
    },
  };
};

const requestMemberOrderInfoSuccess = (orderInfo: IOrderInfo[]) => {
  return {
    type: orderConstants.REQUEST_MEMBER_ORDER_INFO_SUCCESS,
    payload: {
      orderInfo,
    },
  };
};

const requestMemberOrderInfoFailure = (err: unknown) => {
  return {
    type: orderConstants.REQUEST_MEMBER_ORDER_INFO_FAILURE,
    payload: {
      err,
    },
  };
};

const requestNonMemberOrderInfo = (nonMemberInfo: INonMemberInfo) => {
  return {
    type: orderConstants.REQUEST_NON_MEMBER_ORDER_INFO,
    payload: {
      nonMemberInfo,
    },
  };
};

const requestNonMemberOrderInfoSuccess = (orderInfo: IOrderInfo[]) => {
  return {
    type: orderConstants.REQUEST_NON_MEMBER_ORDER_INFO_SUCCESS,
    payload: {
      orderInfo,
    },
  };
};

const requestNonMemberOrderInfoFailure = (err: unknown) => {
  return {
    type: orderConstants.REQUEST_NON_MEMBER_ORDER_INFO_FAILURE,
    payload: {
      err,
    },
  };
};

const requestMemberPayment = (paymentInfo: IPaymentInfo, token: string) => {
  return {
    type: orderConstants.REQUEST_MEMBER_PAYMENT,
    payload: {
      paymentInfo,
      token,
    },
  };
};

const requestMemberPaymentSuccess = () => {
  return {
    type: orderConstants.REQUEST_MEMBER_PAYMENT_SUCCESS,
  };
};

const requestMemberPaymentFailure = (err: unknown) => {
  return {
    type: orderConstants.REQUEST_MEMBER_PAYMENT_FAILURE,
    payload: {
      err,
    },
  };
};

const requestNonMemberPayment = (paymentInfo: IPaymentInfo) => {
  return {
    type: orderConstants.REQUEST_NON_MEMBER_PAYMENT,
    payload: {
      paymentInfo,
    },
  };
};

const requestNonMemberPaymentSuccess = () => {
  return {
    type: orderConstants.REQUEST_NON_MEMBER_PAYMENT_SUCCESS,
  };
};

const requestNonMemberPaymentFailure = (err: unknown) => {
  return {
    type: orderConstants.REQUEST_NON_MEMBER_PAYMENT_FAILURE,
    payload: {
      err,
    },
  };
};

const resetError = () => {
  return {
    type: orderConstants.RESET_ERROR,
  };
};

const reset = () => {
  return {
    type: orderConstants.RESET,
  };
};

export const orderActions = {
  add,
  addSuccess,
  addFailure,
  requestShippingInfo,
  requestShippingInfoSuccess,
  requestShippingInfoFailure,
  requestMemberOrderInfo,
  requestMemberOrderInfoSuccess,
  requestMemberOrderInfoFailure,
  requestNonMemberOrderInfo,
  requestNonMemberOrderInfoSuccess,
  requestNonMemberOrderInfoFailure,
  requestMemberPayment,
  requestMemberPaymentSuccess,
  requestMemberPaymentFailure,
  requestNonMemberPayment,
  requestNonMemberPaymentSuccess,
  requestNonMemberPaymentFailure,
  resetError,
  reset,
};
