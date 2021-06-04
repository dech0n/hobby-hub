"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "Experiences",
      [
        {
          hobbyId: 1,
          userId: 1,
          title: "The best partner dance there is!",
          message:
            "When a.. man.. needs to prove to a woman that he's actually.. [pause].. When a man loves a woman.. It just seems like there's still light coming in from under the door. Talk you off what, Pop Pop? If I wanted something your thumb touched, I'd eat the inside of your ear. What, so the guy we are meeting with can't even grow his own hair? COME ON! Everybody dance… NOW. I know she's a brownish area! With points! And I love her!",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          hobbyId: 1,
          userId: 2,
          title: "So in love.",
          message:
            "They don't appreciate him. It's his glasses… they make him look like a lizard. Plus he's self-conscious. Someone order 140 pounds of upper body strength? How about a turtle? I've always loved those leathery little snappy faces. And here you are coming out of your mother's third base! Mission Accomplished. Well, OK, have sex with this girl. Right now. Get in there, have some sex with her. There's a girl in my soup! Touché, Pandora.",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          hobbyId: 1,
          userId: 3,
          title: "What joy!",
          message:
            "Don't worry, these young beauties have been nowhere near the bananas. Now, do you wanna steer, or are you too old to sit on your Pop's lap and drive?",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          hobbyId: 1,
          userId: 4,
          title: "The scene is very welcoming.",
          message:
            "No, Pop-pop does not get a treat, I just brought you a [bleep]ing pizza. But I did finally get into Dad's pants. Although I had to have the crotch taken in a little bit. Could it be love? I know what an erection feels like, Michael. No, it's the opposite. It's like my heart is getting hard.",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Experiences", null, {});
  },
};
