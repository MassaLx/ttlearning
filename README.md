# BeerFinder
It's a web application to do a search operation for consultants in a company.
https://gentle-tundra-40202.herokuapp.com/


#Introduction

This repository holds a web application of lsearching for consultants. I used java springboot(backend),angular(frontend) and MySql.
By sending request to the backend, this web application can get data from the ClearDb binded with heroku.

I used heroku to deploy this application.


##Table of Contents

1. [Architecture](#architecture)
2. [Workflow](#workflow)
3. [Features](#features)
4. [Roadmap](#roadmap)
5. [Contributing to the project](#contributing)
6. [Reference](#reference)


#Architecture
The web application uses MVC web architecture.

![architecture](https://github.com/MassaLx/BeerFinder/blob/master/src/main/resources/Architecture.png)

The browser(front-end) sends request to controller(back-end). The controller fetches data from database. Then the model injects data to template to render into view html.

   Browser ------> request(frontend) ----->   controller(backend) ---------> response(frontend)
                                              
                                                                             
                                                                             

#Workflow
1. Open the website via url.
2. Search name or other fields in the inputbox.
3. Get all information with highlight.





#Features

1. Ability to search consultants based on their name, position, degree, application specialties, career fields, areas of Expertise and     Personal Interests. .
2. Automatically return all information of one consultant.
3. Ability to highlight my search result.
4. Responsive (looks great on all screen sizes).


#Roadmap

1. Add new consultant information into the database via website.
2. Make the frontend webpages more beautiful.
3. Add some new functions, for example sorting by need.

#Contributing
Everyone is encouraged to help improved this project.





##Submitting an Issue

I use the [GitHub issue tracker](https://github.com/MassaLx/BeerFinder/issues) to track bugs and features. Ideally, a bug report should include a pull request with failing specs, and maybe even a fix!

##Submitting a Pull Request

1. Fork the project.
2. Create a topic branch.
3. Implement your feature or bug fix.
4. Commit and push your changes.
5. Submit a pull request (to the development branch).

#Reference

1. https://ttlearning.com/consultants/
   Use the data of consultants to make my database for search.
2. https://www.npmjs.com/package/angular-cli#prerequisites
   The frontend knowledge.
3. https://docs.spring.io/spring-boot/docs/current-SNAPSHOT/reference/htmlsingle/#getting-started-installing-the-cli
   The backend knowledge.
4. https://docs.spring.io/spring-data/jpa/docs/current/reference/html/#jpa.query-methods.at-query
   Set up the search method.
5. https://stackoverflow.com/questions/15519713/highlighting-a-filtered-result-in-angularjs
   Highlight function in frontend.
6. https://devcenter.heroku.com/articles/deploying-spring-boot-apps-to-heroku#connecting-to-a-database
   Deploying a springboot application via heroku and migrate local database to server.
7. https://springframework.guru/spring-boot-web-application-part-4-spring-mvc/
    Set up the backend.
