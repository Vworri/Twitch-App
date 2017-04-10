## Synopsis
Freecodecamp project to practice working with the twitch api. This is a more involved program that has me using ajax and
working with sychronicity issues when working with data from an api.
## Code Example
```
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
    }```

This is the money. This code uses the data pulled from the api to create an unordered list that includes various types of
elements (text, img, hyperlinks, etc).
## Motivation
This program was part of the curriculum to get my front end development certificate.
This project tought me to be able to go in, read and understand developer documnetation on websites like Twitch such as
Medium, and implement it in my own code for the client to use.

## Installation

There is no installation needed just run the code and explore.

## Tests

There are no tests

## Contributors

Just Me, Myself and I

## License

MIT
