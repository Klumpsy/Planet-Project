// Sun popup //

function popupSun() { 
let overlayAll = document.getElementById("overlay");
overlayAll.classList.add("active"); 
let sunInfo = document.getElementById("sun-popup"); 
sunInfo.classList.add("active"); 
sunInfo.style.backgroundColor = "rgba(255, 211, 0, 0.91";
};

// Mercury popup //

function popupMercury() {
    let overlayAll = document.getElementById("overlay");
    overlayAll.classList.add("active"); 
    let mercuryInfo = document.getElementById("mercury-popup"); 
    mercuryInfo.classList.add("active"); 
    mercuryInfo.style.backgroundColor = "#979382";
};

// Venus popup // 

function popupVenus() {
    let overlayAll = document.getElementById("overlay");
    overlayAll.classList.add("active"); 
    let venusInfo = document.getElementById("venus-popup"); 
    venusInfo.classList.add("active"); 
    venusInfo.style.backgroundColor = "#E2D49D";
};

// Earth popup // 

function popupEarth() {
    let overlayAll = document.getElementById("overlay");
    overlayAll.classList.add("active"); 
    let earthInfo = document.getElementById("earth-popup"); 
    earthInfo.classList.add("active"); 
    earthInfo.style.backgroundColor = "#76c779";
};

// Mars popup

function popupMars() {
    let overlayAll = document.getElementById("overlay");
    overlayAll.classList.add("active"); 
    let marsInfo = document.getElementById("mars-popup"); 
    marsInfo.classList.add("active"); 
    marsInfo.style.backgroundColor = "#DD7342";
}

// Jupiter popup

function popupJupiter() {
    let overlayAll = document.getElementById("overlay");
    overlayAll.classList.add("active"); 
    let jupiterInfo = document.getElementById("jupiter-popup"); 
    jupiterInfo.classList.add("active"); 
    jupiterInfo.style.backgroundColor = "#da9831";
}

// Saturn popup

function popupSaturn() {
    let overlayAll = document.getElementById("overlay");
    overlayAll.classList.add("active"); 
    let saturnInfo = document.getElementById("saturn-popup"); 
    saturnInfo.classList.add("active"); 
    saturnInfo.style.backgroundColor = "#e4be98";
}

// Uranus popup

function popupUranus() {
    let overlayAll = document.getElementById("overlay");
    overlayAll.classList.add("active"); 
    let uranusInfo = document.getElementById("uranus-popup"); 
    uranusInfo.classList.add("active"); 
    uranusInfo.style.backgroundColor = "#7ad1e4";
}

// Neptune popup

function popupNeptune() {
    let overlayAll = document.getElementById("overlay");
    overlayAll.classList.add("active"); 
    let neptuneInfo = document.getElementById("neptune-popup"); 
    neptuneInfo.classList.add("active"); 
    neptuneInfo.style.backgroundColor = "#4076C7 ";
}

// Closebutton //

function closeButton() {
    const closeButton = document.getElementsByClassName("popup");  
    for (i=0; i < closeButton.length; i++){
    closeButton[i].classList.remove("active"); 
    }
    const overlayAll = document.getElementById("overlay");
    overlayAll.classList.remove("active"); 
    };
    
