module.exports = {
  plugins: [
    require('postcss-custom-properties')({
      preserve: true,
      appendVariables: true,
      variables: {
        myBackgroundColor: 'lightgray'
      }
    })
  ]
};
