function removeBG() {
	var cover = document.querySelector('#cover')
	cover.style.opacity = 0
	setTimeout(function () {
		cover.style.display = 'none'
		console.log('here')
	}, 1000)
}

function bgCounter(current) {
	if (current === 0) {
		removeBG()
		return
	}
	var state = window.loaded
	if (state == 'complete') {
		removeBG()
		return
	} else {
		setTimeout(bgCounter(current - 1), 1000)
	}
}

bgCounter(5)