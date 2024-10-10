module.exports = class Poll{
    constructor(pets)
    {
        this._pets = pets;
    }

    vote = (name) => {
        this._pets.forEach(pet =>{
            if(pet.name == name)
            {
                pet.numVotes++;
            }
        })
    }

    getVotes = () => {
        return this._pets;
    }
}

