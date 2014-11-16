appComponents.config([
		'$stateProvider',
		'$urlRouterProvider',
		function ($stateProvider, $urlRouterProvider)
		{


			$stateProvider.state('root', {
				url  : "/",
				views: {
					'root'       : {
						templateProvider: function ($templateCache)
						{
							return $templateCache.get('components/root/templ/index.html')
						}
					},
					'header@root': {
						templateProvider: function ($templateCache)
						{
							return $templateCache.get('components/header/templ/header.html')
						}
					}
				}
			})


			$urlRouterProvider.otherwise('/');
		}
	]
);