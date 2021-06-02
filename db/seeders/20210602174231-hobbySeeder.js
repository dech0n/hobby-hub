"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "Hobbies",
      [
        {
          title: "Lindy Hop",
          description:
            "One of the most popular swing dances originating in the 1930s-1950s, Lindy Hop is an African American art form born out of jazz music.",
          img: "./images/hobby-images/runners.png",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Roller Skating",
          description:
            "Roller skating is making a comeback! Gaining widespread popularity in the 1970s-1990s, roller skating has a rich history often associated with African American and LGBTQ communities.",
          img: "images/hobby-images/skateboarders.png",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Rock Climbing",
          description: "Get yourself outside on natural rock to enjoy the fresh air and gorgeous views or sharpen those climbing skills in an indoor gym.",
          img: "image.png",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Gaming",
          description:
            "Playing PC and console games -- Level up on your video gamming skills.",
          img: "images/hobby-images/hangglider.png",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Cycling",
          description: "A great way to stay active and get yourself outdoors, cycling has many benefits to your physical and mental health.",
          img: "images/hobby-images/cyclist.png",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Reading",
          description:
            "Cuddle up with a cozy book and get those reading creds in.",
          img: "images/hobby-images/lounging.png",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Hobbies", null, {});
  },
};
