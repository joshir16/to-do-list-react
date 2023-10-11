import "./index.css";

function App() {
  return (
    <div className="container">
      <Header />
      <Form />
    </div>
  );
}

function Header() {
  return (
    <header>
      <h1>To-Do List</h1>
    </header>
  );
}

function Form() {
  return (
    <div>
      <input type="text" />
      <button>➕</button>
      <button>❌</button>
    </div>
  );
}

export default App;
