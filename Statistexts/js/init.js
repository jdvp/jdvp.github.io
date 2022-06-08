skel.init({
	reset: 'full',
	breakpoints: {
		'global': { range: '*', href: 'css/main.css', containers: 1360, grid: { gutters: 50 } },
		'wide': { range: '-1680', href: 'css/main.css', containers: 1200, grid: { gutters: 40 } },
		'normal': { range: '-1280', href: 'css/main.css', containers: 960, grid: { gutters: 30 } },
		'narrow': { range: '-1000', href: 'css/main.css', containers: '100%!', grid: { gutters: 25 } },
		'mobile': { range: '-736', href: 'css/main.css', grid: { gutters: 20 }, viewport: { scalable: false } },
		'supernarrow': { range: '-450', href: 'css/main.css', grid: { gutters: 15, collapse: true } }
	}
});