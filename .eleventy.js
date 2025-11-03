
// The export statement makes these settings available to other files in 11ty
module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("images");
  eleventyConfig.addPassthroughCopy("styles");
  // Shortcode: currentYear - prints the current year for footers
  eleventyConfig.addShortcode("currentYear", function() {
    return new Date().getFullYear();
  });

  // Simple badge shortcode for reuse in item pages (usage in templates: {% badge "New" %})
  eleventyConfig.addShortcode("badge", function(text) {
    return `<span class=\"edc-badge\">${text}</span>`;
  });
};