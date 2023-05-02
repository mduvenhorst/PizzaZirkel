document.querySelectorAll('nav ul li a:not(:only-child)').forEach(element => {
  element.addEventListener('click', event => {
    $(anchor).siblings('.nav-dropdown').toggle();
    // Close one dropdown when selecting another
    $('.nav-dropdown').not($(anchor).siblings()).hide();
    event.stopPropagation()
  })
})

document.addEventListener('click', () => $('.nav-dropdown').hide())

const navToggle = document.querySelector('#nav-toggle')
navToggle?.addEventListener('click', () => {
  navToggle.classList.toggle('active')
  $('nav ul').slideToggle()
})