var self;
var GolfTV = function(config) {
	this.config = config;
	self = this;
	return self;

};

GolfTV.prototype = {
	constructor: GolfTV,
    getSimilarVideos: function(fk_category) {
        // Build out URL to send request to retrieve new releases
        var requestURL = this.config.harperDBProtocol + "://" + this.config.harperDBHost + ":" + this.config.harperDBPort;

        // Instantiate new XMLHttpRequest object for sending out our request
        var xmlhttp = new XMLHttpRequest();
        // Convert the category ID into a string
        fk_category = fk_category.toString();

        var requestData = {
            "operation": "search_by_value",
            "schema": "golftv_dev",
            "table": "videos",
            "hash_attribute": "id",
            "search_attribute": "fk_category",
            "search_value": fk_category,
            "get_attributes": "*"
        };

        // Initialize a request to our built URL, making sure to set false as the 3rd parameter to make the request synchronous        
        xmlhttp.open("POST", requestURL, false);

        // Set headers for our request
        xmlhttp.setRequestHeader('Authorization', 'Basic ' + this.getBasicAuthToken());
        xmlhttp.setRequestHeader('Content-Type', 'application/json');

        xmlhttp.send(JSON.stringify(requestData));

        // Retrieve response text and translate to JSON
        xmlResponse = xmlhttp.responseText;
        var jsonObject = JSON.parse(xmlResponse);    

        var similarVideosXML = "";
        var asset;
        // Iterate through results and build out XML to be returned.
        for (var i = 0; i < jsonObject.length; i++) {

            asset = jsonObject[i];
            
            similarVideosXML += "                <lockup assetID='" + asset.id + "'>\n";
            similarVideosXML += "                  <img src='" + asset.poster_url + "' width='134' height='197' style='border-radius: small;' /> \n";
            similarVideosXML += "                  <title style='font-size: 24px;'>" + asset.title + "</title>\n";
            similarVideosXML += "                </lockup>\n";
        }

        return similarVideosXML;
    },    

    getSCCXML: function() {
        // Build out URL to send request to retrieve new releases
        var requestURL = this.config.harperDBProtocol + "://" + this.config.harperDBHost + ":" + this.config.harperDBPort;

        // Instantiate new XMLHttpRequest object for sending out our request
        var xmlhttp = new XMLHttpRequest();

        var requestData = {
            "operation": "search_by_value",
            "schema": "golftv_dev",
            "table": "videos",
            "hash_attribute": "id",
            "search_attribute": "fk_category",
            "search_value": "4",
            "get_attributes": "*"
        };

        // Initialize a request to our built URL, making sure to set false as the 3rd parameter to make the request synchronous        
        xmlhttp.open("POST", requestURL, false);

        // Set headers for our request
        xmlhttp.setRequestHeader('Authorization', 'Basic ' + this.getBasicAuthToken());
        xmlhttp.setRequestHeader('Content-Type', 'application/json');

        xmlhttp.send(JSON.stringify(requestData));

        // Retrieve response text and translate to JSON
        xmlResponse = xmlhttp.responseText;
        var jsonObject = JSON.parse(xmlResponse);    

        var sccXML = "";
        var asset;
        // Iterate through results and build out XML to be returned.
        for (var i = 0; i < jsonObject.length; i++) {

            asset = jsonObject[i];
            
            sccXML += "                <lockup assetID='" + asset.id + "'>\n";
            sccXML += "                  <img src='" + asset.poster_url + "' width='134' height='197' style='border-radius: small;' /> \n";
            sccXML += "                  <title style='font-size: 24px;'>" + asset.title + "</title>\n";
            sccXML += "                </lockup>\n";
        }

        return sccXML;
    },    

    getNewReleasesXML: function() {
        // Build out URL to send request to retrieve new releases
        var requestURL = this.config.harperDBProtocol + "://" + this.config.harperDBHost + ":" + this.config.harperDBPort;

        // Instantiate new XMLHttpRequest object for sending out our request
        var xmlhttp = new XMLHttpRequest();

        var requestData = {
            "operation": "search_by_value",
            "schema": "golftv_dev",
            "table": "videos",
            "hash_attribute": "id",
            "search_attribute": "id",
            "search_value": "*",
            "get_attributes": "*"
        };

        // Initialize a request to our built URL, making sure to set false as the 3rd parameter to make the request synchronous        
        xmlhttp.open("POST", requestURL, false);

        // Set headers for our request
        xmlhttp.setRequestHeader('Authorization', 'Basic ' + this.getBasicAuthToken());
        xmlhttp.setRequestHeader('Content-Type', 'application/json');

        xmlhttp.send(JSON.stringify(requestData));

        // Retrieve response text and translate to JSON
        xmlResponse = xmlhttp.responseText;
        var jsonObject = JSON.parse(xmlResponse);    

        var newReleasesXML = "";
        var asset;
        // Iterate through results and build out XML to be returned.
        for (var i = 0; i < jsonObject.length; i++) {

            asset = jsonObject[i];
            
            newReleasesXML += "                <lockup assetID='" + asset.id + "'>\n";
            newReleasesXML += "                  <img src='" + asset.poster_url + "' width='134' height='197' style='border-radius: small;' /> \n";
            newReleasesXML += "                  <title style='font-size: 24px;'>" + asset.title + "</title>\n";
            newReleasesXML += "                </lockup>\n";
        }

        return newReleasesXML;
    },

    getFeaturedBannersXML: function() {
        // Build out URL to send request to featured banners
        var requestURL = this.config.harperDBProtocol + "://" + this.config.harperDBHost + ":" + this.config.harperDBPort;

        // Instantiate new XMLHttpRequest object for sending out our request
        var xmlhttp = new XMLHttpRequest();

        var requestData = {
            "operation": "search_by_value",
            "schema": "golftv_dev",
            "table": "banners",
            "hash_attribute": "id",
            "search_attribute": "id",
            "search_value": "*",
            "get_attributes": "*"
        };

        xmlhttp.open("POST", requestURL, false);

        // Set headers for our request
        xmlhttp.setRequestHeader('Authorization', 'Basic ' + this.getBasicAuthToken());
        xmlhttp.setRequestHeader('Content-Type', 'application/json');
                
        xmlhttp.send(JSON.stringify(requestData));

        // Retrieve response text and translate to JSON
        xmlResponse = xmlhttp.responseText;
        var jsonObject = JSON.parse(xmlResponse);    

        var asset;
        var featuredBannersXML = "";
        for (var i = 0; i < jsonObject.length; i++) {
            asset = jsonObject[i];

            featuredBannersXML += '<lockup assetID="' + asset.video_id + '">\n';
            featuredBannersXML += "<img src='" + asset.poster_url + "' width='1888' height='590' style='border-radius: medium;' />";
            featuredBannersXML += '</lockup>\n';
        }    
        return featuredBannersXML;
    },
    /**
     * 
     * Function that displays XML based on an asset ID pulled in from HarperDB
     * 
     * If found, the asset will have the following attributes for us to display:
     *   - assetID
     *   - assetTitle
     *   - assetPoster
     *   - assetVideo
     *   - presenterName
     *   - category
     * 
     */
    loadAssetDetail: function(event) {

        // Grab event variables
        var ele = event.target,
      	assetID = ele.getAttribute("assetID");        
        // Build out URL to send request to featured banners
        var requestURL = GolfTV.config.harperDBProtocol + "://" + GolfTV.config.harperDBHost + ":" + GolfTV.config.harperDBPort;

        // Instantiate new XMLHttpRequest object for sending out our request
        var xmlhttp = new XMLHttpRequest();

        var requestData = {
            "operation": "search_by_value",
            "schema": "golftv_dev",
            "table": "videos",
            "hash_attribute": "id",
            "search_attribute": "id",
            "search_value": assetID,
            "get_attributes": "*"
        };

        xmlhttp.open("POST", requestURL, false);

        // Set headers for our request
        xmlhttp.setRequestHeader('Authorization', 'Basic ' + GolfTV.getBasicAuthToken());
        xmlhttp.setRequestHeader('Content-Type', 'application/json');
                
        xmlhttp.send(JSON.stringify(requestData));

        // Retrieve response text and translate to JSON
        xmlResponse = xmlhttp.responseText;
        var jsonObject = JSON.parse(xmlResponse);
        var assetObject = jsonObject[0];

        var returnXML = `<?xml version="1.0" encoding="UTF-8" ?>
        <document>
            <productTemplate> 
            <background>
                <img src="http://local.golf.tv:30080/demo/images/golf_background.jpg" />
            </background> 
            <banner> 
                <infoList>
                    <info>
                        <header>
                            <title>Director</title>
                        </header>
                        <text>` + assetObject.director + `</text>
                    </info>
                    <info>
                        <header>
                            <title>Cast</title>
                        </header>
                        <text>` + assetObject.golfer + `</text>
                    </info>            
                </infoList>
                <stack>
                    <title>` + assetObject.title + `</title>
                    <description>` + assetObject.description + `</description>
                    <row>
                    <buttonLockup videoURL="` + assetObject.video_url + `">
                        <badge src="resource://button-preview" />
                        <title>Watch</title>
                    </buttonLockup>
                    </row>
                </stack>
                <heroImg src="` + assetObject.poster_url + `" />
            </banner>
            <shelf>
                <header>
                    <title>More like this</title>
                </header>
                <section>`;
        returnXML += GolfTV.getSimilarVideos(assetObject.fk_category);
        returnXML += `</section>
            </shelf>
            </productTemplate>
        </document>`;        

  		var assetDoc = Presenter.makeDocument(returnXML);
		assetDoc.addEventListener("select", Presenter.load.bind(Presenter));
		assetDoc.addEventListener("select", GolfTV.loadAssetDetail.bind(Presenter));
		Presenter.pushDocument(assetDoc);
    },
    /**
     * 
     * Function that returns the base64 encoded user:pass token
     * 
     */
    getBasicAuthToken: function() {
        return this.config.harperDBToken;
    }
};