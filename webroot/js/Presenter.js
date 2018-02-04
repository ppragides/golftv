var self;
var Presenter = function(config) {
	this.config = config;
	self = this;
	return self;

};

Presenter.prototype = {
	constructor: Presenter,
	makeDocument: function(resource) {
		if (!Presenter.parser) {
			Presenter.parser = new DOMParser();
		}
		var doc = Presenter.parser.parseFromString(resource, "application/xml");
		return doc;
	},

	modalDialogPresenter: function(xml) {
		navigationDocument.presentModal(xml);
	},

	pushDocument: function(xml) {
		navigationDocument.pushDocument(xml);
	},

	load: function(event) {
  		var self = this,
      	ele = event.target,
      	videoURL = ele.getAttribute("videoURL");

		var xmlToLoad = ele.getAttribute("jsTemplate");
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
