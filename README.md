# SpikeForest Iso

🌲 <i>Benchmarking of spike sorting algorithms. Seeing the spike forest for the trees.</i> 🌲

## Getting Started

### 1. Get the latest version

Start by cloning the latest version of SpikeForest Iso on your
local machine by running:

```shell
$ git clone -o spikeforest-iso -b master --single-branch https://github.com/elovero/spikeforest-iso.git MySpikeForest
$ cd MySpikeForest
```

### 2. Run `yarn install`

This will install both run-time project dependencies and developer tools listed
in [package.json](../package.json) file.

### 3. Run `yarn start`

This command will build the app from the source files (`/src`) into the output
`/build` folder. As soon as the initial build completes, it will start the
Node.js server (`node build/server.js`) and
[Browsersync](https://browsersync.io/) with
[HMR](https://webpack.github.io/docs/hot-module-replacement) on top of it.

> [http://localhost:3000/](http://localhost:3000/) — Node.js server
> (`build/server.js`) with Browsersync and HMR enabled\
> [http://localhost:3000/graphql](http://localhost:3000/graphql) — GraphQL server
> and IDE\
> [http://localhost:3001/](http://localhost:3001/) — Browsersync control panel
> (UI)

Now you can open your web app in a browser, on mobile devices and start hacking.
Whenever you modify any of the source files inside the `/src` folder, the module
bundler ([Webpack](http://webpack.github.io/)) will recompile the app on the fly
and refresh all the connected browsers.

Note that the `yarn start` command launches the app in `development` mode, the
compiled output files are not optimized and minimized in this case. You can use
`--release` command line argument to check how your app works in release
(production) mode:

```shell
$ yarn start -- --release
```

_NOTE: double dashes are required_

---

## Acknowledgements

This site was bootstrapped with [React Starter Kit](https://www.reactstarterkit.com).

### Thanks to the following:

* Alex Barnett, Leslie Greengard, James Jun - [Center for Computational Mathematics, Flatiron Institute](https://www.simonsfoundation.org/flatiron/center-for-computational-mathematics/)
* Lenny - [Canine](https://www.instagram.com/lillenlen/)

### Related Projects:

* [kbucket](https://github.com/magland/kbclient)
* [SpikeForest](https://github.com/magland/spikeforest)
* [Spike Collab](https://github.com/magland/spike-collab)
* [SpikeForest Widgets](https://github.com/magland/spikeforestwidgets)
* [Pairio](https://github.com/magland/pairio)

---

## License

This source code is licensed under the MIT license found in the [LICENSE.txt](./docs/LICENSE.txt)
file. The documentation to the project is licensed under the
[CC BY-SA 4.0](http://creativecommons.org/licenses/by-sa/4.0/) license.

## Contributors

Liz Lovero ([@elovero](https://github.com/elovero))

Jeremy Magland ([@magland](https://github.com/magland))
