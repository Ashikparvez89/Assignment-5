const seats = document.querySelectorAll('.seats');

for (let index = 0; index < seats.length; index++) {
    const seat = seats[index]
    seat.addEventListener('click', myfunction);
    function myfunction() {
        console.log('seat is click')
        seat.classList.add('bg-[#1dd100]');
        seat.classList.add('text-white');
        seat.classList.remove('bg-[#e4e7e7]');



        const seatTable = document.getElementById('seat-container');



        const prize = document.getElementById('price');
        const prices = parseFloat(prize.innerText);
        console.log(prices);



  
        const sea = document.getElementById('c2');
        const newseat = document.createElement('h1');
        const seatname = sea.innerText;
        newseat.innerText = seatname;
        newseat.classList.add('text-[#65686e]', 'text-xl', 'font-semibold');
        seatTable.appendChild(newseat);


        const classes = document.getElementById('chooseClass');
        const newClass = document.createElement('h2');
        const cls = classes.innerText;
        newClass.innerText = cls;
        newClass.classList.add('text-[#65686e]', 'text-xl', 'font-semibold');
        seatTable.appendChild(newClass);

        const pricess = document.getElementById('cash');
        const newprices = document.createElement('span');
        const pricesset = pricess.innerText;
        newprices.innerText = pricesset;
        newprices.classList.add('text-[#65686e]', 'text-xl', 'font-semibold');
        seatTable.appendChild(newprices);
    }
}

console.log('why this is')

