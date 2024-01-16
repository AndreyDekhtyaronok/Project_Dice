let images = [
    "dice-01.svg",
    "dice-02.svg",
    "dice-03.svg",
    "dice-04.svg",
    "dice-05.svg",
    "dice-06.svg"
  ];
  
  let dice = document.querySelectorAll("img");
  let balance = 0;
  document.querySelector("#die-1").setAttribute("src", images[0]);
  document.querySelector("#die-2").setAttribute("src", images[1]);
  let previousRoll = 0;
  
  function die() {
    dice.forEach(function(die) {
      die.classList.add("shake");
    });
  
    setTimeout(function() {
      dice.forEach(function(die) {
        die.classList.remove("shake");
      });
  
      let dieOneValue = Math.floor(Math.random() * 6);
      let dieTwoValue = Math.floor(Math.random() * 6);
      console.log(dieOneValue, dieTwoValue);
  
      document.querySelector("#die-1").setAttribute("src", images[dieOneValue]);
      document.querySelector("#die-2").setAttribute("src", images[dieTwoValue]);
  
      let total = (dieOneValue + 1) + (dieTwoValue + 1);
  
      document.querySelector("#total").innerHTML = "Your roll is " + total;
  
      // Проверка предположения и обновление баланса
      if (total >= previousRoll) {
        balance += 1; // Если предположение верно (число больше или равно предыдущему), добавляем 1 к балансу
      } else {
        balance -= 1; // Если предположение неверно (число меньше предыдущего), вычитаем 1 из баланса
      }
  
      document.querySelector("#balance").innerHTML = "balance = " + balance;
  
      // Сохранение предыдущего значения
      previousRoll = total;
    }, 1250);
  }
  
  function more() {
        dice.forEach(function(die) {
          die.classList.add("shake");
        });
      
        setTimeout(function() {
          dice.forEach(function(die) {
            die.classList.remove("shake");
          });
      
          let dieOneValue = Math.floor(Math.random() * 6);
          let dieTwoValue = Math.floor(Math.random() * 6);
          console.log(dieOneValue, dieTwoValue);
      
          document.querySelector("#die-1").setAttribute("src", images[dieOneValue]);
          document.querySelector("#die-2").setAttribute("src", images[dieTwoValue]);
      
          let total = (dieOneValue + 1) + (dieTwoValue + 1);
      
          document.querySelector("#total").innerHTML = "Your roll is " + total;
      
          // Проверка предположения и обновление баланса
          if (total >= previousRoll) {
            balance += 1; // Если предположение верно (число больше или равно предыдущему), добавляем 1 к балансу
          } else {
            balance -= 1; // Если предположение неверно (число меньше предыдущего), вычитаем 1 из баланса
          }
      
          document.querySelector("#balance").innerHTML = "balance = " + balance;
      
          // Сохранение предыдущего значения
          previousRoll = total;
        }, 1250);
      }
  
  function less() {
    
        dice.forEach(function(die) {
          die.classList.add("shake");
        });
      
        setTimeout(function() {
          dice.forEach(function(die) {
            die.classList.remove("shake");
          });
      
          let dieOneValue = Math.floor(Math.random() * 6);
          let dieTwoValue = Math.floor(Math.random() * 6);
          console.log(dieOneValue, dieTwoValue);
      
          document.querySelector("#die-1").setAttribute("src", images[dieOneValue]);
          document.querySelector("#die-2").setAttribute("src", images[dieTwoValue]);
      
          let total = (dieOneValue + 1) + (dieTwoValue + 1);
      
          document.querySelector("#total").innerHTML = "Your roll is " + total;
      
          // Проверка предположения и обновление баланса
          if (total <= previousRoll) {
            balance += 1; // Если предположение верно (число больше или равно предыдущему), добавляем 1 к балансу
          } else {
            balance -= 1; // Если предположение неверно (число меньше предыдущего), вычитаем 1 из баланса
          }
      
          document.querySelector("#balance").innerHTML = "balance = " + balance;
      
          // Сохранение предыдущего значения
          previousRoll = total;
        }, 1250);
  }
  
  more(); // Вызов функции "more()"