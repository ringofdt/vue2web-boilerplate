# web2

## Project setup

### Prevent icloud sync node_modules

```sh
mkdir node_modules.nosync
ln -svf node_modules.nosync node_modules
```

```
yarn install
```

### Compiles and hot-reloads for development

```
yarn serve
```

### Compiles and minifies for production

```
yarn build
```

### Lints and fixes files

```
yarn lint
```

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).
