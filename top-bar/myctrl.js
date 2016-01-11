/**
 * Created by ming on 15/12/30.
 */
angular.module('publicApp')
  .controller('myCtrl',function($scope,sidetopConstant){

    //
    //$scope.title = {};
    //
    //$scope.title.companyName = sidetopConstant.companyNames;
    //$scope.title.titles = sidetopConstant.titles;

    $scope.sectionSetting = function(index){
     console.log("index in sectionSetting:" + index);
        //console.log("click:"+index);
    }
  });
