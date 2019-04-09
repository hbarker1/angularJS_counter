// function counter() {
//     const controller = this;

//     this.up = (count) => {
//         this.count = 0;
//         goUp.count = (add) =>{
//             $scope.counter += add;


//         };
//         goDown = () => {

//         }
//     }
// }


// var app = angular.module("updownApp", []);
// app.controller('updown', function($scope) {
//   $scope.counter= 0;
//   $scope.count = function(inc){
    
//     $scope.counter += inc;
//   };
  
   
// });



angular
.module('updownApp')
.component('updown', {
    template: 
    `<body>
    <div class="updown-button">
    <button ng-click="count = count + 1" ng-init="count=0">Up</button>
    <label> {{count}} </label>
    <button ng-click="count = count - 1" ng-init="count=0">Down</button>
    </div>
    </body>`,
    
});