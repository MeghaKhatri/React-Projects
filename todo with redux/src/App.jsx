import Counter from "./components/Counter"

const App = () => {
  return (
  <div className="bg-blue-400 h-screen flex flex-col justify-center items-center">
    <h1 className="w-fit text-4xl font-bold text-white p-4">TO-DO with Redux</h1>
    <Counter/>
  </div>)
};
export default App;


