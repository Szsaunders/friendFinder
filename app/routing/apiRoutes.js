// ===============================================================================
// LOAD DATA
// We are linking our routes to a series of "data" sources.
// These data sources hold arrays of information on table-data, waitinglist, etc.
// ===============================================================================

var friendData = require("../data/friends");


// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function(app) {
  // API GET Requests
  // Below code handles when users "visit" a page.
  // In each of the below cases when a user visits a link
  // (ex: localhost:PORT/api/admin... they are shown a JSON of the data in the table)
  // ---------------------------------------------------------------------------
  
  app.get("/api/friends", function(req, res) {
    res.json(friendArray);
  });
  
  
  // API POST Requests
  // Below code handles when a user submits a form and thus submits data to the server.
  // In each of the below cases, when a user submits form data (a JSON object)
  // ...the JSON is pushed to the appropriate JavaScript array
  // (ex. User fills out a reservation request... this data is then sent to the server...
  // Then the server saves the data to the tableData array)
  // ---------------------------------------------------------------------------
  
  app.post("/api/friends", function(req, res) {
    // Note the code here. Our "server" will respond to requests and let users know if they have a table or not.
    // It will do this by sending out the value "true" have a table
    // req.body is available since we're using the body-parser middleware
    // console.log(req)
    // console.log(res)
    // console.log(friendData)
    // var scorekeeper= [100, -1];
    // for (i=0;i<friendData.length;i++) {
    //   var tempScore;
    //   for (k=0;k<10;k++){
    //     tempScore += Math.abs(friendData[i].scores[k] - req.body.scores[k])        
    //   }
    //   if (tempScore < scorekeeper[0]) {
    //     scorekeeper = [tempScore, i]
    //   }
    // }
    // var bestie = scorekeeper[1]
    // res.push(friendData[bestie])
    
    // }
  });
  
  ;
};
