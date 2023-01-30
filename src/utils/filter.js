export const getProductByFilter = (data, filters) => {
  let filteredList = data && [...data];

  for (const key in filters) {
    if (key !== "price") {
      if (key === "search") {
        filteredList =
          filteredList &&
          filteredList.filter((data) =>
            data.name.toLowerCase().includes(filters[key].toLowerCase())
          );
      } else {
        if (typeof filters[key] === "object") {
          filteredList = filterInArray(filteredList, filters[key], key);
        } else {
          if (filters[key] === true || filters[key] === false) {
            filteredList = filterByTrueFalse(filteredList, filters[key], key);
          } else {
            filteredList = filterByKey(filteredList, filters[key], key);
          }
        }
      }
    } else {
      filteredList = filterByPrice(filteredList, filters[key]);
    }
  }
  return filteredList;
};

function filterByTrueFalse(filteredList, value, key) {
  let list = [];
  if (!value || value.length === 0) return filteredList;
  for (let index = 0; index < filteredList.length; index++) {
    const product = filteredList[index];
    if (value === product[key]) {
      list.push(product);
    }
  }

  return list;
}
function filterByKey(filteredList, size, key) {
  let list = [];
  if (!size || size.length === 0) return filteredList;
  for (let index = 0; index < filteredList.length; index++) {
    const product = filteredList[index];
    const isOk = size.indexOf(product[key]);
    if (isOk !== -1) {
      list.push(product);
    }
  }

  return list;
}

function filterByPrice(filteredList, price) {
  return (filteredList =
    filteredList &&
    filteredList.filter(
      (product) =>
        Number(product.price) >= price.min && Number(product.price) <= price.max
    ));
}

function filterInArray(filteredList, value, key) {
  return filteredList && value.length > 0
    ? filteredList.filter(
        (data) => data[key] && data[key].find((f) => value.includes(f))
      )
    : filteredList;
}

export const simpleProductFilter = (key, arr) => {
  let isArr = typeof key !== "string" ? true : false;
  var sorted = isArr
    ? key &&
      key
        .map(function (value) {
          return value.toLowerCase();
        })
        .sort()
    : [key.toLowerCase()];

  return (
    arr &&
    arr.filter((arr) =>
      arr.category.find((e) =>
        e.toLowerCase().includes(sorted && sorted.join(","))
      )
    )
  );
};
