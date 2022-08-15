import React, { useState } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import ScrollToTop from 'components/scroll-to-top/ScrollToTop';
import { Helmet } from "react-helmet-async";
import RootContainer from 'components/root/Root';
import PageWrapper from 'components/page-wrapper/PageWrapper';
import Home from 'pages/home/Home';
import { AppRoutes } from 'config/AppRoutes';
import About from 'pages/about/About';

function App() {
  const [count, setCount] = useState(0)
  const loc = useLocation()

  return (
    <React.Fragment>
      <Helmet>
        <title>Lenclume Hotel</title>
      </Helmet>

      <AnimatePresence exitBeforeEnter={true}>
        <Routes location={loc} key={loc.pathname}>
          <Route path="/" element={<RootContainer />}>
            <Route index element={<PageWrapper><ScrollToTop><Home /></ScrollToTop></PageWrapper>} />
            <Route path={AppRoutes.about} element={<PageWrapper><ScrollToTop><About /></ScrollToTop></PageWrapper>} />
          </Route>
        </Routes>
      </AnimatePresence>
    </React.Fragment>
  )
}

export default App;
