const toys = [
    {
        id: 1,
        name: "teddy",
        price: 5,
        weight:2
    },

    {
        id: 2,
        name: "Thomas",
        price: 8,
        weight: 4
    },

    {
        id: 3,
        name: "BattleShip",
        price: 12,
        weight: 3
    },

    {
        id: 4,
        name: "Barbie",
        price: 15,
        weight: 2
    }
]

const lego = {
    id: 5,
    name: "Star Wars Lego Set",
    price: 20,
    weight: 2
}

const elmo = {
    id: 6,
    name: "Tickle Me Elmo",
    price: 7,
    weight: 4
}

toys.push(lego);
toys.push(elmo);


const addToyToInventory = (toyObject) => {
    const lastIndex = toys.length - 1  // Gets index of last item in array
    const currentLastToy = toys[lastIndex]  // Gets the last object in the array
    const maxId = currentLastToy.id  // Get id property value of last toy
    const idForNewToy = maxId + 1 // Increases the current max ID by 1

    toyObject.id = idForNewToy // Adds the ID property to the toy object 
    toys.push(toyObject) // Adds the toy object to the array
}

const giJoe = {
    name: "GI Joe",
    price: 12,
    weight: 2
}

addToyToInventory(giJoe)

for (const toy of toys) {
    toy.price = toy.price * 1.05
    console.log(`The ${toy.name} costs ${toy.price} dollars and weights ${toy.weight} pounds. Its ID is : ${toy.id}`);
}