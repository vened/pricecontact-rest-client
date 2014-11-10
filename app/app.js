'use strict';

var app = angular.module('app', [
	'ui.router',
	'app.components'
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
)

//var innaAppControllers = angular.module('innaApp.controllers', []);
var appConponents = angular.module('app.components', []);