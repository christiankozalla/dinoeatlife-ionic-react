import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonSpinner,
  IonCard,
  IonCardHeader,
  IonCardContent,
  IonCardTitle,
  IonCardSubtitle,
} from '@ionic/react';
import { useState, useEffect, useContext } from 'react';
import { getPosts, getProfile } from '../api/api';
import dayjs from 'dayjs';
import './Posts.css';

import { AppContext } from '../State';

// Types
import { Post } from '../models/post';
import { Profile } from '../models/profile';

const Posts: React.FC = () => {
  const { state, dispatch } = useContext(AppContext);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    getPosts()
      .then((posts: Post[]) => {
        posts.forEach(({ userId }) => {
          getProfile(userId.toString())
            .then((profile) => dispatch({ type: 'setProfile', payload: profile }))
            .catch((err) => console.error(err));
        });

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
            <IonTitle size='large'>DinoEat Posts</IonTitle>
          </IonToolbar>
        </IonHeader>
        {loading ? (
          <IonSpinner name='dots' />
        ) : (
          state.home?.posts?.map((post) => (
            <IonCard key={post.id}>
              <IonCardHeader>
                <IonCardSubtitle>{dayjs(post.createdAt).format('DD.MM.YY')}</IonCardSubtitle>
                <IonCardTitle>
                  {state.global.profiles.find((profile) => profile.userId === post.userId)?.name}
                </IonCardTitle>
              </IonCardHeader>
              <IonCardContent>{post.content}</IonCardContent>
            </IonCard>
          ))
        )}
      </IonContent>
    </IonPage>
  );
};

export default Posts;
