const submitCar = document.querySelector('#btn-submit')
const license = document.querySelector('#license')
const maker = document.querySelector('#maker')
const model = document.querySelector('#model')
const owner = document.querySelector('#owner')
const price = document.querySelector('#price')
const color = document.querySelector('#color')
const table = document.querySelector('#table')
const form = document.querySelector('#form')
licenseSearch=document.getElementById('licensesearch');
resultarea=document.getElementById('result');


const allCars = [];

// function Car(license,maker,model,owner,price,color){
//     this.licenseNumber = license,
//         this.makerName = maker,
//         this.modelName = model,
//         this.ownerName = owner,
//         this.priceNumber = price,
//         this.colorName = color
// }


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
    const storedCars = JSON.parse(window.localStorage.getItem('test'));
    console.log(storedCars);

    if(storedCars == null){
        allCars.push(cars);
        localStorage.setItem('test', JSON.stringify(allCars));        
    } 
    else {
        storedCars.push(cars)
        localStorage.setItem('test', JSON.stringify(storedCars));
        console.log('not yet');
    }


    form.reset()
    window.location.reload();
}
const newStoredCars = JSON.parse(window.localStorage.getItem('test'));


newStoredCars.forEach(element => {
    addTable(element)
});

function addTable (newStoredCars){
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
async function search(){
    const license=licenseSearch.value;
    const data = newStoredCars;
    data.forEach(element => {
        if(element.licenseNumber == license){
            resultarea.textContent= `Car Maker: ${element.makerName}, Car Model: ${element.modelName}, Car Owner: ${element.ownerName}`
        }
    });
    
}
