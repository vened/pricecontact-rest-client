/**
 * Created by max on 10.11.14.
 */
appComponents.controller('filterCtrl', [
	'$scope',
	'filterServices',
	'apiUrls',
	'$http',
	function ($scope, filterServices, apiUrls, $http)
	{
		filterServices.getFilters().then(function (res)
		{
			$scope.filters = res.data;
		})
		$scope.filter = "Фильтры"
		
		$scope.ft = {}
		
		$scope.$watch('ft', function(data){
			console.log(data)
		})
	}
]);