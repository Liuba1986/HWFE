

function checkEquality() {
    let num1 = +document.querySelector('.input1').value;
    let num2 = +document.querySelector('.input2').value;
    let num3 = +document.querySelector('.input3').value;

    if (num1 === num2 && num2 === num3) {
        console.log("Все поля равны!");
    } else {
        console.log("Не все поля равны!");
    }
      }
    
      function hasZero() {
        let num1 = +document.querySelector('.input4').value;
        let num2 = +document.querySelector('.input5').value;
        let num3 = +document.querySelector('.input6').value;

        if (num1 === 0 || num2 === 0 || num3 === 0) {
            console.log("Да, есть");
        } else {
            console.log("Нет");
        }
    }

    function sameOne() {
        let num1 = +document.querySelector('.input4').value;
        let num2 = +document.querySelector('.input5').value;
        let num3 = +document.querySelector('.input6').value;

        if (num1 === num2 || num1 === num3 || num2 === num3) {
            console.log("Да, есть");
        } else {
            console.log("Нет");
        }
    }
 
      
      
