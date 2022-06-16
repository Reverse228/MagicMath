import { loadFull } from "tsparticles";

export const maxStartPoints = 3;
export const vertexNames = ["A", "B", "C"];
export const maxRander = 10000;
export const oneLayerRender = 10;
export const layerMaxCount = 10;

export const particlesInit = async (main: any) => {
  await loadFull(main);
};
