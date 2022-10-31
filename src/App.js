import React from 'react';
import { IonApp } from '@ionic/react';
import {BrowserRouter, Route} from 'react-router-dom';
import Moods from './pages/Moods';
import Books from './pages/Books';


function App(){
    return (
        <IonApp>
            <BrowserRouter>
            <Route exact path="/">
                <Moods />
            </Route>
            
            <Route exact path="/books/:idMood">
                <Books />
            </Route>

            </BrowserRouter>
         </IonApp>
    );
}

export default App;