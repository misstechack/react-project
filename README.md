# Steps to switch to React 18
  To switch a project to React 18, there are generally three changes that need to be made.

  ## Update the resolutions in your root package.json to the new versions of @types/react and @types/react-dom:
  ### package.json
  ```
  "resolutions": {
      "@types/react": "^18",
      "@types/react-dom": "^18",
  },
  ```

  ## Update the react and react-dom dependencies in your packages/app/package.json to the new versions:
  ### packages/app/package.json
  ```
  "dependencies": {
      ...
      "react": "^18.0.2",
      "react-dom": "^18.0.2",
      ...
  },
  ```

  ## Update packages/app/src/index.tsx to use the new react-dom/client API to render the app:
  ### packages/app/src/index.tsx
  ```
  ...
  import ReactDOM from 'react-dom/client';
  ...

  ReactDOM.createRoot(document.getElementById('root')!).render(<App />);
  ```

Once these steps are done you should be able to run your app and see it working as before, except now using React 18.
