function find() {
    var buttons = document.getElementsByTagName("button");
    var spans = document.getElementsByTagName("span");
    for (var i = 0; i < buttons.length; i++) {
      var buttonText = document.getElementsByTagName("button")[i].textContent;
      if (buttonText === "DCascading Style Sheet") {
        buttons[i].style.backgroundColor = "green";
        spans[i].style.backgroundColor = "green";
      } 
      else {
        buttons[i].style.backgroundColor = "red";
        spans[i].style.backgroundColor = "red";
      }
    }
  }