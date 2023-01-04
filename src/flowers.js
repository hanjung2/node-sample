let file = require('../assets/plantLists.json');

let getFlowers = (req, res) => {
  const response = file;
  res.json(response);
};

module.exports = { getFlowers };
