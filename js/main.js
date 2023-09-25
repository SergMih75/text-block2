'use strict'

let textDisclose = document.querySelector('.text-block__text-disclose')
let textBlock = document.querySelector('.text-block__block')
let text = document.querySelector('.text-block__text')

textDisclose.addEventListener('click', () => {
	text.classList.add('text-block__text-all')
	textBlock.classList.add('text-block__block-all')
	textDisclose.style.display = 'none'
})
