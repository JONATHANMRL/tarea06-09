
const querystring = require('querystring');

async function getAllCarts(queryObj = {}) {
  const qs = querystring.stringify(queryObj);
  const url = 'https://fakestoreapi.com/carts' + (qs ? `?${qs}` : '');
  const resp = await fetch(url);
  if (!resp.ok) throw new Error(`FakeStore /carts respondió ${resp.status}`);
  return resp.json();
}

module.exports = { getAllCarts };

