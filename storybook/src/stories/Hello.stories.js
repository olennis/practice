import React from "react";
import Hello from "./Hello";
import { withKnobs, text, boolean } from "@storybook/addon-knobs";
export default {
  title: "components/basic/Hello",
  component: Hello,
  decorators: [withKnobs],
};
export const hello = () => {
  // knobs 만들기
  const big = boolean("big", false, "Group 1");
  const name = text("name", "Storybook");
  return <Hello name={name} big={big} />;
};
hello.story = {
  name: "Default",
};

export const standard = () => <Hello name="storybook" />;
export const bigtest = () => <Hello name="Storybook" big />;
