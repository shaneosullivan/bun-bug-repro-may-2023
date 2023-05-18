const fs = require("fs");
const Bun = require("bun");

const entrypointFolder = "./entrypoints";

const files = fs
  .readdirSync(entrypointFolder)
  .map((fileName) => `${entrypointFolder}/${fileName}`);
console.log("files", files);

Bun.build({
  entrypoints: files,
  outdir: "./build",
  minify: true,
});
