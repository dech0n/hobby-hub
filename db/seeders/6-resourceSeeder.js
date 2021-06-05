'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
    return queryInterface.bulkInsert('Resources', [
      {
        title: 'What is Lindy Hop?',
        link: 'http://dancing.org/lindy-what-is.html',
        hobbyId: 1,
        userId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Lindy Hop Tips & Tricks for beginners',
        link: 'https://thevintagewomanmagazine.com/lindy-hop-for-beginners/',
        hobbyId: 1,
        userId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Lindy Hop Video for Beginners',
        link: 'https://www.youtube.com/watch?v=m-kkH09bJaQ',
        hobbyId: 1,
        userId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: '5 Roller Skating Tips for Beginners',
        link: 'https://www.pedestrian.tv/sport/roller-skating-what-to-know-before-starting/',
        hobbyId: 2,
        userId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Roller Skating Association',
        link: 'https://www.rollerskating.com/pages/home/1',
        hobbyId: 2,
        userId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Beginner Roller Skating Video',
        link: 'https://www.youtube.com/watch?v=oqOU1yQUQcY',
        hobbyId: 2,
        userId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Intro to Rock Climbing video',
        link: 'https://www.youtube.com/watch?v=E9_jyAh36YU',
        hobbyId: 3,
        userId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: '35 Rock Climbing Tips for Beginners',
        link: 'https://www.theadventurejunkies.com/rock-climbing-tips-for-beginners/',
        hobbyId: 3,
        userId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: '',
        link: '',
        hobbyId: 4,
        userId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Top 100 Video Games of Al Time',
        link: 'https://www.ign.com/lists/top-100-games',
        hobbyId: 4,
        userId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: '',
        link: '',
        hobbyId: 5,
        userId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'PC Gaming vs. Console Gaming',
        link: 'https://www.crucial.com/articles/for-gamers/pc-vs-console-what-is-better-for-gaming',
        hobbyId: 5,
        userId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Track Your Reading and Share with Friends',
        link: 'https://www.goodreads.com/',
        hobbyId: 6,
        userId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: '50 Classic Books Everyone Should Read',
        link: 'https://www.southernliving.com/culture/best-classic-books',
        hobbyId: 6,
        userId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Preppy Kitchen - Easy Recipes',
        link: 'https://preppykitchen.com/',
        hobbyId: 7,
        userId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Essential Baking Tips & Tricks for Beginners',
        link: 'https://www.brit.co/new-bakers/',
        hobbyId: 7,
        userId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'How to Drive a Boat',
        link: 'https://www.youtube.com/watch?v=3ZwV-8rypUQ',
        hobbyId: 8,
        userId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Boating Tips for Beginners',
        link: 'https://boatingforbeginners.com/boating-tips/',
        hobbyId: 8,
        userId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Botany for Beginners',
        link: 'https://botanyforbeginners.com/',
        hobbyId: 9,
        userId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Discussion Board for Beginner Botanists',
        link: 'https://www.reddit.com/r/botany/comments/ec1mao/tips_for_beginner_botanists/',
        hobbyId: 9,
        userId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'How to Train Your Cat',
        link: 'https://www.hillspet.com/cat-care/training/cat-training-the-easy-way',
        hobbyId: 10,
        userId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Life-Changing Cat Training',
        link: 'https://www.rd.com/list/how-to-train-a-cat/',
        hobbyId: 10,
        userId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Dog Training 101',
        link: 'https://www.thesprucepets.com/steps-to-train-your-dog-1118273',
        hobbyId: 11,
        userId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Train Your Dog to Not Bark',
        link: 'https://www.wikihow.pet/Train-Dogs-Not-to-Bark',
        hobbyId: 11,
        userId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Fishing Lures Buying Guide',
        link: 'https://www.gearhungry.com/best-fishing-lures/',
        hobbyId: 12,
        userId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Buying a Fishing License',
        link: 'https://fws.gov/fishing/fishinglicense.html',
        hobbyId: 12,
        userId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Golf Etiquette, Rules and Glossary',
        link: 'https://www.pga.com/story/golf-for-beginners-golf-etiquette-rules-and-glossary',
        hobbyId: 13,
        userId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Beginner\'s Guide to Golf Clubs',
        link: 'https://www.tripsavvy.com/meet-the-golf-clubs-1560507',
        hobbyId: 13,
        userId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Learn to Juggle in 2 Minutes (Video!)',
        link: 'https://www.youtube.com/watch?v=k5gA2RWDujY',
        hobbyId: 14,
        userId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Beginners Juggling Guide',
        link: 'https://jugglealot.com/the-beginners-juggling-guide-for-dummies/',
        hobbyId: 14,
        userId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Knitting 101 video',
        link: 'https://www.youtube.com/watch?v=36FGZFa6cCg',
        hobbyId: 15,
        userId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Knitting Tools, Stitches and Techniques',
        link: 'https://www.bhg.com/crafts/knitting/basics/knitting-101/',
        hobbyId: 15,
        userId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Music Theory for Beginners',
        link: 'https://iconcollective.edu/basic-music-theory/',
        hobbyId: 16,
        userId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'A Beginner\'s Guide to Writing Music',
        link: 'https://blog.udemy.com/how-to-write-a-good-song/',
        hobbyId: 16,
        userId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Color Theory Basics',
        link: 'https://sarahrenaeclark.com/color-theory-basics/',
        hobbyId: 17,
        userId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Getting Started with Painting',
        link: 'https://drawpaintacademy.com/painting-for-beginners/',
        hobbyId: 17,
        userId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: '15 Essential Tools to Build Your Sewing Kit',
        link: 'https://www.thesprucecrafts.com/sewing-tools-and-equipment-to-sew-4122025',
        hobbyId: 18,
        userId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Sewing for Beginners',
        link: 'https://www.threadsmagazine.com/collection/sewing-for-beginners-23-tips-and-techniques-you-should-know',
        hobbyId: 18,
        userId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'How to Get Started with Graphic Design',
        link: 'https://www.theconfusedmillennial.com/started-with-graphic-design/',
        hobbyId: 19,
        userId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Beginners Guide to Graphic Design (video)',
        link: 'https://www.youtube.com/watch?v=dFSia1LZI4Y',
        hobbyId: 19,
        userId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Rules of Tennis: How to Play',
        link: 'https://www.rulesofsport.com/sports/tennis.html',
        hobbyId: 20,
        userId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'How to Choose a Tennis Racket',
        link: 'https://www.wilson.com/en-us/blog/tennis/how-tos/how-choose-tennis-racket',
        hobbyId: 20,
        userId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Choosing a Musical Instrument',
        link: 'https://learnenglishteens.britishcouncil.org/skills/reading/upper-intermediate-b2-reading/choosing-musical-instrument',
        hobbyId: 21,
        userId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'How to Read Sheet Music',
        link: 'https://www.musicnotes.com/now/tips/how-to-read-sheet-music/',
        hobbyId: 21,
        userId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'What is Windsurfing',
        link: 'https://mpora.com/windsurfing-kitesurfing/windsurfing-everything-need-know/',
        hobbyId: 22,
        userId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Choosing Windsurfing Equipment',
        link: 'https://improvewindsurfing.com/how-do-i-choose-the-best-windsurf-equipment/',
        hobbyId: 22,
        userId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Yoga for Complete Beginners (video)',
        link: 'https://www.youtube.com/watch?v=v7AYKMP6rOE',
        hobbyId: 23,
        userId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: '5 Things You Should Know About Yoga',
        link: 'https://www.nccih.nih.gov/health/tips/things-you-should-know-about-yoga',
        hobbyId: 23,
        userId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Stargazing Basics',
        link: 'https://skyandtelescope.org/astronomy-resources/stargazing-basics/',
        hobbyId: 24,
        userId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Best Astronomy Apps of 2021',
        link: 'https://astrobackyard.com/astronomy-apps-for-stargazing/',
        hobbyId: 24,
        userId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Apply for a Motorcycle License',
        link: 'https://www.dmv.org/motorcycle-license.php',
        hobbyId: 25,
        userId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Motorcycle Training Academy',
        link: 'https://www.motorcycletrainingacademy.com/',
        hobbyId: 25,
        userId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },

    ], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
      return queryInterface.bulkDelete('Resources', null, {});
  }
};
