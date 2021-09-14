export class Http {
	static HEADERS = { 'Content-type': 'application/json' }
	//get
	static async get(url) {
		return await request(url, 'GET')
	}
	//post
	static async post(url, data = {}) {
		return await request(url, 'POST', data)
	}
	//delete
	static async delet(url) {
		return await request(url, 'DELETE')
	}
	//patch
	static async patch(url, data = {}) {
		return await request(url, 'PATCH', data)
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