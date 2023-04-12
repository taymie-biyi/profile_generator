const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


const name = "What's your name? Nicknames are also acceptable :)";
const activity = "What's an activity you like doing?";
const listen = "What do you listen to while doing that?"
const mealtime = "Which meal is your favourite (eg: dinner, brunch, etc.)"
const meal = "What's your favourite thing to eat for that meal?"
const sport = "Which sport is your absolute favourite?"
const superpower = "What is your superpower? In a few words, tell us what you are amazing at!"

rl.question(name, (nameAns) => {

  rl.question(activity, (activityAns) => {

    rl.question(listen, (listenAns) => {      

      rl.question(mealtime, (mealtimeAns) => {  

        rl.question(meal, (mealAns) => {          

          rl.question(sport, (sportAns) => {  

            rl.question(superpower, (superpowerAns) => {

            console.log(`Thank you for your valuable feedback: \n Name: ${nameAns}, \n Activity: ${activityAns}, \n What you like to listen to: ${listenAns}, \n Favourite mealtime: ${mealtimeAns}, \n Favourite meal: ${mealAns}, \n Favourite Sport: ${sportAns}, \n Superpower: ${superpowerAns}`);

            rl.close();
            });

          });

        });

      });

    });

  });

});
