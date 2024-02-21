let seatCounter = 0;
let seatdecreaser = 40;
let pricedown = 0;
let discountsPrices = 0;
function setInnertext(id, value) {
    document.getElementById(id).innerText = value;

}

const allSeatbtn = document.getElementsByClassName('seatbtns');

for (const singleBtn of allSeatbtn) {
    singleBtn.addEventListener('click', function (e) {



        
        if (seatCounter >= 4) {
            alert('You Reach Maximum')
            singleBtn.setAttribute('disabled', true)
            return;
        }
        else {
            singleBtn.setAttribute('disabled', false)

        }
        seatCounter = seatCounter + 1;
        setInnertext('counr', seatCounter)
        seatdecreaser = seatdecreaser - 1;
        setInnertext('bb-seat', seatdecreaser);



        singleBtn.classList.remove('bg-[#e4e7e7]');
        singleBtn.classList.add('bg-[#1DD100]');
        singleBtn.classList.add('text-white')
        singleBtn.setAttribute('disabled', true)


        const seatContainer = document.getElementById('selected-seat');
        const createElement = document.createElement('h3');
        createElement.innerText = singleBtn.innerText;
        seatContainer.appendChild(createElement);

        const createClassElement = document.createElement('h2');
        createClassElement.innerText = 'Buisness';
        seatContainer.appendChild(createClassElement);


        // add price and sum

        const priceString = document.getElementById('taka');
        const priceInner = priceString.innerText;

        const priceNumber = parseFloat(priceInner);

        const createPriceelement = document.createElement('span');

        createPriceelement.innerText = priceNumber;

        seatContainer.appendChild(createPriceelement);

        // set sum price
        const tprice = document.getElementById('priceCalculates').innerText;

        pricedown += priceNumber;

        const setprice = document.getElementById('priceCalculates');
        const setpricetonumber = parseFloat(setprice.innerText);
        setprice.innerText = pricedown;

        // set discount prices

        discountsPrices += priceNumber;

        const getscount = document.getElementById('scount');
        const scountpricetonumber = parseFloat(getscount.innerText);

        getscount.innerText = discountsPrices;


    })
}

const btncoupon = document.getElementById('app');

btncoupon.addEventListener('click', function () {

    const getCouponinput = document.getElementById('coupode');

    const getcoupontext = getCouponinput.value.toUpperCase();
    const getcouponsection = document.getElementById('apply-coupon-sections')

    const getscount = document.getElementById('scount');
    const scountpricetonumber = parseFloat(getscount.innerText);

    getscount.innerText = discountsPrices;
    

    if (getcoupontext === 'NEW15') {
        console.log('ok this is 15%');
        getcouponsection.classList.add('hidden')
        const discountmoney = discountsPrices * .15;
        discountsPrices = discountsPrices - discountmoney;
        getscount.innerText = discountsPrices;

   
    }
    else if (getcoupontext === 'COUPLE20') {
        console.log('this is 20%')
        getcouponsection.classList.add('hidden')
        getcouponsection.classList.add('hidden')
        const discountmoney = discountsPrices * .20;
        discountsPrices = discountsPrices - discountmoney;
        getscount.innerText = discountsPrices;
        
    }
    else {
        alert(getcoupontext + ' is not a valid coupon')
    }
})


