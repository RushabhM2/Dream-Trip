import React, { useState, useEffect } from 'react';
import './App.css';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './views/home';
import moment from 'moment';
import { getPlaces } from './api/getPlaces';
import Categories from './views/Categories';
import MapItinerary from './views/MapItinerary';
import Recommendation from './views/Recommendation';
import { addPlace, removePlace, handleAssignDay } from './utils/mapFunctions';

function App({ categoryStates }) {
  const [startDate, setStartDate] = useState(moment());
  const [endDate, setEndDate] = useState(moment());
  const [destination, setDestination] = useState('');
  const [places, setPlaces] = useState([]);
  const [exploreplaces, setExplorePlaces] = useState([]);
  const [placeEntities, setPlaceEntities] = useState({});
  const [filteredCategories, setCategories] = useState([]);

  useEffect(() => {
    setPlaceEntities({});
  }, []);

  useEffect(() => {
    const filterCategory = categoryStates
      .filter((categoryState) => categoryState.selected)
      .map((categoryState) => categoryState.text);
    setCategories(filterCategory);
  }, [categoryStates]);

  // RUSHABH
  const placesPerType = () => {
    const duration = tripDuration();
    return Math.ceil(((duration + 1) * 4) / filteredCategories.length);
  };

  const tripDuration = () => {
    const momentStart = moment(startDate);
    const momentEnd = moment(endDate);
    return momentEnd.diff(momentStart, 'days') + 1;
  };
  
  // AMINA
  const loadPlaces = () => {
    filteredCategories.map((category) => {
      const loadPlacesPerCategory = async (destination, category) => {
        getPlaces(`${destination}/${category}`).then((allPlaces) => {
          const len = allPlaces.length;
          const placeNum = placesPerType();

          let extraPlaces = allPlaces.slice(Math.min(len, placeNum));
          const exploreEntites = extraPlaces.reduce((acc, place) => {
            return {
              ...acc,
              [place.place_id]: Object.assign(
                place,
                { inMyList: false },
                { day: 0 }
              ),
            };
          }, {});
          setPlaceEntities(Object.assign(placeEntities, exploreEntites));

          let recommendedPlaces = allPlaces.slice(0, Math.min(len, placeNum));
          const newEntites = recommendedPlaces.reduce((acc, place) => {
            return {
              ...acc,
              [place.place_id]: Object.assign(
                place,
                { inMyList: true },
                { day: 0 }
              ),
            };
          }, {});

          setPlaceEntities(Object.assign(placeEntities, newEntites));

          const placeIds = Object.keys(placeEntities);

          const newPlacesOnList = placeIds.filter((placeKey) => {
            return placeEntities[placeKey].inMyList === true;
          });

          const newExplorePlaces = placeIds.filter((placeKey) => {
            return placeEntities[placeKey].inMyList === false;
          });

          setPlaces((places) => [...places, ...newPlacesOnList]);
          setExplorePlaces((exploreplaces) => [
            ...exploreplaces,
            ...newExplorePlaces,
          ]);
        });
      };
      return loadPlacesPerCategory(destination, category);
    });
  };

  return (
    <Router>
      <Switch>
        <Route
          exact
          path="/"
          render={() => (
            <Home
              setStartDate={setStartDate}
              setEndDate={setEndDate}
              setDestination={setDestination}
              startDate={startDate}
              endDate={endDate}
              destination={destination}
            />
          )}
        />
        <Route path="/Categories" component={Categories} />
        <Route
          path="/Recommendation"
          render={() => (
            <Recommendation
              loadPlaces={loadPlaces}
              addPlace={addPlace}
              removePlace={removePlace}
              setPlaceEntities={setPlaceEntities}
              placeEntities={placeEntities}
              setPlaces={setPlaces}
              places={places.map((id) => placeEntities[id])}
              setExplorePlaces={setExplorePlaces}
              exploreplaces={exploreplaces.map((id) => placeEntities[id])}
            />
          )}
        />
        <Route
          path="/MapItinerary"
          render={() => (
            <MapItinerary
              places={places.map((id) => placeEntities[id])}
              removePlace={removePlace}
              tripDuration={tripDuration}
              handleAssignDay={handleAssignDay}
              setPlaceEntities={setPlaceEntities}
              placeEntities={placeEntities}
            />
          )}
        />
      </Switch>
    </Router>
  );
}

function mapStateToProps(state) {
  return {
    categoryStates: state,
  };
}

export default connect(mapStateToProps)(App);
