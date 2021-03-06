import { Record } from "immutable";
import type { RecordOf } from "immutable";
import { loginConstants } from "../actions";

interface State {
  isRequesting: boolean;
  token: string;
  expirationTime: number;
  email: string;
  userName: string;
  error: string;
}

const defaultValues: State = {
  isRequesting: false,
  token: "",
  expirationTime: 0,
  email: "",
  userName: "",
  error: "",
};

const makeLoginState: Record.Factory<State> = Record(defaultValues);

export type LoginState = RecordOf<State>;

const initialState: LoginState = makeLoginState();

export const loginReducer = (
  state = initialState,
  action: { type: string; payload: { [key: string]: any } },
) => {
  switch (action.type) {
    case loginConstants.LOGIN_REQUEST:
      return state.update("isRequesting", () => true);
    case loginConstants.LOGIN_SUCCESS:
      const { token, expirationTime, userName } = action.payload;

      return state
        .update("isRequesting", () => false)
        .update("token", () => token)
        .update("expirationTime", () => expirationTime)
        .update("userName", () => userName);
    case loginConstants.LOGIN_FAILURE:
      const { err } = action.payload;

      return state
        .update("isRequesting", () => false)
        .update("error", () => err);
    case loginConstants.LOGOUT_REQUEST:
      return state.update("isRequesting", () => true);
    case loginConstants.LOGOUT_SUCCESS:
      return state
        .update("isRequesting", () => false)
        .update("token", () => "")
        .update("expirationTime", () => 0)
        .update("userName", () => "");
    case loginConstants.RESET_ERROR:
      return state.update("error", () => "");
    default:
      return state;
  }
};
