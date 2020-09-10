import typescript from "@rollup/plugin-typescript";
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";

export default {
  input: "index.mjs",
  output: [
    {
      file:"./out/ng-demo.umd.js",
      format:"umd",
      name:"demo-app",
      sourcemap: "inline",
      globals:{
        "@angular/core": "@angular/core"
      },
      intro: "const global = window;"
    }
  ],
  plugins: [
    resolve({
      module: true,
      main: true,
      jsnext:"main",
      browser: true
    }),
    commonjs({
      include: 'node_modules/**'
    }),
    typescript()

    // commonjs({
    //   include: 'node_modules/**'
    // })
  ]
}
