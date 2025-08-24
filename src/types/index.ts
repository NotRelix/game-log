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

export interface CommentsType {
  comments: CommentType[];
  totalCount: number;
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
  author: string;
}

export interface CommentType {
  id: number;
  comment: string;
  createdAt: Date;
  updatedAt: Date;
  postId: number;
  authorId: number;
  replies: ReplyType[];
}

export interface ReplyType {
  id: number;
  comment: string;
  createdAt: Date;
  updatedAt: Date;
  postId: number;
  authorId: number;
  parentId: number;
}
