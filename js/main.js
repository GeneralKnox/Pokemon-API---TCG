document.querySelector('button').addEventListener('click', getFetch)
document.querySelector('#random').addEventListener('click', getFetch2)
let pokeTcg;

function getFetch() {
  let randoMon = Math.floor(Math.random() * 898)
  const choice = document.querySelector('input').value.toLowerCase()
  const url = `https://pokeapi.co/api/v2/pokemon/${choice}`


  fetch(url)
    .then(res => res.json()) // parse response as JSON
    .then(data => {
      // document.querySelector('#pokeName').innerText = data.name
      document.querySelector('#pokeName').innerHTML = "Name:" + data.name
      document.querySelector('#indexNum').innerHTML = "Index Number:" + data.id
      document.querySelector('#pokeImg').src = data.sprites.front_default
      document.querySelector('#type').innerHTML = "Type:"+ data.types[0].type.name
      console.log(data)
      pokeTcg = data.name


      fetch(`https://api.pokemontcg.io/v1/cards?name=${pokeTcg}`)
        .then(res => res.json())
        .then(data => {
          console.log(data)
          document.querySelector('#tcgOne').src = data.cards[0].imageUrl
          document.querySelector('#tcgTwo').src = data.cards[1].imageUrl
          document.querySelector('#tcgThree').src = data.cards[2].imageUrl
          document.querySelector('#tcgFour').src = data.cards[3].imageUrl
        })
        clearField()
        .catch(err => {
          console.log(`error ${err}`)
        })

    })
    .catch(err => {
      console.log(`error ${err}`)

    });

}

function getFetch2() {
  let randoMon = Math.floor(Math.random() * 898)
  const choice = document.querySelector('input').value.toLowerCase()
  const url3 = `https://pokeapi.co/api/v2/pokemon/${randoMon}`

  fetch(url3)
    .then(res => res.json())
    .then(data => {
      document.querySelector('#pokeName').innerHTML = "Name:" + data.name
      document.querySelector('#indexNum').innerHTML = "Index Number:" + data.id
      document.querySelector('#pokeImg').src = data.sprites.front_default
      document.querySelector('#type').innerHTML = "Type:" + data.types[0].type.name
      console.log(data)
      pokeTcg = data.name


      fetch(`https://api.pokemontcg.io/v1/cards?name=${pokeTcg}`)
        .then(res => res.json())
        .then(data => {
          document.querySelector('#tcgOne').src = data.cards[0].imageUrl
          document.querySelector('#tcgTwo').src = data.cards[1].imageUrl
          document.querySelector('#tcgThree').src = data.cards[2].imageUrl
          document.querySelector('#tcgFour').src = data.cards[3].imageUrl
        })
        clearField()
        .catch(err => {
          console.log(`error ${err}`)
        })
    })
    .catch(err => {
      console.log(`error ${err}`)
    });
}