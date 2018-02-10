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
        var requestURL = this.config.harperDBProtocol + "://" + this.config.harperDBHost + ":" + this.config.harperDBPort + this.config.harperDBPath;

        // Instantiate new XMLHttpRequest object for sending out our request
        var xmlhttp = new XMLHttpRequest();
        xmlhttp.open("GET", requestURL, false);
        xmlhttp.send(null);

        // Retrieve response text and translate to JSON
        xmlResponse = xmlhttp.responseText;
        var jsonObject = JSON.parse(xmlResponse);    

        var newReleasesXML = "";
        var asset;
        // Iterate through results and build out XML to be returned.
        for (var i = 0; i < 10; i++) {

            asset = jsonObject.assets[i];
            
            newReleasesXML += "                <lockup assetID='" + asset.id + "'>\n";
            newReleasesXML += "                  <img src='https://vod.shaw.ca/v2/art/" + asset.id + "/" + asset.images.poster + "/width:134' width='134' height='197' style='border-radius: small;'/> \n";
            newReleasesXML += "                  <title style='font-size: 24px;'>" + asset.name + "</title>\n";
            newReleasesXML += "                </lockup>\n";
        }

        return newReleasesXML;
    },

    getFeaturedBannersXML: function() {
        // Build out URL to send request to retrieve 5 newest entries
        var requestURL = this.config.harperDBProtocol + "://" + this.config.harperDBHost + ":" + this.config.harperDBPort + this.config.harperDBPath;

        // Instantiate new XMLHttpRequest object for sending out our request
        var xmlhttp = new XMLHttpRequest();
        xmlhttp.open("GET", requestURL, false);
        xmlhttp.send(null);

        // Retrieve response text and translate to JSON
        xmlResponse = xmlhttp.responseText;
        var jsonObject = JSON.parse(xmlResponse);    

        var asset;
        for (var i = 0; i < jsonObject.heroes.length; i++) {
            asset = jsonObject.heroes[i];

            featuredBannersXML += '<lockup assetID="">\n';
            featuredBannersXML += "<img src='https://vod.shaw.ca/" + asset.images.web.large + "' width='1888' height='590' style='border-radius: medium;' />";
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
    loadAsset: function(assetID) {

    },
    /**
     * 
     * Function that retrieves the four newest entries from HarperDB
     * 
     */
    getNewReleases: function() {

    }
};