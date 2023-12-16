let cardArr = [
    {
        img: 'baby.webp',
        prize: '900',
        description : 'baby girl dress jeans short and cotton t-shirt'
    },
    {
        img: 'gkj.jpg',
        prize: '900',
        description : 'baby girl dress jeans short and cotton t-shirt'
    },
    {
        img: 'green.webp',
        prize: '900',
        description : 'baby girl dress jeans short and cotton t-shirt'
    },
    {
        img: 'pink.jpg',
        prize: '900',
        description : 'baby girl dress jeans short and cotton t-shirt'
    },
  
    {
        img: 'fock.webp',
        prize: '900',
        description : 'baby girl dress jeans short and cotton t-shirt'
    },
]


var container = document.getElementById('container');




var showcard = cardArr.map((card,index)=>{
    return ` <div class="card" style="width: 18rem;">
    <img src="${card.img}" class="card-img-top" alt="image">
    <div class="card-body">
      <h5 class="card-title">${card.prize}</h5>
      <p class="card-text">${card.description}</p>
      <a href="#" class="btn btn-dark">Add to card</a>
    </div>
  </div>
`
})

container.innerHTML = showcard


 console.log(showcard)