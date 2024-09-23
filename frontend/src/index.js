import React from 'react';
import ReactDOM from 'react-dom/client';
import { useState } from 'react';
import Dogs from './Dogs';
import DogPhoto from './DogPhoto';

import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';

const client = new ApolloClient({
    uri: 'http://localhost:4000/',
    cache: new InMemoryCache(),
});

function App() {
    const [selectedDog, setSelectedDog] = useState('affenpinscher');

    function onDogSelected({ target }) {
        setSelectedDog(target.value);
    }

    return (
        <ApolloProvider client={client}>
            <div>
                <h2>Building Query components 🚀</h2>
                <Dogs onDogSelected={onDogSelected} />
                {selectedDog && <DogPhoto breed={selectedDog} />}
            </div>
        </ApolloProvider>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
