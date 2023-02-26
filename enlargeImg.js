let big1 = false;
let big2 = false;




const img1 = document.getElementById("resume-img1")
img1.addEventListener("click", function() {
    if (big1 === false) {
        big1 = true
    img1.style.width = "200%";
    img1.style.height = "200%";
    } else {
        big1 = false
        img1.style.width = "50%";
        img1.style.height = "50%";
        console.log("uyfxdgghj")  
    }
}); 
const img2 = document.getElementById("resume-img2")
img2.addEventListener("click", function() {
    if (big2 === false) {
        big2 = true
    img2.style.width = "200%";
    img2.style.height = "200%";
    } else {
        big2 = false
        img2.style.width = "50%";
        img2.style.height = "50%";
        console.log("uyfxdgghj")  
    }
}); 
