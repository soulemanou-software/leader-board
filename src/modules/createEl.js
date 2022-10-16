const createEl = (element, classEl, appendPerent) => {
  const El = document.createElement(element);
  El.classList.add(classEl);
  return appendPerent.appendChild(El);
};

export default createEl;