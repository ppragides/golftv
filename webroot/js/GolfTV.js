var self;
var GolfTV = function(config) {
	this.config = config;
	self = this;
	return self;

};

GolfTV.prototype = {
	constructor: GolfTV,

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