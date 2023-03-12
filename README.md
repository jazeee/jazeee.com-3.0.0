# jazeee.com website

This code is for [jazeee.com](https://jazeee.com)

# Engineering Details

## Development

* Install `node` and `yarn`
* Run `yarn install`
* Run `yarn start`

## Lint

* Run `yarn lint:all --fix`

## Build

* Run `yarn build`

## Generating bundle sizes

* `CI=1 yarn build --stats`
* Install `webpack-bundle-analyzer`, or run via `npx`
* `webpack-bundle-analyzer build/bundle-stats.json build/ --port 9999`
