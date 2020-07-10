/* should contain 2 routes
1.GET /api/friends
2.POST /api/friends
Use these to handle compatability logic for friend matchup
*/

let friends = require('../data/friends');
let path = require('path');

module.exports = function (app) {
    app.get('/api/friends', function(request, response) {
        response.json(friends);
    });
    app.post('/api/friends', function(request, response){
        let yourFriend = {
            name: '',
            photo: '',
            differance: 1000
        };
        let newUser = request.body; console.log('The current user is: ' + user);
        let scoreDifference;
        let friendsScore;
        let userScore;
        for (let i = 0; i < friends.length; i++){
            let currentFriend = friends[i];
            scoreDifference = 0;
        
        for (let j = 0; j < newUser.scores.length; j++){
            friendsScore = currentFriend.scores[j];
            userScore = newUser.scores[j];
            scoreDifference += Math.abs(parseInt(userScore) - parseInt(friendsScore));
        }
        if (scoreDifference <= yourFriend.differance){
            yourFriend.name = currentFriend.name;
            yourFriend.photo = currentFriend.photo;
            yourFriend.differance = scoreDifference;
        }
    }
    response.json(yourFriend);
    friends.push(newUser);
    });
};