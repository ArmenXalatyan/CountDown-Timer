// fetch('https://jsonplaceholder.typicode.com/todos/1')
//       .then(response => response.json())
//       .then(json => {
//         json.complete = true
//         console.log(json)
//       })

function countdown(){
    let time = document.getElementById("time").value;
    let date = document.getElementById("date").value;
    if (time,date != ''){
        time = time.split(":")
        date = date.split("-")
        let userselect = new Date(
            date[0],
            date[1]-1,
            date[2],
            time[0],
            time[1]
        )
        userselect = Math.floor(userselect.getTime());    
        const timenow = Date.now()

        if (timenow > userselect) {
            userselect = Math.floor(timenow - userselect)
            countdown_p.innerHTML = "Passed since: " + new Date(`${date[1]}/${date[2]}/${date[0]} ${time[0]}:${time[1]}`)
            document.getElementById("countdown_p").style.color = "rgba(225, 225, 211, 0.731)";
        }   
        else {
            userselect = Math.floor(userselect - timenow)
            countdown_p.innerHTML = "Counting dowm to: " + new Date(`${date[1]}/${date[2]}/${date[0]} ${time[0]}:${time[1]}`)
            document.getElementById("countdown_p").style.color = "rgba(225, 225, 211, 0.731)"
        }
        const d = Math.floor(userselect / 1000 / 60 / 60 / 24)    
        const h = Math.floor((userselect / 1000 / 60 / 60) % 24)
        const m = Math.floor((userselect / 1000 / 60) % 60)    
        const s = Math.floor((userselect / 1000) % 60)

        
        day.innerHTML = d < 10 ? '0' + d : d 
        hrs.innerHTML = h < 10 ? '0' + h : h
        min.innerHTML = m < 10 ? '0' + m : m
        sec.innerHTML = s < 10 ? '0' + s : s 
    }
    else{
        countdown_p.innerHTML = ''
        day.innerHTML = "00"
        hrs.innerHTML = "00"
        min.innerHTML = "00"
        sec.innerHTML = "00"
    }
}

setInterval(() => countdown(), 1000);
        



































// const p1 = new Promise((resolve,reject) => {
//     setTimeout(() => {
//         const backenddata = {
//             name: "Armen",
//             surname: "Xalatyan",
//             age: 20
//         } 
//         console.log("Hi after 4 seconds")
//         resolve(backenddata)
//     },4000)
// }).then((data) => {
//     return new Promise((resolve,reject) => {
//         setTimeout(() => {
//             console.log("Hi after another 2 seconds")
//             data.modifay = true
//             console.log(data)
//             reject(data)
//         },2000)
//     })
// }).catch(error => console.error("Error",error))
