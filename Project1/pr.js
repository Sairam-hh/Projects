let hoursInput = document.getElementById("hoursInput");
let minutesInput = document.getElementById("minutesInput");
let convertBtn = document.getElementById("convertBtn");
let timeInSeconds = document.getElementById("timeInSeconds");
let errorMsg = document.getElementById("errorMsg");
errorMsg.classList.add("error-message");
convertBtn.addEventListener("click", function() {
    let Hours = parseInt(hoursInput.value);
    let Minutes = parseInt(minutesInput.value);
    if (hoursInput.value === "") {
        errorMsg.textContent = "Please Enter Valid numer of hours";
        return;
    } else if (minutesInput.value === "") {
        errorMsg.textContent = "Please Enter Valid numer of minutes";
        return;
    } else {
        errorMsg.textContent = "";
        let hourSeconds = Hours * 3600;
        let minuteSeconds = Minutes * 60;
        timeInSeconds.classList.add("output-seconds", "d-flex", "flex-column", "justify-content-center");
        timeInSeconds.textContent = hourSeconds + minuteSeconds + "S";
    }
});