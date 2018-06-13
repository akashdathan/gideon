/*------------------------------------------------------------------------------
   About      : <Write about the file here>
   
   Created on : Tue Jun 12 2018
   Author     : Akash Dathan
   
------------------------------------------------------------------------------*/

export default {
  default: {
    message:
      `%s \n\n Sorry, I did not understand. Type 'help' if you need assistance.`,
    randomMessage: [
      `Ah ah ah, you didn't say the magic word.`,
      `I'm sorry, Dude. I'm afraid I can't do that.`,
      `Computer says no.`
    ]
  },
  global: {
    help: {
      message: 'Take a deep breath'
        // "You can ask me things about:\n\nWait times\n\n * What are the wait times?\n\n * What is the wait time for The Incredible Hulk?\n\n * What ride has the longest/shortest wait?\n\n Rides\n\n * What rides are there?\n\n * What rides are open/closed?\n\n * Is Space Mountain open/closed?\n\n * What rides have fastpass?\n\n * Does Revenge of the Mummy have fastpass?\n\n Park\n\n * When does it open/close?\n\n * Select park\n\n * Change park"
    },
    switchPark: {
      message: `You selected: %s`
    }
  },
  greetings: {
    firstRun: {
      message:
        `Hi! i'm Gideon and i'm awesome! You can call out 'help', and ill be there.`
    },
    hello: {
      message: `Welcome back!`,
      selected: `You selected: %s`
    }
  }
}