let cardString = "";
let buttonString = "";


const renderToDom = (divId, textToRender) => {
  const selectedElement = document.querySelector(divId);
  selectedElement.innerHTML = textToRender;
};

//beginning of first card methods
const welcome = () => {
  cardString += `
      <div id="welcomeCard" class="card">
      <img src="https://assets.mugglenet.com/wp-content/uploads/2018/06/The-Sorting-Hat-Stool-Minerva-McGonall-1.jpeg" class="card-img-top" alt="a picture of the hogwarts sorting hat"></img>
      <div class="card-body">
        <h5 class="card-title">Hogwarts Sorting Hat</h5>
        <p class="card-text">"Oh, you may not think I'm pretty,
        but don't judge on what you see,
        I'll eat myself if you can find
        a smarter hat than me.
        You can keep your bowlers black,
        your top hats sleek and tall,
        for I'm the Hogwarts Sorting Hat
        and I can cap them all.
        There's nothing hidden in your head
        the Sorting Hat can't see,
        so try me on and I will tell you
        where you ought to be."</p>
        <button id="openSortingPage" class="btn btn-primary">SORT</button>
      </div>
      </div>`

  renderToDom("#cardContainer", cardString);
}

//beginning of second card methods
const sortingPage = () => {
    cardString = ""
    buttonString = ""
    
    buttonString += `
      <div id="buttonDiv" class="buttonDiv">
        <button id="gryffindor" class="btn btn-primary">GRYFFINDOR</button>
        <button id="hufflepuff" class="btn btn-primary">HUFFLEPUFF</button>
        <button id="ravenclaw" class="btn btn-primary">RAVENCLAW</button>
        <button id="slytherin" class="btn btn-primary">SLYTHERIN</button>
        <button id="fullRoster" class="btn btn-primary" "fullRoster">FULL ROSTER</button>
        <button id="deathEaters" class="btn btn-primary">DEATH EATERS</button>
      </div>`

    cardString +=`
      <div id="sortingCard" class="card">
      <div class="card-body">
      <h5 class="card-title">Enter Name to be Sorted</h5>
      <div class="mb-3">
        <form>
        <input type="name" class="form-control" id="studentNameForm" placeholder="First and Last Name">
        </form>
        </div>
      <p class="card-text">So put me on! Don't be afraid!
      And don't get in a flap!
      You're in safe hands (though I have none)
      for I'm a Thinking Cap!"</p>
      <button id="performSorting" class="btn btn-primary">SORT</button>
      </div>
      </div>`

  
      renderToDom("#cardContainer", cardString);
      renderToDom("#buttonContainer", buttonString)

      document.querySelector("#performSorting").addEventListener("click", sortingHat);
      houseListeners();
    };


    const cardsOnDom = (taco) => {
      cardString = ""
      buttonString = ""

      buttonString += `
          <div id="buttonDiv" class="buttonDiv">
            <button id="gryffindor" class="btn btn-primary">GRYFFINDOR</button>
            <button id="hufflepuff" class="btn btn-primary">HUFFLEPUFF</button>
            <button id="ravenclaw" class="btn btn-primary">RAVENCLAW</button>
            <button id="slytherin" class="btn btn-primary">SLYTHERIN</button>
            <button id="fullRoster" class="btn btn-primary fullRoster">FULL ROSTER</button>
            <button id="sort" class="btn btn-primary">SORTING HAT</button>
            <button id="deathEaters" class="btn btn-primary">DEATH EATERS</button>
          </div>`

      taco.forEach((student) => {
        cardString += `
         <div id="studentDomCards" class="card">
            <div id="studentCardOnDom" class="card">
                <h5 class="card-header">${student.name}
                  <button class="btn btn-danger" id="expel--${student.id}">EXPEL</button>
                </h5>
                <div class="card-body">
                   <img id="crest" class="image" src="https://www.seekpng.com/png/detail/184-1840987_product-image-alt-harry-potter-hogwarts-crest-doormat.png">
                </div>
                <div class="card-footer ${student.house}-footer">${student.house}</div>
            </div>
         </div>`
        });
    
        renderToDom("#buttonContainer", buttonString);
        renderToDom("#cardContainer", cardString);
        expelStudent();
        houseListeners();
    };


    const deathEatersOnDom = (taco) => {
      cardString = ""
      buttonString = ""

      buttonString += `
          <div id="buttonDiv" class="buttonDiv">
            <button id="gryffindor" class="btn btn-primary">GRYFFINDOR</button>
            <button id="hufflepuff" class="btn btn-primary">HUFFLEPUFF</button>
            <button id="ravenclaw" class="btn btn-primary">RAVENCLAW</button>
            <button id="slytherin" class="btn btn-primary">SLYTHERIN</button>
            <button id="fullRoster" class="btn btn-primary fullRoster">FULL ROSTER</button>
            <button id="sort" class="btn btn-primary">SORTING HAT</button>
          </div>`

      taco.forEach((student) => {
        cardString += `
         <div id="deathEaterCards" class="card">
         <div id="studentCard" class="card">
            <h5 class="card-header">${student.name}
            <button class="btn btn-danger" id="enroll--${student.id}">ENROLL</button>
            </h5>
            <img id="crest" class="image" src="http://cdn.shopify.com/s/files/1/0046/5498/9386/products/STE-CHARA-B37__95684.1493873088.1280.1280_1200x630.jpg?v=1551483846">
            <div class="card-body">
            <h5 class="card-title"></h5>
            </div>
            <div class="card-footer deathEater-footer">Death Eater</div>
         </div>
         </div>`
        });
    
        renderToDom("#buttonContainer", buttonString);
        renderToDom("#cardContainer", cardString);
        enrollStudent();
        houseListeners();
    };


