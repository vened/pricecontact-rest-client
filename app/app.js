'use strict';

var app = angular.module('app', [
	'ngResource',
	'ui.router',
	'app.components',
	'app.api',
	'app.services'
]);

app.run(
	[
		'$rootScope',
		'$state',
		'$stateParams',
		function ($rootScope, $state, $stateParams)
		{
			$rootScope.$state = $state;
			$rootScope.$stateParams = $stateParams;
		}
	]
);

app.config(
	[
		'$httpProvider',
		function ($httpProvider)
		{
			$httpProvider.defaults.useXDomain = true;
			delete $httpProvider.defaults.headers.common['X-Requested-With'];
		}
	]
);


var appComponents = angular.module('app.components', []);
var appServices = angular.module('app.services', []);
var appApi = angular.module('app.api', []);