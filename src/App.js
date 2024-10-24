import React from 'react';
import Header from './componentes/Header';
import Hero from './componentes/Hero';
import Skills from './componentes/Skills';
import Projects from './componentes/Projects';
import Contact from './componentes/Contact';
import Parse from 'parse/dist/parse.min.js';
const PARSE_APPLICATION_ID = 'k0YhGSDi7eL1PY9lohuXxrxSCaeAuuxQjRMsBqmK';
const PARSE_HOST_URL = 'https://parseapi.back4app.com/';
const PARSE_JAVASCRIPT_KEY = 'VeYTFOrowkHTLHPDDmkCggx3pZuxcfZD8aOvjciu';
Parse.initialize(PARSE_APPLICATION_ID, PARSE_JAVASCRIPT_KEY);
Parse.serverURL = PARSE_HOST_URL;
function App() {
  return (
    <div>
      <Header />
      <Hero />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
