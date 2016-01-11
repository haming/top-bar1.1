/**
 * Created by ming on 15/12/30.
 */
angular.module('publicApp')
  .directive('wfsidetop', function (sidetopConstant) {
    return {
      transclude: true,
      templateUrl: 'directvies/wfsidetop.html',
      restrict: 'E',
      scope: {
        titles:'=',
        companyNames:'=',
        company:'=',
        sectionSetting:'&'
        },
      link: function postLink(scope, element, attrs) {
        scope.$watch('titles', function(value) {
          scope.titles = value || sidetopConstant.set.titles;
        });

        scope.$watch('companyNames', function(value) {
          scope.companyNames = value || sidetopConstant.set.companyNames;
        });
        scope.$watch('company', function(value) {
          scope.company = value || sidetopConstant.set.company;
        });

        scope.isSetting = function(index){
          console.log(index);
          scope.sectionSetting({index:index});
        };
      }
    };
  });
