export const serialiseWeatherData = (data: any[], cities: string[]) => {
  const minTempArray = data?.map((data) =>
    Math.min(...data?.hourly.temperature_2m)
  );
  const maxTempAray = data?.map((data) =>
    Math.max(...data?.hourly.temperature_2m)
  );
  const weatherData = cities.map((data, index) => ({
    city: data,
    minTemp: minTempArray[index],
    maxTemp: maxTempAray[index],
  }));
  return weatherData;
};
