Template.enviarPost.events({
    'submit form': function(evento){
        evento.preventDefault();


     var publicacion = {
         title: evento.target.titulo.value,
         url: 'http://' + evento.target.url.value + '.com'
    };

     publicacion._id = Posts.insert(publicacion);

     Router.go('postPage', publicacion);

    }
});
