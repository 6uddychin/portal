import React, { useState, useEffect } from 'react';
import './App.css';
import EnhancedTable from './DataTable';
import MessagesTable from './MessagesTable';
import Navbar from './ui-components/Navbar'; 
import { Authenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import KnowledgeArticles from './ui-components/knowledgeArticles';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import WorkOrders from './ui-components/workOrder';
import Home from './ui-components/home';

function App() {
  const [data, setData] = useState([]);
  const [messagesData, setMessagesData] = useState([]);

  useEffect(() => {
    fetch('/data/vendor_portal_data.json')
      .then(response => response.json())
      .then(data => {
        setData(data);
      });

    fetch('/data/messages.json')
      .then(response => response.json())
      .then(data => {
        setMessagesData(data);
      });
  }, []);

  return (
    <Authenticator>
      {({ signOut, user }) => (
        <Router>
          <div className="App">
            <Navbar />
            <h1>{user.username}!</h1>
            {/* <EnhancedTable data={data} /> */}
      <div style={{ borderTop: '1px solid #ccc', padding: '20px 0' }}></div>
      {/* <MessagesTable data={messagesData} /> */}
      <Routes>
      <Route path="/WorkOrders" element={<WorkOrders />} />
      <Route path="/Home" element={<Home />} />


      <Route path="/KnowledgeArticles" element={<KnowledgeArticles />} />
      </Routes>


            <button onClick={signOut}>Sign out</button>
          </div>
        </Router>
      )}
    </Authenticator>
  );
}

export default App;

/*

            <Routes>
              <Route path="/" element={<EnhancedTable data={data} />} />
              <Route path="/messages" element={<MessagesTable data={messagesData} />} />
              <Route path="/knowledge-center" element={<KnowledgeArticles />} />
            </Routes>
            */