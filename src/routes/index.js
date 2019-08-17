import React from "react";
import { Switch, Route } from "react-router-dom";

// PAGES
import {
  Login,
  Featured,
  Podcasts,
  Charts,
  Genres,
  NewReleases,
  NewPlaylist,
  Discover,
  Search,
  Collection,
  Account,
  Error404
} from "pages";

const Routes = () => (
  <Switch>
    <Route exact path="/" component={Login} />
    <Route exact path="/login" component={Login} />
    <Route exact path="/browse/featured" component={Featured} />
    <Route exact path="/browse/podcasts" component={Podcasts} />
    <Route exact path="/browse/charts" component={Charts} />
    <Route exact path="/browse/genres" component={Genres} />
    <Route exact path="/browse/newreleases" component={NewReleases} />
    <Route exact path="/browse/discover" component={Discover} />
    <Route exact path="/search/recent" component={Search} />
    <Route exact path="/collection/playlists" component={Collection} />
    <Route exact path="/playlist/new" component={NewPlaylist} />
    {/* <Route exact path="/playlist/:id" component={Playlist} /> */}
    <Route exact path="/settings/account" component={Account} />
    <Route path="*" component={Error404} />
  </Switch>
);

export default Routes;
