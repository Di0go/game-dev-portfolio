import { Redirect, Route } from 'react-router-dom';
import {
  IonApp,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
  setupIonicReact
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { ellipse, square, triangle, informationOutline, codeSlashOutline } from 'ionicons/icons';

import AboutMe from './pages/AboutMe';
import Projects from './pages/Projects';
import Uno from './pages/Uno';
import EscapeLab from './pages/EscapeLab';

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

setupIonicReact();

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonTabs>
        <IonRouterOutlet>
          <Route exact path="/aboutme">
            <AboutMe />
          </Route>
          <Route exact path="/projects">
            <Projects />
          </Route>
          <Route exact path="/uno">
            <Uno />
          </Route>
          <Route exact path="/escapelab">
            <EscapeLab />
          </Route>
          <Route exact path="/">
            <Redirect to="/aboutme" />
          </Route>
        </IonRouterOutlet>
        <IonTabBar slot="bottom">
          <IonTabButton tab="aboutme" href="/aboutme">
            <IonIcon aria-hidden="true" icon={informationOutline} />
            <IonLabel>About Me</IonLabel>
          </IonTabButton>
          <IonTabButton tab="projects" href="/projects">
            <IonIcon aria-hidden="true" icon={codeSlashOutline} />
            <IonLabel>Projects</IonLabel>
          </IonTabButton>
        </IonTabBar>
      </IonTabs>
    </IonReactRouter>
  </IonApp>
);

export default App;
