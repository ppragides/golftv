var self;
var Presenter = function(config) {
	this.config = config;
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
		var xmlToLoad = ele.getAttribute("jsTemplate");
		if(videoURL) {
			var player = new Player();
			var playlist = new Playlist();
			var mediaItem = new MediaItem("video", videoURL);
			
			player.playlist = playlist;
			player.playlist.push(mediaItem);
			player.present();
		}

		if (xmlToLoad) {
			resourceLoader.loadResource(this.config.baseURL + `templates/` + xmlToLoad, function(resource) {
				var doc = Presenter.makeDocument(resource);
				// var menuItemDocument = ele.parentNode.getFeature("MenuBarDocument");		
				// menuItemDocument.setDocument(doc, ele)	
				// doc.addEventListener("select", loadAssetDetail.bind(this));
				doc.addEventListener("select", Presenter.load.bind(Presenter));
				Presenter.pushDocument(doc);
			})			
		}		
	}

};
