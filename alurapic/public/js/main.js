/**
 * Created by Joao on 03/05/2016.
 */

angular.module('alurapic',['minhasDiretivas','ngAnimate','ngRoute']) //injetar diretiva no modulo principal
.config(function($routeProvider, $locationProvider){ // $routeProvider = habilita rotas

    $locationProvider.html5Mode(true); // $locationProvider = sem hash "#" na URL do navegador - por meio HTML 5

    //Configurando rotas
    $routeProvider.when('/fotos', {
        templateUrl: 'partials/principal.html',
        controller: 'FotosController'
    });

    $routeProvider.when('/fotos/new', {
        templateUrl: 'partials/foto.html',
        controller: 'FotosController'
    });
    //Redirecionamento para página principal caso tente acessar uma rota que não exista
    $routeProvider.otherwise({ redirectTo: '/fotos'});

});