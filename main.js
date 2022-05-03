let domString = "";


const renderToDom = (divId, textToRender) => {
  const selectedElement = document.querySelector(divId);
  selectedElement.innerHTML = textToRender;
};

//beginning of first card methods
const welcome = () => {
  domString += `
    <div class="card" style="width: 18rem;">
    <img src="https://img1.cgtrader.com/items/2090935/d046b609f9/harry-potter-hat-sorting-hat-3d-model-low-poly-max-obj-fbx-stl-mat.jpg" class="card-img-top" alt="a picture of the hogwarts sorting hat"></img>
    <div class="card-body">
      <h5 class="card-title">I am the Hogwarts Sorting Hat</h5>
      <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
      <button id="openSortingPage" class="btn btn-primary">SORT</button>
    </div>
    </div>`

  renderToDom("#app", domString);
}

//beginning of second card methods
const sortingPage = () => {
        domString = ""
        domString += `
        <div class="card" style="width: 18rem;">
        <div class="card-body">
          <h5 class="card-title">Enter your name here to be sorted</h5>
          <div class="mb-3">
            <form>
            <input type="name" class="form-control" id="studentNameForm" placeholder="First and Last Name">
            </form>
            </div>
          <p class="card-text">Quotes from book about sorting hat go here</p>
          <button id="performSorting" class="btn btn-primary">SORT</button>
        </div>
        </div>`

  
      renderToDom("#app", domString);

      document.querySelector("#performSorting").addEventListener("click", sortingHat);
    };


    const cardsOnDom = (taco) => {
      let domString = "";
      taco.forEach((student) => {
         domString += `<div id="studentCard" class="card">
          <h5 class="card-header">${student.name}
          <button class="btn btn-danger" id="expel--${student.id}">EXPEL</button>
          </h5>
          <img id="crest" class="image" src="https://www.seekpng.com/png/detail/184-1840987_product-image-alt-harry-potter-hogwarts-crest-doormat.png">
          <div class="card-body">
            <h5 class="card-title"></h5>
          </div>
          <div class="card-footer ${student.house}-footer">${student.house}</div>
          </div>`
        });
    
        renderToDom("#app", domString);
        expelStudent();
    };


//beginning of third card methods
const houseListeners = () => {
  
  document.querySelector("#hufflepuff").addEventListener("click", filter)
  document.querySelector("#ravenclaw").addEventListener("click", filter)
  document.querySelector("#slytherin").addEventListener("click", filter)
  document.querySelector("#gryffindor").addEventListener("click", filter)
  document.querySelector("#sort").addEventListener("click", filter)
  document.querySelector("#deathEaters").addEventListener("click", filter)
}

const filter = (evt) => {
  const filterText = evt.target.id;
    if (filterText === "fullRoster") {
      cardsOnDom(students); 
    } else if (filterText === "deathEaters") {
      cardsOnDom(deathEaters);
    } else {
      cardsOnDom(students.filter(student => student.house.toLowerCase() === filterText));
    }
  }

 const gryffindorHouse = (student) => {
   domString = ""
   domString += `
    <div id="buttonDiv-g" class="buttonDiv">
      <button id="hufflepuff" class="btn btn-primary">HUFFLEPUFF</button>
      <button id="ravenclaw" class="btn btn-primary">RAVENCLAW</button>
      <button id="slytherin" class="btn btn-primary">SLYTHERIN</button>
      <button id="fullRoster" class="btn btn-primary "fullRoster">FULL ROSTER</button>
      <button id="sort" class="btn btn-primary">SORTING HAT</button>
      <button id="deathEaters" class="btn btn-primary" "deathEaters">DEATH EATERS</button>
    </div>
    
    <div class="card" style="width: 18rem;">
    <div class="card-body">
      <img src="https://i.pinimg.com/originals/5e/89/88/5e89889df44a4a0782851eba00012434.png" id="gryffindorCrest" class="houseCrest alt="the gryffindor crest"></img>
      <h5 class="card-title">${student.name}, welcome to Gryffindor!</h5>
      <p class="card-text">Info about Gryffinfor here</p>
      <button id="gryffindor" class="btn btn-primary">MEET YOUR HOUSEMATES</button>
    </div>
    </div>`

    renderToDom("#app", domString);
    houseListeners();
 }

