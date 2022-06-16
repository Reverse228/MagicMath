export const handleMouseDownUtil = (
  e: any,
  isDrawing: any,
  setMousePosition: any
) => {
  isDrawing.current = true;
  const pos = e.target.getStage().getPointerPosition();
  setMousePosition((mousePosition: any) => ({
    ...mousePosition,
    x: pos.x,
    y: pos.y,
  }));
};
