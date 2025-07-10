// .eleventy.js
const { DateTime } = require("luxon");

module.exports = function (eleventyConfig) {
  /* ⭐ NEW: date filter for Nunjucks, Liquid, etc. */
  eleventyConfig.addFilter("date", (value, format = "yyyy-LL-dd") => {
    // Allow the string "now" in templates
    const dateObj =
      value === "now"
        ? DateTime.now()
        : DateTime.fromJSDate(value instanceof Date ? value : new Date(value));

    return dateObj.toFormat(format);
  });

  // pass-through static assets
  eleventyConfig.addPassthroughCopy("src/assets");

  return {
    dir: {
      input: "src",
      includes: "_includes",
      layouts: "_layouts",
      output: "_site",
    },
    templateFormats: ["njk", "md", "html"],
    htmlTemplateEngine: "njk",
    markdownTemplateEngine: "njk",
  };
};
