import React from 'react';
import { NavigationPathsEnum } from "@utilities/enums";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import {
  Home
} from '@pages';
  
// FR: Composant fonctionnel React pour la gestion des routes de navigation.
// EN: React functional component for managing navigation routes.
export const Navigations: React.FC = () => {
  
  // FR: Crée un routeur en définissant les chemins et les composants associés.
  // EN: Create a router by defining paths and their associated components.
  const router = createBrowserRouter([
    // {
    //   path: NavigationPathsEnum.notFound,
    //   element: <NotFound />,
    // },
    
    // FR: Définit la route pour la page d'accueil.
    // EN: Define the route for the home page.
    {
      path: NavigationPathsEnum.HOME,
      element: <Home />,
    },
  ]);

  // FR: Retourne le fournisseur du routeur pour encapsuler l'application.
  // EN: Return the router provider to encapsulate the application.
  return (
    <RouterProvider 
      // FR: Attribut pour les tests. 
      // EN: Attribute for testing.
      data-testid="navigations"
      router={router} 
    />
  );
};