# Work Order and Accounting Management

[![CircleCI](https://circleci.com/gh/stanleyman08/invoice-management-app.svg?style=svg)](https://circleci.com/gh/stanleyman08/invoice-management-app)

Work order and accounting management is an application specifically created for a catering company to manage their work orders.

![Work Order App Screen](resources/WorkOrder_App.png)

# Features

- Data are stored locally on your computer
- Generate reports from your data

### Built with

- Electron
- React, Redux, React Router, React Hotloader
- Material UI
- Nedb-camo
- Webpack
- yarn

### Installation

Install the dependencies and devDependencies.

```sh
$ yarn install
```

### Development

Start the app in the dev environment. This starts the renderer process in hot-module-replacement mode and starts a webpack dev server that sends hot updates to the renderer process:

```sh
$ yarn dev
```

### Production

To package apps for the local platform:

```sh
yarn package
```

### Todos

- Refactor to use react-redux and nedb camo
- Write MORE Tests

Note: Look at issues for things that still need to be implemented

## License

MIT
