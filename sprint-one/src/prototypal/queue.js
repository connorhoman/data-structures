var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var instance = Object.create(queueMethods);
  instance.storage = {};

  return instance;
};

var queueMethods = {
	enqueue: function(value) {
		this.storage[this.size()] = value;
	},
	dequeue: function() {
		var value = this.storage[0];
    	delete this.storage[0];
    	for (var key in this.storage) {
      		this.storage[key - 1] = this.storage[key];
     	 delete this.storage[key];
    	}
    	return value;
	},
	size: function() {
		return Object.keys(this.storage).length;
	}
};


