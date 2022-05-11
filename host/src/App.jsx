import { render } from "solid-js/web";

import "./index.scss";

import Card from 'remoteclient/Counter';
const App = () => (
  <div class="mt-10 text-3xl mx-auto max-w-6xl">
    <div>Name: host</div>
    <Card/>
  </div>
);
render(App, document.getElementById("app"));
