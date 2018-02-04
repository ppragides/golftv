var self;
var ResourceLoader = function(config) {
	this.config = config;
	self = this;
	return self;

};

ResourceLoader.prototype = {
	constructor: ResourceLoader,

	loadResource: function(resource, callback) {
		evaluateScripts([resource], function(success) {
			if(success) {
				var resource = Template.call(self);
				callback.call(self, resource);
			} else {
				var title = "Resource Loader Error",
					description = `Error loading resource '${resource}'. \n\n Try again later.`,
					alert = createAlert(title, description);
				navigationDocument.presentModal(alert);
			}
		});
	}
};