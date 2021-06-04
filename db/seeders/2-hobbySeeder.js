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
          img: "/hobby-images/runners.png",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Roller Skating",
          description:
            "Roller skating is making a comeback! Gaining widespread popularity in the 1970s-1990s, roller skating has a rich history often associated with African American and LGBTQ communities.",
          img: "/hobby-images/skateboarders.png",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Rock Climbing",
          description: "Get yourself outside on natural rock to enjoy the fresh air and gorgeous views or sharpen those climbing skills in an indoor gym.",
          img: "/hobby-images/hangglider.png",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Gaming",
          description:
            "Playing PC and console games -- Level up on your video gamming skills.",
          img: "/hobby-images/video-games.png",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Cycling",
          description: "A great way to stay active and get yourself outdoors, cycling has many benefits to your physical and mental health.",
          img: "/hobby-images/cyclist.png",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Reading",
          description:
            "Cuddle up with a cozy book and get those reading creds in.",
          img: "/hobby-images/lounging.png",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Baking",
          description:
            "Dive into the the art of making pastries, desserts, bread and other baked goods.",
          img: "/hobby-images/baker.png",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Boating",
          description:
            "Get out to the sea whether it be by canoe, kayak, row boat, or sail boat.",
          img: "/hobby-images/boating.png",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Botany",
          description:
            "For the house plant lover and those interested in the science of plant life and a branch of biology.",
          img: "/hobby-images/botany.png",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Cat Training",
          description:
            "Get your kitty house trained, work on improving their manners, or train them to do some fun tricks.",
          img: "/hobby-images/cat-trainer.png",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Dog Training",
          description:
            "Implement a variety of methods to train your dog from being a well behaved pup to a reliable service dog.",
          img: "/hobby-images/dog-walking.png",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Fishing",
          description:
            "Learn one of most popular pasttimes with a variety of techniques including hand gathering, spearing, netting, angling and trapping.",
          img: "/hobby-images/fishers.png",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Golfing",
          description:
            "Learn how to hit a ball with a stick as few times as possible.",
          img: "/hobby-images/golfer.png",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Juggling",
          description:
            "Do you like collecting party tricks? Then this is the next hobby for you! Impress all your friends with these super cool juggling tricks.",
          img: "/hobby-images/juggling-mime.png",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Knitting",
          description:
            "If you're an introvert who loves being at home, this is the hobby for you! Get cozy on your couch while learning to knit some luxurious peices of clothing.",
          img: "/hobby-images/knitting.png",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Writing Music",
          description:
            "Learn the ways of creating amazing music so you can get yourself up on stage to live in the limelight you've always dreamt of.",
          img: "/hobby-images/music-performers.png",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Painting",
          description:
            "Learn to paint using one of the multitude of techniques including oil, pastel, acrylic, watercolor, ink, enamel, spray paint, and digital.",
          img: "/hobby-images/painter.png",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Sewing",
          description:
            "Become proficient in mending, tailoring, or even sewing your own clothing.",
          img: "/hobby-images/seamstress.png",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Graphic Design",
          description:
            "Dive into the art, profession, and academic discipline whose activity consists in projecting visual communications intended to transmit specific messages to social groups.",
          img: "/hobby-images/technologist.png",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Tennis",
          description:
            "Get yourself outside and enjoying the fresh air while you get good at hitting a ball with a racket.",
          img: "/hobby-images/tennis.png",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Playing An Instrument",
          description:
            "Pick up that instrument you've always wanted to learn how to play.",
          img: "/hobby-images/violinist.png",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Windsurfing",
          description:
            "Windsurfing, also referred to as \"sailboarding\" and \"boardsailing\", emerged in the late 1960s from the surf culture of California. It is a combination of surfing and sailing.",
          img: "/hobby-images/windsurfer.png",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Yoga",
          description:
            "Get acquainted with yoga, a group of physical, mental, and spiritual practices or disciplines which originated in ancient India.",
          img: "/hobby-images/yoga.png",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Star Gazing",
          description:
            "Also known as amateur astronomy, star gazing is a wonderful way to enjoy observing or imaging celestial objects in the sky using the unaided eye, binoculars, or telescopes.",
          img: "/hobby-images/picnicking.png",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Motorcycling",
          description:
            "Get comfortable on you motorcycle so you can be social with other motorcyclists and be accepted into their community.",
          img: "/hobby-images/motorcycle.png",
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
