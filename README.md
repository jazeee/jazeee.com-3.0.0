# jazeee.com website

This code is for [jazeee.com](https://jazeee.com)

## Engineering Details

### Development

* Install `node`
* Run `npm install`
* Run `npm run dev`

### Lint

* Run `npm run lint:all --fix`

### Build

* Run `npm run build`

### Generating bundle sizes

* `CI=1 npm run build --stats`
* Install `webpack-bundle-analyzer`, or run via `npx`
* `webpack-bundle-analyzer build/bundle-stats.json build/ --port 9999`

### Deploying

* `aws s3 sync ./build/ s3://www-2023 --profile ...`
* Invalidate cloudfront distribution.
