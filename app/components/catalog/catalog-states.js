appComponents.config([
		'$stateProvider',
		'$urlRouterProvider',
		function ($stateProvider, $urlRouterProvider)
		{
			$stateProvider
				.state('catalog', {
					parent: 'root',
					url   : '^/catalog',
					views : {
						'content@root': {
							templateProvider: function ($templateCache)
							{
								return $templateCache.get('components/catalog/templ/index.html')
							}
						},
						'filter@catalog': {
							controller : 'filterCtrl',
							templateProvider: function ($templateCache)
							{
								return $templateCache.get('components/filter/templ/index.html')
							}
						},
						'products@catalog': {
							templateProvider: function ($templateCache)
							{
								return $templateCache.get('components/catalog/templ/products.html')
							}
						}
					}
				});
		}
	]
);
