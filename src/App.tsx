import { Redirect, Route } from 'react-router-dom';
import {
  IonApp,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { homeOutline, leafOutline, cartOutline } from 'ionicons/icons';
import Home from './pages/Home';
import Posts from './pages/Posts';
import Lists from './pages/Lists';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';

/* Global styles */
import './theme/global.css';

/* Global State Provider */
import { AppContextProvider } from './State';

const App: React.FC = () => (
  <IonApp>
    <AppContextProvider>
      <IonReactRouter>
        <IonTabs>
          <IonRouterOutlet>
            <Route exact path='/home'>
              <Home />
            </Route>
            <Route exact path='/posts'>
              <Posts />
            </Route>
            <Route path='/lists'>
              <Lists />
            </Route>
            <Route exact path='/'>
              <Redirect to='/home' />
            </Route>
          </IonRouterOutlet>

          <IonTabBar slot='bottom'>
            <IonTabButton tab='home' href='/home'>
              <IonIcon icon={homeOutline} />
              <IonLabel>Home</IonLabel>
            </IonTabButton>
            <IonTabButton tab='posts' href='/posts'>
              <IonIcon icon={leafOutline} />
              <IonLabel>Posts</IonLabel>
            </IonTabButton>
            <IonTabButton tab='lists' href='/lists'>
              <IonIcon icon={cartOutline} />
              <IonLabel>Shopping List</IonLabel>
            </IonTabButton>
          </IonTabBar>
        </IonTabs>
      </IonReactRouter>
    </AppContextProvider>
  </IonApp>
);

export default App;
