export const fetchPets = async () => {
    const response = await fetch('https://api.example.com/pets');
    if (!response.ok) {
        throw new Error('Error fetching pets');
    }
    return response.json();
}; 