const users = document.querySelector("#first")
const posts = document.querySelector("#second")
const todos = document.querySelector("#third")

const users2 = document.querySelector("#fourth")
const todos2 = document.querySelector("#fifth")
const posts2 = document.querySelector("#sixth")

//for users
const urlone = "https://jsonplaceholder.typicode.com/users"
const result1 = fetch(urlone);
result1.then(result1 => result1.json()
).then((result1) => {
    console.log(result1.slice(4, 6))

    for (item of result1.slice(4, 6)) {
        const p = document.createElement("p");
        p.innerHTML = JSON.stringify(item);
        users.appendChild(p)
    }

}).catch(err => console.log(err))


//for posts
const urltwo = "https://jsonplaceholder.typicode.com/posts"
const result2 = fetch(urltwo);
result2.then(result2 => result2.json()
).then((result2) => {
    console.log(result2.slice(6, 9))
    for (item of result2.slice(6, 9)) {
        const q = document.createElement("p");
        q.innerHTML = JSON.stringify(item);
        posts.appendChild(q)
    }
}
).catch(err => console.log(err))



//for todos 
const urlthree = "https://jsonplaceholder.typicode.com/todos"
const result3 = fetch(urlthree);
result3.then(result3 => result3.json()
).then((result3) => {
    console.log(result3.slice(4, 5))
    for (item of result3.slice(4, 5)) {
        const r = document.createElement("p");
        r.innerHTML = JSON.stringify(item);
        todos.appendChild(r)
    }
}
).catch(err => console.log(err))



//for users
async function getData() {
    const result1 = await fetch(urlone);
    const data = await result1.json();
    return data;
}
getData().then((result1) => {
    console.log(result1.slice(6, 8))

    for (item of result1.slice(6, 8)) {
        const s = document.createElement("p");
        s.innerHTML = JSON.stringify(item);
        users2.appendChild(s)
    }

})

//for posts

async function getData2() {
    const result2 = await fetch(urltwo);
    const data2 = await result2.json();
    return data2;
}
getData2().then((result2) => {
    console.log(result2.slice(4, 7))
    for (item of result2.slice(4, 7)) {
        const t = document.createElement("p");
        t.innerHTML = JSON.stringify(item);
        posts2.appendChild(t)
    }
}
)

//for todos

async function getData3() {

    const result3 = await fetch(urlthree);
    const data3 = await result3.json();
    return data3;
}
getData3().then((result3) => {
    console.log(result3.slice(4, 7))
    for (item of result3.slice(4, 7)) {
        const u = document.createElement("p");
        u.innerHTML = JSON.stringify(item);
        todos2.appendChild(u)
    }
}
)
