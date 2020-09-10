import typescript from "@rollup/plugin-typescript";
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";

export default {
  input: "index.mjs",
  output: [
    {
      file:"./out/ng-demo.umd.js",
      format:"umd",
      name:"demo-app"
    },{
      file: './out/ng-demo.cjs',
      format: 'cjs'
    }
  ],
  plugins: [
    commonjs(),
    resolve(),
    // typescript(),
    // commonjs({
    //   include: 'node_modules/**'
    // })
  ]
}
