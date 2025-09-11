const employee=[
    {
        name:"Alice",
        id: 1,
        salary: 45000,
        position:['Developer']
    },
     {
        name:"Bob",
        id: 2,
        salary: 60000,
        position:['Manager']

    },
    {
        name:"Charlie",
        id: 3,
        salary: 38000,
        position:['Designer']
    },
     {
        name:"Diana",
        id: 4,
        salary: 52000,
        position:['Team Lead']

    },
     {
        name:"Ethan",
        id: 5,
        salary: 47000,
        position:['QA Engineer']

    }
]

if(salary<50000){
     console.log('The employee will receive 5000')
 }else{
     console.log('the employee will not receive a bonus.')
 }