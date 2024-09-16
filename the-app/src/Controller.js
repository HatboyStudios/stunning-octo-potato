import Home from './HomePage.js';
import Login from './LoginPage.js';

export default function Controller({screen}) {


    if(screen === 1) {
        return(
            <Home />
        );
    }else if (screen === 2) {
        return(
            <Login />
        );
    }else {
        return(
            <h1>Error</h1>
        );
    }
}