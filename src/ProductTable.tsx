import { useState, ChangeEvent } from "react";
import "./ProductTable.css";
import { searchProducts, Product } from "./functions/searchProducts";

function ProductTable() {
  const [search, setSearch] = useState("");
  const [productList, setProductList] = useState<Product[]>([])

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
  };

  const fetchProducts = async () => {
    const products: Product[] = await searchProducts(search);
    setProductList(products)
  }

  return (
    <div>
      <div>
      <input className="search-input" type="text" placeholder="Search for Products" onChange={handleChange}></input>
      <button className="search-button" onClick={fetchProducts}>
        Search
      </button>
        </div>
      <div className="table-div">
        <table>
          <thead>
            <tr>
              <th>Title</th>
              <th>Description</th>
              <th>Category</th>
              <th>Price</th>
              <th>Stock</th>
            </tr>
            {productList.map((product) =>
            (
              <tr>
                <th>{product.title}</th>
                <th>{product.description}</th>
                <th>{product.category}</th>
                <th>{product.price}</th>
                <th>{product.stock}</th>
              </tr>
            )
            )}
          </thead>
        </table>
      </div>
    </div>
  )
}

export default ProductTable;
