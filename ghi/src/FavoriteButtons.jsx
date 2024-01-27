import {
    useGetFavoritesQuery,
    useDeleteFavoriteMutation,
    useCreateFavoriteMutation
} from "./app/apiSlice";
import { useEffect, useState } from 'react';

const FavoriteButtons = (props) => {
    const [favorite, setFavorite] = useState(null);
    const [deleteFavorite] = useDeleteFavoriteMutation();
    const [createFavorite] = useCreateFavoriteMutation();
    const { data: favorites } = useGetFavoritesQuery();

    useEffect(() => {
        if (favorites) {
            setFavorite(favorites.find(f => f.pokemon_name === props.name) || null);
        }
    }, [favorites]);

    return (
        <>
            {!favorite && <button
                className="btn btn-success"
                onClick={() => createFavorite({pokemon_name: props.name})}
            >
                Favorite
            </button>}
            {favorite && <button
                className="btn btn-danger"
                onClick={() => deleteFavorite(favorite.id)}
            >
                Unfavorite
            </button>}
        </>
    )
}

export default FavoriteButtons;
