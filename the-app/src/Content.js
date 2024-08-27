import { useState } from 'react';

import Home from './Home.js';
import Settings from './Settings.js';
import Account from './Account.js';

export default function Content({screen}) {
    
    if(screen === 1) {
        return(
            <div>
                <Home />
            </div>
        )
    }else if(screen === 2) {
        return(
            <div>
                <Settings />
            </div>
        )
    }else if(screen === 3) {
        return(
            <div>
                <Account />
            </div>
        )
    }else {
        console.log("none selected")
    }
}