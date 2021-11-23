var url = document.location.href;
//console.log('[afiliatti chrome] '+url);
if(url.search('google.com/search\\?q=') != "-1" || url.search('google.ro/search\\?q=') != "-1") {

    //database
    console.log('[afiliatti chrome] read database');
    chrome.storage.sync.get({
        magazine: ''
      }, function(items) {
        magazine = items.magazine.split(/\n/);

        //console.log('[afiliatti chrome] '+magazine.length+' domains in database');

        //search and mark if is advertiser
        $(document).ready(function() {
            $('#search div.g').each(function() {
                var domeniu = $(this).find('a').attr("href").split('/');
                domeniu = domeniu[2].replace('www.','');

                if(magazine.includes(domeniu)) {
                    $(this).find('h3').prepend('💰');
                    $(this).find('h3').attr("style","color:red");
                }

            });
        });

      });

}
else {
    //console.log('[afiliatti chrome] Nu e pagină de rezultate Google. Ignorăm.');
}