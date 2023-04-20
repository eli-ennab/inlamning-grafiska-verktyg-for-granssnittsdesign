/**
 * Queries
 */
const ctaBtn = document.querySelector('#cta-btn') as HTMLButtonElement
const formBtn = document.querySelector('#submit-form-btn') as HTMLButtonElement
const returnBtn = document.querySelector('#return-btn') as HTMLButtonElement
const mainContent = document.querySelector('#main-content') as HTMLDivElement
const formContent = document.querySelector('#form-content') as HTMLDivElement
const confirmationContent = document.querySelector('#confirmation-container') as HTMLDivElement

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

/**
 * Submit form Button Event 
 */
formBtn!.addEventListener('click', e => {
  e.preventDefault()

  hideElement(formContent)
  hideElement(mainContent)
  showElement(confirmationContent)
})

returnBtn!.addEventListener('click', e => {
  e.preventDefault()

  hideElement(confirmationContent)
  showElement(mainContent)
})

export {}