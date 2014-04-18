(function(root, factory) {
  root.ls = factory();
})(this, function() {
    
  var ls = {
    //TODO handle functions on both sides
    addObject: function(name, myObj) {
        if(!name || !myObj){
            console.log('missing stuff');
            return;
        }
        window.localStorage.setItem(name, JSON.stringify(myObj));
    },
    getObject: function(name) {
        return JSON.parse(window.localStorage.getItem(name));
    }

  }
  return ls;
    
});
