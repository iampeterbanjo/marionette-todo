var Marionette = require('backbone.marionette'), // 1
    HelloWorld = Marionette.LayoutView.extend({  // 2
      el: '#app-hook',  // 3
      template: require('./templates/layout.html')  // 4
    });

var hello = new HelloWorld();  // 5

hello.render();  // 6

/*
1. Import Marionette
2. Create a new type of view called HelloWorld that borrows from the standard Marionette LayoutView. We'll go into more depth in that shortly.
3. We direct the view to the element we want to attach it to. This is a jQuery selector and we can use any valid jQuery selector here.
4. We must set a template to display to our users.
5. We must create an instance of our HelloWorld class before we can do anything useful with it.
6. Now the fun stuff begins and we call render() to display the template on the screen.
 */