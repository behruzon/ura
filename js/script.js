let doc = document

let btn1 = doc.querySelector('.btn1')
let btn2 = doc.querySelector('.btn2')
let x = doc.querySelector('.x')
let menu = doc.querySelector('.menu')
let box = doc.querySelector('.box')
let in1 = doc.querySelector('#in1')
let in2 = doc.querySelector('#in2')
let in3 = doc.querySelector('#in3')
let ih2 = doc.querySelector('.h2')
let ip = doc.querySelector('.p')
let ih5 = doc.querySelector('.h5')
let bl = doc.querySelector('.block')


btn1.onclick = () => {
    menu.style.display = 'block'
}

x.onclick = () => {
    menu.style.display = 'none'
}




let dobav = (event) => {
    event.preventDefault()
    let div = doc.createElement('div')
    let h2 = doc.createElement('h2')
    let p = doc.createElement('p')
    let h5 = doc.createElement('h5')

    div.classList.add('block')
    h2.classList.add('h2')
    p.classList.add('p')
    h5.classList.add('h5')
    
    h2.innerHTML = in1.value
    p.innerHTML = in2.value
    h5.innerHTML = in3.value

    box.append(div)
    div.append(h2)
    div.append(p)
    div.append(h5)
    
    
    
    in1.value = ''
    in2.value = ''
    in3.value = ''

}

btn2.addEventListener('click', dobav)
