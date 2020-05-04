let persons1 = [];

function createperson(name,age)
{
    return {name : name, age : age};
}

for(let i = 0; i < 3; i++)
{
    persons1[i] = createperson("홍길동",16 + i);
}

let persons2 = [];
persons2 = persons1.slice(0);
persons1[0].age = 20;

for(let i = 0; i < persons1.length; i++)
{
    console.log(persons1[i]);
}
for(let i = 0; i < persons2.length; i++)
{
    console.log(persons2[i]);
}