import MyContacts from './components/MyContacts/MyContacts.jsx';
// import { Provider } from 'react-redux';
// import { store } from './redux/store';

const App = () => {
  return (
    // <Provider store={store}>
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
    // </Provider>
  );
};

export default App;
