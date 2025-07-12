import { createContext, useContext, useState } from 'react';
import type { ReactNode } from 'react';

export type Post = {
  id: string;
  content: string;
  // Add more fields as needed
};

interface PostContextType {
  posts: Posts;
  addPost: (platform: keyof Posts, post: Post) => void;
  removePost: (platform: keyof Posts) => void;
  updatePost: (platform: keyof Posts, post: Post) => void;
  initPosts: (posts: Posts) => void;
}

export type Posts = {
  Facebook?: Post;
  Instagram?: Post;
  LinkedIn?: Post;
  Reddit?: Post;
  TikTok?: Post;
  Snapchat?: Post;
  Youtube?: Post;
  X?: Post;
};

const PostContext = createContext<PostContextType | undefined>(undefined);

export const PostProvider = ({ children }: { children: ReactNode }) => {
  const [posts, setPosts] = useState<Posts>({});

  const initPosts = (newPosts: Posts) => {
    setPosts(newPosts);
  };

  const addPost = (platform: keyof Posts, post: Post) => {
    setPosts((prev) => ({ ...prev, [platform]: post }));
  };

  const removePost = (platform: keyof Posts) => {
    setPosts((prev) => {
      const updated = { ...prev };
      delete updated[platform];
      return updated;
    });
  };

  const updatePost = (platform: keyof Posts, updatedPost: Post) => {
    setPosts((prev) => ({ ...prev, [platform]: updatedPost }));
  };

  return (
    <PostContext.Provider value={{ posts, addPost, removePost, updatePost, initPosts }}>
      {children}
    </PostContext.Provider>
  );
};

export const usePosts = () => {
  const context = useContext(PostContext);
  if (!context) {
    throw new Error('usePosts must be used within a PostProvider');
  }
  return context;
};
