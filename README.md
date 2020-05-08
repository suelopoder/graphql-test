# Country of the day

Playing around with graphql! I decided to build a "Country of the day" app. I just collect some info and serve it.
Later on I decided to build my own graphql data server to integrate some info and simplify my client.

## Running

### Install dependencies

```bash
npm install
```

### Setup

You need to copy the file `.ENV.example` as `.ENV` and update some values. you'll get it once you are there. It's APIs credentials and stuff.

### Development

To run in development mode I advite to run the client side and server side separately. This wasy you have hot reload on both. Open a console on the root and run:

```bash
npm run dev
```

That will the client side on <http://localhost:3000>. Then on another console run:

```bash
nodemon server
```

That will run the server side on <http://localhost:3001>. Request are forwarded from port 3000 to port 3001, this way client and server interact nicely.

### Production

To build a docker image run:

```bash
npm run docker:build
```

To run the container do:

```bash
npm run docker:run
```

## TODO

- add newsapi.org reference
- improve design (a lot)
- Nice to have, add mark in world map (how?)
- add current time in that country
- cache news response for a day in the server

## Thank you

I've used multiple sources for the data. I want to thank:

- Google maps static API
- Trevor Blades for his countries API <https://github.com/trevorblades/countries>
- Lennert Van Sever for his countries API <https://github.com/lennertVanSever/graphcountries>
