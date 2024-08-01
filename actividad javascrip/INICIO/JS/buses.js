const seatsConfig = {
    van: 15,
    bus: 40,
    busGrande: 60
};

function generateSeats() {
    const busType = document.getElementById('busType').value;
    const seatsContainer = document.getElementById('seatsContainer');
    seatsContainer.innerHTML = '';

    const totalSeats = seatsConfig[busType];
    let i = 1;

    while (i <= totalSeats) {
        const seat = document.createElement('div');
        seat.classList.add('seat');
        seat.innerText = i;
        seat.addEventListener('click', () => {
            seat.classList.toggle('selected');
        });
        seatsContainer.appendChild(seat);
        i++;
    }
}
