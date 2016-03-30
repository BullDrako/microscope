Template.editarPost.events({
    'submit form': function(evento){
        evento.preventDefault();


        var publicacion = {
            title: evento.target.titulo.value,
            url: evento.target.url.value
        };

        Posts.update(this._id ,publicacion);


        Router.go('postsList');

    }
});



