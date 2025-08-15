export interface PostType {
  id: number;
  title: string;
  body: string;
  published: boolean;
  createdAt: Date;
  updatedAt: Date;
  authorId: number;
}
