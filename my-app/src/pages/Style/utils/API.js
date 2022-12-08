export const fetchMakeup = (query) => {
  return fetch(
    `http://makeup-api.herokuapp.com/api/v1/products.json?product_type=${query}`
)}
