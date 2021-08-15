
const plasmic = require('@plasmicapp/loader/next');
const withPlasmic = plasmic({
  projects: ['kM7vztHyuUGR1rSz5qXk6s'] // An array of project ids.
});
module.exports = withPlasmic({
  eslint: {
    ignoreDuringBuilds: true,
  },
  trailingSlash: true,
  // Your NextJS config.
});
  