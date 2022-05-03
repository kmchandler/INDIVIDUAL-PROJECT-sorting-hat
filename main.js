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
      <a id="openSortingPage" class="btn btn-primary">SORT</a>
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
            <input type="name" class="form-control" id="studentNameForm" placeholder="First and Last Name">
            </div>
          <p class="card-text">Quotes from book about sorting hat go here</p>
          <a id="performSorting" class="btn btn-primary">SORT</=>
        </div>
        </div>`
  
      renderToDom("#app", domString);

      document.querySelector("#performSorting").addEventListener("click", sortingHat);
    };


//beginning of third card methods
 const gryffindorHouse = (student) => {
   domString = ""
   domString += `
    <div class="card" style="width: 18rem;">
    <div class="card-body">
      <img src="https://flyclipart.com/thumb2/harrypotter-gryffindor-lion-hogwarts-wizardfreetoedit-836029.png" id="gryffindorCrest" class="houseCrest alt="the gryffindor crest"></img>
      <h5 class="card-title">${student.name}, welcome to Gryffindor!</h5>
      <p class="card-text">Info about Gryffinfor here</p>
      <a id="gryffindorRoster" class="btn btn-primary">MEET YOUR HOUSEMATES</=>
      <a id="schoolRoster" class="btn btn-primary">SCHOOL ROSTER</=>
    </div>
    </div>`

  renderToDom("#app", domString);
};
  
const ravenclawHouse = (student) => {
  domString = ""
  domString += `
    <div class="card" style="width: 18rem;">
    <div class="card-body">
      <img src="https://www.pinclipart.com/picdir/middle/113-1138734_crest-png-for-free-download-on-harry-potter.png" id="ravenclawCrest" class="houseCrest alt="the ravenclaw crest"></img>
      <h5 class="card-title">${student.name}, welcome to Ravenlaw!</h5>
      <p class="card-text">Info about Ravenclaw here</p>
      <a id="gryffindorRoster" class="btn btn-primary">MEET YOUR HOUSEMATES</=>
      <a id="schoolRoster" class="btn btn-primary">SCHOOL ROSTER</=>
    </div>
    </div>`

  renderToDom("#app", domString);
};
  
const slytherinHouse = (student) => {
  domString = ""
  domString += `
  <div class="card" style="width: 18rem;">
  <div class="card-body">
    <img src="https://toppng.com/uploads/preview/slytherin-crest-slytherin-crest-clipart-harry-potter-slytherin-crest-11562871434vbfa2qke9n.png" id="slytherinCrest" class="houseCrest alt="the slytherin crest"></img>
    <h5 class="card-title">${student.name}, welcome to Slytherin!</h5>
    <p class="card-text">Info about Slytherin here</p>
    <a id="gryffindorRoster" class="btn btn-primary">MEET YOUR HOUSEMATES</=>
    <a id="schoolRoster" class="btn btn-primary">SCHOOL ROSTER</=>
  </div>
  </div>`

renderToDom("#app", domString);
};
  
const hufflepuffHouse = (student) => {
  domString = ""
  domString += `
  <div class="card" style="width: 18rem;">
  <div class="card-body">
    <img src="https://www.pinclipart.com/picdir/middle/453-4537332_crest-banner-png-harry-potter-hufflepuff-crest-clipart.png" id="hufflepuffCrest" class="houseCrest alt="the slytherin crest"></img>
    <h5 class="card-title">${student.name}, welcome to Hufflepuff!</h5>
    <p class="card-text">Info about Hufflepuff here</p>
    <a id="gryffindorRoster" class="btn btn-primary">MEET YOUR HOUSEMATES</=>
    <a id="schoolRoster" class="btn btn-primary">SCHOOL ROSTER</=>
  </div>
  </div>`

renderToDom("#app", domString);
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
  debugger;
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


const fullRoster = () => {
  domString = ""
  domString += `
  <div class="card" style="width: 18rem;">
  <div class="card-body">
    <h5 class="card-title">Hogwarts Roster/h5>
    <a id="gryffindorRoster" class="btn btn-primary">GRYFFINDOR</=>
    <a id="hufflepuffRoster" class="btn btn-primary">HUFFLEPUFF</=>
    <a id="ravenclawRoster" class="btn btn-primary">RAVENCLAW</=>
    <a id="slytherinRoster" class="btn btn-primary">SLYTHERIN</=>
    <a id="fullRoster" class="btn btn-primary">FULL ROSTER</=>
  </div>
  </div>`

  renderToDom("#app", domString);
};


const expelStudent = () => {
  const deathEaters = [
    {
      id: 1,
      name: "Bellatrix Lestrange",
      house: "Slytherin",
      deathEater: true
    }
  ]
}

const eventListeners = () => {

  document.querySelector("#openSortingPage").addEventListener("click", sortingPage);
  
  

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
