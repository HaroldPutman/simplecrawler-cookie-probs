var Crawler = require("simplecrawler");

var crawler = new Crawler("https://httpbin.org/cookies");

crawler.on("fetchcomplete", function (queueItem, responseBuffer, response) {
    console.log("Fetched", queueItem.url, responseBuffer.toString());
});

crawler.cookies.addFromHeaders([
    "Set-Cookie: name1=value1; Domain=httpbin.org",
		"Set-Cookie: name2=value2; Path=/; Domain=httpbin.org",
    "Set-Cookie: never=scene; Domain=never.com; HttpOnly",
    "name3=value3"
]);

crawler.start();
