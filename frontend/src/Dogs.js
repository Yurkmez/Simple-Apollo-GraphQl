import { gql, useQuery } from '@apollo/client';

const GET_DOGS = gql`
    query {
        dogs {
            subbreeds
            breed
        }
    }
`;

function Dogs({ onDogSelected }) {
    const { loading, error, data } = useQuery(GET_DOGS);

    if (loading) return 'Loading...';
    if (error) return `Error! ${error.message}`;

    return (
        <select name="dog" onChange={onDogSelected}>
            {data.dogs.map((dog) => (
                <option key={dog.id} value={dog.breed}>
                    {dog.breed}
                </option>
            ))}
        </select>
    );
}

export default Dogs;
