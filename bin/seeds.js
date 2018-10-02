const mongoose = require("mongoose");
const Property = require("../models/Property");

const dbName = "estate-rental-manager";
mongoose.connect(`mongodb://localhost/${dbName}`);

const properties = [
  {
    address: "Charm at the Steps of the Sacre Coeur/Montmartre",
    imageUrl:
      "https://raw.githubusercontent.com/lewagon/flats-boilerplate/master/images/flat1.jpg",
    estimatePrice: 164,
    priceCurrency: "EUR",
    lat: 48.884211,
    lng: 2.34689
  },
  {
    address: "Trendy Apt in Buttes Montmartre",
    imageUrl:
      "https://raw.githubusercontent.com/lewagon/flats-boilerplate/master/images/flat2.jpg",
    estimatePrice: 200,
    priceCurrency: "EUR",
    lat: 48.885707,
    lng: 2.343543
  },
  {
    address: "Super 60m2 in trendy neighborhood!",
    imageUrl:
      "https://raw.githubusercontent.com/lewagon/flats-boilerplate/master/images/flat3.jpg",
    estimatePrice: 150,
    priceCurrency: "EUR",
    lat: 48.885312,
    lng: 2.341225
  },
  {
    address: "Splendide terrasse vue imprenable",
    imageUrl:
      "https://raw.githubusercontent.com/lewagon/flats-boilerplate/master/images/flat4.jpg",
    estimatePrice: 115,
    priceCurrency: "EUR",
    lat: 48.88184,
    lng: 2.343371
  },
  {
    address: "Superbe vue à 2 min du Sacré Coeur",
    imageUrl:
      "https://raw.githubusercontent.com/lewagon/flats-boilerplate/master/images/flat5.jpg",
    estimatePrice: 135,
    priceCurrency: "EUR",
    lat: 48.888839,
    lng: 2.339208
  },
  {
    address: "Bohemian and Chic in Paris",
    imageUrl:
      "https://raw.githubusercontent.com/lewagon/flats-boilerplate/master/images/flat6.jpg",
    estimatePrice: 90,
    priceCurrency: "EUR",
    lat: 48.827855,
    lng: 2.350774
  }
];

Property.create(properties)
  .then(theThingIGet => {
    console.log(theThingIGet);
    mongoos.connection.close(); // no need for control + c, to exit node after creation. function will exit node after for you ;)
  })
  .catch(err => {
    console.log(err);
  });

//-------------------------------------------- End Cinema
//-------------------------------------------- Start Movies

// const mongoose = require('mongoose');
// const Movie = require('../models/Movie');

// const dbName = 'lab-mongoose-movies';
// mongoose.connect(`mongodb://localhost/${dbName}`);

