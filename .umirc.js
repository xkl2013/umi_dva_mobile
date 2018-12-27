
// ref: https://umijs.org/config/
export default {
  plugins: [
    // ref: https://umijs.org/plugin/umi-plugin-react.html
    ['umi-plugin-react', {
      antd: false,
      dva: false,
      dynamicImport: false,
      title: 'myapp',
      dll: false,
      hardSource: false,
      routes: {
        exclude: [
          /components/,
        ],
      },
    }],
  ],
}
