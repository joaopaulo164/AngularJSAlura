/**
 * Created by Joao on 03/05/2016.
 */

angular.module('alurapic').controller('FotosController', function($scope, $http){ //injeção do scope para ligação entre o controller e a view e http para realizar requisições AJAX

    $scope.fotos = [];
    $scope.filtro = '';


    $http.get('v1/fotos') //Atalho para promesse
        .success(function(fotos){
            $scope.fotos = fotos;
        })
        .error(function(error){
            console.log(error);
        });

    /*
    var promisse = $http.get('v1/fotos'); //Requisição ao servidor pelo padrão promisse
    promisse.then(function(retorno){
        $scope.fotos = retorno.data; //dependurando fotos no scope
    }).catch(function(error){
        console.log(error);
    });*/

});