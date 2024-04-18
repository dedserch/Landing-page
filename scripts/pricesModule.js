const pricesItems = document.querySelectorAll('.prices-item')
const arrowPricesDiv = document.querySelectorAll('.arrow-prices-div')
const arrowPrices = document.querySelectorAll('.arrow-prices')
const activeContainerPr = document.querySelectorAll('.active-container-pr')
const pricesItemButton = document.querySelectorAll('.prices-item-button')

const removeItemClasses = (n) => {
    pricesItemButton[n].classList.remove('prices-item-button-active')
    pricesItems[n].classList.remove('prices-item-active')
    activeContainerPr[n].classList.add('hidden')
    arrowPricesDiv[n].classList.remove('arrow-prices-div-active')
    arrowPrices[n].classList.remove('arrow-prices-active')
}

const handleItemButtonClick = (index) => {
    return () => {
        removeItemClasses((index + 1) % 3)
        removeItemClasses((index + 2) % 3)
        pricesItemButton[index].classList.toggle('prices-item-button-active')
        if (pricesItemButton[index].classList.contains('prices-item-button-active')) {
            pricesItems[index].classList.add('prices-item-active')
            arrowPricesDiv[index].classList.add('arrow-prices-div-active')
            arrowPrices[index].classList.add('arrow-prices-active')
            activeContainerPr[index].classList.remove('hidden')
        } else {
            pricesItems[index].classList.remove('prices-item-active')
            arrowPricesDiv[index].classList.remove('arrow-prices-div-active')
            arrowPrices[index].classList.remove('arrow-prices-active')
            activeContainerPr[index].classList.add('hidden')
        }
    }
}

pricesItemButton.forEach((button, index) => {
    button.addEventListener('click', handleItemButtonClick(index))
})

export { pricesItems, arrowPricesDiv, arrowPrices, activeContainerPr, pricesItemButton, removeItemClasses }
