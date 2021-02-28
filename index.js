
let whoisButton = document.getElementById('whois');
let input = document.getElementById('urlInput'); 
let serverLocationDom = document.getElementById('server-location');
let organizationDom = document.getElementById('organization');

whoisButton.onclick = function(element){
    let url = input.value;
    if (url ===""){ 
        alert('Please provide a URL');
        return
    }
    fetch(`http://localhost:8080/api/shop/${url}`)
    .then(r => r.json()).then(result => {
        
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
}
