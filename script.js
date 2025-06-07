document.addEventListener("DOMContentLoaded", () => {
     const buttonLayout = [
      ['C', '±', '%', '÷'],
      ['7', '8', '9', '×'],
      ['4', '5', '6', '−'],
      ['1', '2', '3', '+'],
      ['0', '.', '=']
   ];


   const root = document.getElementById("root");
   const buttonGrid = document.getElementById("button-grid");
   
   function createButton(buttonText) {
      const newButton = document.createElement("button");
      newButton.textContent = buttonText;
      return newButton;
   }
});