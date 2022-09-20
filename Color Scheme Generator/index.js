const colorPicker = document.getElementById('color-input')
const select = document.getElementById('mode-select')
const button = document.getElementById('btn')
const color1 = document.getElementById('cc-1')
const colors = document.querySelectorAll(' .column')
const hex1 = document.getElementById('hex-1')
const hexs = document.querySelectorAll(' .hex')


function renderColors(data) {
    color1.style.background = colorPicker.value
    hex1.textContent = colorPicker.value.toUpperCase()
    for (let i = 0; i < 4; i++) {
        let color = data.colors[i].hex.value
        colors[i].style.background = color
        hexs[i].textContent = color
    }
}


button.addEventListener('click', function(event) {
    event.preventDefault()
    const valueForScheme = colorPicker.value.substring(1)
    fetch(`https://www.thecolorapi.com/scheme?hex=${valueForScheme}&mode=${select.value}&count=5`)
        .then(response => response.json())
        .then(data => renderColors(data))
})