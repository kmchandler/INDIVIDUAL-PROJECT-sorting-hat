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
      <a id="openSortingPage" class="btn btn-primary">SORT</a>
    </div>
    </div>`

  renderToDom("#app", domString);
}


const sortingPage = () => {
        domString = ""
        domString += `
        <div class="card" style="width: 18rem;">
        <div class="card-body">
          <h5 class="card-title">Enter your name here to be sorted</h5>
          <div class="mb-3">
            <input type="name" class="form-control" id="studentName" placeholder="First and Last Name">
            </div>
          <p class="card-text">Quotes from book about sorting hat go here</p>
          <a id="performSorting" class="btn btn-primary">SORT</=>
        </div>
        </div>`
  
      renderToDom("#app", domString);
    };


const sortMe = () => {
  const houseArray = [
    Gryffindor,
    Hufflepuff,
    Ravenclaw,
    Slytherin
  ]

  let randomHouse = Math.floor(Math.random() * houseArray.length); 
  //this is where i left off- need to complete this section
};


const eventListeners = () => {

  document.querySelector("#openSortingPage").addEventListener("click", sortingPage);
  document.querySelector("#performSorting").addEventListener("click", sortMe);
  

    // this goes in EVERY form submit to prevent page reload
    // const formClear = document.querySelector('form');
    // form.addEventListener('submit', (e) => {
    //   e.preventDefault(); 
    // });

  };




const startApp = () => {
  welcome();
  eventListeners();
};

startApp(); 
