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
        "@angular/core": "@angular/core",
        "@angular/common": "@angular/common",
        "@angular/platform-browser":"@angular/platform-browser"
      },
      intro: "const global = window;"
    }
  ],
  plugins: [
    resolve({
      module: true,
      main: true,
      jsnext:"main",
      browser: true,
      extensions: ['.mjs','.js','.ts']
    }),
    typescript(),
    commonjs({
      include: 'node_modules/**'
    }),
  ]
}
