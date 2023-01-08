const heroes = [
    {
        id: 1,
        name: 'Batman',
        owner: 'DC'
    },
    {
        id: 2,
        name: 'Spiderman',
        owner: 'Marvel'
    },
    {
        id: 3,
        name: 'Superman',
        owner: 'DC'
    },
    {
        id: 4,
        name: 'Flash',
        owner: 'DC'
    },
    {
        id: 5,
        name: 'Wolverine',
        owner: 'Marvel'
    },
];
// FIlter and find
const getHeroById = (id => { return heroes.find(hero => hero.id === id)})
const getHeroesByOwer = (owner) => { return heroes.filter(hero => hero.owner === owner )}

console.log( getHeroById(4) );
console.log( getHeroesByOwer("DC"))