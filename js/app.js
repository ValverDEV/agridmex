function removeBG() {
	var state = document.readyState
	if (state == 'complete') {
		var cover = document.querySelector('#cover')
		setTimeout(function () {
			cover.style.opacity = 0
		}, 1000)
		cover.style.visibity = 'hidden'
	} else {
		setTimeout(removeBG, 1000)
	}
}

removeBG()