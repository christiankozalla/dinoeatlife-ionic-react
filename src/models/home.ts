import { Ingredient } from './ingredient';
import { Post } from './post';
import { Recipe } from './recipe';

/* Types for Later... */
// export interface Home {
//   id: number;
//   name: string;
//   posts: Post[];
//   recipes: Recipe[];
//   ingredients: Ingredient[];
//   isDeleted: boolean;
// }

/* Types for Development */
export interface Home {
  id?: number;
  name?: string;
  posts?: Post[];
  recipes?: Recipe[];
  ingredients?: Ingredient[];
  isDeleted?: boolean;
}
