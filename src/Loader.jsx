import { useState, useEffect } from 'react';
import axios from 'axios';
import App from './App';

function Loader() {
    const [keys, setKeys] = useState([]);

    const getVariables = async () => {
        try {
          const res = await axios.get('http://localhost:10000/keysRelay/');
          setKeys(res.data);
          console.log(keys)
        } catch (err) {
          console.error(err);
        }
    };

    useEffect(() => {
        getVariables();
    }, []);

    return(
        <App authDomainURL={keys.authDomainURL} authClientID={keys.authClientID} />
    );
}

export default Loader;