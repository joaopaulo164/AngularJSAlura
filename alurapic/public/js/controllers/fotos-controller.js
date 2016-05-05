/**
 * Created by Joao on 03/05/2016.
 */

angular.module('alurapic').controller('FotosController', function($scope, recursoFoto){ //injeção do scope para ligação entre o controller e a view e http para realizar requisições AJAX

    $scope.fotos = [];
    $scope.filtro = '';
    $scope.mensagem = '';

    //Utilização do $resource
    //var recursoFoto = $resource('v1/fotos/:fotoId');

    //Consulta pelo banco via resourve (http.get está implicito na query)
    recursoFoto.query(function(fotos) {
        $scope.fotos = fotos;
    }, function(erro){
        console.log(erro);
    });

    /*
    $http.get('v1/fotos') //Atalho para promesse
        .success(function(fotos){
            $scope.fotos = fotos;
        })
        .error(function(erro){
            console.log(erro);
        });*/

    /*
    var promisse = $http.get('v1/fotos'); //Requisição ao servidor pelo padrão promisse
    promisse.then(function(retorno){
        $scope.fotos = retorno.data; //dependurando fotos no scope
    }).catch(function(error){
        console.log(error);
    });*/

    $scope.remover = function(foto){

        //http.delete está implicito no delete do resource
        recursoFoto.delete({fotoId : foto._id}, function(){
            var indiceDaFoto = $scope.fotos.indexOf(foto);
            $scope.fotos.splice(indiceDaFoto, 1);
            $scope.mensagem = ('Foto' + foto.titulo + ' removida com sucesso');
        }, function(erro){
            console.log(erro);
            $scope.mensagem = ('Não foi possível apagar a foto' + foto.titulo);
        });

        /*
        $http.delete('/v1/fotos/' + foto._id)
        .success(function() {
            var indiceDaFoto = $scope.fotos.indexOf(foto);
            $scope.fotos.splice(indiceDaFoto, 1);
            $scope.mensagem = ('Foto' + foto.titulo + ' removida com sucesso');
        })
        .error(function(erro) {
            console.log(erro);
            $scope.mensagem = ('Não foi possível apagar a foto' + foto.titulo);
        });*/
    };
});