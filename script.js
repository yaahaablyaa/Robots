axios.get('https://dummyjson.com/users')
    .then(res => reload(res.data.users))

let box_1 = document.querySelector('.box')
let box_2 = document.querySelector('.box2')
let box_3 = document.querySelector('.box3')

function randomColors() {
    let x = Math.round(Math.random() * 256);
    let y = Math.round(Math.random() * 256);
    let z = Math.round(Math.random() * 256);
    let bgColor = "rgb(" + x + "," + y + "," + z + ")";
    return bgColor
}

function reload(data) {
    for (let item of data) {
        //createElement
        let box = document.createElement('div')
        let first = document.createElement('div')
        let age = document.createElement('div')
        let img = document.createElement('img')
        let h3 = document.createElement('h3')
        let age_txt = document.createElement('p')
        let age_num = document.createElement('p')
        //classList
        box.classList.add('item')
        box.style.backgroundColor = randomColors()
        first.classList.add('first')
        img.classList.add('img')
        age.classList.add('age')
        //innerHTML
        img.src = item.image
        h3.innerHTML = item.firstName + ' ' + item.lastName
        age_num.innerHTML = item.age
        age_txt.innerHTML = 'Age'
        //append
        age.append(age_txt, age_num)
        first.append(img, h3)
        box.append(first, age)
        
        if (item.age < 25) {
            box_1.append(box)
        } else if(item.age > 25 && item.age <= 35) {
            box_2.append(box)
        } else if(item.age > 35) {
            box_3.append(box)
        }
    }
}