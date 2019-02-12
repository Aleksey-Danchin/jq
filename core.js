(() => {
	const $ = function $ (selector) {
		const elements = document.querySelectorAll(selector)
		return getChain(elements)
	}

	function getChain (elements) {
		const chain = {}

		chain.hiden = function hiden () {
			for (const element of elements) {
				element.style.display = 'none'
			}

			return getChain(elements)
		}

		chain.show = function show () {
			for (const element of elements) {
				element.style.display = ''
			}

			return getChain(elements)
		}

		chain.toggle = function toggle () {
			for (const element of elements) {
				element.style.display = element.style.display ? '' : 'none'
			}

			return getChain(elements)
		}

		chain.addClass = function addClass (className) {
			for (const element of elements) {
				element.classList.add(className)
			}

			return getChain(elements)
		}

		chain.removeClass = function removeClass (className) {
			for (const element of elements) {
				element.classList.remove(className)
			}

			return getChain(elements)
		}

		chain.toggleClass = function toggleClass (className) {
			for (const element of elements) {
				const is = [].includes.call(element.classList, className)
				element.classList[is ? 'remove' : 'add'](className)
			}

			return getChain(elements)
		}

		chain.on = function on (...args) {
			for (const element of elements) {
				element.addEventListener(...args)
			}

			return getChain(elements)
		}

		chain.off = function off (...args) {
			for (const element of elements) {
				element.removeEventListener(...args)
			}

			return getChain(elements)
		}

		chain.html = function html (content) {
			for (const element of elements) {
				element.innerHTML = content
			}

			return getChain(elements)
		}

		return chain
	}

	window.$ = $
})()