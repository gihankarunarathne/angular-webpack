class HomeController {
	constructor(randomNames) {
		this.randomNames = randomNames;
		this.name = 'World';
	}

	changeName(name) {
		this.name = name || 'angular-tips';
	}

	randomName() {
		this.name = this.randomName.getName();
	}
}

HomeController.$inject = ['randomNames'];

export default HomeController;