const PRISMIC_API_URL = "https://clack.prismic.io/api";

function getNewsItemsFromPrismic(callback) {
    // Fire off *async* call to get news and then
    // call callback with processed news items
    Prismic.api(PRISMIC_API_URL, function(error, api) {
        var options = {}; 
        api.query(Prismic.Predicates.at('document.type', 'news-panel'), 
                  options, function(error, response) { 
                      if (error) {
                          console.log("Prismic error: ", err);
                      }
                      else {
                          callback(processPrismicNewsItems(response.results));
                      }
                  });
    });
}

function getOneNewsItemFromPrismic(uid, callback) {
    Prismic.api(PRISMIC_API_URL, function(error, api) {
        var options = {}; 
        api.getByUID('news-panel', uid, options, function(error, result) { 
            if (error) {
                console.log("Prismic error: ", err);
            }
            else {
                const item = processPrismicNewsItems([result])[0];
                callback(item);
            }
        });
    });
}  

function processPrismicNewsItems(items) {
    return items.map( (item) => ({
        title: item.getStructuredText('news-panel.title').asText(),
        uid: item.uid,
        image: item.getImage('news-panel.image').url,
        description: item.getStructuredText('news-panel.description').asText(),
        body: item.getStructuredText('news-panel.body').asHtml(),
    }) );
}

