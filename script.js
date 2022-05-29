let tableBody = document.getElementById("table-body");
let tableHTML = "";

function addRow() {
    let userInput = document.getElementsByClassName("user-input");
    tableHTML += /*html*/`
        <tr>
            <td scope="row">${userInput[0].value}</td>
            <td>${userInput[1].value}</td>
            <td>${userInput[2].value}</td>
            <td>${userInput[3].value}</td>
        </tr>
        `;
    tableBody.innerHTML = tableHTML;
}