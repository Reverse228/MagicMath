import { observer } from "mobx-react-lite";
import { loadFull } from "tsparticles";
import "./Style/style.css";
import Menu from "./UI/components/menu/Menu";
import CreateFigure from "./UI/pages/createFigure/CreateFigure";

function App() {
  return (
    <div className="App">
      <Menu />
      <CreateFigure />
    </div>
  );
}

export default observer(App);
