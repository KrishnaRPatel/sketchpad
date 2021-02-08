exports.precipitationType = {
  0: "precipitation ⛅",
  1: "rain ☂️",
  2: "snow ❄️",
  3: "freezing rain 🌨️",
  4: "ice pellets 🌧️",
};

exports.airQuality = {
  0: "good 🪟",
  1: "moderate ✅",
  2: "unhealthy for sensitive groups 😷",
  3: "unhealthy 👎",
  4: "very unhealthy 😵",
  5: "hazardous 🛑",
};

exports.weatherType = {
  4201: "Heavy Rain 🌧️🌧️🌧️",
  4001: "Rain 🌧️",
  4200: "Light Rain 🌧️",
  6201: "Heavy Freezing Rain ❄️🌧️",
  6001: "Freezing Rain ❄️🌧️",
  6200: "Light Freezing Rain ❄️🌧️",
  6000: "Freezing Drizzle ❄️🌧️",
  4000: "Drizzle 🌧️",
  7101: "Heavy Ice Pellets 🧊🧊🧊",
  7000: "Ice Pellets 🧊🧊",
  7102: "Light Ice Pellets 🧊",
  5101: "Heavy Snow ☃️",
  5000: "Snow 🌨️",
  5100: "Light Snow 🌨️",
  5001: "Flurries 🌨️",
  8000: "Thunderstorm 🌩️",
  2100: "Light Fog 💨",
  2000: "Fog 🌁",
  1001: "Cloudy ☁️",
  1102: "Mostly Cloudy 🌥️",
  1101: "Partly Cloudy ⛅",
  1100: "Mostly Clear 🌴",
  1000: "Clear and Sunny 🏖️",
};

exports.direction = function (degrees) {
  if (degrees < 22.5 || degrees >= 337.5) return `⬆️`;
  if (degrees < 67.5) return `↗️`;
  if (degrees < 112.5) return `➡️`;
  if (degrees < 157.5) return `↘️`;
  if (degrees < 202.5) return `⬇️`;
  if (degrees < 247.5) return `↙️`;
  if (degrees < 292.5) return `⬅️`;
  return `↖️`;
};
