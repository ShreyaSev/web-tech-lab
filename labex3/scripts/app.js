angular.module('myApp',[])
.controller('MainController',function($scope){
    $scope.isDarkMode = false;

    $scope.toggleMode = function(){
        $scope.isDarkMode = !$scope.isDarkMode;
        css_link = document.getElementById("stylesheet")
        if ($scope.isDarkMode){
            css_link.href = "styles/darkmode.css"
        }
        else {
            css_link.href = "styles/lightmode.css"
        }
    }
}
);