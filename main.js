// KF Panda Search

// Button Event Listener
document.getElementById("btn").addEventListener("click", btnClicked);

function btnClicked() {
  // Input
  let name = document.getElementById("char-in").value;

  //If Statement
  if (name === "Po") {
    document.getElementById("char-name").innerHTML = "Po";
    document.getElementById("char-quote").innerHTML = "Buddy, I am the Dragon Warrior!";
    document.getElementById("char-img").src = "img/po.png";
  } else if (name === "Tigress") {
    document.getElementById("char-name").innerHTML = "Tigress";
    document.getElementById("char-quote").innerHTML = "That was hardcore!";
    document.getElementById("char-img").src = "img/tigress.png";
  } else if (name === "Mantis") {
    document.getElementById("char-name").innerHTML = "Mantis";
    document.getElementById("char-quote").innerHTML = "Fear the Bug!";
    document.getElementById("char-img").src = "img/mantis.png";
  } else if (name === "Monkey") {
    document.getElementById("char-name").innerHTML = "Monkey";
    document.getElementById("char-quote").innerHTML = "Ooh Ah Ah!";
    document.getElementById("char-img").src = "img/monkey.png";
  } else if (name === "Viper") {
      document.getElementById("char-name").innerHTML = "Viper";
      document.getElementById("char-quote").innerHTML = "SSssssssSSssSss!";
      document.getElementById("char-img").src = "img/viper.png";
  }  else if (name === "Oogway") {
    document.getElementById("char-name").innerHTML = "Oogway";
    document.getElementById("char-quote").innerHTML = "Pretty Tree!";
    document.getElementById("char-img").src = "img/oogway.png";
  } else {
    document.getElementById("char-name").innerHTML = "??????";
    document.getElementById("char-quote").innerHTML = "-----------";
    document.getElementById("char-img").src = "img/question-mark.png";
  }
}
  
