var self;
var GolfTV = function(config) {
	this.config = config;
	self = this;
	return self;

};

GolfTV.prototype = {
	constructor: GolfTV,

    getNewReleasesXML: function(options) {
        // Build out URL to send request to retrieve 5 newest entries
        var requestURL = this.config.harperDBProtocol + "://" + this.config.harperDBHost + ":" + this.config.harperDBPort;

        // Instantiate new XMLHttpRequest object for sending out our request
        var xmlhttp = new XMLHttpRequest();

        var requestData = {
            "operation": "search_by_value",
            "schema": "golftv_dev",
            "table": "videos",
            "hash_attribute": "id",
            "search_attribute": "name",
            "search_value": "*",
            "get_attributes": "*"
        };

        // Initialize a request to our built URL, making sure to set false as the 3rd parameter to make the request synchronous        
        xmlhttp.open("POST", requestURL, false);

        // Set headers for our request
        xmlhttp.setRequestHeader('Authorization', 'Basic ' + this.getBasicAuthToken());
        xmlhttp.setRequestHeader('Content-Type', 'application/json');

        xmlhttp.send(requestData);

        // Retrieve response text and translate to JSON
        xmlResponse = xmlhttp.responseText;
        var jsonObject = JSON.parse(xmlResponse);    

        var newReleasesXML = "";
        var asset;
        // Iterate through results and build out XML to be returned.
        for (var i = 0; i < jsonObject.length; i++) {

            asset = jsonObject[i];
            
            newReleasesXML += "                <lockup assetID='" + asset.id + "'>\n";
            newReleasesXML += "                  <img src='" + asset.poster_url + "' width='134' height='197' style='border-radius: small;'/> \n";
            newReleasesXML += "                  <title style='font-size: 24px;'>" + asset.title + "</title>\n";
            newReleasesXML += "                </lockup>\n";
        }

        return newReleasesXML;
    },

    getFeaturedBannersXML: function() {
        // Build out URL to send request to retrieve 5 newest entries
        var requestURL = this.config.harperDBProtocol + "://" + this.config.harperDBHost + ":" + this.config.harperDBPort;

        // Instantiate new XMLHttpRequest object for sending out our request
        var xmlhttp = new XMLHttpRequest();

        var requestData = {
            "operation": "search_by_value",
            "schema": "golftv_dev",
            "table": "banners",
            "hash_attribute": "id",
            "search_attribute": "name",
            "search_value": "*",
            "get_attributes": "*"
        };

        xmlhttp.open("POST", requestURL, false);

        // Set headers for our request
        xmlhttp.setRequestHeader('Authorization', 'Basic ' + this.getBasicAuthToken());
        xmlhttp.setRequestHeader('Content-Type', 'application/json');
                
        xmlhttp.send(requestData);

        // Retrieve response text and translate to JSON
        xmlResponse = xmlhttp.responseText;
        var jsonObject = JSON.parse(xmlResponse);    

        var asset;
        for (var i = 0; i < jsonObject.length; i++) {
            asset = jsonObject[i];

            featuredBannersXML += '<lockup assetID="' + asset.id + '">\n';
            featuredBannersXML += "<img src='https://vod.shaw.ca/" + asset.poster_url + "' width='1888' height='590' style='border-radius: medium;' />";
            featuredBannersXML += '</lockup>\n';
        }    
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
    loadAssetDetail: function(assetID) {

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