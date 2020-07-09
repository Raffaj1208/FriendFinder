/* should contain 2 routes
1.GET /api/friends
2.POST /api/friends
Use these to handle compatability logic for friend matchup
*/

let friends = require('../data/friends');

module.exports = function (app) {
    app.get('/api/friends', function(request, response) {
        response.json(friends);
    });
    app.post('/api/friends', function(request, response){
        let yourFriend = {
            name: '',
            photo: '',
        };
        let user = request.body;
        console.log('The current user is: ' + user);

        for () {
            
        }
    });
}