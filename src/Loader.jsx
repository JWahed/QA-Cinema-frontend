import { useState, useEffect } from 'react';
import axios from 'axios';
import App from './App';

function Loader() {
    const [keys, setKeys] = useState([]);

    const getVariables = async () => {
        try {
          const res = await axios.get('http://localhost:5000/api/apiKeyRelay');
          setKeys(res.data);
          console.log(keys)
        } catch (err) {
          console.error(err);
        }
    };

    useEffect(() => {
        getVariables();
    }, []);
    console.log(keys);
    return(
        <App
          authDomainURL={keys.authDomainURL}
          authClientID={keys.authClientID}
          stripeKey={keys.stripeDevKey}
        />
    );
}

export default Loader;