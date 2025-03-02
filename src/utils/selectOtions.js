export const selectBrandsOptions = brands => {
  return brands?.map(brand => ({
    value: brand.toLowerCase(),
    label: brand,
  }));
};

export const selectPriceOptions = value => {
  const arr = [];

  for (let i = 30; i <= value; i += 10) {
    arr.push({ value: i, label: i });
  }

  return arr;
};
