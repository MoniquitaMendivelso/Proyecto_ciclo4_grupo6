function LoginCard(props) {
    const {Login} = props;

    return ( 
        <div className="Login-Card">
            <h1>Bienvenido usuario: {Login}</h1>
        </div>
     );
}

export default LoginCard;