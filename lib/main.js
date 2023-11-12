const todoList = [];

const buttonValidation = document.getElementById("js-valider");
const inputText = document.getElementById("js-text");
console.log(buttonValidation);
console.log(inputText);
buttonValider.addEventListener("keypress", (event) => {
  todoList.push(new TodoObject(inputText.value));
  inputText.value = "";
  console.log(todoList(0));
});
