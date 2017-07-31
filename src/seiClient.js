;(function initSeiClient(window) {
	function SeiClient(kwargs) {
		var self = this;

		for (var key in kwargs) {
			if (kwargs.hasOwnProperty(key)) {
				self[key] = kwargs[key];
			}
		}
    
    	if (!this.target) throw new Error('requires keyword argument "target"');

    	this.submit = function (response) {
			window.top.postMessage(response, this.target);
		};

		return this;
	}

	window.SeiClient = SeiClient;
})(window);