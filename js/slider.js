const sliderNextBtn = document.getElementById("slider-next");
const sliderPreviousBtn = document.getElementById("slider-previous");

let currentIndex = 0;

const productsWrapper = document.getElementById("products-wrapper");
const products = Array.from(productsWrapper.getElementsByClassName("trending-product"));
const productHeight = 130;

function moveProducts(direction, count) {
    const translateY = productHeight * count * (direction === "up" ? -1 : 1);

    products.forEach((product) => {
        product.style.transform = `translateY(${translateY}px)`;
    });
}

function nextProduct() {
    if (currentIndex + 3 < products.length) {
        currentIndex += 3;
    } else {
        currentIndex = 0;
    }

    moveProducts("up", currentIndex);
}

function previousProduct() {
    if (currentIndex - 3 >= 0) {
        currentIndex -= 3;
    } else {
        currentIndex = Math.max(products.length - 3, 0);
    }

    moveProducts("up", currentIndex);
}

sliderNextBtn.addEventListener("click", nextProduct);
sliderPreviousBtn.addEventListener("click", previousProduct);
