# clevertap-web
Wrapper to integrate CleverTap Web SDK with any SPA (React, Vue, Angular).

 **Note:** Events will not be caputed on localhost, events are only captured on production.

 - Implementation Example (React)
[React-CleverTap-Example](https://github.com/Md-Mudassir/react-CleverTap-example)

### Usage

- Installation `npm install -D clevertap-web`
- Initialize in your root

```js
import CleverTapWeb from 'clevertap-web';

CleverTapWeb.initialize("CLEVERTAP_ACCOUNT_ID");
```

### API

- Identify Users
```js
import CleverTapWeb from 'clevertap-web';

// with the exception of one of Identity, Email, or FBID
// each of the following fields is optional

CleverTapWeb.onUserLogin({
 "Site": {
   "Name": "Jack Montana",            // String
   "Identity": 61026032,              // String or number
   "Email": "jack@gmail.com",         // Email address of the user
   "Phone": "+14155551234",           // Phone (with the country code)
   "Gender": "M",                     // Can be either M or F
   "DOB": new Date(),                 // Date of Birth. Date object
// optional fields. controls whether the user will be sent email, push etc.
   "MSG-email": false,                // Disable email notifications
   "MSG-push": true,                  // Enable push notifications
   "MSG-sms": true,                   // Enable sms notifications
   "MSG-whatsapp": true,              // Enable WhatsApp notifications
 }
})
```

- Push Event

```js
import CleverTapWeb from 'clevertap-web';

var payload = {
  "Product name":"Casio Chronograph Watch",
  "Category":"Mens Accessories",
  "Price":59.99,
}

CleverTapWeb.event("Product Viewed", payload)

// Payload is optional, if you dont want to pass it, you can just do 
CleverTapWeb.event("Product Viewed")
```

- Profile Push
```js
import CleverTapWeb from 'clevertap-web';

var payload = {
  "Site": {
   "Name": "Jack Montana", // User's name
   "Age": 28
 }
}

CleverTapWeb.profile(payload)
```

- Logout
```js
import CleverTapWeb from 'clevertap-web';

CleverTapWeb.logout()
```
