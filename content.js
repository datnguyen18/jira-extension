console.log(window.location.href )
let currentURL = window.location.href
if(!currentURL.includes("oldIssueView")){
    location.href = window.location.href + "?oldIssueView=true"
}
