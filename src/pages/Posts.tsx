import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { useState, useEffect } from 'react';
import { getPosts } from '../api/api';
import './Posts.css';

const Posts: React.FC = () => {
  const [posts, setPosts] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    (async () => {
      setLoading(true);
      const posts = await getPosts();
      setPosts(posts);
      setLoading(false);
    })();
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
        {loading ? 'Loading...' : JSON.stringify(posts)}
      </IonContent>
    </IonPage>
  );
};

export default Posts;
