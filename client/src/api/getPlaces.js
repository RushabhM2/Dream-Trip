function getPlaces(path) {
  console.log('fetching places');
  return fetchRequest(path);
}

const loadPlacesPerCategory = async (destination, category) => {
  return await getPlaces(`${destination}/${category}`)
}

const fetchRequest = async (path, option) => {
  const url = 'http://localhost:3079';
  return fetch(`${url}/${path}`, option)
    .then((res) => (res.status < 400 ? res : Promise.reject(res)))
    .then((res) => (res.status !== 204 ? res.json() : res))
    .catch((err) => console.log('err:', err));
};

module.exports = {
  getPlaces,
  loadPlacesPerCategory
};
