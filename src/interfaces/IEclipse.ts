export interface IPoints {
  x: number;
  y: number;
}

export interface IStartPoint {
  points: IPoints;
}

export interface IEllipse {
  name: string;
  points: IPoints;
}
