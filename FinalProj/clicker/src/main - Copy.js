$('document').ready(function(){
  var game ={
    game_board: $('#board'),
    timer: 0,
    clicks: 0,
    remain: Math.round(Math.random()*20),
    score: 0,
    imageSrc: "res/images/rabbit.png",
    imageTag: 'rabbit',
    time_start: 0,
    game_time: 0,
    game_time_s: this.game_time / 1000,
    update_score: function() {
      $("#clicks").html(this.score);
			$("#remain").html(this.highscore);
			$("#score").html(this.clicks);
    },
    addClicker: function() {
      var posX = Math.random() * 500;
      var posY = Math.random() * 300;
      var rand = Math.floor((Math.random()*10000));
      $(this.game_board).append('<img id="mole" class="' +rand + '" src="'+game.imageSrc+'" alt="'+game.imageTag+'" style="top:'+posY+'px; left:'+posX+'px"}></img>');
    },
    end_game: function () {
      window.clearInterval(starttime);
      // Fade out all remaining images
      $(game.game_board).children().remove();
      // Show start button
      $('#start').removeAttr('disabled');
      // Reset game
      game.score = 0;
      game.clicks = 0;
    },
  start_timer: function() {
    $('#start').on('click', function (){
      starttime = setInterval(function() {
        var timer = $('#timer');
        current = parseInt(timer.html());
        timer.html(++current);
      }, 1000);
      this.game_time = Date.now()-this.time_start;
    });
  }
};

	// Increase click count when there is a click.
game.game_board.on("click", function(){
  game.clicks++;
  game.update_score();
});
// Increment score only when image is clicked.
game.game_board.children().on("click", function(){
  $(this).remove();
  game.score++;
  game.remain--;
  game.update_score();
});
// Start game timer on start button click
$('#start').on('click', game.start_timer());

// Game start on button click
$('#start').on('click',function(){
  // Reset timer
  game.game_time_s = 0;
  game.time_start = Date.now();
  $('#timer').html(game.game_time_s);
  // Disable the start button
  $(this).attr('disabled','disabled');
  // Reset stats on game start:
  game.update_score();
  // Start to display new images on interval
  // game.remain = Math.round(Math.random()*20);
  $.each(new Array(game.remain), function(){}, 
    // Call display_new_img
    game.addClicker());
  });
  console.log(game.game_board.children());
  $.getJSON("idata.json", function(data){
    // var items = [];
    // $.each( data, function( key, val ) {
    //   items.push( "<li id='" + key + "'>" + val + "</li>" );
    // });
    game.imageSrc = data.image;
    game.imageTag = data.tag;
    // console.log(items);
  
  });

  var remaining = $('#board').find("#mole");
  if(remaining.length == 0 && $('#start').prop("disabled")) {
    game.end_game();
  }
});
// // position element in the DOM
// function sync(dom, pos) {
//   dom.style.left = `${pos.x}px`;
//   dom.style.top = `${pos.y}px`;
// }
 
// function addClicker() {
//   const pos = {
//     x: Math.random() * 500,
//     y: Math.random() * 300
//   };
//   const img = new Image();
//   img.src = "res/images/mole.png";
//   img.addEventListener("click", removeClicker, false);
 
//   document.querySelector("#board").appendChild(img);
//   sync(img, pos);
// }



// function removeClicker(e) {
//   e.target.parentNode.removeChild(e.target);
//   clickers--;
//   checkGameOver();
// }
 
// function checkGameOver() {
//   document.querySelector("#remain").innerHTML = clickers;
//   if (clickers === 0) {
//    let finDate = new Date();
//    const taken = (Math.abs(finDate - startTime))/1000;
//    alert(`Moles clicked in ${taken} seconds!`);
 
 
//   }
// }
// let clickers = Math.round(Math.random()*20);
// let startTime = Date.now();
// // Add all the Ricks!
// for (let i = 0; i < clickers; i++) {
//   addClicker();
// }