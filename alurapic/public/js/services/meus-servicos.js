/**
 * Created by Joao on 05/05/2016.
 */

angular.module('meusServicos', ['ngResource'])
.factory('recursoFoto', function($resource){

    return $recursoFoto = $resource('v1/fotos/:fotoId', null, {
        update: {
            method: 'PUT'
        }
    });
})
.factory('cadastroDeFotos', function(recursoFoto, $q){ //servico $q permite criar promises

    var servico = {};

    servico.cadastrar = function(foto){
        return $q(function(resolve, reject){
            if(foto._id){
                recursoFoto.update({fotoId:foto._id}, foto, function(){
                    resolve({
                        mensagem: 'Foto' + foto.titulo + 'atualizada com sucesso',
                        inclusao: false
                    });

                }, function(erro){
                    console.log(erro);
                    reject({
                        mensagem: 'Não foi possível alterar a foto' + foto.titulo
                    });
                });
            } else {
                recursoFoto.save(foto, function(){
                    resolve({
                        mensagem: 'Foto' + foto.titulo + " inclída com sucesso",
                        inclusao: true
                    });
                },function(erro){
                    console.log(erro);
                    reject({
                        mesagem: 'Não foi possível incluir a foto' + foto.titulo
                    });
                });
            }
        });
    };
    return servico;
});