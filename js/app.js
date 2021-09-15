var cover = document.querySelector('#cover')
function removeBG(origin) {
	cover.style.opacity = 0
	setTimeout(function () {
		cover.style.display = 'none'
	}, 1000)
}

window.addEventListener('load', function () { removeBG('load') })
setTimeout(function () {
	if (cover.style.display !== 'none') {
		removeBG('timeoute')
	}
}, 5000)
