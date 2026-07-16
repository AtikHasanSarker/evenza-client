Product Requirements Document (PRD)
EventHub – Event Discovery & Management Platform
Version: 1.0
Project Type: Full Stack Web Application
________________________________________
1. Project Overview
EventHub is a modern full-stack web application that allows users to discover, explore, and manage events. Visitors can browse upcoming events, search and filter them, and view detailed information. Registered users can securely publish and manage their own events.
The project is built to demonstrate modern full-stack development using TypeScript, Next.js, Express.js, MongoDB, and JWT Authentication.
________________________________________
2. Project Objectives
•	Build a production-ready Full Stack application using TypeScript.
•	Implement secure authentication and authorization.
•	Develop responsive and reusable UI components.
•	Create RESTful APIs with MongoDB integration.
•	Provide an intuitive and professional user experience.
________________________________________
3. Technology Stack
Frontend
•	Next.js
•	TypeScript
•	Tailwind CSS
•	HeroUI
•	Recharts
Backend
•	Node.js
•	Express.js
•	TypeScript
Database
•	MongoDB
Authentication
•	JWT Authentication
________________________________________
4. User Roles
Guest User
•	Browse events
•	Search and filter events
•	View event details
•	Register and log in
Registered User
•	Add new events
•	View own events
•	Delete own events
•	Access dashboard
•	Logout
________________________________________
5. Website Pages
Public Pages
•	Home
•	Explore Events
•	Event Details
•	About
•	Contact
•	Login
•	Register
Protected Pages
•	Add Event
•	Manage Events
•	Dashboard
________________________________________
6. Core Features
Home Page
•	Responsive Navbar
•	Hero Section
•	Featured Events
•	Event Categories
•	Statistics
•	Testimonials
•	FAQ
•	Newsletter
•	Footer
Explore Events
•	Search by event title
•	Filter by category and location
•	Sort by date and price
•	Pagination
Event Details
•	Event banner
•	Description
•	Date & Time
•	Venue & Location
•	Ticket price
•	Organizer information
•	Related events
Authentication
•	Registration
•	Login
•	Form validation
•	Demo login
•	JWT-based authentication
Add Event
Authenticated users can publish a new event by providing:
•	Event title
•	Banner image
•	Short description
•	Full description
•	Category
•	Date & Time
•	Venue
•	Location
•	Ticket price
•	Organizer information
Manage Events
Users can:
•	View their published events
•	Delete their own events
Dashboard
•	Total events
•	Events by category
•	Monthly event statistics (Recharts)
________________________________________
7. Database Collections
Users
•	Name
•	Email
•	Password
•	Created At
Events
•	Title
•	Banner
•	Short Description
•	Description
•	Category
•	Date
•	Time
•	Venue
•	Location
•	Ticket Price
•	Organizer Name
•	Organizer Email
•	Created By
•	Created At
________________________________________
8. API Endpoints
Authentication
•	POST /auth/register
•	POST /auth/login
Events
•	GET /events
•	GET /events/:id
•	POST /events
•	DELETE /events/:id
________________________________________
9. UI & UX Requirements
•	Maximum three primary colors
•	Consistent spacing and typography
•	Uniform card design
•	Responsive layout
•	Skeleton loading
•	Loading indicators
•	Toast notifications
•	Professional and modern interface
________________________________________
10. Acceptance Criteria
The project will be considered complete when:
•	TypeScript is used in both frontend and backend.
•	JWT authentication works correctly.
•	Users can register and log in.
•	Authenticated users can add and manage events.
•	Search, filter, sort, and pagination are fully functional.
•	Charts display meaningful statistics.
•	The application is fully responsive.
•	All required pages and features work without errors.

