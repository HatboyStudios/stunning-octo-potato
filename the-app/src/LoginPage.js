import trueLog from './LoginPage.js';

export default function Login() {


    return(
        <div>
            <h1>Login</h1>

            <input placeholder="Enter Your Username"></input>
            <input placeholder="Enter Your Password"></input>

            <button onClick={ trueLog }>Submit</button>
        </div>

    );
}