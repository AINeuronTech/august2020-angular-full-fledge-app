export interface IPhoto {
  albumId: string;
  id: string;
  title: string;
  url: string;
  thumbnailUrl: string;
}

export interface IPost {
  userId: string;
  id: string;
  title: string;
  body: string;
}

export interface IComment {
  postId: string;
  id: string;
  name: string;
  email: string;
  body: string;
}
