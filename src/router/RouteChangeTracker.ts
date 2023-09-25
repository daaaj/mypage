import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';
import ReactGA from 'react-ga';

export default function RouteChangeTracker() {
  const location = useLocation();
  const [init, setInit] = useState(false);

  useEffect(() => {
    if (!window.location.href.includes('locallhost')) {
      ReactGA.initialize(process.env.REACT_APP_GA_TRACKING_ID, { debug: true });
    }
    setInit(true);
  }, []);

  useEffect(() => {
    if (init) {
      ReactGA.pageview(location.pathname + location.search);
    }
  }, [init, location]);

  return null;
}
