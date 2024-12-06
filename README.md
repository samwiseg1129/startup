# startup
cs260 startup project

## Project requirements
### Elevator pitch - Product Track
Product Track is your one stop shop for product management analytics. embed analytics to various parts of your website to track time spent on a page, number of clicks of a button, percentage of user who complete product workflow, etc. Easily embed these analytics using api key generator button and then adding it to your website. track your users and their many movements from an analytics dashboard here on Product track!

### Key Features
Key features include:
1. Analytics dashboard - a place to track the many statistics collected from your website/app users
2. API key generator - create endpoints with a click of the button that you can save on your website for each individual piece of data you would like to track
3. Login / User authentication - create an account from where you will access other functions

### How I will use each technology
1. HTML - I will use HTML to form the webapp from which users will have access to this tech
2. CSS - I will use CSS to style my website to be a full fledged analytics collector and dashboard
3. Javascript - I will use javascript to access data in my database, push new data to my database, and create functionalities such as api key generation, the analytics dashboard, etc
4. React - I will use react to help create some of the more complicated UI and functional pieces like the user tracking tools. 
5. Web services - i might employee a url shortener web service when generating individual links for website analytics as well as i will provide embeddable api endpoints for user tracking. 
6 . Authentication - I will have users login and authenticate their identities in order to access my tech
7. Database data - I will design and store data collected from users and their users in my database (likely supabase or firebase)
8. Websocket data - realtime analytics data from your individual websites. 


### Website design
![product track dashboard] (/startup/producttrack.png)





## Modified and added 
### HTML STARTUP NOTES:
- built HTML frameworks for each webpage
- restructured web app
- added placeholder (images) for all of the technologies
- added links between pages
- built login and registration pages
- header and head are different tags
    - header and footer go inside body

### CSS STARTUP NOTES:
- you link bootstrap in the header section and js bootstrap in body using <script> 
- footer is easy copy and paste. 
- learned about different bootstrap button options
- Cards look better on smaller items 
- Building so many divs makes these apps so deep on nesting. Is there a better/ easier way to do it?
- learned how to use the grid system for bootstrap (remember it uses 12 as its column default)
- Going to need to make more adjustments to UI once 


### JAVASCRIPT + REACT
- React is actually used as a way to nest/modularize functionality
- Router is the way to keep the same landing page but inject its contents
- javascript is used to write the functional/interactive components of the website. 
- used chart.js for some prebuilt components. modified line graph to be interactive. now need it to access actual user data on the backend. 



### UPDATE DEC 6
- React is a good way of modularizing a web app because you can inject different sections of code wherever you would like using component structuring
- hooks have been really interested to use as they allow for dynamic updates to static features. 
- state hook is to send changes and effect hook is to instigate them
- stressed about finishing this class lol
