function sum(b){
    let result = 0;
    for(let i = 0; i < 5; i++)
    {
        result += b[i];
    }
    return result;
}

function test_sum(f){
    let a = [];
    for(let i = 0; i < 5; i++)
    {
        a[i] = Math.floor(Math.random()*10 + 1);
        console.log(a[i]);
    }
    let ob = f(a);
    console.log(ob);
}

 console.log(test_sum(sum));