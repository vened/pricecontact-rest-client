appComponents.
	directive('formBuilder', [
		'$templateCache',
		function ($templateCache)
		{
			return {
				restrict  : 'E',
				replace   : false,
				template  : $templateCache.get('components/form-builder/tpl/form-builder.html'),
				scope     : {
					forms: '='
				},
				controller: function ($scope)
				{
					$scope.$watch('forms', function(data){
						console.log(data)
					})
				},
				link      : function ($scope, $element, attrs)
				{
					
				}
			};
		}
	]);