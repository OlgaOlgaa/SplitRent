const button = document.querySelector('#calculate');
button.addEventListener('click', calculateAmount);


const btnDiscount = document.querySelector('#addDiscount');
btnDiscount.addEventListener('click', showAmount);

function showAmount(e) {
	e.preventDefault();
	discount.style.display = 'block';
}

function calculateAmount(e) {
	e.preventDefault();
	const rent = document.querySelector('#rent').value;
	const people = document.querySelector('#people').value;
	const internet = document.querySelector('#internet').value;
	const laundry = document.querySelector('#laundry').value;
	const parking = document.querySelector('#parking').value;
	const discount = document.querySelector('#discount').value;


	if (rent === '' || people === '' || people < 1) {
		Swal.fire({
			icon: 'error',
			title: 'Ой...',
			text: 'Введите число!',
			
		  });
	}


	let amountPerPerson = (Number(rent) + Number(internet) + Number(laundry) + Number(parking)) / Number(people);
	let discountPerPerson = amountPerPerson * discount;
	let totalPerPerson = amountPerPerson - discountPerPerson;

	amountPerPerson = amountPerPerson.toFixed(2);
	discountPerPerson = discountPerPerson.toFixed(2);
	totalPerPerson = totalPerPerson.toFixed(2);


	document.querySelector('#dividedBill').textContent = amountPerPerson;
	document.querySelector('#dividedDiscount').textContent = discountPerPerson;
	document.querySelector('#billAndDiscount').textContent = totalPerPerson;


}