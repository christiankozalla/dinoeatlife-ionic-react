import axios from 'axios';
import { Post } from '../models/post';
import { Profile } from '../models/profile';

import { API_BASE_URL } from '../constants';

export const getPosts = async (): Promise<Post[]> => {
  const response = await axios({
    method: 'get',
    url: ` ${API_BASE_URL}/posts`,
  });

  return response.data;
};

export const getProfile = async (userId: string): Promise<Profile> => {
  const response = await axios({
    method: 'get',
    url: `${API_BASE_URL}/profile/${userId}`,
  });

  return response.data;
};
