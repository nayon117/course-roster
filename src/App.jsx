import Home from "./Components/Home";

function App() {
  return (
    <>
      <div className="container mx-auto px-8 md:px-2 lg:px-2 py-4 mt-4">
      <h1 className="text-3xl font-bold text-center">Course Registration</h1>
      </div>
      <div className="container mx-auto px-4 md:px-8 lg:px-2 py-4 my-8">
      <Home></Home>
     </div>
    </>
  );
}

export default App;
