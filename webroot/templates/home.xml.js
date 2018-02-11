var Template = function(GolfTV) { 
    var homeXML = `<?xml version="1.0" encoding="UTF-8" ?>
  <document>
    <stackTemplate> 
      <background>
        <img src="http://local.golf.tv:30080/demo/images/golf_background.jpg" />
      </background>    
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
        <shelf>
            <header>
                <title>2017 Shaw Charity Classic</title>
            </header>
            <section>`;
    homeXML += GolfTV.getSCCXML();
    homeXML += `                                                                                             
            </section>
        </shelf>        
      </collectionList>
    </stackTemplate>
  </document>`;
  return homeXML;
};