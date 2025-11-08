import { ImageSourcePropType } from "react-native";

export interface Weather {
  city: string;
  temperature: number;
  condition: string;
  high: number;
  low: number;
}

export enum WeatherType {
  Rainy,
  Windy,
  Stormy,
  Clear,
  Cloudy,
  Showers,
  Sunny,
  Tornado,
}

export enum ForecastType {
  Hourly = "Hourly",
  Weekly = "Weekly",
}
export interface Forecast {
  date: Date;
  weather: WeatherType;
  probability: number;
  temperature: number;
  high: number;
  low: number;
  location: string;
  icon: ImageSourcePropType;
  type: ForecastType;
}

export interface WeatherForecastPeriod {
  number: number;
  name: string;
  startTime: string;
  endTime: string;
  isDaytime: boolean;
  temperatureTrend: string;
  probabilityOfPrecipitation: WeatherValueDetail;
  dewpoint: WeatherValueDetail;
  relativeHumidity: WeatherValueDetail;
  windDirection: string;
  shortForecast: string;
  detailedForecast: string;
}

export interface WeatherValueDetail {
  value: number;
  maxValue: number;
  minValue: number;
  unitCode: string;
  qualityControl: string;
}

export interface WeatherForecastProperties {
  geometry: string;
  units: string;
  forecastGenerator: string;
  generatedAt: string;
  updateTime: string;
  elevation: WeatherValueDetail;
  periods: WeatherForecastPeriod[];
}

export interface WeatherForecastFeature {
  id: string;
  type: string;
  properties: WeatherForecastProperties;
}
export interface WeatherPointProperties {
  geometry: string;
  id: string;
  type: string;
  cwa: string;
  forecastOffice: string;
  gridId: string;
  gridX: number;
  gridY: number;
  forecast: string;
  forecastHourly: string;
  forecastGridData: string;
  observationStations: string;
  forecastZone: string;
  county: string;
  fireWeatherZone: string;
  timeZone: string;
  radarStation: string;
}

export interface WeatherPointResponse {
  id: string;
  type: string;
  properties: WeatherPointProperties;
}
