const ROOT_URL = 'https://lab.willandskill.eu';

const AUTH_URL = `${ROOT_URL}/api/v1/auth/api-token-auth/`;
const CREATE_URL = `${ROOT_URL}/api/v1/auth/users/`;
const COUNTRIES_URL = `${ROOT_URL}/api/v1/countries/`;
const ME_URL = `${ROOT_URL}/api/v1/me/`;

export default class {
	login(email, password) {
		const payload = {
			email,
			password
		};
		return fetch(AUTH_URL, {
			method: 'POST',
			body: JSON.stringify(payload),
			headers: this.getPublicHeaders()
		});
	}

	register(payload) {
        return fetch(CREATE_URL, {
            method: 'POST',
            body: JSON.stringify(payload),
            headers: this.getPublicHeaders()
        })
    }
    
    getCountries() {
        return fetch(COUNTRIES_URL, {
            headers: this.getPublicHeaders()
        })
    }

	getMe() {
		return fetch(ME_URL, {
			headers: this.getPrivateHeaders()
		});
	}

	getPrivateHeaders() {
		return {
			'Content-Type': 'application/json',
			Authorization: `Bearer ${this.getToken()}`
		};
	}

	getPublicHeaders() {
		return {
			'Content-Type': 'application/json'
		};
	}

	setToken(token) {
		localStorage.setItem('JWT_APP', token);
	}

	getToken() {
		return localStorage.getItem('JWT_APP');
	}
}
