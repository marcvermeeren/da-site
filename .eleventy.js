const CleanCSS = require("clean-css");

module.exports = function (eleventyConfig) {
  /* ---------- 1. Passthrough copy for PDFs (and any other assets) ---------- */
  // Anything in src/assets/ → _site/assets/
  eleventyConfig.addPassthroughCopy({ "src/assets": "assets" });

  /* ---------- 2. Filters ---------- */
  eleventyConfig.addFilter("cssmin", (code) =>
    new CleanCSS({}).minify(code).styles
  );

  /* ---------- 3. Directory + template settings ---------- */
  return {
    dir: {
      input: "content",      // where your Markdown / templates live
      includes: "../_includes",
      output: "_site",
    },
    markdownTemplateEngine: "njk",
  };
};
