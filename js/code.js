let playerAttack
let enemyAttack
let playerLives = 3
let enemyLives = 3

function startGame() {
	let sectionSelectAtack = document.getElementById('select-attack')
	sectionSelectAtack.style.display = 'none'

	let buttonPet = document.getElementById('button-select-pet')
	buttonPet.addEventListener('click', selectPetPlayer)

	let buttonFire = document.getElementById('button-fire')
	buttonFire.addEventListener('click', fireAttack)
	let buttonWater = document.getElementById('button-water')
	buttonWater.addEventListener('click', waterAttack)
	let buttonEarth = document.getElementById('button-earth')
	buttonEarth.addEventListener('click', earthAttack)

	let buttonRestart = document.getElementById('button-restart')
	buttonRestart.addEventListener('click', restartGame)
}

function selectPetPlayer() {
	let sectionSelectAtack = document.getElementById('select-attack')
	sectionSelectAtack.style.display = 'block'

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

	selectPetEnemy()
}

function selectPetEnemy() {
		let randomPetEnemy = random(1,6)
		let spanPetEnemy = document.getElementById('pet-enemy')

		if (randomPetEnemy == 1) {
			spanPetEnemy.innerHTML = 'Hipodogue'
			} else if (randomPetEnemy == 2) {
				spanPetEnemy.innerHTML = 'Capipepo'
			} else if (randomPetEnemy == 3) {
				spanPetEnemy.innerHTML = 'Ratigueya'
			} else if (randomPetEnemy == 4) {
				spanPetEnemy.innerHTML = 'Langostelvis'
			} else if (randomPetEnemy == 5) {
				spanPetEnemy.innerHTML = 'Tucapalma'
			} else {
				spanPetEnemy.innerHTML = 'Pydos'
			}

		}

function fireAttack() {
	playerAttack = 'Fuego'
	randomEnemyAttack()
}
function waterAttack() {
	playerAttack = 'Agua'
	randomEnemyAttack()
}
function earthAttack() {
	playerAttack = 'Tierra'
	randomEnemyAttack()
}

function randomEnemyAttack() {
	let randomAttack = random(1,3)

	if (randomAttack == 1) {
		enemyAttack = 'Fuego'
	} else if (randomAttack == 2) {
		enemyAttack = 'Agua'
	} else {
		enemyAttack = 'Tierra'
	}
	combat()
}

function combat() {
	let spanPlayerlives = document.getElementById('player-lives')
	let spanEnemylives = document.getElementById('enemy-lives')

	if (playerAttack == enemyAttack) {
		createMessage('Empate!')
	} else if (playerAttack == 'Fuego' && enemyAttack == 'Tierra' || playerAttack == 'Agua' && enemyAttack == 'Fuego' || playerAttack == 'Agua' && enemyAttack == 'Fuego' || playerAttack == 'Tierra' && enemyAttack == 'Agua') {
		createMessage('Ganaste!')
		enemyLives--
		spanEnemylives.innerHTML = enemyLives
	} else {
		createMessage('Perdiste!')
		playerLives--
		spanPlayerlives.innerHTML = playerLives
	}
	checkLives()
}
function checkLives() {
	if (enemyLives == 0) {
		finalMessage('Felicitaciones!, Ganaste!')
	} else if (playerLives == 0) {
		finalMessage('Perdiste :c')
	}
}

function createMessage(result) {
	let sectionMessages = document.getElementById('messages')
	let paragraph = document.createElement('p')
	paragraph.innerHTML = 'Tu mascota atacó con ' + playerAttack + ',  la mascota del enermigo atacó con ' + enemyAttack + '. ' + result

	sectionMessages.appendChild(paragraph)
}

function finalMessage(finalGame) {
	let sectionMessages = document.getElementById('messages')
	let paragraph = document.createElement('p')
	paragraph.innerHTML = finalGame

	sectionMessages.appendChild(paragraph)

	let buttonFire = document.getElementById('button-fire')
	buttonFire.disabled = true
	let buttonWater = document.getElementById('button-water')
	buttonWater.disabled = true
	let buttonEarth = document.getElementById('button-earth')
	buttonEarth.disabled = true

}

function restartGame() {
	location.reload()
}

function random(min, max) {
	return Math.floor(Math.random() * (max - min + 1) + min)
}

window.addEventListener('load', startGame)