//--- CODE --------------------------
(function (angular) {
	// Create module
	var myApp = angular.module('myApp', []);

	myApp.controller('MyCtrl', ['$scope', function ($scope) {
		$scope.welcomeMessage = 'Hello World';

	}]);

})(angular);

// ---SPECS-------------------------

describe('myApp', function () {
	var scope,
		controller;
	beforeEach(function () {
		module('myApp');
	});

	describe('MyCtrl', function () {
		beforeEach(inject(function ($rootScope, $controller) {
			scope = $rootScope.$new();
			controller = $controller('MyCtrl', {
				'$scope': scope
			});
		}));
		it('sets the name', function () {
			expect(scope.welcomeMessage).toBe('Hello World');
		});
	});
});

// --- Runner -------------------------
(function () {
	var jasmineEnv = jasmine.getEnv();
	jasmineEnv.updateInterval = 1000;

	var htmlReporter = new jasmine.HtmlReporter();

	jasmineEnv.addReporter(htmlReporter);

	jasmineEnv.specFilter = function (spec) {
		return htmlReporter.specFilter(spec);
	};

	var currentWindowOnload = window.onload;

	window.onload = function () {
		if (currentWindowOnload) {
			currentWindowOnload();
		}
		execJasmine();
	};

	function execJasmine() {
		jasmineEnv.execute();
	}

})();