//beginning of third card methods
const houseListeners = () => {
  
  document.querySelector("#hufflepuff").addEventListener("click", filter)
  document.querySelector("#ravenclaw").addEventListener("click", filter)
  document.querySelector("#slytherin").addEventListener("click", filter)
  document.querySelector("#gryffindor").addEventListener("click", filter)
  document.querySelector("#sort").addEventListener("click", sortingPage)
  document.querySelector("#deathEaters").addEventListener("click", filter)
  document.querySelector("#fullRoster").addEventListener("click", filter)
}

const filter = (evt) => {
  const filterText = evt.target.id;
    if (filterText === "fullRoster") {
      cardsOnDom(students); 
    } else if (filterText === "deathEaters") {
      deathEatersOnDom(deathEaters);
    } else {
      cardsOnDom(students.filter(student => student.house.toLowerCase() === filterText));
    }
  }

 const gryffindorHouse = (student) => {
   cardString = ""
   buttonString = ""

   buttonString += `
    <div id="buttonDiv" class="buttonDiv">
      <button id="hufflepuff" class="btn btn-primary">HUFFLEPUFF</button>
      <button id="ravenclaw" class="btn btn-primary">RAVENCLAW</button>
      <button id="slytherin" class="btn btn-primary">SLYTHERIN</button>
      <button id="fullRoster" class="btn btn-primary "fullRoster">FULL ROSTER</button>
      <button id="sort" class="btn btn-primary">SORTING HAT</button>
      <button id="deathEaters" class="btn btn-primary">DEATH EATERS</button>
    </div>`

    cardString +=
    `<div id="gryffindorCard" class="card">
      <div class="card-body">
      <img src="https://i.pinimg.com/originals/5e/89/88/5e89889df44a4a0782851eba00012434.png" id="gryffindorCrest" class="houseCrest alt="the gryffindor crest"></img>
      <h5 class="card-title">${student.name}, welcome to Gryffindor!</h5>
      <p class="card-text">You belong in Gryffindor,
      where dwell the brave at heart,
      Their daring, nerve, and chivalry Set Gryffindors apart.</p>
      <button id="gryffindor" class="housematesBtn">MEET YOUR HOUSEMATES</button>
    </div>
    </div>`

    renderToDom("#buttonContainer", buttonString);
    renderToDom("cardContainer", cardString);
    houseListeners();
 }

