import { observer } from "mobx-react-lite";
import React, { useState } from "react";
import { ICanvas } from "../../../interfaces/ICanvas";
import Canvas from "./components/Canvas";
import Start from "./components/Start";
import "./style/style.css";

const CreateFigure = () => {
  const [canvas, setCanvas] = useState<ICanvas>({
    pointNr: 0,
    startAnim: false,
  });

  return (
    <div id="create_figure">
      {canvas.pointNr === 0 && <Start />}
      <Canvas setCanvas={setCanvas} canvas={canvas} />
    </div>
  );
};

export default observer(CreateFigure);
