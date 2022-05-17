import {createRoot} from "react-dom/client";
import App from "./App";

const container = document.getElementById("root");

//@ts-ignore
const root = ReactDOM.createRoot(container);

// Initial render
root.render(<App />);
