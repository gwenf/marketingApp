var clientArray = [{"url":"http://boston.redsox.mlb.com/",
  "status":"Grow your current relationship",
  "image_url":"https://upload.wikimedia.org/wikipedia/en/thumb/0/06/ALE-BOS-Logo.svg/1024px-ALE-BOS-Logo.svg.png"},
{"url":"http://newyork.yankees.mlb.com/",
  "status":"Create a new relationship",
  "image_url":"http://newyork.yankees.mlb.com/mlb/images/team_logos/social_media/og_1200x630_image/nyy_1200x630.jpg"},
{"url":"http://chicago.cubs.mlb.com/",
  "status":"Grow your current relationship",
  "image_url":"http://chicago.cubs.mlb.com/mlb/images/team_logos/social_media/og_1200x630_image/chc_1200x630.jpg"},
{"url":"http://boston.redsox.mlb.com/",
  "status":"Create a new relationship",
  "image_url":"https://upload.wikimedia.org/wikipedia/en/thumb/0/06/ALE-BOS-Logo.svg/1024px-ALE-BOS-Logo.svg.png"},
{"url":"http://chicago.whitesox.mlb.com/",
  "status":"Grow your current relationship",
  "image_url":"https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Chicago_White_Sox.svg/2000px-Chicago_White_Sox.svg.png"},
{"url":"http://atlanta.braves.mlb.com/",
  "status":"Create a new relationship",
  "image_url":"https://upload.wikimedia.org/wikipedia/en/thumb/f/f2/Atlanta_Braves.svg/1280px-Atlanta_Braves.svg.png"},
{"url":"http://toronto.bluejays.mlb.com/",
  "status":"Grow your current relationship",
  "image_url":"http://toronto.bluejays.mlb.com/mlb/images/team_logos/social_media/og_1200x630_image/tor_1200x630.jpg"},
{"url":"http://stlouis.cardinals.mlb.com/",
  "status":"Create a new relationship",
  "image_url":"http://stlouis.cardinals.mlb.com/mlb/images/team_logos/social_media/og_1200x630_image/stl_1200x630.jpg"}]

angular.module('app.directives.customerCards', [])
  .directive('prospectCard', function() {

    return {
      restrict: 'E',
      template: clientArray.filter(function(item){
              return item.status === "Create a new relationship";
          }).map(function(value){
              return '<div class="client-card"><img src="' + value.image_url + '">' +
                '<h3>' + value.status + '</h3>' +
                '<a href="' + value.url + '">Team Website</a></div>'
            })
    }
  })
  .directive('clientCard', function() {
    return {
      restrict: 'E',
      template: clientArray.filter(function(item){
              return item.status === "Grow your current relationship";
          }).map(function(value){
              return '<div class="client-card"><img src="' + value.image_url + '">' +
                '<h3>' + value.status + '</h3>' +
                '<a href="' + value.url + '">Team Website</a></div>'
            })
    }
  })
