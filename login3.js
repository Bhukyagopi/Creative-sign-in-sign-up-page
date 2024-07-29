document.getElementById("login").addEventListener("click", function() {
    document.getElementById("sign-in-container").classList.remove("hidden");
    document.getElementById("sign-up-container").classList.add("hidden");
});

document.getElementById("register").addEventListener("click", function() {
    document.getElementById("sign-in-container").classList.add("hidden");
    document.getElementById("sign-up-container").classList.remove("hidden");
});
