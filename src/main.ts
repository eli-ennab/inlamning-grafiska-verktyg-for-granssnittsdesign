const ctaBtn = document.querySelector('#cta-button') as HTMLButtonElement

ctaBtn!.addEventListener('click', e => {
  e.preventDefault()

  console.log('You clicked me')
})
