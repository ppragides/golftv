var resourceLoader;
var baseURL;
var GolfTV;
var Presenter;

App.onLaunch = function(options) {
	var javascriptFiles = [
	 `${options.BASEURL}js/ResourceLoader.js`,
     `${options.BASEURL}js/GolfTV.js`,
	 `${options.BASEURL}js/Presenter.js`
	];

	baseURL = options.BASEURL;
    // Make sure we're able to load all of the required resources before proceeding
	evaluateScripts(javascriptFiles, function(success) {
		if(success) {
            GolfTV = new GolfTV();            
            Presenter = new Presenter();
			resourceLoader = new ResourceLoader(options.BASEURL);
			resourceLoader.loadResource(`${options.BASEURL}templates/menubar.xml.js`, function(resource) {
				var doc = Presenter.makeDocument(resource);
				// doc.addEventListener("select", loadMenu.bind(Presenter));
				Presenter.pushDocument(doc);
			})
		} else {
			var errorDoc = createAlert("Evaluate Scripts Error", "Error attempting to evaluate external JavaScript files.");
			navigationDocument.presentModal(errorDoc);
		}
	});
};

var loadMenu = function(event) {
	var ele = event.target;
	var jsXML = ele.getAttribute("jsTemplate");

	if (jsXML) {
		resourceLoader.loadResource(baseURL + `templates/` + jsXML, function(resource) {
			var doc = Presenter.makeDocument(resource);
			var menuItemDocument = ele.parentNode.getFeature("MenuBarDocument");		
			menuItemDocument.setDocument(doc, ele)	
			doc.addEventListener("select", Presenter.load.bind(Presenter));
			Presenter.pushDocument(doc);
		})			
	}
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