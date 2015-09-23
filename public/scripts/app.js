$(document).ready(function(){




});

client_id: 0fadbcbfac86bb4
client_secret: 19efa3191ae3aa6001147f08ed563d532e26f81a

$.ajax({
    url: 'https://jimbojones1.imgur.com/all/',
    headers: {
        'Authorization': '0fadbcbfac86bb4 19efa3191ae3aa6001147f08ed563d532e26f81a'
    },
    type: 'GET',
    data: {
        'image': 'helloworld.jpg'
    },
    success: function() { console.log('cool'); }
});








var jimbo = function test(){
     var userInput = document.getElementById("playlist").value;
      var mysoundcloud = userInput;
      console.log(mysoundcloud);
      return mysoundcloud
};





      var test = $('section')[0];
      SC.initialize({
        client_id: '978e422d49a50b92fa915cac4a56e5be'
      });

      SC.oEmbed(jimbo, {auto_play: true}, test
      );
