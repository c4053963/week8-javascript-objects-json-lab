const secondHand = document.getElementById("secondHand");
const minHand = document.getElementById("minHand");
const hrHand = document.getElementById("hrHand");
const myNode = document.createElement("div");
digitalClock.appendChild(myNode);

const updateTime = () => {
    const myDate = new Date();
    const seconds = myDate.getSeconds();
    const minutes = myDate.getMinutes();
    const hours = myDate.getHours();
    myNode.innerHTML = myDate.toLocaleTimeString("en-GB", { timeStyle: "medium" });
    /* Seconds just keeps going around + 6 degrees per second
       Subtract 90 degrees at it defaults to face the right rather than the top */
    secondHand.style.transform=`rotate(${(seconds*6)-90}deg)`;
    /* Minutes is just the current minute * 6
       To make it more precise, I have also added the seconds*/
    minHand.style.transform=`rotate(${(minutes*6+seconds/10)-90}deg)`;
    /* Minutes is just the current hour * 30 (only 12hrs rather than the 60 minutes and seconds)
       To make it more precise, I have also added the minutes */
    hrHand.style.transform=`rotate(${(hours*30+minutes/2)-90}deg)`;
};

setInterval(updateTime, 1000);
updateTime();