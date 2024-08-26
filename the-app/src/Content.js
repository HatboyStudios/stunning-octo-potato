import { useState } from 'react';

export default function Content({screen}) {
    
    if(screen === 1) {
        return(
            <div>
                <h2>Screen 1</h2>
            </div>
        )
    }else if(screen === 2) {
        return(
            <div>
                <h2>Screen 2</h2>
            </div>
        )
    }else if(screen === 3) {
        return(
            <div>
                <h2>Screen 3</h2>
            </div>
        )
    }else {
        console.log("none selected")
    }
}