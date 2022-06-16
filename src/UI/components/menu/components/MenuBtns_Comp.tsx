import { observer } from "mobx-react-lite";
import React from "react";
import Particles from "react-tsparticles";
import { particlesInit } from "../../../../utils/mainUtil";
import ParticalBg_Comp from "../../particalBg/ParticalBg_Comp";
import "../style/components_style/menuBtns_style/style.css";

const MenuBtns_Comp: React.FC = () => {
  const createMenuBtn = (text: string, shortId: string) => {
    return (
      <div className="btns">
        <div className="hoverText">
          <p>{text}</p>
        </div>
        <div className="none-particle"></div>
        <ParticalBg_Comp width="250px" height="50px">
          <Particles
            id={`tsparticlesMenuBtns${shortId}`}
            init={particlesInit}
            options={{
              fullScreen: {
                enable: false,
                zIndex: -1,
              },
              fpsLimit: 120,
              particles: {
                number: {
                  value: 15,
                },
                size: {
                  anim: {
                    enable: true,
                    speed: 1,
                    size_min: 0.5,
                  },
                  value: 5,
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
                  speed: 0.5,
                },
              },
              detectRetina: true,
            }}
          />
        </ParticalBg_Comp>
      </div>
    );
  };

  return (
    <div id="menuBtns-contianer">
      {createMenuBtn("Rules", "Rules")}
      {createMenuBtn("How it works?", "How")}
      {createMenuBtn("Why is it needed?", "Why")}
    </div>
  );
};

export default observer(MenuBtns_Comp);
