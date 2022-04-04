window.addEventListener('click', (event) => {
    if(event.target.hasAttribute('data-cart')){
        const card = event.target.closest('.card');

        const productInfo = {
            id: card.dataset.id,
            imgScr: card.querySelector('.product-img').getAttribute('scr'),
            title: card.querySelector('.item-title').innerText,
            itemsINBox: card.querySelector('[data-items-in-box]').innerText,
            weight: card.querySelector('.price__weight').innerText,
            price: card.querySelector('.price__currency').innerText,
            counter: card.querySelector([data-counter]).innerText,

        };

        console.log(productInfo);

        const cartItemHTML = `<div class="cart-item" data-id="02">
        <div class="cart-item__top">
            <div class="cart-item__img">
                <img src="img/roll/california-tempura.jpg" alt="">
            </div>
            <div class="cart-item__desc">
                <div class="cart-item__title">${productInfo.title}</div>
                <div class="cart-item__weight">6 PCS. / 205г.</div>

                <!-- cart-item__details -->
                <div class="cart-item__details">
                    <div class="items items--small counter-wrapper">
                        <div class="items__control" data-action="minus">-</div>
                        <div class="items__current" data-counter="">1</div>
                        <div class="items__control" data-action="plus">+</div>
                    </div>

                    <div class="price">
                        <div class="price__currency">250 ₽</div>
                    </div>
                </div>
                <!-- // cart-item__details -->
            </div>
        </div>
    </div>`;
    }
})