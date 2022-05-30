export const isEmpty = object => {
	if (object) {
		if (Array.isArray(object)) {
			return !object.length
		}

		if (Object.getPrototypeOf(object) === Object.prototype) {
			return !Object.keys(object).length
		}
	}

	return false
}

export const toBase64 = file =>
	new Promise((resolve, reject) => {
		const reader = new FileReader()
		reader.readAsDataURL(file)
		reader.onerror = error => reject(error)
		reader.onload = () => resolve(reader.result)
	})
