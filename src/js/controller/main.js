angular.module('todoApp', ['ui.router'])
  .controller('mainController', function ($scope,$http) {

    var todoMain=this;
    $scope.addedCourse=[];
    $scope.totalCredit=0;
    $http.get('https://whsatku.github.io/skecourses/combined.json').success(function(courseList) {
      $scope.courses = courseList;
    });

    $(document).ready(function () {
      (function ($) {
        $('#filter').keyup(function () {
          var rex = new RegExp($(this).val(), 'i');
          $('.searchable tr').hide();
          $('.searchable tr').filter(function () {
             return rex.test($(this).text());
          }).show();
        })
      }(jQuery));
    });

    todoMain.add = function (addCourse) {
      if($scope.totalCredit+addCourse.credit.total>22){
         $(".btn-success").prop('disabled', true);
         if($scope.totalCredit<22){
            $(".btn-success").prop('disabled', false);
         }
      }
      else{
        $scope.addedCourse.push(addCourse);
        $scope.totalCredit+=addCourse.credit.total;
      }
    }

    todoMain.drop = function (dropCourse){
        var index = $scope.addedCourse.indexOf(dropCourse);
        $scope.addedCourse.splice(index,1);
        $scope.totalCredit-=dropCourse.credit.total;
          if($scope.totalCredit <22){
         $(".btn-success").prop('disabled', false);
       }
    }

  })

