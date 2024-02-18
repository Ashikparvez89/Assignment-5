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

        // add seat number

        const getvaluetext = seat.querySelector('h3');
        const getinnertext = getvaluetext.innerText;
        const newseat = document.createElement('h3');
        newseat.innerText = getinnertext;
        newseat.classList.add('text-[#65686e]', 'text-xl', 'font-semibold');
        seatTable.appendChild(newseat);

        // add economy class
        const setbtn = document.getElementById('seat-btn')
        console.log(setbtn)
        const h3Elements = seatTable.getElementsByTagName('h3');
        const numberOfH3Elements = h3Elements.length;
        console.log(numberOfH3Elements);

        if(numberOfH3Elements === 4){
            setbtn.setAttribute('disabled', 'disabled')
        }

        const classes = document.getElementById('chooseClass');
        const newClass = document.createElement('h2');
        const cls = classes.innerText;
        newClass.innerText = cls;
        newClass.classList.add('text-[#65686e]', 'text-xl', 'font-semibold');
        seatTable.appendChild(newClass);


        // add price

        const pricess = document.getElementById('price');
        const pricesset = pricess.innerText;
        const cash = parseFloat(pricesset);
        const newprices = document.createElement('span');
        newprices.innerText = cash;
        newprices.classList.add('text-[#65686e]', 'text-xl', 'font-semibold');
        seatTable.appendChild(newprices);


        // calculate total price
        totalPrice += cash;
        const getPrice = document.getElementById('priceCalculate');
        const priceTonumber = parseFloat(getPrice.innerText);
        getPrice.innerText = totalPrice;


        // calculate discount-price

        discountprice += cash;
        let getdiscountPrice = document.getElementById('Discount');
        const discountpriceTonumber = parseFloat(getdiscountPrice.innerText);
        getdiscountPrice.innerText = discountprice;

        // seat counter

        const counts = document.getElementById('counter');
        let count = parseFloat(counts.innerText);
        count = counterr + 1;
        counterr++;
        counts.innerText = count;

        // seat balance  

        const balanceSeat = document.getElementById('balance-seat');
        let balances = parseFloat(balanceSeat.innerText);
        balances = decreaser - 1;
        decreaser--;
        balanceSeat.innerText = balances;
    }


}


const discountBtn = document.getElementById('apply-btn');

discountBtn.addEventListener('click', function () {
    console.log('clicked')
    const getcoupon = document.getElementById('coupon-code').value;
    const coupon = getcoupon.toUpperCase();
    console.log(coupon);
    const aplbtn = document.getElementById('apply-btn')
    const couponSection = document.getElementById('apply-coupon-section');
    // calculate discount-price

    let getdiscountPrice = document.getElementById('Discount');
    const discountpriceTonumber = parseFloat(getdiscountPrice.innerText);
    getdiscountPrice.innerText = discountprice;


    if (coupon === 'NEW15' || coupon === 'COUPLE20') {

        aplbtn.classList.add('bg-red-300')
        aplbtn.removeAttribute('disabled')
        console.log('this is target text')
    }
    if (coupon === 'NEW15') {
        couponSection.classList.add('hidden')
        const discountAmount = totalPrice * .15;
        console.log(discountAmount);
        discountprice = totalPrice - discountAmount;
        console.log(discountprice);
        getdiscountPrice.innerText = discountprice;

    }
    else if (coupon === 'COUPLE20') {
        couponSection.classList.add('hidden')
        const discountAmount = totalPrice * .20;
        console.log(discountAmount);
        discountprice = totalPrice - discountAmount;
        getdiscountPrice.innerText = discountprice;
    }
    else{
        alert(coupon + ' is not a valid coupon')
    }
})



