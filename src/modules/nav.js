import createEl from "./createEl.js";
import storage from "./storage.js";

const nav = document.querySelector('.nav');
console.log(nav);
createEl('ul','navList',nav);
const ul = document.querySelector('.navList');
storage.forEach(element => {
  const createEs = createEl('li','List',ul).innerText = element.Title;
  createEs.addAttribute(id)=element.id;
  createEs.img.src=element.Icon;
  
});

console.log(ul);
export default nav;