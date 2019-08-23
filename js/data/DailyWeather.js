class DailyWeather {
          constructor(data) {
                    this.date = new Date(data.time * 1000);
                    this.temp = data.temperatureMax;
          }
}