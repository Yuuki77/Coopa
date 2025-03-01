export class StringExt {
	static isNullOrEmpty(val: any): boolean {
		if (val === undefined || val === null || val.trim() === "") {
			return true
		}
		return false
	}

	static capitalize(val: string): string {
		if (val.length == 1) {
			return val.toUpperCase()
		} else if (val.length > 0) {
			return val.substring(0, 1).toUpperCase() + val.substring(1)
		}
		return val
	}

	static capitalizeWords(val: string): string {
		let regexp: RegExp = /\s/
		let words = val.split(regexp)
		if (words.length == 1) {
			return StringExt.capitalize(words[0])
		}
		let result: string = ""
		for (let i = 0; i < words.length; i++) {
			if (StringExt.capitalize(words[i]) !== null) {
				result += StringExt.capitalize(words[i]) + " "
			}
		}
		return result.trim()
	}

	static contains(val: string, search: string): boolean {
		return val.indexOf(search) !== -1
	}

	static slugify(val: string, lower: boolean = true): string {
		if (lower) val = val.toLowerCase()
		return val.normalize().replace(/[^a-z0-9]/gi, "-")
	}
}
