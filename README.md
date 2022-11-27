# project-manager
1. Authorization

    a. Login: Username, password login, return jwt token
    
    b. Register: username, email, mobile, password, validation, unique
    
    c. reset-password
    
2. Team

    a. Create team
    
    b. invite user to the team
    
    c. update team
    
    d. remove user from team
    
3. User

    a. Profile actions: get profile - edit profile
    
    b. Skills: add skill - edit skill
    
    c. invite: accept - reject
        
4. Projects

    a. Create project: title, text, image, team, owner, tags, category
    
    b. get all projects
    
    c. get project by id
    
    d. get team projects
    
    e. get user projects
    
    f. update/edit project
    
    g. remove
    
Database structure:
1. Users:
First_name, Last_name, Username, Password ,Email,
Skills: [],
Team: [],
Role: [user, admin, team leader]

2. Project:

Title, Text, Image,
Tags: [],
Owner: user,
Team: teamID,
Private or Public, Show

3. Team:
Name, Description, Users, Projects, owner
