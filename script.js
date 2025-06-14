document.addEventListener("DOMContentLoaded", () => {
     const buttonLayout = [
      'C', 'DEL', '%', '÷',
      '7', '8', '9', '×',
      '4', '5', '6', '−',
      '1', '2', '3', '+',
      '.', '0', '='
   ];
   const root = document.getElementById("root");
   let equation = "0";

   function createCalculatorContainer() {
      const calculatorDiv = document.createElement("div");
      calculatorDiv.classList.add("calculator-container");
      return calculatorDiv;
   }

   function createDisplayBar() {
      const display = document.createElement('div');
      display.classList.add("calculator-display");
      return display;
   }

   function createButton(buttonText) {
      const newButton = document.createElement("button");
      newButton.textContent = buttonText;
      return newButton;
   }

   function createButtonGrid(buttons) {
      const buttonGrid = document.createElement("div");
      buttonGrid.classList = "button-grid";

      buttons.forEach((btn) => {
         const newBtn = createButton(btn);
         buttonGrid.appendChild(newBtn);

         newBtn.addEventListener("click", () => {
            buttonPressed(btn);
         });
      });
      return buttonGrid;
   }

   const calculator = createCalculatorContainer();
   const display = createDisplayBar();
   const buttonGrid = createButtonGrid(buttonLayout);
   const displayEquation = display; 
   calculator.appendChild(display);
   calculator.appendChild(buttonGrid);
   root.appendChild(calculator);

   function buttonPressed(btn) {
      switch (btn) {
         case "C":
            equation = "0";
            break;
         case "=":
            try {
               equation = eval(
                  equation.replace(/x/g, "*")
                     .replace(/÷/g, "/")
               );
            } catch {
               equation = "Error";
            }
            break;
         case "DEL":
            if (equation == "Error") {
               equation = "0";
               break;
            }
            if (equation.length > 1) {
               equation = equation.substring(0, equation.length - 1);
            } else {
               equation = "0";
            }
            break;
         default:
            if (equation == "Error") {
               equation = "0";
               break;
            }
            if (equation == "0") {
               equation = btn;
            } else {
               equation += btn;
            }
            break;
      }

      displayEquation.textContent = equation;
   }
});