import React from 'react';

import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Post from './components/Post';

import styles from './App.module.css';


function App() {
  return (
    <>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post 
            author='Endreu Benites' 
            content='Conteúdo Teste'
          />
          <Post 
            author='Anonymous Benites' 
            content='Conteúdo bem tests'
          />
        </main>
      </div>
    </>
  )
}

export default App;
