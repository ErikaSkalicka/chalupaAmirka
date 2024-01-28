let section = document.querySelectorAll("section");
let navLink = document.querySelectorAll(".scroll");

let current = "home";
section.forEach((Section) => {
    let sectionTop = section.offsetTop;
    if(offsetTop >= sectionTop -60){
        current = section.getAttribute("id")
    }
})
// window.onscroll = () => {
//     section.forEach(sec =>{
//         let top = window.scrollY;
//         let offset = sec. offsetTop - 150;
//         let height = sec. offsetHeight;
//         let classa = sec.getAttribute("class");
//         if (top > offset && top < offset + height){
//             navLink.forEach(links => {
//                 links.classList.remove("active");
//                 document.querySelector("header nav a [href*='+id+']").classList.add("active")
//             })
//         }  
//     })
// }

