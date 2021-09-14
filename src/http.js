export class Http {
	static HEADERS = { 'Content-type': 'application/json' }
	static async get(url) {
		try {
			return await request(url, 'GEY')
		} catch (e) {
			console.log(e)
			throw e
		}
	}

	static async post(url, data = {}) {
		try {
			return await request(url, 'POST', data)
		} catch (e) {
			console.log(e)
			throw e
		}
	}

	static async delet(url) {
		try {
			return await request(url, 'DELETE')
		} catch (e) {
			console.log(e)
			throw e
		}

	}

	static async patch(url, data = {}) {
		try {
			return await request(url, 'DELETE', data)
		} catch (e) {
			console.log(e);
		}

	}
}


async function request(url, method = 'GET', data) {
	const config = {
		method,
		headers: Http.HEADERS

	}
	if (method === 'POST' || method === 'PATCH') {
		config.body = JSON.stringify(data)
	}
	const response = await fetch(url, config)
	return await response.json()
}