import { render } from "solid-js/web";

import "./index.scss";
import Card from "./Card";

const App = () => (
  <div class="mt-10 text-3xl mx-auto max-w-6xl">
    <div>Name: remoteclient</div>
    <Card/>
  </div>
);
render(App, document.getElementById("app"));
