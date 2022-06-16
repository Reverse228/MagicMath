import { observer } from "mobx-react-lite";
import React, { useEffect, useRef, useState } from "react";
import { Ellipse, Layer, Stage } from "react-konva";
import { IAnimMaterial } from "../../../../interfaces/IAnimMaterial";
import { ICanvas } from "../../../../interfaces/ICanvas";
import { IEllipse, IStartPoint } from "../../../../interfaces/IEclipse";
import {
  maxStartPoints,
  oneLayerRender,
  vertexNames,
} from "../../../../utils/mainUtil";
import "../style/components_style/canvas_style/style.css";

type Props = {
  canvas: ICanvas;
  setCanvas: any;
};

const Canvas: React.FC<Props> = ({ canvas, setCanvas }) => {
  const [sizeCanv, setSizeCanv] = useState({
    height: 0,
    width: 0,
  });

  const canvasCont = useRef<HTMLHeadingElement>(null);

  const [ellipse, setEllipse] = useState<IEllipse[]>([]);
  const [startPoint, setStartPoint] = useState<IStartPoint>({
    points: { x: 0, y: 0 },
  });

  const [count, setCount] = useState(0);

  const [animMaterial, setAnimMaterial] = useState<IAnimMaterial>({
    randomVertex: -1,
    points: { x: -1, y: -1 },
  });

  const [animMaterialsArray, setAnimMaterialsArray] = useState<IAnimMaterial[]>(
    []
  );

  const getNewMaterialPoints = (randomVertex: number, material: any) => {
    const vertex = ellipse[randomVertex - 1];

    const startAnimPoint = material;

    const distanceX = vertex.points.x - startAnimPoint.points.x;
    const middleDistanceX = distanceX / 2;

    const distanceY = vertex.points.y - startAnimPoint.points.y;
    const middleDistanceY = distanceY / 2;

    const newMaterialX = startAnimPoint.points.x + middleDistanceX;
    const newMaterialY = startAnimPoint.points.y + middleDistanceY;

    const newPoints = { x: newMaterialX, y: newMaterialY };

    return newPoints;
  };

  const getRandomVertex = () => {
    const randomVertex: number = Math.floor(Math.random() * maxStartPoints + 1);
    return randomVertex;
  };

  const generateAnimMaterial = () => {
    const randomVertexGenerate = getRandomVertex();

    const firstAnimMaterial =
      animMaterial.randomVertex === -1 ? startPoint : animMaterial;

    const newCoord = getNewMaterialPoints(
      randomVertexGenerate,
      firstAnimMaterial
    );

    setAnimMaterial((animMaterial: IAnimMaterial) => ({
      ...animMaterial,
      randomVertex: randomVertexGenerate,
      points: { x: newCoord.x, y: newCoord.y },
    }));

    if (animMaterial.randomVertex > 0) {
      setAnimMaterialsArray([...animMaterialsArray, animMaterial]);
    }
  };

  const handleMouseDown = (e: any) => {
    const pos = e.target.getStage().getPointerPosition();
    if (canvas.pointNr < maxStartPoints) {
      setCanvas((canvas: ICanvas) => ({
        ...canvas,
        pointNr: canvas.pointNr + 1,
      }));
      setEllipse([
        ...ellipse,
        { name: vertexNames[canvas.pointNr], points: { x: pos.x, y: pos.y } },
      ]);
    } else if (
      canvas.pointNr === maxStartPoints &&
      startPoint.points.x === 0 &&
      startPoint.points.y === 0
    ) {
      setStartPoint((startPoint: any) => ({
        ...startPoint,
        points: { x: pos.x, y: pos.y },
      }));
    }
  };

  // ---------------------------------------------------
  // ------------------ Use Effects --------------------
  // ---------------------------------------------------

  // Get size for canvas
  useEffect(() => {
    setSizeCanv((sizeCanv: any) => ({
      ...sizeCanv,
      height: canvasCont.current?.clientHeight,
      width: canvasCont.current?.clientWidth,
    }));
  }, [canvasCont]);

  // Ckeck if animation can start
  useEffect(() => {
    if (
      startPoint.points.x !== 0 &&
      startPoint.points.y !== 0 &&
      canvas.pointNr === maxStartPoints
    ) {
      setCanvas((canvas: ICanvas) => ({
        ...canvas,
        startAnim: true,
      }));
    }
  }, [startPoint.points, canvas.pointNr]);

  // Create material with delay
  useEffect(() => {
    let counter = count;
    const interval = setInterval(() => {
      if (canvas.startAnim)
        if (counter > oneLayerRender) {
          clearInterval(interval);
        } else {
          setCount((count: number) => count + 1);
          counter++;
          generateAnimMaterial();
        }
    }, 1);
    return () => clearInterval(interval);
  }, [canvas.startAnim, count]);

  return (
    <div id="canvas_container" ref={canvasCont}>
      <Stage
        width={sizeCanv.width}
        height={sizeCanv.height}
        id="main_canvas"
        onMouseDown={handleMouseDown}
      >
        <Layer>
          {startPoint.points.x !== 0 && startPoint.points.y !== 0 && (
            <Ellipse
              radiusX={25}
              radiusY={25}
              x={startPoint.points.x}
              y={startPoint.points.y}
              fill="#2980b9"
            />
          )}
          {ellipse.map((circle: IEllipse, inx: number) => {
            return (
              <Ellipse
                key={inx}
                radiusX={15}
                radiusY={15}
                x={circle.points.x}
                y={circle.points.y}
                fill="#e74c3c"
              />
            );
          })}
        </Layer>

        {console.log(animMaterialsArray.length)}

        <Layer>
          {canvas.startAnim &&
            animMaterialsArray.length != 0 &&
            animMaterialsArray.map(
              (animMaterial: IAnimMaterial, inx: number) => {
                {
                  console.log(animMaterial);
                }

                return (
                  <Ellipse
                    key={inx}
                    radiusX={1}
                    radiusY={1}
                    x={animMaterial.points.x}
                    y={animMaterial.points.y}
                    fill="#9b59b6"
                  />
                );
              }
            )}
        </Layer>
      </Stage>
    </div>
  );
};

export default observer(Canvas);
