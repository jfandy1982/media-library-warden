module.exports = {
  '/mlw-api': {
    secure: false,
    target: `http://localhost:${process.env.API_PORT || 3000}`,
  },
};
