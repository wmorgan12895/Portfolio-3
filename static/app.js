var app = angular.module('StirFryApp',[])

app.controller('RecipeController', function($scope){
    $scope.Sides=true
    $scope.Veggies=false
    $scope.Meat= false
    $scope.Sauce= false
    $scope.Review = false
    $scope.Current = true
    $scope.Info = false
    $scope.ingredients= []

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
    $scope.showCurrent = function(name){
        $scope.Current = true 
        $scope.Info = false;
    }

    $scope.showInfo = function(name){
        $scope.Current = false 
        $scope.Info = true;
        if(name==="Basic"){
            $scope.ingredients = ["3 cloves garlic", "2 tbsp soy sauce", "1 tbsp rice vinegar", "1 Tbsp brown sugar", "1/2 cup water", "1 1/2 tbsp cornstarch"]
        } else if(name==="Orange"){
            $scope.ingredients = ["1 inch ginger", "3 tbsp soy sauce", "1 tbsp rice vinegar", "1/2 cup orange juice", "1 1/2 tbsp cornstarch"]
        } else if(name==="Curry"){
            $scope.ingredients = ["1 1/2 Tbsp curry paste", "1 1/2 Tbsp fish sauce", "2 tsp brown sugar", "1/2 cup water", "2 tbsp cornstarch"]
        } else if(name==="Black"){
            $scope.ingredients = ["1 tsp brown sugar", "3 tbsp soy sauce", "2 tsp rice vinegar", "1/2 cup water", "1 tbsp cornstarch"]
        } else if(name==="Sweet"){
            $scope.ingredients = ["2 tbsp ketchup", "1 tbsp soy sauce", "1 tbsp rice vinegar","1 Tbsp brown sugar", "2/3 cup water", "1 1/2 tbsp cornstarch"]
        } else if(name==="Custom"){
           
        }
    }

    $scope.goBack = function(){
        if($scope.Veggies) {
            $scope.Veggies = false;
            $scope.Sides = true;
        }
        else if($scope.Meat) {
            $scope.Meat = false;
            $scope.Veggies = true;
        }
        else if($scope.Sauce) {
            $scope.Sauce = false;
            $scope.Meat = true;
        }
        else if($scope.Review) {
            $scope.Review = false;
            $scope.Sauce = true;
        }
    }

    $scope.newRecipe = function(){
        $scope.vegetables['RedPeppers'].value = false;
        $scope.vegetables['Carrots'].value = false;
        $scope.vegetables['Cabbage'].value = false;
        $scope.vegetables['Chillis'].value = false;
        $scope.vegetables['Onions'].value = false;
        $scope.vegetables['SnowPeas'].value = false;
        $scope.vegetables['BeanSprouts'].value = false;
        $scope.vegetables['BokChoi'].value = false;
        $scope.vegetables['Broccoli'].value = false;
        $scope.vegetables['BabyCorn'].value = false;
        $scope.vegetables['GreenBeans'].value = false;

        $scope.Sides=true
        $scope.Veggies=false
        $scope.Meat= false
        $scope.Sauce= false
        $scope.Review = false
    }

    $scope.pickSide = function(side){
        $scope.side = side
        $scope.Veggies = true
        $scope.Sides = false
    }

    $scope.pickVeggie = function(veggie){
        if($scope.vegetables[veggie].value == false) {
            $scope.vegetables[veggie].value = true;
        }
        else {
             $scope.vegetables[veggie].value = false;
        }
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
app.controller('MainController', function($scope){
    
})
