export interface IData {
  city: string;
  minTemp: number;
  maxTemp: number;
}

export interface IResponse {
  hourly: { temperature_2m: number[] };
}
