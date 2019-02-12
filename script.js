main()

function main () {
	$('.c1')
		.hiden()
		.show()
		.addClass('red')
		.toggleClass('arr')
		.removeClass('c1')
		.on('click', clickHandler)
		.off('click', clickHandler)
		.html('<b>123</b>')

	function clickHandler () {
		console.log('clicked!')
	}
}