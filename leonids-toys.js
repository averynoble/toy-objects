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

for (const toy of toys) {
    console.log(`The ${toy.name} costs ${toy.price} dollars and weights ${toy.weight} pounds.`);
}

