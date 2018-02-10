var Template = function() { 
    var homeXML = `<?xml version="1.0" encoding="UTF-8" ?>
  <document>
    <stackTemplate> 
      <banner>
        <heroImg src="http://local.golf.tv:30080/demo/images/golftv.png" width="360" height="66" />
      </banner>   
      <collectionList>
        <shelf>
            <section>
                <lockup assetID="1" jsTemplate="assetDetail.xml.js">
                    <img src='http://local.golf.tv:30080/demo/images/featured_banner_1.jpg' width='1888' height='590' style='border-radius: medium;' />            
                </lockup>
                <lockup assetID="2" jsTemplate="assetDetail.xml.js">
                    <img src='http://local.golf.tv:30080/demo/images/featured_banner_2.jpg' width='1888' height='590' style='border-radius: medium;' />            
                </lockup>
                <lockup assetID="3" jsTemplate="assetDetail.xml.js">
                    <img src='http://local.golf.tv:30080/demo/images/featured_banner_3.jpg' width='1888' height='590' style='border-radius: medium;' />            
                </lockup>                                
            </section>                                        
        </shelf>
        <shelf>
            <header>
                <title>New Releases</title>
            </header>
            <section>
                <lockup assetID="1" jsTemplate="assetDetail.xml.js">
                    <img src='http://local.golf.tv:30080/demo/images/chris_swing.jpg' width='190' height='280' style='border-radius: medium;' />            
                </lockup>
                <lockup assetID="2" jsTemplate="assetDetail.xml.js">
                    <img src='http://local.golf.tv:30080/demo/images/paolo_swing.jpg' width='190' height='280' style='border-radius: medium;' />            
                </lockup>                                                                                               
            </section>
        </shelf>
      </collectionList>
    </stackTemplate>
  </document>`;
  return homeXML;
};