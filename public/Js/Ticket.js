document.addEventListener('DOMContentLoaded', () => {
    const silverQty = document.getElementById('silver-qty');
    const bronzeQty = document.getElementById('bronze-qty');
    const goldQty = document.getElementById('gold-qty');
    const totalPriceElem = document.getElementById('total-price');

    const prices = {
        silver: 250,
        bronze: 160,
        gold: 400
    };

    const updateTotalPrice = () => {
        const silverTotal = parseInt(silverQty.value) * prices.silver;
        const bronzeTotal = parseInt(bronzeQty.value) * prices.bronze;
        const goldTotal = parseInt(goldQty.value) * prices.gold;

        const totalPrice = silverTotal + bronzeTotal + goldTotal;
        totalPriceElem.textContent = totalPrice.toFixed(2);
    };

    silverQty.addEventListener('input', updateTotalPrice);
    bronzeQty.addEventListener('input', updateTotalPrice);
    goldQty.addEventListener('input', updateTotalPrice);
});
