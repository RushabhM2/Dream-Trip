import React, { useEffect, useState } from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import ExploreCard from '../components/explore-card';
import PlaceList from '../containers/place-list';
import TopBar from '../components/top-bar';

import classes from '../styles/recommendation';


function PlacesList({
  places,
  addPlace,
  exploreplaces,
  removePlace,
  loadPlaces,
}) {


  useEffect(() => {
    loadPlaces();
  }, []);

  let uniquePlaces = new Set(Object.values(exploreplaces));

  return (

    <div className={classes.root}>

      <TopBar
        heading="Recommendations"
        buttonPath="/MapItinerary"
        buttonName="Next"
      />
      <div style={{ padding: 30 }}>
        <Grid container direction="row" spacing={10} >
          <Grid item xs={6} role="recommended">
            <Typography component="h5" variant="h5" paragraph={true}>
              We've selected these top places for you:
            </Typography>
            <PlaceList
              key="PlaceList"
              places={places}
              removePlace={removePlace}
              addPlace={addPlace}
            />
          </Grid>
          <Grid item xs={6} role="explore">
            <Typography component="h5" variant="h5" paragraph={true}>
              You might also like...
            </Typography>
            <Grid
              container
              direction="row"
              wrap="wrap"
              justify="center"
              display="flex"
              spacing={2}
            >
              {[...uniquePlaces].map((exploreplace) => {
                return (
                  <Grid item>
                    <ExploreCard
                      key={exploreplace.place_id}
                      name={exploreplace.name}
                      address={exploreplace.formatted_address}
                      price={exploreplace.price_level}
                      rating={exploreplace.rating}
                      id={exploreplace.place_id}
                      addPlace={addPlace}
                    />
                  </Grid>
                );
              })}
            </Grid>
          </Grid>
        </Grid>
      </div>
      <div class="email-modal">

      </div>

    </div>

  );
}

export default PlacesList;
