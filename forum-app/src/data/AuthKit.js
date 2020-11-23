const ROOT_URL = 'https://lab.willandskill.eu';

const AUTH_URL = `${ROOT_URL}/api/v1/auth/api-token-auth/`;
const CREATE_URL = `${ROOT_URL}/api/v1/auth/users/`;
const COUNTRIES_URL = `${ROOT_URL}/api/v1/countries/`;
const ME_URL = `${ROOT_URL}/api/v1/me/`;

export default class Authkit {
	static login(email, password) {
		const payload = {
			email,
			password
		};
		console.log(payload);
		return fetch(AUTH_URL, {
			method: 'POST',
			body: JSON.stringify(payload),
			headers: this.getPublicHeaders()
		});
	}

	static register(payload) {
        return fetch(CREATE_URL, {
            method: 'POST',
            body: JSON.stringify(payload),
            headers: this.getPublicHeaders()
        })
    }
    
    static getCountries() {
        return fetch(COUNTRIES_URL, {
            headers: this.getPublicHeaders()
        })
    }

	static getMe() {
		return fetch(ME_URL, {
			headers: this.getPrivateHeaders()
		});
	}

	static getPrivateHeaders() {
		return {
			'Content-Type': 'application/json',
			Authorization: `Bearer ${this.getToken()}`
		};
	}

	static getPublicHeaders() {
		return {
			'Content-Type': 'application/json'
		};
	}

	static setToken(token) {
		localStorage.setItem('JWT_APP', token);
	}

	static getToken() {
		return localStorage.getItem('JWT_APP');
	}
}
