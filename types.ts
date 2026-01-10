import React from 'react';

export interface Feature {
  title: string;
  description: string;
  icon: React.ReactNode;
}

export interface Plan {
  name: string;
  features: string[];
  cta: string;
}

export interface ProcessStep {
  number: number;
  title: string;
  description: string;
}