var self;
var Presenter = function(config, GolfTV) {
	this.config = config;
	this.GolfTV = GolfTV;
	self = this;
	return self;

};

Presenter.prototype = {
	/**
	 * 
	 * 
	 * 
	 */
	constructor: Presenter,

	/**
	 * 
	 * Create a new document from the template file we'rel oading
	 * 
	 */
	makeDocument: function(resource) {
		if (!Presenter.parser) {
			Presenter.parser = new DOMParser();
		}
		var doc = Presenter.parser.parseFromString(resource, "application/xml");
		return doc;
	},

	/**
	 * 
	 * Present the modal dialog 
	 * 
	 */
	modalDialogPresenter: function(xml) {
		navigationDocument.presentModal(xml);
	},

	/**
	 * 
	 * Push the XML file we've loaded into navigationDocument
	 * 
	 */
	pushDocument: function(xml) {
		navigationDocument.pushDocument(xml);
	},

	/**
	 * 
	 * Function to bind event handlers 
	 * 
	 */
	load: function(event) {
  		var self = this,
      	ele = event.target,
      	videoURL = ele.getAttribute("videoURL");
		if(videoURL) {
			var player = new Player();
			var playlist = new Playlist();
			var mediaItem = new MediaItem("video", videoURL);
			
			player.playlist = playlist;
			player.playlist.push(mediaItem);
			player.present();
		}
	}

};
