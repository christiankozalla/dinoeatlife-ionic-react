import { IonContent, IonHeader, IonImg, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { FRONTEND_BASE_URL } from '../constants';
import Login from '../components/Login';

import './Home.css';

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>DinoEat Home</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse='condense'>
          <IonToolbar>
            <IonTitle size='large'>DinoEat Home</IonTitle>
          </IonToolbar>
        </IonHeader>
        <main className='page'>
          <div className='page__header'>
            <div className='page__header__text'>
              <h1 className='page__header__title'>Welcome to DinoEat Life!</h1>
              <h2 className='page__header__subtitle'>
                Spice up your life, enhance your cooking and dining experience with your family!
              </h2>
            </div>
            <IonImg
              src={`${FRONTEND_BASE_URL}/assets/dino-red.png`}
              className='page__header__image'
            />
          </div>

          <Login />
        </main>
      </IonContent>
    </IonPage>
  );
};

export default Home;
