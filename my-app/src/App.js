import React, { useState } from 'react';
// import {ThemeProvider} from 'styled-components';

// import {redTheme, blueTheme, greenTheme} from './components/theming/Themes';
// import Navbar from './components/theming/Navbar';
// import Button from './components/theming/Button';
// import Content from './components/theming/Content';
import { Banner, SecondBanner } from './components/Banners';

import './App.css';

const App = () => {

  // const [theme, setTheme] = useState(redTheme);

  // const handleTheme = () => {
  //   if(theme.primaryColor === 'red') {
  //     setTheme(greenTheme);
  //   } else if(theme.primaryColor === 'green') {
  //     setTheme(blueTheme);
  //   } else {
  //     setTheme(redTheme);
  //   }
  // };

  return (
    // <ThemeProvider theme={theme}>
    //   <main>
    //     <Navbar>
    //       <Button onClick={handleTheme}>toggle theme</Button>
    //     </Navbar>
    //     <Content/>
    //   </main>
    // </ThemeProvider>
    <div>
      <Banner>
        <h1>first button</h1>
      </Banner>
      <SecondBanner>
        <h1>second button</h1>
      </SecondBanner>
    </div>
  );
}

export default App;
