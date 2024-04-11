document.addEventListener('DOMContentLoaded', function() {
    let button = document.querySelector('.shop');
    let span = document.querySelector('.shop__count');
    let shopPrice = document.querySelector('.shop_price');
    let count = 1;

    button.addEventListener('click', function() {
        count++;
        span.textContent = count;

        let currentPrice = parseInt(shopPrice.textContent.replace('₽', '')) || 0;
        let newPrice = currentPrice + 11500;
        shopPrice.textContent = newPrice + '₽';

    });
});
