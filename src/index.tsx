import { createRoot } from "react-dom/client";
import { App } from "./App";
import { BrowserAgent } from '@newrelic/browser-agent/loaders/browser-agent'

new BrowserAgent({ });

const container = document.getElementById("app");
const root = createRoot(container)
root.render(<App />);