let clickernum = Math.log(Math.random() * 300)
let clickers = clickernum;

// Add all the Ricks!
for (let i = 0; i < clickers; i++) {
  
  const img = new Image();
  img.src = "res/images/rick.png";
  img.style.position = "absolute";


  img.style.left = `${Math.random() * 500}px`;
  img.style.top = `${Math.random() * 300}px`;


document.querySelector("#board").appendChild(img);

}