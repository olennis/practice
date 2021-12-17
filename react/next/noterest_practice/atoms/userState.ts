import { atom } from "recoil";

export interface IUserState {
  id: string;
  email: string;
  nickName: string;
}

export const initialUserState: IUserState = {
  id: "",
  email: "",
  nickName: "",
};

export const userState = atom<IUserState>({
  key: "userState",
  default: initialUserState,
});
