export interface Product {
  _id?: string;
  name?: string;
  description?: string;
  type?: string;
  price?: {
      value?: number;
      quantity: {
          value?: number;
          unit?: string;
      }
  };
  subproducts?: [{
      quantity?: [{
          value?: number;
          unit?: string;
      }],
      product?: string;
  }];
}
