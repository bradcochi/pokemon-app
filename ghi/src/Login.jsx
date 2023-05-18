const Login = () => {
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log('login');
    }
    return (
        <div className="row">
            <div className="col-md-6 offset-md-3">
                <h1>Login</h1>
                <form>
                    <div className="mb-3">
                        <label htmlFor="Login__username" className="form-label">Username</label>
                        <input type="text" className="form-control" id="Login__username" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="Login__password" className="form-label">Password</label>
                        <input type="password" className="form-control" id="Login__password" />
                    </div>
                    <button type="submit" className="btn btn-success">Submit</button>
                </form>
            </div>
        </div>
    )
}

export default Login;
