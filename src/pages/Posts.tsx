import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { useState, useEffect } from 'react';
import { getPosts } from '../api/api';
import './Posts.css';

// Types
import { Post } from '../models/post';

const Posts: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    getPosts()
      .then((posts) => {
        setPosts(posts);
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
        {loading ? 'Loading...' : JSON.stringify(posts)}
      </IonContent>
    </IonPage>
  );
};

export default Posts;
