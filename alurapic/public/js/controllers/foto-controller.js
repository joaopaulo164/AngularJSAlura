/**
 * Created by Joao on 04/05/2016.
 */

angular.module('alurapic').controller('FotoController',function($scope, recursoFoto, $routeParams){

    $scope.foto = {};
    $scope.mensagem = '';

    //Utilização do $resource
/*    var recursoFoto = $resource('v1/fotos/:fotoId', null, {
        update: {
            method: 'PUT'
        }
    });*/

    if($routeParams.fotoId){

        recursoFoto.get({fotoId: $routeParams.fotoId}, function(foto){
            $scope.foto = foto;
        }, function(erro){
            console.log(erro);
            $scope.mensagem = 'Não foi possível obter a foto';
        });

        /*
        $http.get('/v1/fotos/' +$routeParams.fotoId)
            .success(function(foto){
                $scope.foto = foto;
            })
            .error(function(erro){
                console.log(erro);
                $scope.mensagem = 'Não foi possível obter a foto';
            })
        */
    }

    $scope.submeter = function(){

        if ($scope.formulario.$valid){

            if($scope.foto._id){
            //if($routeParams.fotoId){ //Para utilizar parametros com http

                recursoFoto.update({fotoId: $scope.foto._id}, $scope.foto, function() {
                    $scope.mensagem = 'Foto alterada com sucesso';
                }, function(erro){
                    console.log(erro);
                    $scope.mensagem = 'Não foi possível alterar';
                });

                /*
                $http.put('/v1/fotos/' + $scope.foto._id, $scope.foto)
                    .success(function(){
                        $scope.mensagem = 'Foto alterada com sucesso';
                    })
                    .error(function(erro){
                        console.log(erro);
                        $scope.mensagem = 'Não foi possível alterar';
                    });*/

            } else {
                recursoFoto.save($scope.foto, function(){
                    $scope.foto = {};
                    $scope.mensagem = 'Foto incluído sucesso';
                }, function(erro){
                    $scope.mensagem = 'Não foi possível incluir a foto';
                    console.log(erro)
                });

/*
                $http.post('v1/fotos', $scope.foto)
                    .success(function(){
                        $scope.foto = {};
                        $scope.mensagem = 'Foto incluído sucesso';
                    })
                    .error(function(erro){
                        $scope.mensagem = 'Não foi possível incluir a foto';
                        console.log(erro)
                    });
                */
            }
        }
    }

});