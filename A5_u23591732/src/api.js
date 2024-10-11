const fetchByID = async (id) => {
  try {
    const response = await fetch(`https://swapi.dev/api/people/${id}/`);
    if (!response.ok) {
      return { postData: null, error: `Error: ${response.statusText} (Status: ${response.status})` };
    }

    const data = await response.json();
    if (!data) {
      return { postData: null, error: 'No data returned from API.' };
    }
    return { postData: data, error: null };
  } catch (error) {
    return { postData: null, error: 'Network error or failed to fetch data.' };
  }
};

const fetchByName = async (name) => {
  try {
    const response = await fetch(`https://swapi.dev/api/people/?search=${name}`);
    if (!response.ok) {
      return { postData: null, error: `Error: ${response.statusText} (Status: ${response.status})` };
    }

    const data = await response.json();
    if (data.results.length > 0) {
      return { postData: data.results[0], error: null };
    } else {
      return { postData: null, error: 'Character not found' };
    }
  } catch (error) {
    return { postData: null, error: 'Failed to fetch data' };
  }
};

module.exports = {
  fetchByID,
  fetchByName
};

/*
// Function to fetch data from an API
function fetchStarWarsCharacter(id) {
  // Using fetch to get data from the Star Wars API (SWAPI)
  return fetch(`https://swapi.dev/api/people/${id}/`) // returns a promise
    .then((response) => {
      // First promise handles the raw response
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json(); // returns a promise to parse JSON
    })
    .then((data) => {
      // Second promise handles the parsed JSON data
      console.log('Character data:', data);
      return data; // returning the data for further use
    })
    .catch((error) => {
      // If any error happens (e.g., network failure), this will handle it
      console.error('There was a problem with the fetch operation:', error);
    });
}

// Example usage:
fetchStarWarsCharacter(1);


*/ 