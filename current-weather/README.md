# Current Weather

## About this project

Just a quick refresher on basic node modules. The goal is to display current weather for a given location in the CLI, add some flair, and run it on terminal startup. Since I have it configured to run on every new terminal, it keeps me updated on whether I should feel good or bad about sitting in front of my computer.

Example output:

```bash
Mostly Clear 🌴 today!
It is 16.95°F with a 0% chance of snow ❄️ .
Windspeed is at 5.26mph due 182.44 deg 🧭 ⬇️  and humidity at 70.03%.
Air quality is moderate ✅.
```

### Constraints

- CLI only
- node standard modules

### Roadmap

- Provide bash script to run once per x minutes a day (instead of every new terminal)
- Optional zipcode or detect current location
- Introduce ascii art for wind direction or humidity level chart

## How to run

1. Get an API key and a location key from [climacell](https://www.climacell.co/) and add them in a `.env` in this directory
2. Use the node version specified in `.nvmrc` (ex. `nvm use`)
3. `node current-weather/main`

The environment variables should be in `.env`. They're loaded with `dotenv` on [Oh My Zsh](https://ohmyz.sh/) for me in OSX.

```zsh
export CLIMACELL_SECRET_KEY=YOUR-KEY-HERE
export CLIMACELL_LOCATION=YOUR-LOCATION-ID-HERE
```

If you're like me and you don't mind a little bit of delay when you open up a new terminal, update the path of the script below and add it to your `.zshrc` or `.bashrc`:

`source PATH_TO_THIS_DIR/.env && node PATH_TO_THIS_DIR/main.js`

It will print the weather info to the console on startup.

## How to edit

Add some more properties to `qs.fields` and handle them in the template string. This is an extremely basic Node script practically written in crayon, have fun with it!
