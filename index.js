function check(){
    searchText = document.getElementById("search").value.replace(/\s+/g, '-').toLowerCase();
    if(document.getElementsByClassName(searchText).length === 0){
        document.getElementById("error").innerHTML = "Nije pronađen niti jedan podatak iz navedene kategorije!"
    }else{
        show(searchText)
    };
};

function show(className){
    document.getElementById("error").innerHTML = "";
    document.getElementById("search").value = "";

    let selected = document.getElementsByClassName(className);

    for(let i = 0; i < selected.length; i++){
        selected[i].style.display = "block";
    };
};

function showAll(){
    document.getElementById("error").innerHTML = "";

    let allDivs = document.getElementsByTagName("div");

    for(let i = 0; i < allDivs.length; i++){
        allDivs[i].style.display = "block";
    };

};

function reset(){
    document.getElementById("error").innerHTML = "";

    let allDivs = document.getElementsByTagName("div");

    for(let i = 0; i < allDivs.length; i++){
        allDivs[i].style.display = "none";
    };
};

function classList(){
    let allClasses = new Set();
    let allDivsList = document.getElementsByTagName("div");

    for(let j = 0; j < allDivsList.length; j++){
        classes = allDivsList[j].getAttribute("class").split(" ");
        for(let k = 0; k < classes.length; k++){
            allClasses.add(classes[k]);
        };
    };

    allClasses = Array.from(allClasses).sort();
    for(let l = 0; l < allClasses.length; l++){
        console.log(allClasses[l]);
    };
};