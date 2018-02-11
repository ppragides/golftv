var resourceLoader;
var baseURL;
var GolfTV;
var Presenter;

App.onLaunch = function(options) {
	var javascriptFiles = [
	 `${options.BASEURL}js/ResourceLoader.js`,
     `${options.BASEURL}js/GolfTV.js`,
	 `${options.BASEURL}js/Presenter.js`,
	 `${options.BASEURL}js/config.js`
	];

	baseURL = options.BASEURL;
    // Make sure we're able to load all of the required resources before proceeding
	evaluateScripts(javascriptFiles, function(success) {
		if(success) {
            GolfTV = new GolfTV(GolfConfig.golftv);            
            Presenter = new Presenter(GolfConfig.presenter, GolfTV);
			resourceLoader = new ResourceLoader(GolfConfig.resourceLoader, GolfTV);
			resourceLoader.loadResource(`${options.BASEURL}templates/home.xml.js`, function(resource) {
				var doc = Presenter.makeDocument(resource);
				doc.addEventListener("select", Presenter.load.bind(Presenter));
				doc.addEventListener("select", GolfTV.loadAssetDetail.bind(Presenter));
				Presenter.pushDocument(doc);
			})
		} else {
			// Display an error message if any of the scripts couldn't be loaded.
			var errorDoc = createAlert("Evaluate Scripts Error", "Error attempting to evaluate external JavaScript files.");
			navigationDocument.presentModal(errorDoc);
		}
	});
};

var createAlert = function(title, description) {
	var alertString = `<?xml version="1.0" encoding="UTF-8" ?>
		<document>
			<alertTemplate>
				<title>${title}</title>
				<description>${description}</description>
				<button>
					<text>OK</text>
				</button>
			</alertTemplate>
		</document>`
	var parser = new DOMParser();
	var alertDoc = parser.parseFromString(alertString, "application/xml");
	return alertDoc
};