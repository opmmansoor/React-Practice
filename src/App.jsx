import React, { useState } from 'react'

function App() {

  const [filterProduct, setFilterProduct] = useState("All");
  const [sortOrder, setSortOrder] = useState("default");

  const [count, setCount] = useState(0);
  const [min, setMin] = useState(0);

  const [color, setColor] = useState("white");

  const products = [
    {id: 1, name: "car", category: "Four"},
    {id: 2, name: "Bike", category: "Two"},
    {id: 3, name: "Van" , category: "Four"},
    {id: 4, name: "Truck" , category: "Six"},
    {id: 5, name: "Jeep" , category: "Four"},
    {id: 6, name: "Scooter" , category: "Two"},
    {id: 7, name: "Bus" , category: "Six"},
  ];

  const filteredProducts =  products.filter((product) => {
    if (filterProduct === "All") {
      return true;
    }
    return product.category === filterProduct
  })

  return (
    <div style={{backgroundColor: "black"}}>
      <h1>products</h1>

      <button onClick={() => setFilterProduct("All")}>All</button>
      <button onClick={() => setFilterProduct("Two")}>Two</button>
      <button onClick={() => setFilterProduct("Four")}>Four</button>
      <button onClick={() => setFilterProduct("Six")}>Six</button>


    <select value={filterProduct}
              onChange={(e) => setFilterProduct(e.target.value)}>
      <option value="All">ALL</option>
      <option value="Two">TWO</option>
      <option value="Four">FOUR</option>
      <option value="Six">SIX</option>
    </select>


      {filteredProducts.map((product) => (
        <p key={product.id}>{product.name}</p>
      ))}
      <div>
        <button onClick={() => setCount ((count) => count + 1)}>
          Plus {count}
        </button>
        <button onClick={() => setMin ((min) => min - 1)}>
          Minus {min}
        </button>
        <button onClick={() => setCount ((count) => count = 0)}>
          Reset { count}
        </button>
      </div>
      <div style={
        {width:"200px", height: "200px", backgroundColor: color,
          border: "2px solid black", marginBottom: "20px", padding:"20px", gap:"20px"
        }
      }>
      </div>
      <button onClick={() => setColor("red")}
        style={{width: "100px", height:"100px", backgroundColor:"red", }}>
          RED
      </button>
      
      <button onClick={() => setColor("blue")} 
          style={{width: "100px", height:"100px", backgroundColor:"blue"}}>
        BLUE
      </button>

      <button onClick={() => setColor("green")}
            style={{width: "100px", height: "100px", backgroundColor:"green"}}>
        GREEN
      </button>
    </div>
  )
}

export default App
