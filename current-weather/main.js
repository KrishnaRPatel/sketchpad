const https = require("https");
const querystring = require("querystring");
const {
  precipitationType,
  airQuality,
  weatherType,
  direction,
} = require("./utils");

const SECRET_KEY = process.env.CLIMACELL_SECRET_KEY;
const LOCATION_ID = process.env.CLIMACELL_LOCATION;

const now = new Date();
const earlier = new Date(now.getTime() - 1000 * 60);

const qs = {
  location: LOCATION_ID,
  fields: [
    "temperature",
    "weatherCode",
    "precipitationProbability",
    "precipitationType",
    "windSpeed",
    "windDirection",
    "humidity",
    "epaHealthConcern",
  ],
  startTime: earlier.toISOString(),
  endTime: now.toISOString(),
  timesteps: "1m",
  units: "imperial",
  apikey: SECRET_KEY,
};

const queryString = querystring.stringify(qs);
const reqPath = new URL("https://data.climacell.co/v4/timelines");
reqPath.search = queryString;

const req = https.get(reqPath.href, (res) => {
  let data = "";
  res.on("data", (d) => {
    data += d;
  });
  res.on("close", () => {
    if (res.statusCode === 200) {
      let weatherData = JSON.parse(data).data.timelines[0].intervals[1].values;
      console.log(
        `${weatherType[weatherData.weatherCode]} today!\nIt is ${
          weatherData.temperature
        }°F with a ${weatherData.precipitationProbability}% chance of ${
          precipitationType[weatherData.precipitationType]
        } .\nWindspeed is at ${weatherData.windSpeed}mph due ${
          weatherData.windDirection
        } deg 🧭 ${direction(weatherData.windDirection)}  and humidity at ${
          weatherData.humidity
        }%.\nAir quality is ${airQuality[weatherData.epaHealthConcern]}.`
      );
    } else {
      console.error("Weather app: ", res.statusMessage);
    }
  });
});

req.on("error", (e) => {
  console.error(e);
});

req.end();
