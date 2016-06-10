FlowRouter.route('/', {
    action: function() {
        BlazeLayout.render('mainLayout', {
            content: "home"
        });
    },
});

// Template.home.onRendered(function () {
	
// });