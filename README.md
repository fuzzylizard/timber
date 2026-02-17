# README

Timber is a simple job hunt tracking board similar to Huntr.co. It allows users to create columns representing different stages of their job application process and add job applications as cards within those columns. When complete, the app will provide a full history of a users job hunt.


## Requirements and Technologies Used
- Ruby 4.0
- Ruby on Rails 8.0
- PostgreSQL 15
- React 19
- Vite
- Tailwind CSS 4.0
- Shadcn UI

## BACKLOG
- [ ] When signing up, default columns should be created for the user
- [ ] When creating a new column, add correct order value so column is at the end
- [ ] Add Tests - Jest, React Testing Library
- [ ] Add ability to edit columns
- [ ] Add ability to reorder columns
- [ ] Add ability to drag and drop jobs between columns
- [ ] Add tags to jobs (can be simple implementation with a string field for now)
- [x] Ability to delete columns
- [x] Add ability to add new columns
- [x] Add User Authentication to React Frontend
- [x] Add User to React frontend queries/mutations
- [x] Associate jobs to a user
- [x] Ability to Log out
- [x] Add order field to columns
- [x] Change backend to use columns instead of 'application_state'
- [x] Clean up Auth code in Client app (all over the place right now)
- [x] Add validations to models
- [x] Ability to view job details in a modal
- [x] Add ability to edit jobs