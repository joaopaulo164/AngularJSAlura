/**
 * Created by Joao on 03/05/2016.
 */

angular.module('minhasDiretivas', [])
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

});