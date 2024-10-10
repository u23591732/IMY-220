var pets = [
  { name: "Polly", species: "bird", age: 1, adopted: false, adoptedDate: "", adoptionFee: 560 },
  { name: "Fluffy", species: "dog", age: 4, adopted: true, adoptedDate: "2023-03-27",adoptionFee: 890 },
  { name: "Daisy", species: "dog", age: 9, adopted: true, adoptedDate: "2021-01-05", adoptionFee: 780 },
  { name: "Coco", species: "rabbit", age: 3, adopted: true, adoptedDate: "2019-01-30", adoptionFee: 615 },
  { name: "Simba", species: "cat", age: 4, adopted: true, adoptedDate: "2019-09-30", adoptionFee: 995 },
  { name: "Oreo", species: "rabbit", age: 4, adopted: false, adoptedDate: "", adoptionFee: 605 },
  { name: "Bella", species: "cat", age: 6, adopted: false, adoptedDate: "", adoptionFee: 810 },
  { name: "Milo", species: "bird", age: 3, adopted: false, adoptedDate: "", adoptionFee: 740 },
  { name: "Buddy", species: "dog", age: 10, adopted: true, adoptedDate: "2021-02-01", adoptionFee: 735 },
  { name: "Pebbles", species: "bird", age: 4, adopted: false, adoptedDate: "", adoptionFee: 505 },
];


class PetHandler{
  constructor(pets)
  {
    this._pets = pets;
  }

  findPetsInAgeRange = ((minAge , maxAge) => {

    return this._pets.filter((pet) =>
      pet.age >= minAge && pet.age <= maxAge
    );
    
     

   

  })

  listAdoptedPetsByDate = (() => {
      let orp = this._pets.filter((pet) => 
        pet.adopted == true
      )

      return orp.sort((a,b) => new Date (b.adoptedDate) -  new Date(a.adoptedDate));
      
      

      
  })

  listPets = ((...petList) =>
  {

    var myList;
    if(petList.length == 0)
    {
      myList = this._pets;
    }

    else if(petList.length == 1)
    {
      myList = petList[0];
    }

    else if(petList.length > 1)
    {
      myList = petList;
    }

    let createPetItem = myList.map(pet => {

      var ad;
      if(pet.adopted == true)
      {
        ad = "|  Adopted!";
      }
      else
      {
        ad = "";
      }


      return `${pet.name}  |  ${pet.species}  |  Age :  ${pet.age}  ${ad}  `;
    });

    let listString = createPetItem.join('\n\n');
    return listString;
     
  })

   calculateUniqueAdoptionFee = ((...petNames) => 
    {
      var names;
      var removeDup;
      if(petNames.length == 1)
      {
        removeDup = petNames[0];
        
      }
      else if(petNames.length > 1)
      {
        names = petNames;

        
       removeDup = names.filter((item, index) => names.indexOf(item) === index);
      
      
      }


      var matNames = this._pets.filter(pet =>removeDup.includes(pet.name));

       
      

      
      var sum = matNames.reduce((mySum,pet) =>
      {
        return mySum + pet.adoptionFee;
      },0);

      return `Total adoption fee : R ${sum}`;


    })
   
}


Array.prototype.findPetsInAgeRange = function(minAge , maxAge) {

  return this._pets.filter((pet) =>
    pet.age >= minAge && pet.age <= maxAge
  );
  
  

}


Array.prototype.listAdoptedPetsByDate = function() 
{
  let orp = this._pets.filter((pet) => 
    pet.adopted == true
  )

  return orp.sort((a,b) => new Date (b.adoptedDate) -  new Date(a.adoptedDate));
  

  
}


Array.prototype.listPets = function(...petList)
  {

    var myList;
    if(petList.length == 0)
    {
      myList = this;
      console.log(typeof(myList)); 
      console.log(myList); 
      console.log("Using array of pets created in chaining function");
      console.log(Array.isArray(myList)); 
    }

    else if(petList.length == 1)
    {
      myList = petList[0];
    }

    else if(petList.length > 1)
    {
      myList = petList;
    }

    let createPetItem = myList.map(pet => {
      var ad;
      if(pet.adopted == true)
      {
        ad = "|  Adopted!";
      }
      else
      {
        ad = "";
      }


      return `${pet.name}  |  ${pet.species}  |  Age :  ${pet.age}  ${ad}  `;
    });

    let listString = createPetItem.join('\n\n');
    return listString;
     
  }





Array.prototype.calculateUniqueAdoptionFee = function(...petNames) 
  {
    var names;
    var removeDup;
    if(petNames.length == 1)
    {
      removeDup = petNames[0];
      
    }
    else if(petNames.length > 1)
    {
      names = petNames;

      
     removeDup = names.filter((item, index) => names.indexOf(item) === index);
    
    
    }


    var matNames = this._pets.filter(pet =>removeDup.includes(pet.name));

     
    

    
    var sum = matNames.reduce((mySum,pet) =>
    {
      return mySum + pet.adoptionFee;
    },0);

    return `Total adoption fee : R ${sum}`;


  }
 