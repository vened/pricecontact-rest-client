appComponents.
	directive('formBuilder', [
		'$templateCache',
		function ($templateCache)
		{
			return {
				restrict: 'E',
				replace : false,
				template: $templateCache.get('components/form-builder/tpl/form-builder.html'),
				scope   : {
					formTemplate: '='
				},
				link    : function ($scope, element, attrs)
				{
					$scope.$watch('formTemplate', function (data)
					{
						console.log(data)
					})
				}
			};
		}
	]);