const hufflepuffHouse = (student) => {
  domString = ""
  domString += `
  <div id="buttonDiv-h" class="buttonDiv">
    <button id="gryffindor" class="btn btn-primary">GRYFFINDOR</button>
    <button id="ravenclaw" class="btn btn-primary">RAVENCLAW</button>
    <button id="slytherin" class="btn btn-primary">SLYTHERIN</button>
    <button id="fullRoster" class="btn btn-primary" "fullRoster">FULL ROSTER</button>
    <button id="sort" class="btn btn-primary">SORTING HAT</button>
    <button id="deathEaters" class="btn btn-primary" "deathEaters">DEATH EATERS</button>
  </div>
  <div class="card" style="width: 18rem;">
  <div class="card-body">
    <img src="https://i.ebayimg.com/images/g/V6AAAOSwIuNeZ1~M/s-l400.jpg" id="hufflepuffCrest" class="houseCrest alt="the slytherin crest"></img>
    <h5 class="card-title">${student.name}, welcome to Hufflepuff!</h5>
    <p class="card-text">Info about Hufflepuff here</p>
    <button id="hufflepuff" class="btn btn-primary">MEET YOUR HOUSEMATES</button>
  </div>
  </div>`

  renderToDom("#app", domString);
  houseListeners();
};


  
const ravenclawHouse = (student) => {
  domString = ""
  domString += `
    <div id="buttonDiv-r" class="buttonDiv">
      <button id="gryffindor" class="btn btn-primary">GRYFFINDOR</button>
      <button id="hufflepuff" class="btn btn-primary">HUFFLEPUFF</button>
      <button id="slytherin" class="btn btn-primary">SLYTHERIN</button>
      <button id="fullRoster" class="btn btn-primary" "fullRoster" >FULL ROSTER</button>
      <button id="sort" class="btn btn-primary">SORTING HAT</button>
      <button id="deathEaters" class="btn btn-primary" "deathEaters">DEATH EATERS</button>
    </div>
    <div class="card" style="width: 18rem;">
    <div class="card-body">
      <img src="https://cdn11.bigcommerce.com/s-ydriczk/images/stencil/1280x1280/products/88363/91130/Harry-Potter-Ravenclaw-Crest-Official-wall-mounted-cardboard-cutout-buy-now-at-star__86173.1507642983.jpg?c=2" id="ravenclawCrest" class="houseCrest alt="the ravenclaw crest"></img>
      <h5 class="card-title">${student.name}, welcome to Ravenlaw!</h5>
      <p class="card-text">Info about Ravenclaw here</p>
      <button id="ravenclaw" class="btn btn-primary">MEET YOUR HOUSEMATES</button>
    </div>
    </div>`  

    renderToDom("#app", domString);
    houseListeners();
};
  
const slytherinHouse = (student) => {
  domString = ""
  domString += ` 
  <div id="buttonDiv-s" class="buttonDiv">
    <button id="gryffindor" class="btn btn-primary">GRYFFINDOR</button>
    <button id="hufflepuff" class="btn btn-primary">HUFFLEPUFF</button>
    <button id="ravenclaw" class="btn btn-primary">RAVENCLAW</button>
    <button id="fullRoster" class="btn btn-primary" "fullRoster">FULL ROSTER</button>
    <button id="sort" class="btn btn-primary">SORTING HAT</button>
    <button id="deathEaters" class="btn btn-primary" "deathEaters">DEATH EATERS</button>
  </div>
  <div class="card" style="width: 18rem;">
  <div class="card-body">
    <img src="https://m.media-amazon.com/images/I/71jTE5obH-L._AC_SL1200_.jpg" id="slytherinCrest" class="houseCrest alt="the slytherin crest"></img>
    <h5 class="card-title">${student.name}, welcome to Slytherin!</h5>
    <p class="card-text">Info about Slytherin here</p>
    <button id="slytherin" class="btn btn-primary">MEET YOUR HOUSEMATES</button>
  </div>
  </div>`

  renderToDom("#app", domString);
  houseListeners();
};

  

const houseArray = [
  "Gryffindor",
  "Hufflepuff",
  "Ravenclaw",
  "Slytherin"
]

const students = [
  {
    id: 1,
    name: "Kristen Chandler",
    house: "Ravenclaw",
    deathEater: false
  },
  {
    id: 2,
    name: "Ryann Chandler",
    house: "Gryffindor",
    deathEater: false
  },
  {
    id: 3,
    name: "Elizabeth Witt",
    house: "Slytherin",
    deathEater: false
  },
  {
    id: 4,
    name: "Shirley Stever",
    house: "Hufflepuff",
    deathEater: false
  },
  {
    id: 5,
    name: "Rick Stever",
    house: "Hufflepuff",
    deathEater: false
  },
  {
    id: 6,
    name: "Jeff Stever",
    house: "Ravenclaw",
    deathEater: false
  },
  {
    id: 7,
    name: "Meghan Womackr",
    house: "Slytherin",
    deathEater: false
  },
  {
    id: 8,
    name: "James Chandler",
    house: "Gryffindor",
    deathEater: false
  },
]


const addNextId = () => {
  const usedIdArray = students
    .slice()
    .sort(function (a, b) {return a.id - b.id});
    return usedIdArray[usedIdArray.length -1].id +1
}

const addStudent = () => {
  const formNameCapture = document.querySelector("#studentNameForm").value;   
  let randomHouse = houseArray[Math.floor(Math.random() * houseArray.length)]; 
  const newStudent =
  {
    id: addNextId(), 
    name: formNameCapture, 
    house: randomHouse, 
    deathEater: false
  }
  students.push(newStudent);
  return newStudent;
};

const sortingHat = () => {
  const student = addStudent();
    if (student.house === "Gryffindor") {
      gryffindorHouse(student);
    }
    else if (student.house === "Hufflepuff") {
      hufflepuffHouse(student);
    }
    else if (student.house === "Ravenclaw") {
      ravenclawHouse(student);
    }
    else if (student.house === "Slytherin") {
      slytherinHouse(student);
    }
};


//begining of fourth page logic


const deathEaters = [
  {
    id: 1,
    name: "Bellatrix Lestrange",
    house: "Slytherin",
    deathEater: true
  },
  {
    id: 2,
    name: "Lucius Malfoy",
    house: "Slytherin",
    deathEater: true
  }
]



//expel student to death eater array

const expelStudent = () => {
  document.querySelector("#app").addEventListener("click", (evt) => {
  
  if (evt.target.id.includes("expel")) {
    const [method, id] = evt.target.id.split("--");
    const index = students.findIndex(student => student.id === parseInt(id)); 
    const remove = students.splice(index, 1)
    deathEaters.push(...remove);
    cardsOnDom(deathEaters);
  }
})
};


const eventListeners = () => {

  document.querySelector("#openSortingPage").addEventListener("click", sortingPage);
};




const startApp = () => {
  welcome();
  eventListeners();
};

startApp(); 
