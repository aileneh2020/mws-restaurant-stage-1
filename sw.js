const appName = 'restaurant-review';
const staticCacheName = appName + '-v1';


/**
 * Once service worker is installed, add array of file names to cache.
 */
self.addEventListener('install', function(event) {
	event.waitUntil(
		caches.open(staticCacheName).then(function(cache) {
			return cache.addAll([
				'/',
				'/index.html',
				'/restaurant.html',
				'/css/styles.css',
				'/css/responsive.css',
				'/js/dbhelper.js',
				'/js/main.js',
				'/js/restaurant_info.js',
				'/data/restaurants.json',
				'/img/1.jpg',
				'/img/2.jpg',
				'/img/3.jpg',
				'/img/4.jpg',
				'/img/5.jpg',
				'/img/6.jpg',
				'/img/7.jpg',
				'/img/8.jpg',
				'/img/9.jpg',
				'/img/10.jpg'
			]);
		})
	);
});


/**
 * Remove old versions of cache.
 */
self.addEventListener('activate', function(event) {
	event.waitUntil(
		caches.keys().then(function(keyList) {
			return Promise.all(keyList.map(function(key) {
				if(!staticCacheName.include(key)) {
					return caches.delete(key);
				}
			}));
		})
	);
});


/**
 * If event request does not exist in cache then fetch it.
 */
self.addEventListener('fetch', function(event) {
	const urlRequest = new URL(event.request.url);

	// Respond to requests for this app only, not third party apps
	if (urlRequest.origin === location.origin) {
		// Ignore search parameters in url and respond with restaurant.html if
		// pathname begins with '/restaurant.html'
		if (urlRequest.pathname.startsWith('/restaurant.html')) {
			event.respondWith(caches.match('/restaurant.html'));
			return;
		}
	}

	event.respondWith(
		// Return request from cache or fetch from network
		caches.match(event.request).then(function(response) {
			return response || fetch(event.request);
		})
	);
});
