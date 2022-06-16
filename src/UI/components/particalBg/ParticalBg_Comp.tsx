import { observer } from "mobx-react-lite";
import React, { ReactNode } from "react";
import "./style/style.css";

type Props = {
  children: ReactNode;
  width: string;
  height: string;
};

const ParticalBg_Comp: React.FC<Props> = ({ children, width, height }) => {
  return (
    <div
      className="particalBg"
      style={{
        width: width,
        height: height,
      }}
    >
      <div className="mask"></div>
      <div
        className="partical-contianer"
        style={{
          height: height,
        }}
      >
        {children}
      </div>
    </div>
  );
};

export default observer(ParticalBg_Comp);
