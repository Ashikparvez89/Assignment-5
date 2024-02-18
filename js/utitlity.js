const seats = document.querySelectorAll('.seats');

let counterr = 0;

let decreaser = 40;

let totalPrice = 0;

let discountprice = 0;

for (let index = 0; index < seats.length; index++) {
    const seat = seats[index]
    seat.addEventListener('click', myfunction);
    function myfunction() {

        seat.classList.add('bg-[#1dd100]');
        seat.classList.add('text-white');
        seat.classList.remove('bg-[#e4e7e7]');
        const seatTable = document.getElementById('seat-calculate');

        // const prize = document.getElementById('price');
        // const prices = parseFloat(prize.innerText);

        const getvaluetext = seat.querySelector('h3'); // Assuming you want the first <h3> element inside 'seats'
        const getinnertext = getvaluetext.innerText;
        console.log(getinnertext);

        // const sea = document.getElementById('c2');

        const newseat = document.createElement('h3');
        newseat.innerText = getinnertext;
        newseat.classList.add('text-[#65686e]', 'text-xl', 'font-semibold');
        seatTable.appendChild(newseat);

        const classes = document.getElementById('chooseClass');
        const newClass = document.createElement('h2');
        const cls = classes.innerText;
        newClass.innerText = cls;
        newClass.classList.add('text-[#65686e]', 'text-xl', 'font-semibold');
        seatTable.appendChild(newClass);

        const pricess = document.getElementById('price');
        const pricesset = pricess.innerText;
        const cash = parseFloat(pricesset);
        const newprices = document.createElement('span');
        newprices.innerText = cash;
        newprices.classList.add('text-[#65686e]', 'text-xl', 'font-semibold');
        seatTable.appendChild(newprices);


        // calculate total price
        totalPrice += cash;
        console.log(totalPrice)
        const getPrice = document.getElementById('priceCalculate');
        const priceTonumber = parseFloat(getPrice.innerText);
        getPrice.innerText = totalPrice;

        // calculate discount-price

        discountprice += cash;
        console.log(totalPrice)
        const getdiscountPrice = document.getElementById('Discount');
        const discountpriceTonumber = parseFloat(getdiscountPrice.innerText);
        getdiscountPrice.innerText = discountprice;


        // seat counter

        const counts = document.getElementById('counter');
        let count = parseFloat(counts.innerText);
        count = counterr + 1;
        counterr++;
        console.log(count);
        counts.innerText = count;

        // seat balance  

        const balanceSeat = document.getElementById('balance-seat');
        let balances = parseFloat(balanceSeat.innerText);
        balances = decreaser - 1;
        console.log(balances)
        decreaser--;
        balanceSeat.innerText = balances;

    }
}


// discount-section


const discountBtn = document.getElementById('apply-btn');

discountBtn.addEventListener('click', function () {
    console.log('clicked')
    const getcoupon = document.getElementById('coupon-code').value;
    const coupon = getcoupon.toUpperCase();
    console.log(coupon);
    const couponSection = document.getElementById('coupun-section');
    console.log(couponSection);
    if (coupon === 'new20' || coupon === 'couple20') {
        discountBtn.removeAttribute('disabled')
    }
    if (coupon === 'NEW20') {
        console.log('you get 20 %');
        couponSection.classList.add('hidden')

    }
    else if (coupon === 'COUPLE20') {
        console.log('you get 50%')
        couponSection.classList.add('hidden')
    }
    else{
        alert('Please use a vaild coupon')
    }
})

