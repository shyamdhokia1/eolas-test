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
                <td>{product.title}</td>
                <td>{product.description}</td>
                <td>{product.category}</td>
                <td>{product.price}</td>
                <td>{product.stock}</td>
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
