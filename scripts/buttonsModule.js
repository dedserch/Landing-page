const serviceButtons = document.querySelectorAll('.service-button')
const serviceItems = document.querySelectorAll('.service-item')
const itemClassesArr = ['indie', 'zombie', 'horrors']

const handleButtonClick = (index) => {
    return () => {
        serviceButtons.forEach((button, i) => {
            if (i !== index) {
                button.classList.remove('service-button-active')
                serviceItems.forEach((item) => {
                    if (item.classList.contains(itemClassesArr[i])) {
                        item.classList.add('blur')
                    }
                })
            }
        })

        serviceButtons[index].classList.toggle('service-button-active')

        if (serviceButtons[index].classList.contains('service-button-active')) {
            serviceItems.forEach((item) => {
                if (item.classList.contains(itemClassesArr[index])) {
                    item.classList.remove('blur')
                }
            })
        } else {
            serviceItems.forEach((item) => {
                if (item.classList.contains(itemClassesArr[index])) {
                    item.classList.add('blur')
                }
            })
        }
    }
}

serviceButtons.forEach((button, index) => {
    button.addEventListener('click', handleButtonClick(index))
})

export { serviceButtons, serviceItems, itemClassesArr }
