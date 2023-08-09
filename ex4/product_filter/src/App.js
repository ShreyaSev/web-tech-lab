import logo from './logo.svg';
import './App.css';

function ProductCategoryRow({category}){
  return (
    <tr>
      <th colSpan = "2">
        {category}
      </th>
    </tr>
  );
}

function ProductRow({product}){
  const name = product.stocked ? product.name : 
  <span style ={{color:'red'}}>
    {product.name}
  </span>;

  return (
    <tr>
      <td>{name}</td>
      <td>{product.price}</td>
    </tr>
  );
}

function ProductTable({products}){
  const rows = [];
  let lastCategory = null;

  products.forEach(element => {
    if (element.category!==lastCategory){
      rows.push(< ProductCategoryRow category={element.category} 
        key = {element.category}/>
      )
      lastCategory=element.category;
    }

    else {
      rows.push(<ProductRow product={element} key = {element.name}/>);
      lastCategory = element.category;
    }
    
  });

  return (
    <table>
      <thead colSpan="2">
        <tr>
          <th>Name</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>{rows}</tbody>
    </table>
  );
}

function SearchBar(){
  return (
    <form id = "SearchBar" className = "SearchBar" name = "SearchBar">
      <input type = "text" placeholder = "Search..."></input>
      <label>
        <input type = "checkbox"></input>
        {' '}
        Only show products in stock
      </label>
    </form>
  );
}

function FilterableProductTable({products}){
  return (
    <div className = "FilterableProductTable">
      <SearchBar/>
      <ProductTable products={products}/>
    </div>
  );
}

const PRODUCTS = [
  {category: "Fruits", price: "$1", stocked: true, name: "Apple"},
  {category: "Fruits", price: "$1", stocked: true, name: "Dragonfruit"},
  {category: "Fruits", price: "$2", stocked: false, name: "Passionfruit"},
  {category: "Vegetables", price: "$2", stocked: true, name: "Spinach"},
  {category: "Vegetables", price: "$4", stocked: false, name: "Pumpkin"},
  {category: "Vegetables", price: "$1", stocked: true, name: "Peas"}
]

function App() {
  return (
    <FilterableProductTable products={PRODUCTS}></FilterableProductTable>
  );
}


export default App;
