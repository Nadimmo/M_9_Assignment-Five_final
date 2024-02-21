let totalPrice = 0;
let clickCount = 0;
var clickedCount = 0;
function fun(clickedButton) {
    if(!clickedButton.classList.contains('disabled')){
        clickedButton.style.backgroundColor = '#1DD100';
        clickedCount++;
        if(clickedCount >= 4){
            disableButtons();
        }
    }
    // change current seat and seat the new seat
    const currentSeat  = document.getElementById('currentSeat');
    const Seat = parseInt(currentSeat.innerText);
    // new score;
    const NewSeat = Seat - 1;
    currentSeat.innerText = NewSeat;
    
    // table create 
    const table = document.getElementById('table');
    const seatNumber = document.getElementById('seatNumber');
    // add seatNumber
    seatNumber.textContent = parseInt(seatNumber.textContent) + 1;
    // row create
    const newRow = document.createElement('tr');

    // Create new table cells and set their content
    const seatCell = document.createElement('td');
    seatCell.textContent = clickedButton.textContent;
    const classCell = document.createElement('td');
    classCell.textContent = 'Economy'; // You can change this dynamically if needed
    const priceCell = document.createElement('td');
    priceCell.textContent = '550'; // You can change this dynamically if needed

    // Append cells to the row
    newRow.appendChild(seatCell);
    newRow.appendChild(classCell);
    newRow.appendChild(priceCell);

    // Append row to the table
    table.appendChild(newRow);
    const totalPriceCell = document.getElementById('totalPriceCell');
    
    // Update total price
    totalPrice += parseInt(priceCell.textContent);
    totalPriceCell.textContent = 'BDT: ' + totalPrice;

    // condition
    clickCount++; // Increment the click count

    if (clickCount >= 4) {
        document.getElementById("apply").disabled = false; // Enable the "Apply" button;

    }

}


const nameInput = document.getElementById("name");
const phoneInput = document.getElementById("phone");
const emailInput = document.getElementById("email");
const nextButton = document.getElementById("Nextbtn");

nameInput.addEventListener("input", checkInputs);
phoneInput.addEventListener("input", checkInputs);
emailInput.addEventListener("input", checkInputs);

function checkInputs() {
    if (nameInput.value.trim() !== "" && phoneInput.value.trim() !== "" && emailInput.value.trim() !== "") {
        nextButton.disabled = false;
    } else {
        nextButton.disabled = true;
    }
}

// next page
function nextPage(){
    hiddenElementByID("main");
    hiddenElementByID("footer");
    hiddenElementByID("header");
    showElementByID("success");
}

function Continue(){
    hiddenElementByID("success");
    showElementByID("main");
    showElementByID("header");
    showElementByID("footer")
}