var Stack = function() {
  var instance = {};
  instance.storage = {};
  
  for (var key in stackMethods) {
  	instance[key] = stackMethods[key];
  }
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  return instance; 
};



var stackMethods = {

	push: function(value) {
		this.storage[Object.keys(this.storage).length] = value;
	},
	pop: function() {
		var value = this.storage[Object.keys(this.storage).length - 1];
    	delete this.storage[Object.keys(this.storage).length - 1];
    	return value;
	},
	size: function() {
		return Object.keys(this.storage).length;
	}
};


