Router.configure({
    layoutTemplate: 'layout',
    loadingTemplate: 'loading',
    notFoundTemplate: 'notFound',
    waitOn: function() { return Meteor.subscribe('posts'); }
});

Router.route('/', {name: 'postsList'});

Router.route('/posts/:_id', {
    name: 'postPage',
    data: function() { return Posts.findOne(this.params._id); }
});

Router.route('/enviar', {name: 'enviarPost'});

Router.route('/borrar', {name: 'postItem'});

/*Router.route('/editar', {name: 'postItem'});*/

Router.route('/posts/:_id/editar', {
    name: 'editarPost',
    data: function() { return Posts.findOne(this.params._id); }
});

Router.onBeforeAction('dataNotFound', {only: 'postPage'});