/**
 * Created by Joao on 04/05/2016.
 */

angular.module('alurapic').controller('FotoController',function($scope, $http){

    $scope.foto = {};
    $scope.mensagem = '';

    $scope.submeter = function(){
        if ($scope.formulario.$valid){
            $http.post('v1/fotos', $scope.foto)
                .success(function(){
                    $scope.foto = {};
                    $scope.mensagem = 'Foto incluído sucesso';
                })
                .error(function(ero){
                    $scope.mensagem = 'Não foi possível incluir a foto';
                    console.log(erro)
                });
        }
    };

});