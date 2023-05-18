const Search = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('search');
    }
    return (
        <form className="row" onSubmit={handleSubmit}>
            <div className="col">
                <input className="form-control form-control-lg" type="text" placeholder="pikachu" />
            </div>
            <div className="col">
                <button className="btn btn-lg btn-success" type="submit">Search</button>
                <button className="btn btn-lg btn-link" type="button">Reset</button>
            </div>
        </form>
    )
}

export default Search;
