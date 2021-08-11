import axios from 'axios';
import { Post } from '../models/post';
import { Profile } from '../models/profile';

const BASE_URL =
  process.env.NODE_ENV === 'production' ? 'http://dinoeat.life/api' : 'http://localhost:4000';

export const getPosts = async (): Promise<Post[]> => {
  const response = await axios({
    method: 'get',
    url: ` ${BASE_URL}/posts`,
  });

  return response.data;
};

export const getProfile = async (userId: string): Promise<Profile> => {
  const response = await axios({
    method: 'get',
    url: `${BASE_URL}/profile/${userId}`,
  });

  return response.data;
};
