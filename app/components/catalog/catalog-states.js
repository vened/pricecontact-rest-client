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
								return $templateCache.get('components/catalog/tpl/index.html')
							}
						},
						'filter@catalog': {
							controller : 'filterCtrl',
							templateProvider: function ($templateCache)
							{
								return $templateCache.get('components/filter/tpl/index.html')
							}
						},
						'products@catalog': {
							templateProvider: function ($templateCache)
							{
								return $templateCache.get('components/catalog/tpl/products.html')
							}
						}
					}
				});
		}
	]
);
