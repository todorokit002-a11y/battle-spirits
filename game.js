fetch("cards/data/cards.json")
.then(response => response.json())
.then(data => {

console.log(data.cards)

})
