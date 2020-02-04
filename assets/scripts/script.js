let bill = {
	amount: 0,
	noSplit: 0
}

let mainPage = document.getElementById('main');

function amount(){
	mainPage.firstElementChild.firstElementChild.firstElementChild.firstElementChild.firstElementChild.nextElementSibling.textContent = bill.amount;
}


const splitBtn = document.getElementById('split-btn');

splitBtn.addEventListener('click', function(){
	let amount = mainPage.firstElementChild.nextElementSibling.firstElementChild.firstElementChild.firstElementChild.	nextElementSibling.value;

	console.log(let splitNo = mainPage.firstElementChild.nextElementSibling.firstElementChild.lastElementChild.value)
})