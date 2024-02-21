import "./style.css";
import { setupCounter } from "./counter.ts";
import { page } from "./page.ts";
import "./components/hello-world.ts";

document.querySelector<HTMLDivElement>("#app")!.innerHTML = page;
