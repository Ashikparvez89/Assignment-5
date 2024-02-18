

// Add your scripts here

function openModal() {
    const sectionContent = document.getElementById('mySection').innerHTML;
    document.getElementById('modalContent').innerHTML = sectionContent;
    document.getElementById('myModal').classList.remove('hidden');
}

function closeModal() {
    document.getElementById('myModal').classList.add('hidden');
}



const getName = document.getElementById('name')
const getNumber = document.getElementById('number')
const getMail = document.getElementById('mail')

const nametext = getName.value;
const numbers = getNumber.value;
const mailtext = getMail.value;
console.log(nametext)

