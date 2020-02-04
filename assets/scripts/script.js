let mainPage = document.getElementById('main-page');


let bill {
	amount: 0, splitNum: 0
}

const splitBtn = document.getElementById('btn-split');
splitBtn.addEventListener('click', function(){
	 
	let splitValue = parseInt(bill.amount)/parseInt(bill.splitNum);

	let splitAnswer = document.createElement('h1');
	splitAnswer.textContent = splitValue;
	splitAnswer.style.textAlign = "center";
	mainPage.insertBefore(splitAnswer, mainPage.lastElementChild.firstElementChild.firstElementChild);


})


function bill(){
	mainPage.firstElementChild.firstElementChild.firstElementChild.firstElementChild.nextElementChild.value = bill.amount;

}

function splitNo(){
	 mainPage.firstElementChild.firstElementChild.firstElementChild.lastElementChild.value = bill.splitNum;

}