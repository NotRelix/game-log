export interface LoginType {
  username: string;
  password: string;
}

export interface RegisterType {
  username: string;
  password: string;
  confirmPassword: string;
}

export interface PostType {
  id: number;
  title: string;
  body: string;
  published: boolean;
  createdAt: Date;
  updatedAt: Date;
  authorId: number;
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
