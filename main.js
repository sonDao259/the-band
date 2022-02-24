let blockBannerItems = document.querySelectorAll('.main__block-banner-item')
let blockBannerItemsLength = blockBannerItems.length

function changeImage() {
    let i = 0
    blockBannerItems[i].classList.add('active')
    setInterval(() => {
        blockBannerItems[i].classList.remove('active')
        i++
        if (i === blockBannerItemsLength) i = 0
        blockBannerItems[i].classList.add('active')
    }, 4000);
}
changeImage()

let buyTicketButtons = document.querySelectorAll('.main__block-tour-places-item-btn button')
let buyTicketButtonsLen = buyTicketButtons.length
let modal = document.querySelector('.modal')
let homeBtn = document.querySelector('.header__nav-mobi-list')
let overlay = document.querySelector('.modal__over-lay')
let closeBtn = document.querySelector('.modal__wrap-title > div')
let navMobiBtn = document.querySelector('.header__nav-mobi-bars')
let navMobiBtnItem = document.querySelectorAll('.header__nav-mobi-bars-item')
console.log(homeBtn)
console.log(navMobiBtnItem)

buyTicketButtons.forEach(function(btn) {
    console.log(btn)
    btn.addEventListener('click', function() {
        modal.style.display = 'flex'
        document.querySelector('body').style.overflow = 'hidden'
    })
})
overlay.addEventListener('click', function() {
    modal.style.display = 'none'
    document.querySelector('body').style.overflow = 'auto'
})
closeBtn.addEventListener('click', function() {
    modal.style.display = 'none'
    document.querySelector('body').style.overflow = 'auto'
})
let navEvent = function() {
    document.querySelector('.header__nav-mobi-bars-wrap').classList.toggle('active')
}

navMobiBtn.addEventListener('click', navEvent)

navMobiBtnItem.forEach(function(item) {
    item.addEventListener('click', function() {
        document.querySelector('.header__nav-mobi-bars-wrap').classList.remove('active')
    })
})

homeBtn.addEventListener('click', function() {
    document.querySelector('.header__nav-mobi-bars-wrap').classList.remove('active')
})