const bromaEl = document.getElementById('broma')
const bromaBtn = document.getElementById('bromaBtn')

bromaBtn.addEventListener('click' , generateBroma)

generateBroma()

async function generateBroma()  {
    const configuracion = {
        headers:  {
            Accept: 'application/json'
        }, 
    }

    const res = await fetch('https://icanhazdadjoke.com', configuracion)

    const data = await res.json()

    bromaEl.innerHTML = data.joke

}
