document.querySelector('#fetchBtn').addEventListener('click', ()=>{

    fetch('https://jsonplaceholder.typicode.com/posts')
    .then( response =>{
        return response.json()
    }).then( data => {
        
        data.forEach( item => {
            document.querySelector('#result').innerHTML += `
                                                        <div class="post">
                                                            <h1>${item.id} - ${item.title}</h1>
                                                            <p>${item.body}</p>
                                                        </div>
                                                        `
        });
    })
})