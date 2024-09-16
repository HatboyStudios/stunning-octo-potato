
export default function Navigator({action1, action2}) {
    return(
        <div>
            <button onClick={action1}>Home</button>
            <button onClick={action2}>Login</button>
        </div>
    );
}
