import { IonCol, IonContent, IonGrid, IonHeader, IonPage, IonRow, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './AboutMe.css';
import React from 'react';
import { IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle } from '@ionic/react';
import { IonItem, IonLabel, IonList } from '@ionic/react';
import { IonChip, IonAvatar, IonIcon } from '@ionic/react';
import { close, closeCircle, pin, star, starHalf, logoGithub, mail, logoLinkedin } from 'ionicons/icons';
import { IonButton } from '@ionic/react';

const AboutMe: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>About Me</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">About Me</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonGrid>
          <IonRow>
            <IonCol></IonCol>
            <IonCol size="8">
              <IonCard>
                <div className="centered-image-container">
                  <img src="public\Images\diogo2.png" className="centered-image"/>
                </div>
                <IonCardHeader>
                <IonCardTitle style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }} >Diogo Pinto</IonCardTitle>
                <IonCardSubtitle style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }} >Game Programmer</IonCardSubtitle>
                </IonCardHeader>
                <IonCardContent>
                  <h2><b>Introduction</b></h2><br/>
                  Hello 🎮! <br/>
                  My name is Diogo and I am 20 years old, I am currently studying Game Development at IPMAIA. <br/>
                  I've discovered my passion for games at a young age and my passion for programming not long after. <br/>
                  <br/>
                  <h2><b>Experience</b></h2><br/>
                  <b>Project RED - Programmer (2023 - Current)</b><br/>
                  - Worked with Augmented Reality (ARCore, ARKit, ARFoundation).<br/>
                  - Worked with Google's Media Pipe.<br/>
                  - Worked with C# and Unity.<br/>
                  <br/>
                  <h2><b>Education</b></h2><br/>
                  <b>IPMAIA - Game Development (2021 - Current)</b><br/>
                  - Game Programming.<br/>
                  - Game Design and Game Fundamentals.<br/>
                  - Virtual Reality and Computer Vision.<br/>
                  <br/>
                  You can check my projects on the next tab and my contact information and skills right below!
                </IonCardContent>
                <IonList inset={true}>
                <IonGrid>
                <IonRow>
                <IonCol>
                <IonItem>
                  <IonLabel>Unity</IonLabel>
                  <IonChip color="warning">
                    <IonLabel>5</IonLabel>
                    <IonIcon icon={star} color="warning"></IonIcon>
                  </IonChip>
                </IonItem>
                <IonItem>
                  <IonLabel>C#</IonLabel>
                  <IonChip color="warning">
                    <IonLabel>5</IonLabel>
                    <IonIcon icon={star} color="warning"></IonIcon>
                  </IonChip>
                </IonItem>
                <IonItem>
                  <IonLabel>Git, Subversion</IonLabel>
                  <IonChip color="warning">
                    <IonLabel>5</IonLabel>
                    <IonIcon icon={star} color="warning"></IonIcon>
                  </IonChip>
                </IonItem>
                <IonItem>
                  <IonLabel>Processing</IonLabel>
                  <IonChip color="secondary">
                    <IonLabel>4</IonLabel>
                    <IonIcon icon={star} color="secondary"></IonIcon>
                  </IonChip>
                </IonItem>
                <IonItem>
                  <IonLabel>Linux</IonLabel>
                  <IonChip color="secondary">
                    <IonLabel>4</IonLabel>
                    <IonIcon icon={star} color="secondary"></IonIcon>
                  </IonChip>
                </IonItem>
                <IonItem>
                  <IonLabel>Augmented Reality</IonLabel>
                  <IonChip color="secondary">
                    <IonLabel>4</IonLabel>
                    <IonIcon icon={star} color="secondary"></IonIcon>
                  </IonChip>
                </IonItem>
                </IonCol>
                <IonCol>
                <IonItem>
                  <IonLabel>C++</IonLabel>
                  <IonChip color="success">
                    <IonLabel>3</IonLabel>
                    <IonIcon icon={star} color="success"></IonIcon>
                  </IonChip>
                </IonItem>
                <IonItem>
                  <IonLabel>Python</IonLabel>
                  <IonChip color="success">
                    <IonLabel>3</IonLabel>
                    <IonIcon icon={star} color="success"></IonIcon>
                  </IonChip>
                </IonItem>
                <IonItem>
                  <IonLabel>Virtual Reality</IonLabel>
                  <IonChip color="success">
                    <IonLabel>3</IonLabel>
                    <IonIcon icon={star} color="success"></IonIcon>
                  </IonChip>
                </IonItem>
                <IonItem>
                  <IonLabel>Network Programming</IonLabel>
                  <IonChip color="success">
                    <IonLabel>3</IonLabel>
                    <IonIcon icon={star} color="success"></IonIcon>
                  </IonChip>
                </IonItem>
                <IonItem>
                  <IonLabel>HTML/CSS</IonLabel>
                  <IonChip color="danger">
                    <IonLabel>2</IonLabel>
                    <IonIcon icon={star} color="danger"></IonIcon>
                  </IonChip>
                </IonItem>
                <IonItem>
                  <IonLabel>Unreal Engine</IonLabel>
                  <IonChip color="danger">
                    <IonLabel>2</IonLabel>
                    <IonIcon icon={star} color="danger"></IonIcon>
                  </IonChip>
                </IonItem>
                </IonCol>
                </IonRow>
                </IonGrid>
              </IonList>
              <IonGrid>
              <IonRow style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              <IonButton href="https://github.com/Di0go" fill="clear" color="success">
              <IonChip color="success"> GitHub
                    <IonIcon icon={logoGithub} color="success"></IonIcon>
              </IonChip>
              </IonButton>
              <IonButton href="mailto:diogopinto301@gmail.com" fill="clear" color="success">
              <IonChip color="success"> E-mail
                    <IonIcon icon={mail} color="success"></IonIcon>
              </IonChip>
              </IonButton>
              <IonButton href="https://www.linkedin.com/" fill="clear" color="success">
              <IonChip color="success"> LinkedIn
                    <IonIcon icon={logoLinkedin} color="success"></IonIcon>
              </IonChip>
              </IonButton>
              </IonRow>
              </IonGrid>
              </IonCard>
            </IonCol>
            <IonCol></IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default AboutMe;
