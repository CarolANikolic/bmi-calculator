import NavBar from "./components/Navbar/index.js";
import info from "./assets/objects/info.js";
import addInput from "./components/Input/index.js";

const main = document.querySelector("main");

NavBar();

info.map((field) => {

    main.append(addInput(field.for, field.label, field.type))
    
});