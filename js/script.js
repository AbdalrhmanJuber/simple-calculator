const numbers = document.querySelector(".numbers");
console.log(numbers.children);
Array.from(numbers.children).forEach((item) => {
  item.addEventListener("click", () => {
    if(item.textContent === "C") {
      const input = document.querySelector("#input");
      input.value = "";
      return;
    }
    if(item.textContent === "=") {
      const input = document.querySelector("#input");
      try {
        input.value = eval(input.value);
      } catch (error) {
        input.value = "Error";
      }
      return;
    }
    if(item.textContent === "DEL") {
      const input = document.querySelector("#input");
      input.value = input.value.slice(0, -1);
      return;
    }
    const input = document.querySelector("#input");
    input.value += item.textContent;
  });
});
