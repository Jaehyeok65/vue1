let a = [];

for(let i = 0; i < 100; i++)
{
    a[i] = Math.floor(Math.random()*100 + 1);
}

function ev2(arr) {
    let result = 0;
    for(let i = 0; i < arr.length; i++)
    {
        if(this.arr[i] % 2 == 0)
        {
        result += this.arr[i];
        }
    }
    return result;
}

let sum = a.reduce(ev2);
console.log(sum);