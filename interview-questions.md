# ASSESSMENT 6: Interview Practice Questions
Answer the following questions.

First, without external resources. Challenge yourself to answer from memory.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely on your own, there is always something more to learn. Write your researched answer in your OWN WORDS.

1. As a developer, I am creating a Rails application with a model called Cohort that has_many students, 
but OOPS! I forgot to add the foreign key. 
How can I fix this mistake? What is the name of the foreign key? 
Would the foreign key be on the Cohort model or the Student model?

  Your answer: The foreign key would be cohort_id within the has_many students. 
  Each table will have primary keys, called id. 
  cohort_id, is the foreign key that will reference the primary key in Cohort model.

  Researched answer: As an integer data type the foreign key would be cohort_id within the has_many students.
  A foreign key is the integer that matches the primary key in the main model. 
  This is what makes it possible for both tables to refer to each other. 
  The primary key is automatically made, but the foreign key must be added to the non-primary table. 
  Foreign key is on Student model and would be called cohort_id. Each table will have primary keys, called id. 

 
2. Which RESTful routes must always be passed params? Why?

  Your answer: The RESTFul routes that must always be passed params are Show, Edit, Update and Destroy. 
  They act on a single instance of a database. There are private params that check information that matches. 

  Researched answer: The RESTful routs Show, Edit, Update and Destroy must always be passed by params 
  because they point to the specific data called by an ID.


3. Name three rails generator commands. What is created by each?

Rails generator commands are a tool in Ruby on Rails's terminal commands that speed up the work. 
In Rails, the command helps make parts of the database.

  Your answer: The three types of rail generator commands are Rails generate; controller, model, and resource.
   Rails generate controller-creates a controller.
   Rails generate model- creates a model that can be filled with data. 
   Rails generate migration-adds a colum to a model.

  Researched answer: 

Rails generate - Gives a list of available generators such as assets, channel, controller, generator, etc. 

Rails generate controller, is used to make your own controller with expecting parameters. 
It creates the controller file, a view file, a functional test file, a helper for the view, a JS file, and a stylesheet file. 

Rails generate model, creates data models. It creates the model file and a migration file which describes the changes being made to the schema. 

Rails generate initializer, invokes a new generator. 

Rails generate scaffold, generates major pieces of an application.
It is a way to automatically create the models, views, and controllers for a new resource or the basic structure of a Rails project. 
It also includes a new route and a migration to prepare the database. It also adds a unique property to a field. 

Rails generate migration, adds a column to an existing model.

4. Consider the Rails routes below. What is the name of the controller method that would be called by each route? What action would each of the controller methods perform?

                                                
action: "GET"    location: /students            CONTROLLER METHOD: students#index  (displays a list of all the students). 
The controller method index represents the R in CRUD and is the Rails convention for listing all the items in a particular model, or show all

action: "POST"   location: /students             CONTROLLER METHOD:students#create (creates a new instance of student)
The controller method create represents the C in CRUD and is the Rails convention for adding information to the database

action: "GET"    location: /students/new         CONTROLLER METHOD:students#new. (returns an HTML form for creating a new student)
The controller method new represents a midway point between C and R in CRUD and is the Rails convention for the route that displays a form to the user

action: "GET"    location: /students/2           CONTROLLER METHOD:students#show (displays a specific student with an id of 2)
The controller method show represents the R in CRUD and is the Rails convention for listing one item in a particular model, or show one

action: "GET"    location: /students/2/edit      CONTROLLER METHOD:students#edit. (returns an HTML form for editing information about the student with an id of 2)

action: "PATCH"  location: /students/2           CONTROLLER METHOD:students#update (updates a student with an id of 2)
The controller method update represents the U in CRUD and is the Rails convention for modifying information in the database

action: "DELETE" location: /students/2           CONTROLLER METHOD:student#destroy (would call the destroy method and would deletes a specific student with id of 2)
The controller method destroy represents the D in CRUD and is the Rails convention for removing information from the database


5. As a developer, you are making an application to manage your to do list.
 Create 10 user stories that will help you get your application started.
  Read more about [user stories](https://www.atlassian.com/agile/project-management/user-stories).

As a user I create an application and create a name for a to do list.

As a user I can add a task to my to do list.

As a user I can add a description and details to my task.

As a user I can add a suspense date for each task.

As a user I can select the priority level of each task.

As a user I can edit my to do list name.

As a user I can edit the tasks description or details.

As a user I can rearrenge the order of my tasks.

As a user I can mark my task as completed.

As a user I can see my completed tasks.

As a user I can also unmark a task as complete.

As a user I can delete a task. 
















