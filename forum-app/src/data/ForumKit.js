const ROOT_URL = 'https://lab.willandskill.eu';
const POSTS_URL = `${ROOT_URL}/api/v1/forum/posts/`;
const CATEGORIES_URL = `${ROOT_URL}/api/v1/forum/categories/`;

export default class {
	getPosts() {
		return fetch(POSTS_URL, {
			headers: this.getPrivateHeaders()
		});
	}

	getSinglePost(id) {
		const SINGLE_URL = `${ROOT_URL}/api/v1/forum/posts/${id}/`;
		return fetch(SINGLE_URL, {
			headers: this.getPrivateHeaders()
		});
	}

	createPost(payload) {
		return fetch(POSTS_URL, {
			method: 'POST',
			body: JSON.stringify(payload),
			headers: this.getPrivateHeaders()
		});
	}

	getCategories() {
		return fetch(CATEGORIES_URL, {
			headers: this.getPrivateHeaders()
		});
	}

	getComments(id) {
		const COMMENTS_URL = `${POSTS_URL}${id}/replies`;
		return fetch(COMMENTS_URL, {
			headers: this.getPrivateHeaders()
		});
	}

	createComment(payload) {
		return fetch(POSTS_URL, {
			method: 'POST',
			body: JSON.stringify(payload),
			headers: this.getPrivateHeaders()
		})
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
