var friendArr = require('../data/list.js');

module.exports = function(app) {
    app.get('/api/friends', function(req, res) {
        res.json(friendArr);
    });

    app.post('/api/friends', function(req, res) {
        var newFriendScores = req.body.scores;
        var scoresArr = [];
        var friendCount = 0;
        var match = 0;

        for (var i = 0; i < friendArr.length; i++) {
            var scoresDiff = 0;

            for(var f = 0; f < newFriendScores.length; f++) {
                scoresDiff += (Math.abs(parseInt(friendArr[i].scores[f]) - parseInt(newFriendScores[j])));
            }
            
            scoresArr.push(scoresDiff);
        }

        for(var i = 0; i < scoresarr.length; i++) {
            if(scoresArr[i] <= scoresArr[match]) {
                match = i;
            }
        }

        var userMatch = friendList[match];
        res.json(userMatch);

        friendArr.push(req.body);
    });
};