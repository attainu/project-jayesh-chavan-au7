# BLOOD_LINE

![Blood_Line](https://firebasestorage.googleapis.com/v0/b/blood-line-291504.appspot.com/o/Blood_Line.png?alt=media&token=990d720c-5d0a-4546-b0eb-9f512ef0a214)

## Setting up server

* install mongodb and start server
* npm install
* npm run devStart

## Setting up React client

* npm install
* npm start

## Production URL

[Click here to see project](https://blood-line.herokuapp.com/)

## | Technologies Used

* Backend : Node js with express js framework
* Database : MongoDB with mongoose ODM
* Client : React with create-react-app and Redux
* Firebase : For storing image and sending OTP
* Stripe : As payment gateway
* Emailjs : For sending email
* Fast2Sms : For sending sms notification

## About

    Blood Line is an attempt to connect people with similar blood groups and encourage them to volunteer for blood donation in urgent need as we all know that blood banks could run out of blood of some rare blood groups.

    With blood line userss can connect with each other through SMS with genuine volenteers who are willing to donate on urgent notice and users with rare blood groups can store there in prior for future emergencies.

## Backend APIs

### Home

* -- request GET 'https://blood-line.herokuapp.com/assets'

### Volunteer

* -- request POST 'https://blood-line.herokuapp.com/volunteer/signup'
* -- request POST 'https://blood-line.herokuapp.com/volunteer/login'
* -- request GET 'https://blood-line.herokuapp.com/volunteer/logout'
* -- request GET 'https://blood-line.herokuapp.com/volunteer/get-user'
* -- request POST 'https://blood-line.herokuapp.com/volunteer/update-user'
* -- request GET 'https://blood-line.herokuapp.com/volunteer/delete-user'
* -- request GET 'https://blood-line.herokuapp.com/volunteer/find-all'

### BloodBank

* -- request POST 'https://blood-line.herokuapp.com/bloodbank/signup'
* -- request POST 'https://blood-line.herokuapp.com/bloodbank/login'
* -- request GET 'https://blood-line.herokuapp.com/bloodbank/logout'
* -- request GET 'https://blood-line.herokuapp.com/bloodbank/get-bank'
* -- request POST 'https://blood-line.herokuapp.com/bloodbank/update-bank'
* -- request GET 'https://blood-line.herokuapp.com/bloodbank/delete-bank'
* -- request GET 'https://blood-line.herokuapp.com/bloodbank/find-all'

### Organise Camp

* -- request POST 'https://blood-line.herokuapp.com/organise/create'
* -- request POST 'https://blood-line.herokuapp.com/organise/update'
* -- request GET 'https://blood-line.herokuapp.com/organise/findall-camp'
* -- request POST 'https://blood-line.herokuapp.com/organise/camp-notification'

### Stripe

* -- request POST 'https://blood-line.herokuapp.com/stripe/donate'

### Emergency Notification

* -- request POST 'https://blood-line.herokuapp.com/emergency/notification'
