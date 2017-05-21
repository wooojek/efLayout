document.addEventListener("DOMContentLoaded", function (){

    const onButton = document.getElementById("onButton");
    const offButton = document.getElementById("offButton");
    const chart = document.getElementsByClassName("chart")[0];

    onButton.addEventListener("click", function (event){
        event.preventDefault();

        onButton.classList.add("analysisOn");
        offButton.classList.remove("analysisOff");
        chart.style.display = "flex";
    });

    offButton.addEventListener("click", function (event){
        event.preventDefault();

        offButton.classList.add("analysisOff");
        onButton.classList.remove("analysisOn");
        chart.style.display = "none";
    });

    console.log(onButton, offButton, chart);
});