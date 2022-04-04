window.addEventListener('click', (event) => {

	const counterWrapper = event.target.closest('.counter-wrapper');
	const counter = counterWrapper.querySelector('[data-counter]');
	
		if(event.target.dataset.action === "plus"){
			counter.innerText = ++counter.innerText;
		}

		if(event.target.dataset.action === "minus"){

			const counterWrapper = event.target.closest('.counter-wrapper');
			const counter = counterWrapper.querySelector('[data-counter]');

			if (parseInt(counter.innerText) > 1 ) {
			counter.innerText = --counter.innerText;	
			}
	}
});