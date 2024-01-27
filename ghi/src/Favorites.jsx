import PokemonCard from "./PokemonCard";
import { useGetFavoritesQuery } from "./app/apiSlice";

const Favorites = () => {
    const { data, isLoading } = useGetFavoritesQuery()

    if (isLoading) return <div>Loading...</div>
    return (
        <div className="row mt-3">
            {data.map(p => <PokemonCard key={p.pokemon_name} name={p.pokemon_name} />)}
        </div>
    )
}

export default Favorites;
