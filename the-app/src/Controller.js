import Home from './HomePage.js';


export default function Controller({screen}) {


    if(screen === 1) {
        return(
            <Home />
        );
    }else {
        return(
            <h1>Error</h1>
        );
    }
}