const hufflepuffHouse = (student) => {
  buttonString = ""
  cardString = ""
  
  buttonString += `
  <div id="buttonDiv" class="buttonDiv">
    <button id="gryffindor" class="btn btn-primary">GRYFFINDOR</button>
    <button id="ravenclaw" class="btn btn-primary">RAVENCLAW</button>
    <button id="slytherin" class="btn btn-primary">SLYTHERIN</button>
    <button id="fullRoster" class="btn btn-primary" "fullRoster">FULL ROSTER</button>
    <button id="sort" class="btn btn-primary">SORTING HAT</button>
    <button id="deathEaters" class="btn btn-primary">DEATH EATERS</button>
  </div>`

  cardString +=
  `<div id="hufflepuffCard" class="card">
    <div class="card-body">
    <img src="https://i.ebayimg.com/images/g/V6AAAOSwIuNeZ1~M/s-l400.jpg" id="hufflepuffCrest" class="houseCrest alt="the slytherin crest"></img>
    <h5 class="card-title">${student.name}, welcome to Hufflepuff!</h5>
    <p class="card-text">You belong in Hufflepuff,
    where they are just and loyal.
    Those patient Hufflepuffis are true and unafraid of toil.</p>
    <button id="hufflepuff" class="btn btn-primary housematesBtn">MEET YOUR HOUSEMATES</button>
  </div>
  </div>`

  renderToDom("#buttonContainer", buttonString);
  renderToDom("#cardContainer", cardString);
  houseListeners();
};


  
const ravenclawHouse = (student) => {
  buttonString = ""
  cardString = ""

  buttonString += `
    <div id="buttonDiv" class="buttonDiv">
      <button id="gryffindor" class="btn btn-primary">GRYFFINDOR</button>
      <button id="hufflepuff" class="btn btn-primary">HUFFLEPUFF</button>
      <button id="slytherin" class="btn btn-primary">SLYTHERIN</button>
      <button id="fullRoster" class="btn btn-primary" "fullRoster" >FULL ROSTER</button>
      <button id="sort" class="btn btn-primary">SORTING HAT</button>
      <button id="deathEaters" class="btn btn-primary">DEATH EATERS</button>
    </div>`

  cardString +=
  `<div id="ravenclawCard" class="card">
    <div class="card-body">
    <img src="https://cdn11.bigcommerce.com/s-ydriczk/images/stencil/1280x1280/products/88363/91130/Harry-Potter-Ravenclaw-Crest-Official-wall-mounted-cardboard-cutout-buy-now-at-star__86173.1507642983.jpg?c=2" id="ravenclawCrest" class="houseCrest alt="the ravenclaw crest"></img>
    <h5 class="card-title">${student.name}, welcome to Ravenlaw!</h5>
    <p class="card-text">You belong in wise old Ravenclaw,
    for you've a ready mind,
    where those of wit and learning,
    will always find their kind</p>
    <button id="ravenclaw" class="btn btn-primary housematesBtn">MEET YOUR HOUSEMATES</button>
  </div>
  </div>`  

    renderToDom("#buttonContainer", buttonString);
    renderToDom("#cardContainer", cardString);
    houseListeners();
};
  
const slytherinHouse = (student) => {
  buttonString = ""
  cardString = ""
  

  buttonString += ` 
  <div id="buttonDiv" class="buttonDiv">
    <button id="gryffindor" class="btn btn-primary">GRYFFINDOR</button>
    <button id="hufflepuff" class="btn btn-primary">HUFFLEPUFF</button>
    <button id="ravenclaw" class="btn btn-primary">RAVENCLAW</button>
    <button id="fullRoster" class="btn btn-primary" "fullRoster">FULL ROSTER</button>
    <button id="sort" class="btn btn-primary">SORTING HAT</button>
    <button id="deathEaters" class="btn btn-primary">DEATH EATERS</button>
  </div>`

  cardString +=
  `<div id="slytherinCard" class="card">
    <div class="card-body">
    <img src="https://m.media-amazon.com/images/I/71jTE5obH-L._AC_SL1200_.jpg" id="slytherinCrest" class="houseCrest alt="the slytherin crest"></img>
    <h5 class="card-title">${student.name}, welcome to Slytherin!</h5>
    <p class="card-text">You belong in Slytherin
    where you'll make your real friends.
    Those cunning folk use any means
    to achieve their ends.</p>
    <button id="slytherin" class="btn btn-primary housematesBtn">MEET YOUR HOUSEMATES</button>
  </div>
  </div>`

  renderToDom("#buttonContainer", buttonString);
  renderToDom("#cardContainer", cardString);
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
    name: "Meghan Womack",
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
  document.querySelector("#cardContainer").addEventListener("click", (evt) => {
  if (evt.target.id.includes("expel")) {
    const [method, id] = evt.target.id.split("--");
    const index = students.findIndex(student => student.id === parseInt(id)); 
    const remove = students.splice(index, 1)
    deathEaters.push(...remove);
    deathEatersOnDom(deathEaters);
  }
})
};

const enrollStudent = () => {
  document.querySelector("#cardContainer").addEventListener("click", (evt) => {
  if (evt.target.id.includes("enroll")) {
    const [method, id] = evt.target.id.split("--");
    const index = deathEaters.findIndex(deathEater => deathEater.id === parseInt(id)); 
    const remove = deathEaters.splice(index, 1)
    students.push(...remove);
    cardsOnDom(students);
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
