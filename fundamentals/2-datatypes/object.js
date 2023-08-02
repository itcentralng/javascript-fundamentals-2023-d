let person = {
    name:'Usman', 
    age:10, 
    weight:64.5,
    performance:{
        gpa: 3.8,
        cgpa: -3.8,
        grade: 'B-',
        isPromoted: false
    },
    class:'Jss One', 
    friends:[
        {name:'Ahmad'}, 
        {name:'Sani'}
    ]
    };

    let cat1 = {
        name:"Malone"
    }

    // Operations

    console.log(person.name)
    console.log(person.age)
    console.log(person.performance.cgpa)
    console.log(person.friends.at(1))
    console.log(person.friends.at(1).name)
    console.log(person.friends.at(1).name.length)
    console.log(person.performance.grade)
    console.log(person.class.split(' ').at(0))
    console.log(person.performance.grade.replace('B-', 'B'))
