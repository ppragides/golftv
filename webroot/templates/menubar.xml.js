var Template = function() { 
    var menuBar = `<?xml version="1.0" encoding="UTF-8" ?>
  <document>
    <menuBarTemplate>
        <menuBar>
            <menuItem jsTemplate="home.xml.js">
                <title>New Releases</title>
            </menuItem>      
            <menuItem jsTemplate="instruction.xml.js">
                <title>Instructional Videos</title>
            </menuItem>
            <menuItem jsTemplate="driving.xml.js">
                <title>Driving</title>
            </menuItem>
            <menuItem jsTemplate="putting.xml.js">
                <title>Putting</title>
            </menuItem>            
            <menuItem jsTemplate="search.xml.js">
                <title>Search</title>
            </menuItem>
        </menuBar>
    </menuBarTemplate>
  </document>`;
  return menuBar;
}