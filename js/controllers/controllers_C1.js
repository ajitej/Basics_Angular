/*
*
* Controller defined for C1
* Made by Ajitej Kaushik
* Backend Dev at Medzin
*
* Controller depicts a basic example of using http request for fetching data from a file, parsing data in json format
* Controller is bind to the C1 file of angular program folder.
*
*/
angular.module('app', [])
.controller('myCtrl', ['$scope', '$http', function ContactController($scope, $http) {

	$http.get('js/data/data_C1.json').success(function(data){
		$scope.names = data;
	});

}]);