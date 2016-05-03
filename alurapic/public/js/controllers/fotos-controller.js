/**
 * Created by Joao on 03/05/2016.
 */

angular.module('alurapic').controller('FotosController', function($scope){ //injeção do scope para ligação entre o controller e a view
    //dependurando foto no scope
    $scope.foto = {
        titulo: 'Leão',
        url: 'http://www.fundosanimais.com/Minis/leoes.jpg'
    };
});