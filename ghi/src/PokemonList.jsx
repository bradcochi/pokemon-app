import PokemonCard from './PokemonCard';
import { useSelector } from 'react-redux';
import { useGetAllPokemonQuery } from './app/apiSlice';

const PokemonList = () => {
    const searchCriteria = useSelector((state) => state.search.value)
    const { data, isLoading } = useGetAllPokemonQuery()

    const filteredPokemon = () => {
        if (searchCriteria) {
            return data.filter(poke => poke.name.includes(searchCriteria))
        } else {
            return data;
        }
    }
    if (isLoading) return <div>Loading...</div>
    return (
        <div className='mt-3'>
            <h1>
                Pokemon List{' '}
                <small className='text-body-secondary'>{searchCriteria}</small>
            </h1>
            <div className="row mt-3">
                {filteredPokemon().map(p => <PokemonCard key={p.name} name={p.name} />)}
            </div>
        </div>
    )
}

export default PokemonList;
