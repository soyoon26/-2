const writeNew = document.getElementById("writeNew");
const add = document.getElementById("add");
const list = document.getElementById("list");

const addItem = () => {
  const newItem = document.createElement("div");
  console.log(writeNew.value);

  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.addEventListener("change", () => checkItem(newItem, checkbox));
  newItem.appendChild(checkbox);

  const content = document.createElement("span");
  content.textContent = writeNew.value;
  content.setAttribute("id", "content");
  newItem.appendChild(content);

  const delBtn = document.createElement("button");
  delBtn.textContent = "제거하기";
  delBtn.addEventListener("click", delItem);
  newItem.appendChild(delBtn);

  list.appendChild(newItem);
  writeNew.value = "";
};

const checkItem = (newItem, checkbox) => {
  const content = newItem;
  content.style.textDecoration = checkbox.checked ? "line-through" : "none";
};

const delItem = (event) => {
  const delItem = event.target.parentNode;
  list.removeChild(delItem);
};

add.addEventListener("click", addItem);
