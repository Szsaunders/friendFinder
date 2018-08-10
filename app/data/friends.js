// ===============================================================================
// DATA
// Below data will hold all of the stock friends
// No, I'm not sure why they're all bears either
// ===============================================================================

var friendArray = [
  {
    name: "Smokey",
    photo: "https://cdn3.volusion.com/xmsph.easqh/v/vspfiles/photos/177532-2.jpg",
    scores: [
      5,
      1,
      4,
      4,
      5,
      1,
      2,
      2,
      5,
      2
    ]
  },

  {
    name: "Yogi",
    photo: "https://www.lazyriverny.com//wp-content/uploads/sites/8/2017/05/0-yogi-1.jpg",
    scores: [
      5,
      5,
      2,
      1,
      5,
      1,
      2,
      2,
      5,
      2
    ]
  },
  {
    name: "Fozzie",
    photo: "https://upload.wikimedia.org/wikipedia/en/thumb/5/51/Fozzie_Bear.jpg/220px-Fozzie_Bear.jpg",
    scores: [
      2,
      5,
      2,
      1,
      5,
      5,
      2,
      2,
      5,
      2
    ]
  }


];

// Note how we export the array. This makes it accessible to other files using require.
module.exports = friendArray;
