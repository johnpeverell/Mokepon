function startGame() {
	let buttonPet = document.getElementById('button-select-pet')
	buttonPet.addEventListener('click', selectPetPlayer)
}

function selectPetPlayer() {
	let inputHipodogue = document.getElementById('hipodogue')
	let inputCapipepo = document.getElementById('capipepo')
	let inputRatigueya = document.getElementById('ratigueya')
	let inputLangostelvis = document.getElementById('langostelvis')
	let inputTucapalma = document.getElementById('tucapalma')
	let inputPydos = document.getElementById('pydos')
	let spanPetPlayer = document.getElementById('pet-player')

	if (inputHipodogue.checked) {
		spanPetPlayer.innerHTML = 'Hipodogue'
	} else if (inputCapipepo.checked) {
		spanPetPlayer.innerHTML = 'Capipeo'
	} else if (inputRatigueya.checked) {
		spanPetPlayer.innerHTML = 'Ratigueya'
	} else if (inputLangostelvis.checked) {
		spanPetPlayer.innerHTML = 'Langostelvis'
	} else if (inputTucapalma.checked) {
		spanPetPlayer.innerHTML = 'Tucapalma'
	} else if (inputPydos.checked) {
		spanPetPlayer.innerHTML = 'Pydos'
	} else {
		alert('Debes seleccionar una mascota')
	}
}

window.addEventListener('load', startGame)