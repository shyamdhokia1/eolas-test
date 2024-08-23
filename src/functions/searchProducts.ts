export type Product = {
  "id": number,
  "title": string,
  "description": string,
  "category": string,
  "price": number,
  "discountPercentage": number,
  "rating": number,
  "stock": number,
  "tags": string[],
  "sku": string,
  "weight": number,
  "dimensions": {
    "width": number,
    "height": number,
    "depth": number
  },
  "warrantyInformation": string,
  "shippingInformation": string,
  "availabilityStatus": string,
  "reviews": Review[],
  "returnPolicy": string,
  "minimumOrderQuantity": number,
  "meta": {
    "createdAt": string,
    "updatedAt": string,
    "barcode": string,
    "qrCode": string,
  },
  "images": string[],
  "thumbnail": string,
};

type Review = {
  "rating": number,
  "comment": string,
  "date": string,
  "reviewerName": string,
  "reviewerEmail": string
};


export const searchProducts = async (queryString: string) => {
  let url: string = "https://dummyjson.com/products?limit=0"
  if (queryString) {
    url = `https://dummyjson.com/products/search?q=${queryString}`
  }
  const res = await fetch(url);
  const items = await res.json();
  console.log(items.products);
  return items.products as Product[];
};