function highlight() {
    //Write your code here
document.querySelectorAll("strong").forEach((element) => {
        element.style.color = "rgb(0, 128, 0)"; // Change color to green
    });

}


function return_normal() {
    //Write your code here
 document.querySelectorAll("strong").forEach((element) => {
        element.style.color = "rgb(0, 0, 0)"; // Revert color to black
    });
    
}
