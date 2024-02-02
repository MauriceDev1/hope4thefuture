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

render(() => (
  <Router root={MainLayout}>
    <Route path="/" component={Home} />
    <Route path="/about" component={About} />
    <Route path="/programs" component={Programs} />
    <Route path="/who_are_we" component={WhoAreWe} />
    <Route path="/contact" component={Contact} />
    <Route path="/*" component={NotFound} />
  </Router>
), document.getElementById("root")!);