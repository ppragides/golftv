var resourceLoader;
var baseURL;
var GolfTV;

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
			resourceLoader = new ResourceLoader(options.BASEURL);
			resourceLoader.loadResource(`${options.BASEURL}templates/menubar.xml.js`, function(resource) {
				var doc = Presenter.makeDocument(resource);
				doc.addEventListener("select", loadMenu.bind(Presenter));
				Presenter.pushDocument(doc);
			})
		} else {
			var errorDoc = GolfTV.createAlert("Evaluate Scripts Error", "Error attempting to evaluate external JavaScript files.");
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
			doc.addEventListener("select", loadAssetDetail.bind(Presenter));
			doc.addEventListener("select", Presenter.load.bind(Presenter));
			Presenter.pushDocument(doc);
		})			
	}
};


var loadAssetDetail = function(event) {

	var ele = event.target;
	var assetID = ele.getAttribute("assetID");	

	if (assetID) {

    var jsonObject = getAssetJSON(assetID);
    
	var returnXML = `<?xml version="1.0" encoding="UTF-8" ?>
  <document>
    <productTemplate> 
      <background>
        <img src="http://wifisignon.labs.shaw.ca/img/background.jpg" />
      </background>
      <banner> 
        <infoList>
            <info>
                <header>
                    <title>Director</title>
                </header>`+
            getAssetDirectors(jsonObject)                
            + `</info>
            <info>
                <header>
                    <title>Cast</title>
                </header>` +
            getAssetActors(jsonObject)
            + `</info>            
        </infoList>
        <stack>
            <title>`+ jsonObject.name + `</title>
            <description>` +  jsonObject.description + `</description>
            <row>
               <buttonLockup videoURL="http://www.sample-videos.com/video/mp4/720/big_buck_bunny_720p_1mb.mp4">
                  <badge src="resource://button-preview" />
                  <title>Preview</title>
               </buttonLockup>
               <buttonLockup type="buy">
                  <text>$9.99</text>
                  <title>Rent HD</title>
               </buttonLockup>
            </row>
        </stack>
        <heroImg src="https://vod.shaw.ca/v2/art/` + jsonObject.id + `/` + jsonObject.images.poster + `/width:190/" />
      </banner>
      <shelf>
        <header>
            <title>More like this</title>
        </header>
        <section>
            <lockup assetID="399077">
                <img src="https://vod.shaw.ca/v2/art/399077/399077_3550858_1_1.jpg/width:190/" width="190" height="250"/>
                <title>American Made</title>
            </lockup>
            <lockup assetID="398829">
                <img src="https://vod.shaw.ca/v2/art/398829/398829_3547543_1_1.jpg/width:190/" width="190" height="250"/>
                <title>The Mountain Between Us</title>
            </lockup>
            <lockup assetID="398830">
                <img src="https://vod.shaw.ca/v2/art/398830/398830_3547559_1_1.jpg/width:190/" width="190" height="250"/>
                <title>Jeepers Creepers III</title>
            </lockup>
            <lockup assetID="399091">
                <img src="https://vod.shaw.ca/v2/art/399091/399091_3550998_1_1.jpg/width:190/" width="190" height="250"/>
                <title>Killing of a Sacred Deer</title>
            </lockup>
            <lockup assetID="398827">
                <img src="https://vod.shaw.ca/v2/art/398827/398827_3547523_1_1.jpg/width:190/" width="190" height="250"/>
                <title>Dunkirk</title>
            </lockup>                                                
        </section>
      </shelf>
    </productTemplate>
  </document>`;

  		var assetDoc = Presenter.makeDocument(returnXML);
		assetDoc.addEventListener("select", Presenter.load.bind(Presenter));
		assetDoc.addEventListener("select", loadAssetDetail.bind(Presenter));
		Presenter.pushDocument(assetDoc);
	}
}


var getAssetJSON = function(assetID) {
    var jsonURL = "https://vod.shaw.ca/adapter/content/asset/" + assetID;

    var xmlhttp = new XMLHttpRequest();
    xmlhttp.open("GET", jsonURL, false);
    xmlhttp.send(null);
    xmlResponse = xmlhttp.responseText;
    var jsonObject = JSON.parse(xmlResponse);      

    return jsonObject;  
};

var getAssetDirectors = function(jsonObject) {
    var directorXML = "";

    for (var i = 0; i < jsonObject.directors.length; i++) {
        directorXML += "\n                <text>" + jsonObject.directors[i].name + "</text>";
    }

    return directorXML;
};

var getAssetActors = function(jsonObject) {
    var actorXML = "";

    for (var i = 0; i < jsonObject.actors.length; i++) {
        actorXML += "\n                <text>" + jsonObject.actors[i].name + "</text>";
    }

    return actorXML;
};