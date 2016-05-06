/**
 * Created by Joao on 03/05/2016.
 */

angular.module('minhasDiretivas', ['meusServicos'])
.directive('meuPainel', function(){
    //Directive Definition Object = Directiva configurada
    var ddo = {};
    ddo.restrict = "AE"; //Atributo "<div meu-painel>" e Elemento "<meu-painel>" - Obs: Não esquecer de substitutior camelCase por hífen "-".

    ddo.scope = {
      titulo: '@titulo'  //ou somente @ //no HTML = <meu-painel titulo="{{foto.titulo}}"> //Angular Expression é passada como String
    };

    ddo.transclude = true; //manter elementos filhos

    ddo.templateUrl = 'js/directives/meu-painel.html';

    return ddo;
})
.directive('minhaFoto', function() {

    var ddo = {};

    ddo.restrict = "AE";

    ddo.scope = {
        titulo: '@',
        url: '@'
    };

    ddo.template = '<img class="img-responsive center-block" src="{{url}}" alt="{{titulo}}">';

    return ddo;

})
.directive('meuBotaoPerigo', function(){

    var ddo = {};

    ddo.restrict = "E";

    ddo.scope = {
        nome: '@', //passagem de string
        acao: '&' //passagem de expressão a ser executada. Ex: remove(foto)
    };

    ddo.template = '<button ng-click="acao(foto)" class="btn btn-danger btn-block">{{nome}}</button>';

    return ddo;

})
.directive('meuFocus', function(){

    var ddo = {};

    ddo.retrict = "A";

/* //necessário para utilizar o $watch
    <!--// focado="focado" é necessário ser declarado na TAG <a href="/" class="btn btn-primary" meu-focus>Voltar</a> -->
    ddo.scope = {
        focado: '=' //permite comunição bidirecional entre o controller e a directive
    };
*/

    ddo.link = function(scope, element){

        scope.$on('fotoCadastrada', function(){
            element[0].focus();
        });

/*
        scope.$watch('focado', function(){  //$watch escuta a propriedade do scope principal //custa processamento
            if(scope.focado){
                element[0].focus();
                scope.focado = false; //volta para false o focado para ser utilizado em outra oportunidade
            }
        });
*/

    };

    return ddo;

})
.directive('meusTitulos', function(){
    var ddo= {};
    ddo.restrict = "E";
    ddo.template = '<ul><li ng-repeat="titulo in titulos">{{titulo}}</li></ul>';
    ddo.controller = function($scope, recursoFoto){
        recursoFoto.query(function(fotos){
            $scope.titulos = fotos.map(function(foto){
                return foto.titulo;
            });
        });
    };
    return ddo;
});
