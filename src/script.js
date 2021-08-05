const form = document.getElementById("form");
input.addEventListener("keydown", validateEmail);

function validateEmail(e){
    let input = document.getElementById("input").value;
    const pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
 
    if (input.match(pattern)){
        form.classList.add("valid");
        form.classList.remove("invalid");
    } else {
        form.classList.remove("valid");
        form.classList.add("invalid");
    }
    if (e.key === "Backspace" && input.length === 1){
        form.classList.remove("valid");
        form.classList.remove("invalid");
    }
}