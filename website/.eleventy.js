module.exports = function(eleventyConfig) {
  // CSS durchleiten
  eleventyConfig.addPassthroughCopy("src/styles");
  eleventyConfig.addPassthroughCopy("src/assets");
  
  // Watch für CSS
  eleventyConfig.addWatchTarget("src/styles/");
  
  return {
    dir: {
      input: "src",
      output: "_site",
      includes: "_includes",
      data: "_data"
    },
    templateFormats: ["html", "njk", "md"],
    htmlTemplateEngine: "njk"
  };
};
