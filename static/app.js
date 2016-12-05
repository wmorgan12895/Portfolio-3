var app = angular.module('StirFryApp',[])

app.controller('RecipeController', function($scope){
    $scope.Sides=true
    $scope.Veggies=false
    $scope.Meat= false
    $scope.Sauce= false
    $scope.Review = false

    $scope.vegetables = {
        RedPeppers: {name: "Red Peppers", value: false}, 
        Carrots:{name: "Carrots", value: false}, 
        Cabbage:{name: "Cabbage", value: false},
        Chillis:{name: "Chillis", value: false},
        Onions:{name: "Onions", value: false},
        SnowPeas:{name: "Snow Peas", value: false},
        BeanSprouts:{name: "Bean Sprouts", value: false}, 
        BokChoi:{name: "Bok Choi", value: false},
        Broccoli:{name: "Broccoli", value: false},
        BabyCorn:{name: "Baby Corn", value: false},
        GreenBeans:{name: "Green Beans", value: false} 

    }

    $scope.pickSide = function(side){
        $scope.side = side
        $scope.Veggies = true
        $scope.Sides = false
    }

     $scope.setVeggies = function(){
        $scope.Veggies = false
        $scope.Meat = true
    }

     $scope.pickMeat = function(meat){
        $scope.meat = meat
        $scope.Meat = false
        $scope.Sauce = true
    }

    $scope.pickSauce = function(sauce){
        $scope.sauce = sauce
        $scope.Sauce = false
        $scope.Review = true
    }

})

app.controller('MainController', function($scope){})
