//KARTIK AGARWAL
/*
        FIXES NEEDED:
        Integration of responses other than sucessful completion and valid usernames.
*/
//KARTIK AGARWAL
// all the dependencies and requirements******************************
var Twitter = require("twitter");
var fs = require("fs");
var express = require("express");
var engines = require("body-parser");
var mongoose = require("mongoose");
//*******************************************************************

// setting up Twitter

// setting up express => *app*
var app = express();

app.set("view engine", "ejs"); //setting app view engine as ejs

// requests on app ****************************************************
app.get("/submit", function(req, res) {
  res.render("index"); // kaa.ejs is the frontend for login/input page

  // using urlencoded bodyparser to parse the frontend body and retrieve info for analysis
  app.use(express.urlencoded());
  app.use(express.json());

  app.post("/submit", function(req, res) {
    // post request to retrieve body data
    r = req.body.kartik;
    console.log(r); // r here contains the username of twitter
  });

  // analysis/result page request
  app.get("/main", function(req, res) {
    var client = new Twitter({
      // CREDENTIALS
      consumer_key: "sTLsKLm41lQLXfmw4Muk3XW7y",
      consumer_secret: <<secret>>,
      access_token_key: <<access token>>,
      access_token_secret: <<access_token_secret>> 
    });
    var params = { screen_name: r };
    //var id = "1";
    client.get(
      "https://api.twitter.com/1.1/favorites/list.json?count=20&screen_name",
      params,
      function(error, res, rr) {
        console.log(res);
      }
    );

    var n = [];

    client.get(
      "https://api.twitter.com/1.1/statuses/user_timeline.json?screen_name&count=20",
      params,
      function(error, tweets, response) {
        if (!error) {
          console.log(tweets);
          console.log("LOCATION:  " + tweets[0].user["location"]);
          console.log("ID:  " + tweets[0].user["id"]);
          console.log("NAME:  " + tweets[0].user["name"]);
          console.log("USERNAME:  " + tweets[0].user["screen_name"]);
          console.log("DESCRIPTION:  " + tweets[0].user["description"]);
          console.log("FOLLOWERS:  " + tweets[0].user["followers_count"]);
          console.log("FRIENDS:  " + tweets[0].user["friends_count"]);
          console.log("CREATED AT:  " + tweets[0].user["created_at"]);
          console.log("FAVOURITES:  " + tweets[0].user["favourites_count"]);
          console.log("TWEETS POSTED:  " + tweets[0].user["statuses_count"]);
          console.log("LISTED COUNTS:  " + tweets[0].user["listed_count"]);
          console.log("PROTECTED A/C:  " + tweets[0].user["protected"]);
          console.log(
            "PROFILE BANNER LINK:  " + tweets[0].user["profile_banner_url"]
          );
          console.log(
            "PROFILE PICTURE LINK:  " +
              tweets[0].user["profile_image_url_https"]
          );
          n.a = tweets[0].user["followers_count"];
          n.b = tweets[0].user["friends_count"];
          n.c = tweets[0].user["favourites_count"];
          n.d = tweets[0].user["statuses_count"];
          n.e = tweets[0].user["name"];
          n.f = tweets[0].user["location"];
          n.g = tweets[0].user["screen_name"];
          n.h = tweets[0].user["description"];
          n.i = tweets[0].user["created_at"];
          n.j = tweets[0].user["listed_count"];
          n.k = tweets[0].user["protected"];
          n.l = tweets[0].user["profile_banner_url"];
          n.m = tweets[0].user["profile_image_url_https"];
          n.o =
            tweets[0].user["followers_count"] / tweets[0].user["friends_count"];
        } else {
          res.render("protected");
        }
        console.log(n);

        var dd = [];
        client.get(
          "https://api.twitter.com/1.1/statuses/user_timeline.json?screen_name",
          params,
          function(error, tweetss, response) {
            if (!error) {
              // console.log(tweetss);
              if (tweetss[0] != null) {
                temp1 = tweetss[0];
                n.p = temp1["text"];
              }
              if (tweetss[1] != null) {
                temp1 = tweetss[1];
                n.q = temp1["text"];
              }
              if (tweetss[2] != null) {
                temp1 = tweetss[2];
                n.r = temp1["text"];
              }
              if (tweetss[3] != null) {
                temp1 = tweetss[3];
                n.s = temp1["text"];
              }
              if (tweetss[4] != null) {
                temp1 = tweetss[4];
                n.t = temp1["text"];
              }
              if (tweetss[5] != null) {
                temp1 = tweetss[5];
                n.u = temp1["text"];
              }
              if (tweetss[6] != null) {
                temp1 = tweetss[6];
                n.v = temp1["text"];
              }
              if (tweetss[7] != null) {
                temp1 = tweetss[7];
                n.w = temp1["text"];
              }
            }
            
            n.x = rat;
            if (n.k == true) {
              res.render("protected");
            }
            if (n.k == false) {
              var na = n;
              console.log(na.a);
              console.log(na.w);
              res.render("main", { name: na }); // main.ejs contains frontend for results
            }
          }
        );
      }
    );
  });
});

// client.get('https://api.twitter.com/1.1/search/tweets.json',paramss,function(error,tweets,response){
//  if(!error)
//  {
//    var d = JSON.stringify(tweets);
//    fs.writeFile("temppppp.json", d, (err) => {
//   if (err) console.log(err);
//   //console.log("Successfully Written to File.");
// });
//    //console.log(tweets.statuses[1].text);
//    for(let i = 1; i < (tweets.statuses).length;i++)
//    {
//    //console.log(tweets.statuses[i].user["description"]);
//    //console.log("************************************************")
//    }

//  }

// });
/*  
  app.get('/', function(req,res){
    for(var e=0;e<10;e++)
    {
    res.send(dd[e]);
    res.send('--------------------------------------');
    }
  
});*/

console.log("YOUR APP IS RUNNING ON PORT 3k");
app.listen(process.env.PORT || 3000);
