import "./style.css";
import { page } from "./page.ts";
import "./components/hello-world.ts";
import "./components/pop-up-info-box.ts";

document.querySelector<HTMLDivElement>("#app")!.innerHTML = page;
