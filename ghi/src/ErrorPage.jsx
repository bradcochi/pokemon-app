import pikachu from './pikachu.png';
import Nav from './Nav';

const ErrorPage = () => {
    return (
        <div className="container">
            <Nav />
            <div className="mt-5">
                <h1>Page not found</h1>
                <img src={pikachu} />
            </div>
        </div>
    )
}

export default ErrorPage;
