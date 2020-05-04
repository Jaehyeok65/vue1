function sum(...a){
    let result = 0;
    for(let i = 0; i < a.length; i++)
    {
        result += a[i];
    }
    return result;
}

test_sum(f){
    let a = [];
    for(let i = 0; i < 5; i++)
    {
        a[i] = Math.floor(Math.random()*10 + 1);
        console.log(a[i]);
    }
    let ob = f(a[1],a[2],a[3],a[4],a[5]);
    console.log(ob);
}

 console.log(test_sum(sum));