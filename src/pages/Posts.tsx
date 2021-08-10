import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { useState, useEffect, useContext } from 'react';
import { getPosts } from '../api/api';
import './Posts.css';

import { AppContext } from '../State';

// Types
import { Post } from '../models/post';

const Posts: React.FC = () => {
  const { state, dispatch } = useContext(AppContext);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    getPosts()
      .then((posts: Post[]) => {
        dispatch({
          type: 'setPosts',
          payload: posts,
        });
        setLoading(false);
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>DinoEat Posts</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse='condense'>
          <IonToolbar>
            <IonTitle size='large'>DineEat Posts</IonTitle>
          </IonToolbar>
        </IonHeader>
        {loading ? 'Loading...' : JSON.stringify(state.home?.posts)}
      </IonContent>
    </IonPage>
  );
};

export default Posts;
