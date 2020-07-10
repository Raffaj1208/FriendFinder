let friends = require('../data/friends');

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
        let newUser = request.body;
        for (let i = 0; i < friends.length; i++){
            let currentFriend = friends[i];
            let scoreDifference = 0;
        
        for (let j = 0; j < currentFriend.scores.length; j++){
            let friendsScore = currentFriend.scores[j];
            let userScore = newUser.scores[j];
            scoreDifference += Math.abs(userScore - friendsScore);
        }
        if (scoreDifference <= yourFriend.differance){
            yourFriend.name = friendsScore.name;
            yourFriend.photo = friendsScore.photo;
            yourFriend.differance = scoreDifference;
        }
    }
    response.json(yourFriend);
    friends.push(newUser);
    });
};