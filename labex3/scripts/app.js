angular.module('myApp',[])
.controller('MainController',function($scope){
    $scope.isDarkMode = false;

    $scope.toggleMode = function(){
        $scope.isDarkMode = !$scope.isDarkMode;
        css_link1 = document.getElementById("stylesheet")
        // css_link2 =document.getElementById('stylesheet2')
        // iframe = document.getElementsByTagName('iframe')[0]
        // iframeDocument = iframe.contentDocument
        // css_link2 = iframeDocument.getElementById('stylesheet2')
        if ($scope.isDarkMode){
            css_link1.href = "styles/darkmode.css"
            // css_link2.href = "styles/darkmode.css"
        }
        else {
            css_link1.href = "styles/lightmode.css"
            // css_link2.href = "styles/lightmode.css"
        }
    }
}
);