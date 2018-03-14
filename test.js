// TEST.JS
document.addEventListener('DOMContentLoaded', function() {

				//za brisanje sa liste
	//prvo targetujemo celu listu
	const list = document.querySelector('#rang-list ol');

	//dodamo eventListener za click unutar cele liste
	list.addEventListener('click', function(e) {
		if (e.target.className == 'delete') {
			const li = e.target.parentElement;
			list.removeChild(li);
		}
	});


				//za dodavanje na listu
	//prvo targetujemo formu
	const addUser = document.forms['add-user'];
	
	//onda dodamo eventListener za submit
	addUser.addEventListener('submit', function(e) {
		//prvo sprecavamo default dehaviour submita, refreshovanje strane
		e.preventDefault();

		//uzimamo ono sto je uneto u input forme
		const subedValue = addUser.querySelector('input[type="text"]').value;	
											//!!! input[type=...] mora spojeno - nesme space izmedju !!!
		//kreiramo potrebne elemente
		const li = document.createElement('li');
		const userName = document.createElement('span');
		const delBtn = document.createElement('span');

		//dodajemo elemente - elementi se dodaju "od dole"
		delBtn.textContent = 'ukloni';
		userName.textContent = subedValue;

		//dodajemo potrebne klase kreiranim elementima
		delBtn.classList.add('delete');
		userName.classList.add('name');

		//appendujemo elemente u DOM
		li.appendChild(userName);
		li.appendChild(delBtn);

		list.appendChild(li);

		//resetujemo input 
		addUser.reset();

	});



				//pretraga liste
	//prvo targetujemo search formu
	const search = document.forms['search-user'].querySelector('input');

	//dodajemo eventListener za keyup na search input
	search.addEventListener('keyup', function(e) {
		//uneta vrednost
		const term = e.target.value.toLowerCase();

		//targetujemo svaku vrednost na listi i pravimo od njih array
		const userNames = list.getElementsByTagName('li');
		Array.from(userNames).forEach(function(name) {

			//pretvaramo vrednosti iz liste u lower case i poredimo sa unetom vrednoscu
			const user = name.firstElementChild.textContent;
			if (user.toLowerCase().indexOf(term) != -1) {
				name.style.display = 'block';
			}
			else {
				name.style.display = 'none';
			}

		});
	});


}) 