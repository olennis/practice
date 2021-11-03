import { atom } from "recoil";
export const counterState = atom({
  key: "counterState",
  default: 0,
});
export const stateTest = atom({
  key: "stateTest",
  default: "???",
});
