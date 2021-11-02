let testStorage = localStorage.getItem('openSite')
if(testStorage == null) {
    localStorage.setItem("openSite", "http://localhost:3000?url=https://google.com")
}

let newItem = document.createElement("iframe")
newItem.src = localStorage.getItem("openSite")
newItem.style.border = "0px solid white"
newItem.style.position = "absolute"
newItem.style.left = "0%"
newItem.style.top = "0%"
newItem.style.width = "100%"
newItem.style.height = "100%"
document.body.appendChild(newItem)

let currentAmount = newItem.location

setInterval(function(){ 
    console.log("Intervalts")
    if(newItem.location !== currentAmount) {
        console.log("Changed")
        localStorage.clear()
        localStorage.setItem('openSite', "http://localhost:3000?url="+newItem.location)
        location.reload()
    }
}, 100);

//<iframe src="http://localhost:3000/?url=https://google.com/" title="ServerClone" style="border: 0px solid white; position: absolute; width: 100%; height: 100%; top: 0%; left: 0%;">