var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var instance = Object.create(stackMethods);
  instance.storage = {};

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


