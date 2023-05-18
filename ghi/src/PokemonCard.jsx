import { Link } from 'react-router-dom';

const PokemonCard = ({name}) => {
    return (
        <div className="col-3">
            <div className="card mb-3">
                <div className="card-body">
                    <h5 className="card-title">{name[0].toUpperCase() + name.slice(1)}</h5>
                    <Link to={`/pokemon/${name}`}>Details</Link>
                </div>
            </div>
        </div>
    )
}

export default PokemonCard;
