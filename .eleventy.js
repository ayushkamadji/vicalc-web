module.exports = function (eleventyConfig) {
  eleventyConfig.addWatchTarget("./assets/css");
  eleventyConfig.addPassthroughCopy("./assets/css");

  eleventyConfig.addWatchTarget("./assets/download");
  eleventyConfig.addPassthroughCopy("./assets/download");

  eleventyConfig.addWatchTarget("./assets/img");
  eleventyConfig.addPassthroughCopy("./assets/img");

  eleventyConfig.ignores.add("README.md");

  return {
    passthroughFileCopy: true,
  };
};
