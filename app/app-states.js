app.config([
		'$stateProvider',
		'$urlRouterProvider',
		function ($stateProvider, $urlRouterProvider)
		{


			$stateProvider

				.state('main', {
					url     : "/",
					views   : {
						'main'       : {
							templateProvider: function ($templateCache)
							{
								return $templateCache.get('components/root/templ/index.html')
							}
						},
						'header': {
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
