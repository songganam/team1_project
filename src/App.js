import { RouterProvider } from "react-router-dom";
import router from "./router/root";
import "normalize.css";
import "./index.css";
import "./styles/common/font.css";

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
