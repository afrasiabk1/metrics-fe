import React, { useState, useEffect } from 'react';
import './App.css';
import MaterialTable from 'material-table'


function App() {

  const [data, setData] = useState([])
  const columns = [
    { title: "Date", field: "date" ,  width: '500%'},
    { title: "Customer", field: "customer" },
    { title: "New Accounts With Signals", field: "newAccountsWithSignals" },
    { title: "New Tam Accounts Ingested", field: "newTamAccountsIngested" },
    { title: "New Tam Accounts Segmented", field: "newTamAccountsSegmented" },
    { title: "New Tam Accounts Segmented %", field: "newTamAccountsSegmentedPc" },
    { title: "Accounts Contacted", field: "accountsContacted" },
    { title: "Prospects Found", field: "prospectsFound" },
    { title: "Prospects Contacted", field: "prospectsContacted" },
    { title: "Verified Emails Found", field: "verifiedEmailsFound" },
    { title: "Verified Emails Found %", field: "verifiedEmailsFoundPc" },
    { title: "Prospects Delivered", field: "prospectsDelivered" },
    { title: "Emails Bounced", field: "emailsBounced" },
    { title: "Emails Opened", field: "emailsOpened" },
    { title: "Emails Replied", field: "emailsReplied" },
    { title: "Reply Rate %", field: "replyRate" },
    { title: "Open To Reply Rate %", field: "openToReplyRate" },
    { title: "Open Rate %", field: "openRate" },
    { title: "Bounce Rate %", field: "bounceRate" }
  ]
  useEffect(() => {
    fetch("http://35.224.3.225:8080/metrics")
      .then(resp => resp.json())
      .then(resp => {
        setData(resp)
      })
  }, [])

  return (
    <div className="App">
      <h1 align="center">Asiko Daily Metrics</h1>
      <MaterialTable
        data={data}
        columns={columns}
      />
    </div>
  );
}

export default App;
