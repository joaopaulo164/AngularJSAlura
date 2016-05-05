/**
 * Created by Joao on 03/05/2016.
 */

angular.module('alurapic',['minhasDiretivas','ngAnimate','ngRoute','meusServicos']) //injetar diretiva no modulo principal
.config(function($routeProvider, $locationProvider){ // $routeProvider = habilita rotas

    $locationProvider.html5Mode(true); // $locationProvider = sem hash "#" na URL do navegador - por meio HTML 5

    //Configurando rotas

    //Principal
    $routeProvider.when('/fotos', {
        templateUrl: 'partials/principal.html',
        controller: 'FotosController'
    });

    //Nova foto
    $routeProvider.when('/fotos/new', {
        templateUrl: 'partials/foto.html',
        controller: 'FotoController'
    });

    //Editar
    $routeProvider.when('/fotos/edit/:fotoId', {
        templateUrl: 'partials/foto.html',
        controller: 'FotoController'
    });

    //Redirecionamento para página principal caso tente acessar uma rota que não exista
    $routeProvider.otherwise({ redirectTo: '/fotos'});

});