document.addEventListener("DOMContentLoaded", function (){

    const onButton = document.getElementById("onButton");
    const offButton = document.getElementById("offButton");
    const chart = document.getElementsByClassName("chart")[0];
    const searchBar = document.getElementsByClassName("searchBar")[0];
    const searchBarImg = searchBar.childNodes[1];
    const searchBarInput = searchBar.childNodes[3];
    const messagesNotification = document.querySelector(".profileFunctions").querySelector("img");

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

    searchBarImg.addEventListener("click", function (event) {
        event.preventDefault();

        searchBarInput.style.display === "inline-block" ? searchBarInput.style.display = "none" : searchBarInput.style.display = "inline-block";
    });

    let notification = document.createElement("span");
    notification.innerHTML = "2";
    notification.classList.add("notification");

    messagesNotification.appendChild(notification);

    console.log(messagesNotification);
});