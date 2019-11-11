angular.module('app.controllers', [])
  
.controller('dizionarioCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
   
.controller('sintassiCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
   
.controller('lectioCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
      
.controller('GhimelListaNomiCtrl', ['$scope', '$stateParams', 'Gdefino', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, Gdefino) {
    
    $scope.params = $stateParams;
    
    $scope.gdefinos = [];
    
    $scope.loadData = function(){
        
        if ($scope.params.termine || $scope.params.traslitterazione || $scope.params.significato){
            Gdefino.query($scope.params).then(function(res){
                $scope.gdefinos = res;
                $scope.$broadcast('scroll.refreshComplete');
            })
        }else{
            Gdefino.all().then(function(res){
                $scope.gdefinos = res;
                $scope.$broadcast('scroll.refreshComplete');
            })
        }
        
    }

    $scope.loadData();


}])
   
.controller('AlephListaNomiCtrl', ['$scope', '$stateParams', 'Defino', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, Defino) {
    
    $scope.params = $stateParams;
    
    $scope.definos = [];
    
    $scope.loadData = function(){
        
        if ($scope.params.termine || $scope.params.traslitterazione || $scope.params.significato){
            Defino.query($scope.params).then(function(res){
                $scope.definos = res;
                $scope.$broadcast('scroll.refreshComplete');
            })
        }else{
            Defino.all().then(function(res){
                $scope.definos = res;
                $scope.$broadcast('scroll.refreshComplete');
            })
        }
        
    }

    $scope.loadData();


}])
   
.controller('BethListaNomiCtrl', ['$scope', '$stateParams', 'Bdefino', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, Bdefino) {
    
    $scope.params = $stateParams;
    
    $scope.bdefinos = [];
    
    $scope.loadData = function(){
        
        if ($scope.params.termine || $scope.params.traslitterazione || $scope.params.significato){
            Bdefino.query($scope.params).then(function(res){
                $scope.bdefinos = res;
                $scope.$broadcast('scroll.refreshComplete');
            })
        }else{
            Bdefino.all().then(function(res){
                $scope.bdefinos = res;
                $scope.$broadcast('scroll.refreshComplete');
            })
        }
        
    }

    $scope.loadData();


}])
   
.controller('AlephDefinizioniCtrl', ['$scope', '$stateParams', 'Defino', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, Defino) {
    
    $scope.params = $stateParams;
    
    $scope.definos = [];
    
    $scope.loadData = function(){
        
        if ($scope.params.termine || $scope.params.traslitterazione || $scope.params.significato){
            Defino.query($scope.params).then(function(res){
                $scope.definos = res;
                $scope.$broadcast('scroll.refreshComplete');
            })
        }else{
            Defino.all().then(function(res){
                $scope.definos = res;
                $scope.$broadcast('scroll.refreshComplete');
            })
        }
        
    }

    $scope.loadData();


}])
   
.controller('GhimelDefinizioniCtrl', ['$scope', '$stateParams', 'Gdefino', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, Gdefino) {
    
    $scope.params = $stateParams;
    
    $scope.gdefinos = [];
    
    $scope.loadData = function(){
        
        if ($scope.params.termine || $scope.params.traslitterazione || $scope.params.significato){
            Gdefino.query($scope.params).then(function(res){
                $scope.gdefinos = res;
                $scope.$broadcast('scroll.refreshComplete');
            })
        }else{
            Gdefino.all().then(function(res){
                $scope.gdefinos = res;
                $scope.$broadcast('scroll.refreshComplete');
            })
        }
        
    }

    $scope.loadData();


}])
   
.controller('BethDefinizioniCtrl', ['$scope', '$stateParams', 'Bdefino', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, Bdefino) {
    
    $scope.params = $stateParams;
    
    $scope.bdefinos = [];
    
    $scope.loadData = function(){
        
        if ($scope.params.termine || $scope.params.traslitterazione || $scope.params.significato){
            Bdefino.query($scope.params).then(function(res){
                $scope.bdefinos = res;
                $scope.$broadcast('scroll.refreshComplete');
            })
        }else{
            Bdefino.all().then(function(res){
                $scope.bdefinos = res;
                $scope.$broadcast('scroll.refreshComplete');
            })
        }
        
    }

    $scope.loadData();


}])
 