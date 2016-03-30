Session.set('pageTitle', 'Posts');

Template.postsList.helpers({
    posts: function(){
        return Posts.find();
    }
});