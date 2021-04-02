
const views = [
    {
    title : "Zachód słońca pod palmami",
    src: "1.jpg"
    },
    {
    title : "Miasto z góry po horyzont",
    src : "2.jpg"
    },
    {
    title :"Warszawa w budowie",
    src: "3.jpg"
    }
 
];

function displayView(index){

 const imgField = document.querySelector(".content");
 imgField.innerHTML = ""

 const titleField = document.querySelector("h2");
 titleField.innerHTML = views[index].title;

 const img = document.createElement("img");
 img.src = "img/" + views[index].src;
 imgField.append(img)
}
let currentSlide = 1;
displayView(1);

const leftArr = document.querySelector(".left");
leftArr.onclick = () => {changeSlide("left")};
const rightArr = document.querySelector(".right");
rightArr.onclick = () => {changeSlide("right")};

function changeSlide(direction){
    if(direction == "left"){
        currentSlide--;
        if(currentSlide < 0){
            currentSlide = views.length-1;
        }
    }else{
        currentSlide++;
        if(currentSlide > views.length-1){
            currentSlide = 0;
        }
    }
    displayView(currentSlide)
}




console.log(views);