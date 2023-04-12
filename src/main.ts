/**
 * Queries
 */
const ctaBtn = document.querySelector('#cta-button') as HTMLButtonElement
const mainContent = document.querySelector('#main-content') as HTMLDivElement
const formContent = document.querySelector('#form-content') as HTMLDivElement

/**
 * Show element
 */
const showElement = (element: HTMLElement) => {
	element.classList.remove('hide')
}

/**
 * Hide element
 */
const hideElement = (element: HTMLElement) => {
	element.classList.add('hide')
}

/**
 * CTA Button Event 
 */
ctaBtn!.addEventListener('click', e => {
  e.preventDefault()

  hideElement(mainContent)
  showElement(formContent)
})