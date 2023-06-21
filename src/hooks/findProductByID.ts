import { ProductType } from "../TypeInterfaces/ProductType";

export const findProductById = (
  id: number,
  allProducts: ProductType[] | []
) => {
  return allProducts?.find((item: ProductType) => item?.id === id);
};
