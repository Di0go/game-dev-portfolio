import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import { IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle } from '@ionic/react';
import React from 'react';

const EscapeLab: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Escape Lab</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Escape Lab</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonCard>
                <img alt="Silhouette of mountains" src="public\Images\diogo2.png" />
                <IonCardHeader>
                <IonCardTitle>Diogo Pinto</IonCardTitle>
                <IonCardSubtitle>Game Developer</IonCardSubtitle>
                </IonCardHeader>
                <IonCardContent>Here's a small text description for the card content. Nothing more, nothing less.</IonCardContent>
              </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default EscapeLab;
