import angular from 'angular';
import uirouter from 'angular-ui-router';

import home from '../features/home';

// import '../style/app.css';

let app = () => {
  return {
    url: '/',
    template: require('./app.html'),
    controller: 'AppCtrl',
    controllerAs: 'app'
  }
};

class AppCtrl {
  constructor() {
    this.url = 'https://github.com/preboot/angular-webpack';
  }
}

const MODULE_NAME = 'app';

angular.module(MODULE_NAME, [uirouter, home])
  .directive('app', app)
  .controller('AppCtrl', AppCtrl);

export default MODULE_NAME;