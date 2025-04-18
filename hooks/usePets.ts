import { useState, useEffect } from 'react';
import { fetchPets } from '../lib/api';

const usePets = () => {
    const [pets, setPets] = useState([]);

    useEffect(() => {
        const loadPets = async () => {
            const data = await fetchPets();
            setPets(data);
        };
        loadPets();
    }, []);

    return pets;
};

export default usePets; 