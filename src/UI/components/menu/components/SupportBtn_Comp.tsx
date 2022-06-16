import { observer } from "mobx-react-lite";
import React from "react";
import Particles from "react-tsparticles";
import { particlesInit } from "../../../../utils/mainUtil";
import ParticalBg_Comp from "../../particalBg/ParticalBg_Comp";
import "../style/components_style/support_style/style.css";

const SupportBtn_Comp = () => {
  return (
    <div id="support">
      <h3>Support project</h3>
      <ParticalBg_Comp width="300px" height="100px">
        <Particles
          id="tsparticlesSupport"
          init={particlesInit}
          options={{
            fullScreen: {
              enable: false,
              zIndex: -1,
            },
            fpsLimit: 120,
            particles: {
              number: {
                value: 100,
              },
              size: {
                anim: {
                  enable: true,
                  speed: 1,
                  size_min: 0.5,
                },
                value: 2,
                random: true,
              },
              opacity: {
                anim: {
                  enable: true,
                  speed: 0.5,
                  opacity_min: 0.1,
                },
                value: 0.8,
                random: true,
              },
              move: {
                enable: true,
                speed: 0.3,
              },
            },
            detectRetina: true,
          }}
        />
      </ParticalBg_Comp>
    </div>
  );
};

export default observer(SupportBtn_Comp);
