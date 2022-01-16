import withBoundary from "./hoc/withBoundary";

function App() {
  // throw Error("Error ao renderizar componente");

  return <div className="App">{nome}</div>;
}

export default withBoundary(App, "App");
