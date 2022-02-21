window.onload = function () {

  function startGame() {
    for (var i = 0; i < 78; i++) {
      var card = document.querySelector("#card" + i);
      card.addEventListener("click", flipCard, false);
    }

    //Virar e desvirar carta
    function flipCard() {
      var faces = this.getElementsByClassName("face");
      faces[0].classList.toggle("flipped");
      faces[1].classList.toggle("flipped");
    }

    document.getElementById("open").onclick = function () {
      toggle();
    };
    document.getElementById("closed").onclick = function () {
      toggle();
    };


   //Adicionando Blur e abrindo e fechando modal
    function toggle() {
      var blur = document.getElementById('blur');
      blur.classList.toggle('active');
      var popup = document.getElementById('popup');
      popup.classList.toggle('active');
    }


    //Ocultando as cartas
    document.getElementById("start").onclick = function () {
      var faces = document.getElementsByClassName("face");
      faces = Array.prototype.slice.call(faces);
      for (var i = 0; i < 156; i++) {
        faces[i].classList.toggle("flipped");
      }
    }

  }
  startGame();
}
