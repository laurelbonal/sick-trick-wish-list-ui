export const fetchTricks = () => {
    return fetch('http://localhost:3001/api/v1/tricks')
        .then(response => response.json())
        .catch(error => {
            console.log('Error fetching data', error);
        });
};

export const addTrick = (newTrick) => {
    return fetch('http://localhost:3001/api/v1/tricks', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(newTrick)
    })
    .then(response => response.json())
    .catch(error => {
        console.log('Error adding trick', error);
    });
};

export const deleteTrick = (id) => {
    return fetch(`http://localhost:3001/api/v1/tricks/${id}`, {
      method: 'DELETE'
    });
  };