// const movies = [
//   {
//     title : "A Wrinkle in Time",
//     actors:['5b969b76533a59caae3c89e2','5b969b76533a59caae3c89e3','5b969b76533a59caae3c89e5','5b969b76533a59caae3c89e6','5b969b76533a59caae3c89e4','5b969b76533a59caae3c89e8','5b969b76533a59caae3c89e9','5b969b76533a59caae3c89e7'],
//     genre: "Ava DuVernay",
//     plot: "Following the discovery of a new form of space travel as well as Meg's father's disappearance, she, her brother, and her friend must join three magical beings - Mrs. Whatsit, Mrs. Who, and Mrs. Which - to travel across the universe to rescue him from a terrible evil.",
//     image: "https://images-na.ssl-images-amazon.com/images/M/MV5BMjMxNjQ5MTI3MV5BMl5BanBnXkFtZTgwMjQ2MTAyNDM@._V1_UX182_CR0,0,182,268_AL_.jpg",
//   },
//   {
//     title : "The Strangers: Prey at Night",
//     actors:['5b969b76533a59caae3c89e5','5b969b76533a59caae3c89e6'],
//     genre: "Johannes Roberts",
//     plot: "A family's road trip takes a dangerous turn when they arrive at a secluded mobile home park to stay with some relatives and find it mysteriously deserted. Under the cover of darkness, three masked psychopaths pay them a visit to test the family's every limit as they struggle to survive.",
//     image: "https://images-na.ssl-images-amazon.com/images/M/MV5BMTY1OTIwODgzMV5BMl5BanBnXkFtZTgwMzUyMDgzNDM@._V1_UX182_CR0,0,182,268_AL_.jpg"
//   },
//   {
//     title : "The Hurricane Heist",
//     actors:['5b969b76533a59caae3c89e2','5b969b76533a59caae3c89e3','5b969b76533a59caae3c89e5'],
//     genre: "Rob Cohen",
//     plot: "Thieves attempt a massive heist against the U.S. Treasury as a Category 5 hurricane approaches one of its Mint facilities.",
//     image: "https://images-na.ssl-images-amazon.com/images/M/MV5BMzg3Y2MyNjgtMzk4ZS00OTU3LWEwZmMtN2Y0NTdlZjU0NGFiXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_UX182_CR0,0,182,268_AL_.jpg"
//   },
//   {
//     title : "Gringo",
//     actors:['5b969b76533a59caae3c89e3','5b969b76533a59caae3c89e5','5b969b76533a59caae3c89e6'],
//     genre: "Nash Edgerton",
//     plot: "GRINGO, a dark comedy mixed with white-knuckle action and dramatic intrigue, explores the battle of survival for businessman Harold Soyinka (David Oyelowo) when he finds himself crossing the line from law-abiding citizen to wanted criminal.",
//     image: "https://images-na.ssl-images-amazon.com/images/M/MV5BMjAyMTk2MTQ3Ml5BMl5BanBnXkFtZTgwNDQ2ODE0NDM@._V1_UX182_CR0,0,182,268_AL_.jpg"
//   },
//   {
//     title : "Thoroughbreds",
//     actors:['5b969b76533a59caae3c89e2','5b969b76533a59caae3c89e3'],
//     genre: "Cory Finley",
//     plot: "Two upper-class teenage girls in suburban Connecticut rekindle their unlikely friendship after years of growing apart. Together, they hatch a plan to solve both of their problems-no matter what the cost.",
//     image: "https://images-na.ssl-images-amazon.com/images/M/MV5BNDcyNDA4NDAzN15BMl5BanBnXkFtZTgwODQxMDQ5NDM@._V1_UX182_CR0,0,182,268_AL_.jpg"
//   },
//   {
//     title : "The Leisure Seeker",
//     actors:['5b969b76533a59caae3c89e6','5b969b76533a59caae3c89e4'],
//     genre: "Paolo Virzì",
//     plot: "A runaway couple goes on an unforgettable journey in the faithful old RV they call The Leisure Seeker, traveling from Boston to The Ernest Hemingway Home in Key West. They recapture their passion for life and their love for each other on a road trip that provides revelation and surprise right up to the very end.",
//     image: "https://images-na.ssl-images-amazon.com/images/M/MV5BMTg1NTg2MzcyNF5BMl5BanBnXkFtZTgwNjMwMDIzNDM@._V1_UX182_CR0,0,182,268_AL_.jpg"
//   },
//   {
//     title : "Black Panther",
//     actors:['5b969b76533a59caae3c89e3','5b969b76533a59caae3c89e5','5b969b76533a59caae3c89e6','5b969b76533a59caae3c89e4','5b969b76533a59caae3c89e8','5b969b76533a59caae3c89e9'],
//     genre: "Ryan Coogler",
//     plot: "T'Challa, the King of Wakanda, rises to the throne in the isolated, technologically advanced African nation, but his claim is challenged by a vengeful outsider who was a childhood victim of T'Challa's father's mistake.",
//     image: "https://images-na.ssl-images-amazon.com/images/M/MV5BMTg1MTY2MjYzNV5BMl5BanBnXkFtZTgwMTc4NTMwNDI@._V1_UX182_CR0,0,182,268_AL_.jpg"
//   },
//   {
//     title : "Red Sparrow",
//     actors:['5b969b76533a59caae3c89e5','5b969b76533a59caae3c89e6'],
//     genre: "Francis Lawrence",
//     plot: "Ballerina Dominika Egorova is recruited to 'Sparrow School,' a Russian intelligence service where she is forced to use her body as a weapon. Her first mission, targeting a C.I.A. agent, threatens to unravel the security of both nations.",
//     image: "https://images-na.ssl-images-amazon.com/images/M/MV5BMTA3MDkxOTc4NDdeQTJeQWpwZ15BbWU4MDAxNzgyNTQz._V1_UX182_CR0,0,182,268_AL_.jpg"
//   }
// ];

// Movie.create(movies)
// .then((theThingIGet)=>{
//   console.log(theThingIGet);

//   mongoos.connection.close(); // no need for control + c, to exit node after creation. function will exit node after for you ;)
// })
// .catch((err)=>{
//   console.log(err);
// })
