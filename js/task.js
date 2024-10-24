document.addEventListener("DOMContentLoaded", function() {
    const startButton = document.getElementById("start-button");

    startButton.addEventListener("mouseenter", function() {
        this.classList.add("hover");
    });

    startButton.addEventListener("mouseleave", function() {
        this.classList.remove("hover");
    });

    startButton.addEventListener("click", function() {
        this.classList.toggle("pressed");
    });
});
