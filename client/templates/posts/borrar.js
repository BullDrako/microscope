Template.postItem.events({
    'mousedown .borrar': function(evento){
        evento.preventDefault();

       var idpublicacion = this._id;

        Posts.remove(idpublicacion);

        Router.go('postsList');

    }
});
