import { Redirect } from 'expo-router';
import React from 'react';

export default function AppEntry() {
  return <Redirect href="/login" />;
}