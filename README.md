This is a reproduction of a Bun.js bug when minifying multiple files.

To use it, first install Node v18, then do the following

```
  npm install
  npm run bun-build
```

You should see the error

```
Segmentation fault: 11
```

The code for the reproduction is in the `scripts/build-browser.js` file
