import { observer } from "mobx-react-lite";
import React from "react";
import AnimationSpeed_Comp from "./components/AnimationSpeed_Comp";
import MenuBtns_Comp from "./components/MenuBtns_Comp";
import Name_Comp from "./components/Name_Comp";
import SupportBtn_Comp from "./components/SupportBtn_Comp";
import "./style/style.css";

const Menu = () => {
  return (
    <div id="menu">
      <Name_Comp />
      <MenuBtns_Comp />
      <SupportBtn_Comp />
      <AnimationSpeed_Comp />
    </div>
  );
};

export default observer(Menu);
