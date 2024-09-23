import { gql, useQuery } from '@apollo/client';
import { NetworkStatus } from '@apollo/client';

const GET_DOG_PHOTO = gql`
    query Dog($breed: String!) {
        dog(breed: $breed) {
            id
            displayImage
        }
    }
`;

function DogPhoto({ breed }) {
    const { loading, error, data, refetch, networkStatus } = useQuery(
        GET_DOG_PHOTO,
        {
            variables: { breed },
            notifyOnNetworkStatusChange: true,
        }
    );
    if (networkStatus === NetworkStatus.refetch) return 'Refetching!';
    if (loading) return null;
    if (error) return `Error! ${error}`;

    return (
        <>
            <div>
                <div>
                    <button
                        onClick={() => refetch()}
                        style={{ marginTop: '20px' }}
                    >
                        Refrech
                    </button>
                </div>
                <img
                    src={data.dog.displayImage}
                    style={{ width: 400, marginTop: '20px' }}
                />
            </div>
        </>
    );
}

export default DogPhoto;
