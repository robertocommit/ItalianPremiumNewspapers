var injectScript = `
  document.getElementsByTagName(
    "news-app"
  )[0].shadowRoot.querySelector(
    "iron-pages"
  ).querySelector(
    "news-article"
  ).shadowRoot.querySelector(
    "div > div > amp-viewer > div"
  ).shadowRoot.querySelector(
    "body > main > article"
  ).querySelectorAll(
    ".detail-article_container"
  )[2].querySelector(
    "div > .paywall"
  ).innerText.split('{"')[0];
`

document.addEventListener('DOMContentLoaded', function() {
  var checkPageButton = document.getElementById('readPage');
  checkPageButton.addEventListener('click', function() {
    chrome.tabs.getSelected(null, function(tab) {
      chrome.tabs.executeScript({
        code: injectScript,
      }, receiveText);
    });
  }, false);
}, false);

function receiveText(resultsArray){
  document.body.style.fontSize = "x-large";
  document.body.innerHTML = resultsArray[0];
}
