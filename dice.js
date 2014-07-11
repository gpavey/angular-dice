var demo = angular.module("Demo",[])

demo.controller("DiceCtrl", function($scope){

    $scope.dice = [
    ]

    $scope.addDie = function(){
      $scope.diceText = 0
      $scope.dice.push({text:$scope.diceText})
    }

    $scope.diceCount = function(){
      var count = 0
      angular.forEach($scope.dice, function(die){
        count += 1
      })
      return count
    }

    $scope.rollDie = function(){
      angular.forEach($scope.dice, function(die){
      console.log(die)
        die.text = Math.floor((Math.random()*6)+1)
      })
    }
  }
)
