var Template = function(GolfTV) { 
    var homeXML = `<?xml version="1.0" encoding="UTF-8" ?>
  <document>
    <stackTemplate> 
      <banner>
        <heroImg src="http://local.golf.tv:30080/demo/images/golftv.png" width="360" height="66" />
      </banner>   
      <collectionList>
        <shelf>
            <section>`;
    homeXML += GolfTV.getFeaturedBannersXML();
    homeXML += `                       
            </section>                                        
        </shelf>
        <shelf>
            <header>
                <title>New Releases</title>
            </header>
            <section>`;
    homeXML += GolfTV.getNewReleasesXML();
    homeXML += `                                                                                             
            </section>
        </shelf>
      </collectionList>
    </stackTemplate>
  </document>`;
  return homeXML;
};