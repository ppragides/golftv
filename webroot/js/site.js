var self;
var Site = function() {
	self = this;
	return self;

};

Site.prototype = {
    constructor: Site,

    getVideos: function() {
        // Build out URL to send request to retrieve 5 newest entries
        var requestURL = "http://localhost:9925";

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
        xmlhttp.setRequestHeader('Authorization', 'Basic SERCX0FETUlOOnBvbnRpMTAx');
        xmlhttp.setRequestHeader('Content-Type', 'application/json');
                
        xmlhttp.send(JSON.stringify(requestData));

        // Retrieve response text and translate to JSON
        xmlResponse = xmlhttp.responseText;
        var jsonObject = JSON.parse(xmlResponse);    

        var asset;
        var featuredBannersXML = "";
        for (var i = 0; i < jsonObject.length; i++) {
            asset = jsonObject[i];

            featuredBannersXML += '<lockup assetID="' + asset.id + '">\n';
            featuredBannersXML += "<img src='" + asset.poster_url + "' width='1888' height='590' style='border-radius: medium;' />";
            featuredBannersXML += '</lockup>\n';
        }    
        return featuredBannersXML;        
    }
};