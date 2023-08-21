const users = [
    {
    name: 'John',
    age: 25,
    occupation: 'gardener'
    },
    {
    name: 'Lenny',
    age: 51,
    occupation: 'programmer'   
    },
    {
    name: 'Andrew',
    age: 43,
    occupation: 'teacher' 
    },
    {
    name: 'Peter',
    age: 81,
    occupation: 'teacher'   
    },
   { 
    name: 'Anna',
    age: 43,
    occupation: 'teacher'   
    },
    {
    name: 'Albert',
    age: 76,
    occupation: 'programmer'   
    },
    {
    name: 'Adam',
    age: 47,
     occupation: 'teacher'    
    },
    {
    name: 'Robert',
    age: 72,
    occupation: 'driver'    
    }
    ]
const main = () => {
    const root = document.getElementById("root")
    const element1 = document.createElement("h1")
    element1.textContent = "FREELANCERS"
    root.appendChild(element1)
    
    // Creating an unordered list element
    const freelancerList = document.createElement("ul")
    root.appendChild(freelancerList)
    freelancerList.classList.add('freelancerList')

    // Creating a list of elements throught the users array
    
    for(let i=0; i < users.length; i++){
        let listItem = document.createElement("li")
        freelancerList.appendChild(listItem)
        listItem.textContent = users[i].name
        listItem.classList.add("freelancerItem")
    }
    
}

main()