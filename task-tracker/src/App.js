import Header from "./Components/Header"; //custom component

function App() {
  const name = "Shafiq";
  const x = false;

  return (
    <div className="container">
      {/* <h1>Hellow {x ? name : "Guest"}!</h1>
      <h3>This is (3 + 5 = {3 + 5})</h3>
      <h2>this is h2</h2> */}
      {/* custom component is called below */}
      {/* <Header title="custom props"/> */}
      <Header/>
      {/* passing props to Components */}
    </div>
  );
}

export default App;
