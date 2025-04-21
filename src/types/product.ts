type Review = {
  id: number;
  rate: string; // Consider changing to number if you want to handle ratings as numbers
  comment: string;
  created_at: string; // ISO date string
  updated_at: string; // ISO date string
};

type Category = {
  id: number;
  name: string;
};

type Brand = {
  id: number;
  name: string;
};

type Image = {
  id: number;
  image: string; // URL to the image
};

export interface IProduct {
  id2: number;
  name: string;
  description: string;
  price: string; // Consider changing to number if you want to handle prices as numbers
  remaining_quantity: number;
  purchased: number;
  small_desc: string;
  sku: string;
  reviews_count: number;
  reviews_average: number;
  reviews: Review[];
  has_variants: boolean;
  has_discount: boolean;
  discount: string; // Consider changing to number if you want to handle discounts as numbers
  start_discount: string; // ISO date string
  end_discount: string; // ISO date string
  manage_stock: boolean;
  available_in_stock: boolean;
  status: boolean;
  category: Category;
  brand: Brand;
  images: Image[];
}
