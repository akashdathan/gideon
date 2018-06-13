/*------------------------------------------------------------------------------
   About      : <Write about the file here>
   
   Created on : Tue Jun 12 2018
   Author     : Akash Dathan
   
------------------------------------------------------------------------------*/

import { 
        Library,
        Session
       }                                          from 'botbuilder'
import strings                                    from '../strings'

const lib = new Library('global')

lib
  .dialog('help', (session: Session) => {
    session.endDialog(strings.global.help.message)
  })
  .triggerAction({
    // LUIS intent
    matches: 'global:help'
  })

export default lib