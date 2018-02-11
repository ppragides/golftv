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

        var category_id = 4;

        category_id = category_id.toString();

        var requestData = {
            "operation": "search_by_value",
            "schema": "golftv_dev",
            "table": "videos",
            "hash_attribute": "id",
            "search_attribute": "fk_category",
            "search_value": category_id,
            "get_attributes": "*"
        };

        console.log(requestData);

        xmlhttp.open("POST", requestURL, false);

        // Set headers for our request
        xmlhttp.setRequestHeader('Authorization', 'Basic SERCX0FETUlOOnBvbnRpMTAx');
        xmlhttp.setRequestHeader('Content-Type', 'application/json');
                
        xmlhttp.send(JSON.stringify(requestData));

        // Retrieve response text and translate to JSON
        xmlResponse = xmlhttp.responseText;
        var jsonObject = JSON.parse(xmlResponse);    

        var asset;
        var videosHTML = "";
        for (var i = 0; i < jsonObject.length; i++) {
            asset = jsonObject[i];

            videosHTML += '<tr>';
            videosHTML += "<td>" + asset.id + "</td>";
            videosHTML += "<td>" + asset.title + "</td>";
            videosHTML += "<td>" + asset.video_url + "</td>";
            videosHTML += "<td>" + asset.golfer + "</td>";
            videosHTML += '</tr>';
        }    
        return videosHTML;        
    }
};