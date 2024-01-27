import { useParams, Link } from "react-router-dom";
import { useGetPokemonByNameQuery, useGetAccountQuery } from "./app/apiSlice";
import FavoriteButtons from "./FavoriteButtons";

const PokemonDetails = () => {
    const { name } = useParams()
    const { data: account } = useGetAccountQuery()
    const { data, isLoading } = useGetPokemonByNameQuery(name);

    if (isLoading) return <div>Loading...</div>

    return (
        <div>
            <div className="row">
                <div className="col-8">
                    <h1>{data.name.toUpperCase()}</h1>
                </div>
                <div className="col-4 text-end">
                    {
                        account ?
                            <FavoriteButtons name={data.name} />
                        :
                            <Link to={`/login?redirect=/pokemon/${name}`} className="btn btn-outline-primary">Login</Link>
                    }
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
