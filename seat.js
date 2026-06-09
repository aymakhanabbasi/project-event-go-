const seats = document.querySelectorAll('.seat:not(.booked)');

seats.forEach(seat => {

    seat.addEventListener('click', () => {

        seat.classList.toggle('selected');

    });

});

const confirmBtn = document.getElementById('confirmBtn');

confirmBtn.addEventListener('click', () => {

    const selectedSeats =
        document.querySelectorAll('.seat.selected');

    alert(
        selectedSeats.length +
        " seat(s) selected successfully!"
    );

});