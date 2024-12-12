// function checkOrder(){
//     return new Promise((resolve, reject) => {

//         let orderId = document.querySelector('#order-id').value

//         if(orderId === '123') {
//             resolve("Order is confirmed")
//         } else {
//             reject("Your order is pending.")
//         }
//     })
// }


async function checkOrder() {
    let orderId = document.querySelector('#order-id').value

    if(orderId === '123') {
        return "Order is confirmed"
    } else {
        throw "Order is pending"
    }
}


// document.querySelector('#checkBtn').addEventListener('click', ()=>{
//     checkOrder()
//     .then(data => {
//         document.querySelector('#result').innerHTML = data
//     })
//     .catch(error => {
//         document.querySelector('#result').innerHTML = error
//     })
// })


document.querySelector('#checkBtn').addEventListener('click', async ()=>{
    try {
        let status = await checkOrder()
        document.querySelector('#result').innerHTML = status
    } catch (error) {
        document.querySelector('#result').innerHTML = error
    }
    
})


// localstorage, promise, handle promise, async function, async & await