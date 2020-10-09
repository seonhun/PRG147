function sync(dom, pos) {
    dom.style.left = `${pos.x}px`;  //pos.x is a custom data structure  defined in the addClicker function
    dom.style.top = `${pos.y}px`;
  }
  
  function addClicker() {
    const pos = {
      x: Math.random() * 500,
      y: Math.random() * 300
    };
  
    const img = new Image();  //creating a new image element in the DOM
    img.src = "res/images/rick.png";
    img.style.position = "absolute";
  
    document.querySelector("#board").appendChild(img);
    sync(img, pos);  //position the img object on inside the coordinate system in CSS using left and top
  }


  