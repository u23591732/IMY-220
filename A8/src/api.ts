const fetchByName = async (name: string) => {
  try {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}/`);
    
    
    if (!response.ok) {
      return { pokeData: null, error: `Error: ${response.statusText} (Status: ${response.status})` };
    }

    
    const data = await response.json();
    
    
    return { pokeData: data, error: null };

  } catch (error) {
    return { pokeData: null, error: 'Failed to fetch Pokémon data' };
  }
};

export { fetchByName };

