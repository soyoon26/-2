function onClick() {
  const ul = document.getElementById("ul");
  const start = Date.now();
  let uls = "";
  for (let i = 0; i < 3000; i++) {
    uls += `<li>${i}</li>`;
  }
  ul.innerHTML = uls;
  const end = Date.now();
  console.log(end - start + "ms");
}
