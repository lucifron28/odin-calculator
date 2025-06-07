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

   function createButtonGrid(buttons) {
      const buttonGrid = document.createElement("div");
      buttonGrid.classList = "button-grid";
      root.appendChild(buttonGrid);

      buttons.forEach((btn) => {
         const newBtn = document.createElement("button");
         newBtn.classList.add("calculator-button");
         newBtn.textContent = btn;
         buttonGrid.appendChild(newBtn);
      })
   }
});