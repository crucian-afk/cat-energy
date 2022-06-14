const burger = document.querySelector('.burger-menu-button')
const navigation = document.querySelector('.main-nav')

window.addEventListener('resize', () => {
  if (window.screen.width > 767) {
    burger.classList.remove('burger-menu-button--open')
    navigation.classList.remove('main-nav--float')
    navigation.classList.remove('main-nav--closed')
  } else {
    burger.classList.add('burger-menu-button--open')
    navigation.classList.add('main-nav--float')
  }
})

burger.classList.add('burger-menu-button--open')
navigation.classList.add('main-nav--float')
burger.addEventListener('click', () => {
  burger.classList.toggle('burger-menu-button--open')
  navigation.classList.toggle('main-nav--closed')
})

const docWidth = document.body.clientWidth

const progress = document.querySelector('.example')

if (progress) {
  const btnBefore = progress.querySelector('.example__button--before')
  const btnAfter = progress.querySelector('.example__button--after')

  btnBefore.addEventListener('click', function () {
    if (progress.classList.contains('example--after')) {
      progress.classList.remove('example--after')
    }
  })

  btnAfter.addEventListener('click', function () {
    if (!progress.classList.contains('example--after')) {
      progress.classList.add('example--after')
    }
  })
}


