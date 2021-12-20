import { atom } from "recoil";

export interface IUserState {
  id: string;
  email: string;
  nickName: string;
  pw: string;
}

export const initialUserState: IUserState = {
  id: "",
  email: "",
  nickName: "",
  pw: "",
};

export const userState = atom<IUserState>({
  key: "userState",
  default: initialUserState,
});
