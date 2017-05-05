
function searchProvider(name, baseUrl, icon) {
    this.name = name;
    this.baseUrl = baseUrl;
}

const searchProviders = {
    duckduckgo: new searchProvider('DuckDuckGo', 'https://duckduckgo.com/?q='),
    google: new searchProvider('Google', 'https://www.google.com/search?q='),
    bing: new searchProvider('Bing', 'https://www.bing.com/search?q='),
    wikipedia: new searchProvider('WikiPedia', 'https://wikipedia.org/w/index.php?search=')
}


background = function () {
    browser.contextMenus.removeAll();

    if (localStorage['use_default_provider'] === 'true') {
        let providerName = localStorage['provider'];
        if (!providerName)
            providerName = 'duckduckgo';

        let provider = searchProviders[providerName];
        browser.contextMenus.create({
            title: 'Search ' + provider.name + ' for "%s"',
            contexts: ["selection"],
            onclick: function (info) {
                var queryText = info.selectionText;
                browser.tabs.create({
                    url: provider.baseUrl + queryText
                });
            },
        });
    }
    else {
        var id = browser.contextMenus.create({
            title: 'Search for "%s"',
            contexts: ["selection"],
        });

        Object.keys(searchProviders).forEach(function (key, index) {
            let provider = this[key];
            browser.contextMenus.create({
                title: 'Using ' + provider.name,
                contexts: ["selection"],
                parentId: id,
                onclick: function (info) {
                    var queryText = info.selectionText;
                    browser.tabs.create({
                        url: provider.baseUrl + queryText
                    });
                }
            });

        }, searchProviders);
    }
}

background();

browser.runtime.onMessage.addListener(function(message){
    if(message.options)
        background();
});
