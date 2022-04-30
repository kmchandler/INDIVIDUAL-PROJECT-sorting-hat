const app = document.querySelector("#app");
let domString = "";


const renderToDom = (divId, textToRender) => {
  const selectedElement = document.querySelector(divId);
  selectedElement.innerHTML = textToRender;
};

const welcome = () => {
  domString += `
    <div class="card" style="width: 18rem;">
    <img src="https://img1.cgtrader.com/items/2090935/d046b609f9/harry-potter-hat-sorting-hat-3d-model-low-poly-max-obj-fbx-stl-mat.jpg" class="card-img-top" alt="a picture of the hogwarts sorting hat"></img>
    <div class="card-body">
      <h5 class="card-title">I am the Hogwarts Sorting Hat</h5>
      <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
      <a href="#" class="btn btn-primary">SORT</a>
    </div>
    </div>`

  renderToDom("#app", domString);
}


const startApp = () => {
  welcome();
};

startApp(); 
