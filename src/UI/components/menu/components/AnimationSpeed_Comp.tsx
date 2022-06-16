import { observer } from "mobx-react-lite";
import React, { useState } from "react";
import "../style/components_style/animationSpeed_style/style.css";

const AnimationSpeed_Comp = () => {
  const [speed, setSpeed] = useState(1);

  return (
    <div id="animation_speed">
      <div id="text_anim">
        <p>Animation speed</p>

        <div id="text_speed">
          <p>x</p>
          <input
            type="number"
            value={speed}
            onChange={(e) => {
              if (Number(e.target.value) <= 100 && Number(e.target.value) > 0) {
                setSpeed(Number(e.target.value));
              } else if (Number(e.target.value) > 100) {
                setSpeed(100);
              } else if (Number(e.target.value) < 1) {
                setSpeed(1);
              }
            }}
          />
        </div>
      </div>
      <input
        type="range"
        min="1"
        max="100"
        step="1"
        value={speed}
        onChange={(e) => {
          setSpeed(Number(e.target.value));
        }}
      />
    </div>
  );
};

export default observer(AnimationSpeed_Comp);
