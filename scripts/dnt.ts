import { build, emptyDir } from "jsr:@deno/dnt@^0.41.3";
import pkg from "../deno.json" with { type: "json" };

await emptyDir("./npm");

await build({
  entryPoints: ["./src/mod.ts"],
  outDir: "./npm",
  shims: {},
  package: {
    // package.json properties
    name: "unidata16",
    version: Deno.args[0] || pkg.version,
    description: "This library provides a collection of Unicode data for various characters.",
    author: {
      name: "Jelte Lagendijk",
      email: "jwlagendijk@gmail.com",
    },
    keywords: ["unicode", "data", "characters"],
    license: "MIT",
    repository: {
      type: "git",
      url: "git+https://github.com/j3lte/unidata.git",
    },
    bugs: {
      url: "https://github.com/j3lte/unidata/issues",
    },
  },
  postBuild() {
    // steps to run after building and before running the tests
    Deno.copyFileSync("LICENSE", "npm/LICENSE");
    Deno.copyFileSync("README.md", "npm/README.md");
  },
});
