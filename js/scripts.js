



function openModal() {
    const sectionContent = document.getElementById('mySection').innerHTML;
    document.getElementById('modalContent').innerHTML = sectionContent;
    document.getElementById('myModal').classList.remove('hidden');
}

function closeModal() {
    document.getElementById('myModal').classList.add('hidden');
    clearInputsAndReload()
}

function clearInputsAndReload() {
    const inputElements = document.querySelectorAll('input');
    inputElements.forEach(function(inputElement) {
        inputElement.value = '';
    });
    location.reload();
}


document.addEventListener('DOMContentLoaded', function () {
        const getName = document.getElementById('sssss');
        const getNumber = document.getElementById('number');
        const getMail = document.getElementById('mail');
        const btnmodal = document.getElementById('modalll');

        getName.addEventListener('input', checkInputs);
        getNumber.addEventListener('input', checkInputs);
        getMail.addEventListener('input', checkInputs);

        function checkInputs() {
            const nameText = getName.value;
            const check = nameText.length;

            const numbers = getNumber.value;
            const num = numbers.length;

            const mailtext = getMail.value;
            const mails = mailtext.length;

            if (check >= 3  && num >= 3 && mails >= 3) {
                btnmodal.removeAttribute('disabled');
            } else {
                btnmodal.setAttribute('disabled', 'disabled');
            }
        }
});



