//..
var friendsData = require("../data/friends");
//..
calcTotalDifference = function(user, candidate) {
    var totalDiff = 0;
    var userScores = user.scores.map(function (x) {
        return parseInt(x, 10);
    });
    console.log("userScores: ", userScores.join(" "));
  //..
    var candidateScores = candidate.scores.map(function (x) {
        return parseInt(x, 10);
    });
    console.log("candidateScores: ", candidateScores.join(" "));
//..
    for (var i = 0; i < userScores.length; i++) {
        totalDiff += Math.abs(userScores[i] - candidateScores[i]);
    }
    console.log("totalDiff: ", totalDiff);
//..
    return {
        name: candidate.name,
        photo: candidate.photo,
        totalDiff: totalDiff
    };
}

//..
module.exports = function (app) {

    app.get("/api/friends", function (req, res) {
        res.json(friendsData);
    });

    app.post("/api/friends", function (req, res) {
        
        var currentUser = req.body;
        console.log("currentUser: ", currentUser);
        var candidateArray = [];
            for (var i = 0; i < friendsData.length; i++) {
            candidateArray.push(calcTotalDifference(currentUser, friendsData[i]));
        }

        candidateArray.sort(function (a, b) {
        var totalDiff1 = a.totalDiff;
        var totalDiff2 = b.totalDiff;
            if (totalDiff1 < totalDiff2) {
                return -1;
            } else if (totalDiff1 > totalDiff2) {
                return 1;
            }
            return 0;
        });

        for (var i = 0; i < candidateArray.length; i++) {
           console.log(candidateArray[i].name, candidateArray[i].photo, candidateArray[i].totalDiff);
        }
        friendsData.push(currentUser);
        res.json(candidateArray[0]);
        console.log("Most compatible friend: ", candidateArray[0].name, candidateArray[0].photo, candidateArray[0].totalDiff);
    });
};