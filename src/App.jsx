import React from 'react';
import Header from './components/Header';
import Post from './Post';


function App() {
  return (
    <>
      <Header />
      <Post 
        author='Endreu Benites' 
        content='Conteúdo Teste'
      />
      <Post 
      author='Anonymous Benites' 
      content='Conteúdo bem tests'
      />
    </>
  )
}

export default App
