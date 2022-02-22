const alpha = 'abcdefghijklmnopqrstuvwxyz'

function encrypt(str) {
	return [...str]
		.map(char => {
			const idx = alpha.indexOf(char.toLowerCase())

			if (idx === -1) return char

			let shifted = alpha[(idx + 1) % alpha.length]

			if (char === char.toUpperCase()) shifted = shifted.toUpperCase()

			return shifted
		})
		.join('')
}

module.exports = encrypt
