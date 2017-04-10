/**
 * Created by DragonQueen on 11/28/16.
 */
//Using twitch api to make a web app
//User Stories
  //User Story: I can see whether Free Code Camp is currently streaming on Twitch.tv.
    //User Story: I can click the status output and be sent directly to the Free Code Camp's Twitch.tv channel.
    //User Story: if a Twitch user is currently streaming, I can see additional details about what they are streaming.
    //User Story: I will see a placeholder notification if a streamer has closed their Twitch account (or the account
    // never existed). You can verify this works by adding brunofin and comster404 to your array of Twitch streamers.
    //plan: Bisect screen- one side wil have a primary account, default is FCC teh other will be a feed of whoever
    // you look up
    //Menu will have search box, online, offline, all to toggle view on feed



var usersForFeed = ['FreeCodeCamp'];
var username;
var stat = "";
//wanted the FCC side to load first
$(Document).ready(function () {
$.ajax({
    type: 'GET',
    url: 'https://api.twitch.tv/kraken/channels/'+ usersForFeed[0],
    headers: {
        'Client-ID': 'm3lpab8menh93nhffdqyi7hxdr6ze5r'//twitch changed: client Id needed so I registered my application
    },
    success: function(primeData) {
        console.log();
        $('#primarylist').prepend('<ul/>');
        var primarylist = $('#primarylist ul');
            primelistItem = $('<li/>');
       Primaryinfo = primelistItem.append($('<h1/>').text(((primeData['display_name'])).replace(/\"/g,"")));
        Primaryinfo = primelistItem.append("<img class='thumbnail' src=" + JSON.stringify(primeData.logo) +'/>');
        Primaryinfo = primelistItem.append($('<h3/>').text(((primeData['status'])).replace(/\"/g,"")));
        primarylist.append(Primaryinfo);

    }
});});

function userarray() {

    username = $('#aditionalUsers').val();
   var  Twitch_url = 'https://api.twitch.tv/kraken/channels/' + username;

        $.ajax({
            type: 'GET',
            url: 'https://api.twitch.tv/kraken/channels/'+username,
            headers: {
                'Client-ID': 'm3lpab8menh93nhffdqyi7hxdr6ze5r'
            },
            success: function(data) {

                $.ajax({
                    type: 'GET',
                    url: Twitch_url,
                    headers: {
                        'Client-ID': 'm3lpab8menh93nhffdqyi7hxdr6ze5r'
                    },
                    success: function(channel) {
                        stat = "Steaming";
                        if(channel.stream == null){
                           return stat = "Not Streaming"
                        }


                    },});
                makeListofUsers(data);

                console.log(stat);


            },
            error: function (data) {
                $('#list').append('<ul/>');
                var list = $('#list ul');
                listItem = $('<li/>');
                info = listItem.append($('<h1/>').text("Zût Alors! No User By THAT Name!"));
                list.append(info)

            }
        });

    document.getElementById("myform").reset();

}
function makeListofUsers(data) {
    $('#list').append('<ul/>');
    var list = $('#list ul');
    listItem = $('<li/>');
    listItem.append(($('<h1/>').text((data.display_name).replace(/\"/g,""))));
    listItem.append("<img class='thumbnail' src=" + JSON.stringify(data.logo) +'/>');
    listItem.append(($('<h1/>').text('Status:  ' +(data.status).replace(/\"/g,""))));
    listItem.append(($('<h3/>').text('Views:  ' +(data.views))));
    listItem.append(($('<h3/>').text('Folowers:  ' +(data.followers))));
    listItem.append($('<a />').attr('href', "http://www.twitch.tv/" +
         JSON.stringify(data.display_name)).text('Streaming Status:' + stat));
    list.append(listItem);
    $('#userlist').val((list).slice(1).remove());
    }


function checkStreaming() {
   }



