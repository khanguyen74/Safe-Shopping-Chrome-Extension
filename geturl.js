let serverLocationDom = document.getElementById('server-location');
let organizationDom = document.getElementById('organization');

onload = function(){

    // chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {

    //     // since only one tab should be active and in the current window at once
    //     // the return variable should only have one entry
    //     var activeTab = tabs[0];
    //     var activeTabId = activeTab.id; // or do whatever you need
    //     var url = activeTabId.url;
    //     input.value = url
    //  });
    chrome.tabs.query({active: true, lastFocusedWindow: true}, tabs => {
        let url = tabs[0].url;
        console.log(url);

        var domain = (new URL(url));

        domain.hostname.replace('www.','');

        fetch(`http://localhost:8080/api/shop/${domain.hostname}`)
            .then(r => r.json()).then(result => {
                console.log(result)
                
                let whoRecord = result['WhoisRecord']
                let organization = whoRecord['registrant'].organization
                if (whoRecord && organization){
                    var siteInfoDom = document.getElementById('site-info').style.visibility = "visible";
                }
                console.log(organization);
                let serverLocation = whoRecord['registrant'].country
                organizationDom.innerHTML = organization
                serverLocationDom.innerHTML = serverLocation
            })
        // use `url` here inside the callback because it's asynchronous!
    });
}