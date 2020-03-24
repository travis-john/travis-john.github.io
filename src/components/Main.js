import React from 'react';

const Main = ({children}) => {
    return(
      <main role='main' id='main-content'>
        {children}
      </main>
    );
}

export default Main;
