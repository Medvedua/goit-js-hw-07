const nameInput = document.querySelector("input#name-input");
const nameOutput = document.querySelector("span#name-output");

nameInput.addEventListener("input", () => {
  const inputValue = nameInput.value.trim();

  const outputName = inputValue === "" ? "Anonymous" : inputValue;

  nameOutput.textContent = outputName;
});
