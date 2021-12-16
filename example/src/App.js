import logo from './logo.svg';
import './App.css';
import CleverTapWeb from 'clevertap-web';

//Identifying user
CleverTapWeb.onUserLogin({
  Site: {
    Name: 'Jack Montana', // String
    Identity: 61026032, // String or number
    Email: 'jack@gmail.com', // Email address of the user
    Phone: '+14155551234', // Phone (with the country code)
    Gender: 'M', // Can be either M or F
    DOB: new Date(), // Date of Birth. Date object
    // optional fields. controls whether the user will be sent email, push etc.
    'MSG-email': false, // Disable email notifications
    'MSG-push': true, // Enable push notifications
    'MSG-sms': true, // Enable sms notifications
    'MSG-whatsapp': true, // Enable WhatsApp notifications
  },
});

var payload = {
  'Product name': 'Casio Chronograph Watch',
  Category: 'Mens Accessories',
  Price: 59.99,
};

function sendEvent() {
  CleverTapWeb.event('Web Event Captured', payload);
}

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
        <div>
          <button onClick={sendEvent}>Push Event</button>
        </div>
      </header>
    </div>
  );
}

export default App;
