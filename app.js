let hamburgerMenu =  document.querySelector(".HamburgerMenu");

let ShowMenu = ()  => {
    console.log("hello");
let List = document.querySelector(".UList");
console.log(List);
if(List.classList.contains("open")){
    List.classList.remove("open");
}
else{
    List.classList.add("open");
}

}
hamburgerMenu.addEventListener("click",ShowMenu);

let visibleImage = document.querySelector(".slide");
const rightBtn = document.querySelector(".rightArrow");
const imagesContainer = document.querySelector(".imagesContainer")

const buttons = document.querySelectorAll(".buttons");
const SquareBtns = document.querySelectorAll(".Square");
let SquareBtnsArray = [...SquareBtns];

buttonsArray = [...buttons];

buttonsArray.forEach(function (e) {
  e.addEventListener("click", function (ele) {
    const whichButton = ele.target.id;
    const firstDiv = document.getElementById("FirstImg");
    const lastDiv = document.getElementById("ThirdImg");
    console.log(whichButton);
    let invisibleImage = "";
    if (whichButton === "right") {
      invisibleImage = visibleImage.nextElementSibling;
      if (invisibleImage === null) {
        invisibleImage = firstDiv;
      }
    } else {
      invisibleImage = visibleImage.previousElementSibling;
      if (invisibleImage === null) {
        invisibleImage = lastDiv;
      }
    }
    console.log(invisibleImage);

    visibleImage.classList.remove("slide");
    visibleImage.classList.add("slideHidden");

    invisibleImage.classList.remove("slideHidden");
    invisibleImage.classList.add("slide");

    visibleImage = invisibleImage;

  });
});


 console.log(imagesContainer.childNodes);
     const imagesArr = [...imagesContainer.childNodes];
     console.log(imagesArr);
SquareBtnsArray.forEach(function(e){
   
  e.addEventListener("click", function(ele){
     console.log( );
      const btnName = ele.target.getAttribute("data-name");
      imagesArr.forEach(function(e){
        if(btnName === e.id){
          console.log(e);
          invisibleImage = e;
          console.log(invisibleImage);
          visibleImage.classList.remove("slide");
    visibleImage.classList.add("slideHidden");

    invisibleImage.classList.remove("slideHidden");
    invisibleImage.classList.add("slide");

    visibleImage = invisibleImage;

        }
        else{
          return;
        }
      })
  })
});

const header = document.querySelector("nav");
const sectionOne = document.querySelector(".slider");
const liItems = document.querySelectorAll(".links");
const hamB = document.querySelectorAll(".ham");

const sectionOneOptions = {
  rootMargin: "-20px 0px 0px 0px"
};

const sectionOneObserver = new IntersectionObserver(function(
  entries,
  sectionOneObserver
) {
  entries.forEach(entry => {
    if (!entry.isIntersecting) {
      header.classList.add("scrolled");
      liItems.forEach(function(e){
          e.classList.add("black");
      })
       hamB.forEach(function(e){
          e.classList.add("black");
      })
    } else {
      header.classList.remove("scrolled");
       liItems.forEach(function(e){
          e.classList.remove("black");
      })
       hamB.forEach(function(e){
          e.classList.remove("black");
      })
    }
  });
},
sectionOneOptions);

sectionOneObserver.observe(sectionOne);

