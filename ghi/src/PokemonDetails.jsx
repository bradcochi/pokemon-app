const PokemonDetails = () => {
    const data = {
        abilities: [
            {
                ability: {
                    name: "static",
                    url: "https://pokeapi.co/api/v2/ability/9/"
                },
                is_hidden: false,
                slot: 1
            },
            {
                ability: {
                    name: "lightning-rod",
                    url: "https://pokeapi.co/api/v2/ability/31/"
                },
                is_hidden: true,
                slot: 3
            }
        ],
        base_experience: 112,
        height: 4,
        id: 25,
        is_default: true,
        location_area_encounters: "https://pokeapi.co/api/v2/pokemon/25/encounters",
        name: "pikachu",
        order: 35,
        weight: 60
    }
    return (
        <div>
            <div className="row">
                <div className="col-8">
                    <h1>{data.name.toUpperCase()}</h1>
                </div>
                <div className="col-4 text-end">
                    <button
                        className="btn btn-success"
                        onClick={() => console.log('favorite')}
                    >
                        Favorite
                    </button>
                    <button
                        className="btn btn-danger"
                        onClick={() => console.log('unfavorite')}
                    >
                        Unfavorite
                    </button>
                </div>
            </div>
            <ul className="list-group">
                <li className="list-group-item">
                    Height: {data.height}
                </li>
                <li className="list-group-item">
                    Weight: {data.weight}
                </li>
                <li className="list-group-item">
                    Order: {data.order}
                </li>
            </ul>
        </div>
    )
}

export default PokemonDetails;
