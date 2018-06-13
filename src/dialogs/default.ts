/*------------------------------------------------------------------------------
   About      : <Write about the file here>
   
   Created on : Tue Jun 12 2018
   Author     : Akash Dathan
   
------------------------------------------------------------------------------*/

import { Session }                                from 'botbuilder'
import { format }                                 from 'util'
import strings                                    from '../strings'

// Called whenever the dialog stack is empty and no other dialog triggered.
export default [
  (session : Session) => {
    const randomIndex = Math.floor(Math.random() * strings.default.randomMessage.length),
          message     = format(
                          strings.default.message,
                          strings.default.randomMessage[randomIndex]
                        )

    session.endDialog(message)
  }
]