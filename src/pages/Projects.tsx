import { IonCol, IonContent, IonGrid, IonHeader, IonPage, IonRow, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Projects.css';
import React from 'react';
import { IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle } from '@ionic/react';
import { IonRippleEffect } from '@ionic/react';
import { IonButton } from '@ionic/react';

const Projects: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Projects</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Projects</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonGrid>
          <IonRow>
            <IonCol>
            <IonCard>
                <img alt="Silhouette of mountains" src="public\Images\Uno.png" />
                <IonCardHeader>
                <IonCardTitle style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>Project Uno</IonCardTitle>
                <IonCardSubtitle style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>Unity | Mobile</IonCardSubtitle>
                </IonCardHeader>
                <IonCardContent style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                  <IonButton shape="round" href="Uno">See more...</IonButton>
                </IonCardContent>
              </IonCard>
            </IonCol>
            <IonCol>
            <IonCard>
                <img alt="Silhouette of mountains" src="public\Images\SlimeySlimey.png" />
                <IonCardHeader>
                <IonCardTitle style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>EscapeLab</IonCardTitle>
                <IonCardSubtitle style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>Unity | PC</IonCardSubtitle>
                </IonCardHeader>
                <IonCardContent style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                  <IonButton shape="round" href="Tab3">See more...</IonButton>
                </IonCardContent>
              </IonCard>
            </IonCol>
            <IonCol>
            <IonCard>
                <img alt="Silhouette of mountains" src="public\Images\SniperCity.png" />
                <IonCardHeader>
                <IonCardTitle style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>SniperCity VR</IonCardTitle>
                <IonCardSubtitle style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>Unity | PC</IonCardSubtitle>
                </IonCardHeader>
                <IonCardContent style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                  <IonButton shape="round" href="Tab3">See more...</IonButton>
                </IonCardContent>
              </IonCard>
            </IonCol>
          </IonRow>
        </IonGrid>

        {/* Espaço */}

        <IonGrid>
          <IonRow>
            <IonCol>
            <IonCard>
                <img alt="Silhouette of mountains" src="public\Images\DiveKing.png" />
                <IonCardHeader>
                <IonCardTitle style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>Dive King</IonCardTitle>
                <IonCardSubtitle style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>Unity | PC</IonCardSubtitle>
                </IonCardHeader>
                <IonCardContent style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                  <IonButton shape="round" href="Tab3">See more...</IonButton>
                </IonCardContent>
              </IonCard>
            </IonCol>
            <IonCol>
            <IonCard>
                <img alt="Silhouette of mountains" src="public\Images\JFigther.png" />
                <IonCardHeader>
                <IonCardTitle style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>JFigther</IonCardTitle>
                <IonCardSubtitle style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>Processing | PC</IonCardSubtitle>
                </IonCardHeader>
                <IonCardContent style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                  <IonButton shape="round" href="Tab3">See more...</IonButton>
                </IonCardContent>
              </IonCard>
            </IonCol>
            <IonCol>
            <IonCard>
                <img alt="Silhouette of mountains" src="public\Images\diogo2.png" />
                <IonCardHeader>
                <IonCardTitle style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>Diogo Pinto</IonCardTitle>
                <IonCardSubtitle style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>Game Developer</IonCardSubtitle>
                </IonCardHeader>
                <IonCardContent style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                  <IonButton shape="round" href="Tab3">See more...</IonButton>
                </IonCardContent>
              </IonCard>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default Projects;
