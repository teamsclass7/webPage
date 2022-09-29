





try {
  fetch(new Request("https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js", { method: 'HEAD', mode: 'no-cors' })).then(function(response) {
    return true;
  }).catch(function(e) {
    var carbonScript = document.createElement("script");
    carbonScript.src = "//cdn.carbonads.com/carbon.js?serve=CK7DKKQU&placement=wwwjqueryscriptnet";
    carbonScript.id = "_carbonads_js";
    document.getElementById("carbon-block").appendChild(carbonScript);
  });
} catch (error) {
  console.log(error);
}






  var _gaq = _gaq || [];
  _gaq.push(['_setAccount', 'UA-36251023-1']);
  _gaq.push(['_setDomainName', 'jqueryscript.net']);
  _gaq.push(['_trackPageview']);

  (function() {
    var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
    ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
    var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
  })();


(function() {

    'use strict';
    
    var $searchView = $('.menu-search-container');
    var $menu = $('.menu-mac, .menu-iPad, .menu-iPhone, .menu-watch, .menu-tv, .menu-support, .menu-search, .menu-store');
    var $fadeScreen = $('.fade-screen');
    
    $('li.menu-search a, .fade-screen, .menu-search-close').on('click', function(e) {
      
      $searchView.toggleClass('active');
      
      setTimeout(function(){
        $searchView.children().find('input').focus();
      }, 1100);
      
      $fadeScreen.toggleClass('visible');
      $menu.removeClass('is-closed');
      $menu.toggleClass('hidden');
      
      e.preventDefault();
    });
    
    $('.fade-screen,.menu-search-close').on('click', function(e) {
      $menu.toggleClass('is-closed');
      e.preventDefault();
    });
      
  }())