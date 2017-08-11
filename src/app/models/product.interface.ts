export interface Quantity {
  value?: number;
  unit?: string;
}

export interface Price {
  value?: number;
  quantity: Quantity;
}

export interface Subproduct {
  quantity?: Quantity;
  product?: string;
}

export interface Product {
  _id?: string;
  name?: string;
  description?: string;
  type?: string;
  price?: Price;
  subproducts?: Subproduct[] | string[];
}
