/* @refresh reload */
import { render } from 'solid-js/web'
import { Router, Route } from "@solidjs/router";

import './index.css'
import MainLayout from './layouts/MainLayout';

import Home from "./pages/Home";
import About from './pages/About';
import Contact from './pages/Contact';
import Programs from './pages/Programs';
import NotFound from './pages/NotFound';
import WhoAreWe from './pages/WhoAreWe';
import Donate from './pages/Donate';
import Affiliation from './pages/Affiliation';
import { DonationContextProvider } from './globalContext/DonationsContext';

render(() => (
  <DonationContextProvider>
  <Router root={MainLayout}>
    <Route path="/" component={Home} />
    <Route path="/about" component={About} />
    <Route path="/programs" component={Programs} />
    <Route path="/who_are_we" component={WhoAreWe} />
    <Route path="/contact" component={Contact} />
    <Route path="/donation" component={Donate} />
    <Route path="/donation/:id" component={Donate} />
    <Route path="/affiliation" component={Affiliation} />
    <Route path="/*" component={NotFound} />
  </Router>
  </DonationContextProvider>
), document.getElementById("root")!);
