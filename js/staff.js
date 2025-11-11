const staffTable = document.getElementById("staffTable");

(() => {
    fetch("./data/staff.json")
    .then(response => response.json())
    .then(data => {
        console.dir(data)
        data.forEach((item) => {
            const row = document.createElement("tr");
            const nameCell = document.createElement("td");
            const emailCell = document.createElement("td");
            const ageCell = document.createElement("td");
            nameCell.textContent = `${item.first_name}  ${item.last_name}`;
            emailCell.textContent = item.email;
            ageCell.textContent = getAge(item.dob);
            row.appendChild(nameCell);
            row.appendChild(emailCell);
            row.appendChild(ageCell);
            staffTable.appendChild(row);
        })
    })
    .catch(error => {
        console.error("Error loading JSON:", error);
    });
})();

function getAge(strDoB) {
    const dob = strDoB.split('-');
    const myDate = new Date();
    myYear = myDate.getFullYear();
    myMonth = myDate.getMonth() + 1;
    myDay = myDate.getDate();
    let age = myYear - dob[0];
    if (myMonth <= dob[1]) {
        if (myMonth == dob[1]) {
            if (myDay < dob[2]){
                age -= 1;
            }
        }
    }
    return age;
}