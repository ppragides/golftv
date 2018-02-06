var self;
var ResourceLoader = function(config) {
	this.config = config;
	self = this;
	return self;

};

ResourceLoader.prototype = {
	/**
	 * 
	 * Define our constructor
	 * 
	 */
	constructor: ResourceLoader,

	/**
	 * 
	 * Use evaluateScripts to load the resource specified (usually a js file in our templates directory)
	 * 
	 * @param resource
	 *   Path to a template file that we want to load
	 * @param callback
	 *   Callback function that allows you to proceed if we're able to load our file
	 * 
	 */
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