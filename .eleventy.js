module.exports = function (eleventyConfig) {
  eleventyConfig.addFilter("keys", Object.keys);

  return {
    dir: {
      input: "src",
      output: "www",
    }
  }
};
