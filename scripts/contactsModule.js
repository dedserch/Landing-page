const selectorItem = document.querySelector('.selector-item')
const selectorMain = document.querySelector('.selector-main')
const selectorItemText = document.querySelector('.selector-item-text')
const arrowContactsDiv = document.querySelector('.arrow-contacts-div')
const contactsSelector = document.querySelectorAll("input[name='contacts-selector']")
const adress = document.querySelector('.adress')
const city = document.querySelector('.city')
const phone = document.querySelector('.phone')
const officeAdress = document.querySelector('.office-adress')
const adresses = [
    {
        city: 'Yonkers, NY',
        phone: '+1 914 678 0003',
        officeAdress: '511 Warburton Ave',
    },
    {
        city: 'Canandaigua, NY',
        phone: '+1 585 393 0001',
        officeAdress: '151 Charlotte Street',
    },
    {
        city: 'New York City',
        phone: '+1 212 456 0002',
        officeAdress: '9 East 91st Street',
    },
    {
        city: 'Sherrill, NY',
        phone: '+1 315 908 0004',
        officeAdress: '14 WEST Noyes BLVD',
    },
]

const selectItemValue = () => {
    for (const item of contactsSelector) {
        if (item.checked) {
            return item.value
        }
    }
}

const selectorItemHandleClick = () => {
    arrowContactsDiv.classList.toggle('arrow-contacts-div-active')
    if (arrowContactsDiv.classList.contains('arrow-contacts-div-active')) {
        selectorItem.classList.add('selector-item-active')
        arrowContactsDiv.classList.add('arrow-contacts-div-active')
        selectorMain.classList.remove('hidden')
        adress.classList.add('hidden')
    } else {
        selectorItem.classList.remove('selector-item-active')
        selectorMain.classList.add('hidden')
        selectorItemText.innerHTML = 'City'
    }
}

const contactsSelectorHandleClick = () => {
    selectorMain.classList.add('hidden')
    selectorItemText.innerHTML = selectItemValue()
    arrowContactsDiv.classList.remove('arrow-contacts-div-active')
    for (const object of adresses) {
        if (selectItemValue() === object.city) {
            adress.classList.remove('hidden')
            city.innerHTML = object.city
            phone.innerHTML = object.phone
            officeAdress.innerHTML = object.officeAdress
            document.querySelector('.call-us').href = 'tel:' + object.phone
        }
    }
}

contactsSelector.forEach((item) => {
    item.addEventListener('click', contactsSelectorHandleClick)
})

selectorItem.addEventListener('click', selectorItemHandleClick)

export { selectorItem, selectorMain, selectorItemText, arrowContactsDiv, contactsSelector, adress, city, phone, officeAdress, adresses, selectItemValue }
