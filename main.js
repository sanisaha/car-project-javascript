const submitCar = document.querySelector('#btn-submit')
const license = document.querySelector('#license')
const maker = document.querySelector('#maker')
const model = document.querySelector('#model')
const owner = document.querySelector('#owner')
const price = document.querySelector('#price')
const color = document.querySelector('#color')
const table = document.querySelector('#table')
const form = document.querySelector('#form')

const allCars = [];

// function Car(license,maker,model,owner,price,color){
//     this.licenseNumber = license,
//         this.makerName = maker,
//         this.modelName = model,
//         this.ownerName = owner,
//         this.priceNumber = price,
//         this.colorName = color
// }

const newStoredCars = JSON.parse(window.localStorage.getItem('users'));

newStoredCars.forEach(item => {
    addTable(...item)
});
const addCar = (event) => {

    event.preventDefault()

    // const licenseNumber = license.value
    // const makerName = maker.value
    // const modelName = model.value
    // const ownerName = owner.value
    // const priceNumber = price.value
    // const colorName = color.value

    let cars = {licenseNumber:license.value,makerName:maker.value,modelName:model.value,ownerName:owner.value,priceNumber:price.value,colorName:color.value
    }
    addTable(cars)
    console.log(cars);
    allCars.push(cars)
    let storedCars = JSON.parse(window.localStorage.getItem('users'));
    if(!storedCars){
        storedCars = []
    }
    storedCars.push(allCars)
    window.localStorage.setItem('users', JSON.stringify(storedCars));
    form.reset()
}

function addTable (newStoredCars){
    console.log(newStoredCars);
    const newTableRow = document.createElement('tr')
    newTableRow.innerHTML = 
    `<td>${newStoredCars.licenseNumber}</td>
    <td>${newStoredCars.makerName}</td>
    <td>${newStoredCars.modelName}</td>
    <td>${newStoredCars.ownerName}</td>
    <td>${newStoredCars.priceNumber}</td>
    <td>${newStoredCars.colorName}</td>
    `
    table.appendChild(newTableRow)
}
