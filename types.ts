import React from 'react';

export interface Lesson {
  id: string;
  title: string;
  content: string;
  imageUrl?: string;
  tags?: string[];
}

export interface Module {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  lessons: Lesson[];
}

export interface ChatMessage {
  id: string;
  role: 'user' | 'model';
  text: string;
  isError?: boolean;
}

export enum Tab {
  HOME = 'HOME',
  LEARN = 'LEARN',
  PROJECTS = 'PROJECTS',
  TUTOR = 'TUTOR'
}