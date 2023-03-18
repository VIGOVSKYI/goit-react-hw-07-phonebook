import MyContacts from './components/MyContacts/MyContacts.jsx';

const App = () => {
  return (
 
      <div
        style={{
          height: '100vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 40,
          color: '#010101',
        }}
      >
        <MyContacts />
      </div>

  );
};

export default App;
