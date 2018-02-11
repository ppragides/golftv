var Template = function(GolfTV) { 

    var assetDetails = GolfTV.loadAssetDetail();
    
return `<?xml version="1.0" encoding="UTF-8" ?>
  <document>
    <productTemplate>
      <banner> 
        <infoList>
            <info>
                <header>
                    <title>Director</title>
                </header>
                <text>Paolo Pragides</text>
            </info>
            <info>
                <header>
                    <title>Cast</title>
                </header>
                <text>Paolo Pragides</text>
            </info>            
        </infoList>
        <stack>
            <title>Swing Analysis</title>
            <description>An analysis of Paolo's Golf Swing.</description>
            <row>
               <buttonLockup videoURL="http://local.golf.tv:30080/demo/videos/Paolo_Swing.m4v">
                  <badge src="resource://button-preview" />
                  <title>Preview</title>
               </buttonLockup>
               <buttonLockup type="buy">
                  <text>$9.99</text>
                  <title>Rent HD</title>
               </buttonLockup>
            </row>
        </stack>
        <heroImg src="http://local.golf.tv:30080/demo/images/paolo_swing.jpg" />
      </banner>
      <shelf>
        <header>
            <title>More like this</title>
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
    </productTemplate>
  </document>`;
}