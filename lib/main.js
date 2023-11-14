const todoList = [];

const buttonValidation = document.getElementById("js-valider");
const inputText = document.getElementById("js-text");

buttonValidation.addEventListener("click", () => {
  const todo = new TodoObject(inputText.value);
  todoList.push(todo);
  inputText.value = "";

  renderLine(todo);
});
