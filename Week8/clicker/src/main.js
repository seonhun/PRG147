let clickers = 15;

let startTime = Date.now();

 

// position element in the DOM

function sync(dom, pos) {

  dom.style.left = `${pos.x}px`;

  dom.style.top = `${pos.y}px`;

}

 

function addClicker() {

  const pos = {

    x: Math.random() * 500,

    y: Math.random() * 300

  };

  const img = new Image();

  img.src = "res/images/rick.png";

  img.style.position = "absolute";

  img.addEventListener("click", removeClicker, false);

 

  document.querySelector("#board").appendChild(img);

  sync(img, pos);

}

 

function removeClicker(e) {

  e.target.parentNode.removeChild(e.target);

  clickers--;

  checkGameOver();

  document.querySelector("#remain").innerHTML = "Number of Ricks remaining: " + clickers; //logic is that the number of Ricks remaining will automatically update per each removal

}

 

function checkGameOver() {

  

  if (clickers === 0) {

    const taken = Math.round((Date.now() - startTime) / 1000);

    alert(`De-rick-ed in ${taken} seconds!`);

  }

}

 

// Add all the Ricks!

for (let i = 0; i < clickers; i++) {

  addClicker();

  document.querySelector("#remain").innerHTML = "Number of Ricks remaining: " + clickers; //logic is that the number of Ricks remaining will automatically update per each addition. Since addition is done quickly, the viewer only sees the final number upon loading the html.

}