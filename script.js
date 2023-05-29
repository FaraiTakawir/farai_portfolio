
window.addEventListener("load", () =>{
    document.querySelector(".main").classList.remove("hidden");
    document.querySelector(".home-section").classList.add("active");

    /*****************Page Loader**********************/ 

    document.querySelector(".page-loader").classList.add("fade-out");
    setTimeout(() =>{
     document.querySelector(".page-loader").style.display = "none";
    },600);
})

// Auto Typing 

const textDisplay = document.getElementById("text");
const phrase = [' I am a frontEnd Developer, i Design dynamic and browser compatible web pages using HTML5, CSS3, Bootstrap Tailwind, JavaScript, Jquery and React. ', 
'Am one of those fun developer who is committed to promote the world of developers by providing clean code & robust software systems with latest technologies.']

let j = 0;
let i = 0;
let currentPhrase = [];
let isDeleting = false;
let isEnd = false;

function loop() {
    isEnd = false;
    textDisplay.innerHTML = currentPhrase.join('')
    if( i < phrase.length){
        if(!isDeleting && j <= phrase[i].length){
            currentPhrase.push(phrase[i][j])
            j++;
            
        }

        if(isDeleting && j <= phrase[i].length){
            currentPhrase.pop(phrase[i][j])
            j--
            
        }
     if(j == phrase[i].length){
        isEnd = true
        isDeleting = true
     }

     if(isDeleting && j === 0){
        currentPhrase = []
        isDeleting =false
        i++
        if(i == phrase.length){
            i = 0;
        }
     }
    }
    

// taskkill /F/ IM oobenetconnectionflow.exe 
// oobe \ bypassnro \

    const speedUp = Math.random() * (80 - 50) + 50;
    const normalSpeed = Math.random() *(300 - 200 ) + 15;
    const time = isEnd ? 2000 : isDeleting ? speedUp :normalSpeed
    setTimeout(loop, time)
}





loop()

// if(win == 0 && !isDeleting){}{}{\windows7:1 pro\}

// let toggle = document.querySelector('.toggle');
// let drive = document.querySelector('.drive');

// toggle.onclick = function(){
//    drive.classList.toggle('active');
// }



/*******************Toggle Nav Bar*****************************/ 
const navToggler = document.querySelector(".nav-toggler");
navToggler.addEventListener("click", () => {
    hideSection();
    toggleNavbar();
    document.body.classList.toggle("hide-scrolling");
})
function hideSection(){
    document.querySelector("section.active").classList.toggle("fade-out");
}
function toggleNavbar(){
    document.querySelector(".header").classList.toggle("active");
}

 //***********Active Section************** */
   
document.addEventListener("click", (e) => {
    if(e.target.classList.contains("link-item") && e.target.hash !== ""){
        //activate the overlay to prevent multiple clicks

        document.querySelector(".overlay").classList.add("active");
        navToggler.classList.add("hide");
        if(e.target.classList.contains("nav-item")){
            // console.log("true");
            toggleNavbar();
        }else{
            // console.log("false");
            hideSection();
            document.body.classList.add("hide-scrolling");
        }
        setTimeout(() =>{
          document.querySelector("section.active" ).classList.remove("active","fade-out");
          document.querySelector(e.target.hash).classList.add("active");
          window.scrollTo(0,0);
          document.body.classList.remove("hide-scrolling");
          navToggler.classList.remove("hide");
          document.querySelector(".overlay").classList.remove("active");
        },500);
    }
});







// about tabs

const tabsContainer = document.querySelector(".about-tabs"),
aboutSection = document.querySelector(".about-section");

tabsContainer.addEventListener("click", (e) =>{
    if(e.target.classList.contains("tab-item") && !e.target.classList.contains("active")){
        tabsContainer.querySelector(".active").classList.remove("active");
        e.target.classList.add("active");
        const target = e.target.getAttribute("data-target");
        aboutSection.querySelector(".tab-content.active").classList.remove("active");
        aboutSection.querySelector(target).classList.add("active");

    };
})


// Hide pop up when clicking outisde
document.addEventListener("click", (e)=>{
    if(e.target.classList.contains("pp-inner")){
        togglePortfolioPopup();
    }
})




//--------------Contuct Us---------//
const btn2 = document.getElementById('btn2');
btn2.addEventListener("click",function(e){
   e.preventDefault()
   var name = document.getElementById('name').value;
   var email = document.getElementById('email').value;
//    var subject = document.getElementById('subject').value;
   var message = document.getElementById('message').value;
   var body = 'name: ' +name + '<br/> email: ' + email + '<br/> subject ' + subject + '<br/> message ' + message; 

   Email.send({
    Host : "smtp.gmail.com",
    Username : "faraitaks@gmail.com",
    Password : "mjexacnrdmotdkve",
    To : 'faraitaks@gmail.com',
    From : email,
    Subject : subject,
    Body : body,
}).then(
 alert('Thank You, Click Ok to Submit')
);
})










