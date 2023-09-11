import "vite/modulepreload-polyfill";
import "./style.css";
import "sweetalert2";
import * as hyperscript from "hyperscript.org";
import htmx from "htmx.org";

hyperscript.browserInit();
window.htmx = htmx;
