/*------------------------------------------------------------------------------
   About      : <Write about the file here>
   
   Created on : Tue Jun 12 2018
   Author     : Akash Dathan
   
------------------------------------------------------------------------------*/

import { 
         ChatConnector,
         UniversalBot,
         LuisRecognizer
       }                                          from 'botbuilder'
import defaultDialog                              from './dialogs/default'
import * as dialogs                               from './dialogs'

export class Gideon {

  init(config : {appId : string, appPassword : string, luisAppUrl ?: string}) {
    const connector = new ChatConnector(config),
          bot       = new UniversalBot(connector, defaultDialog)

    for(let i in dialogs) {
      try {
        bot.library((dialogs as any)[i].clone())
      } catch(error) {
        console.log(error)
      }
    }

    // bot.set("storage", storage)
    if(config.luisAppUrl) bot.recognizer(new LuisRecognizer(config.luisAppUrl))
    return connector
  }
}

export default Gideon


/**
TODO

1) bot.recognizer ?, LuisRecognizer?
2) bot.set("storage", storage) ?


*/