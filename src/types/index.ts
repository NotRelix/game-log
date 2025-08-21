// Frontend Types
export interface LoginType {
  username: string;
  password: string;
}

export interface RegisterType {
  username: string;
  password: string;
  confirmPassword: string;
}

export interface AuthType {
  id: number;
  username: string;
  role: number;
  exp: number;
}

export interface PostsType {
  posts: PostType[];
  editorsPosts: PostType[];
}

// Schema Types
export interface PostType {
  id: number;
  title: string;
  body: string;
  published: boolean;
  createdAt: Date;
  updatedAt: Date;
  authorId: number;
  headerImgPath: string | null;
}

export interface CommentType {
  id: number;
  comment: string;
  createdAt: Date;
  updatedAt: Date;
  postId: number;
  authorId: number;
  parentId: number;
}
