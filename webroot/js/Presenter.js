var Presenter = {
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
	},
	loadAssetDetail: function(event) {
		var ele = event.target;
		var assetID = ele.getAttribute("assetID");	

		if (assetID) {
			resourceLoader.loadResource(baseURL + `templates/assetDetail.xml.js`, function(resource) {

				var assetDoc = Presenter.makeDocument(resource);
				assetDoc.addEventListener("select", Presenter.load.bind(Presenter));
				assetDoc.addEventListener("select", loadAssetDetail.bind(Presenter));
				Presenter.pushDocument(assetDoc);
			});
		}		
	}
}