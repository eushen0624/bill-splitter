let mainPage = document.getElementById('main-page');

let amount = parseInt(document.getElementById('amount').value);
let noSplit = parseInt(document.getElementById('noSplit').value);



const splitBtn = document.getElementById('btn-split');
splitBtn.addEventListener('click', function(){
	 
	const result = amount / noSplit;
	document.getElementById('result').innerHTML = result.toFixed(2);


})

