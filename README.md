# TruEstate Retail Sales Management System

## Overview
This is a full-stack web application designed for the TruEstate SDE Intern Assignment. It features a robust Retail Sales Management System with advanced search, filtering, sorting, and pagination capabilities.
The system is built to handle structured sales data efficiently, offering a clean and performant user interface.

## Tech Stack
- **Frontend**: React (Vite), Vanilla CSS, Axios
- **Backend**: Django, Django REST Framework, SQLite
- **Tools**: Git, GitHub, Pandas

## Search & Filter Implementation
- **Search**: Implemented server-side using DRF's `SearchFilter`. Supports searching by Customer Name and Phone Number.
- **Filtering**: Multi-select filtering powered by `django-filter`. Supports filtering by Region, Category, Payment Method, and Date Ranges.
- **Sorting**: Dynamic sorting via `OrderingFilter` for Date, Quantity, and Customer Name.
- **Pagination**: Server-side pagination (10 items/page) ensures performance with large datasets.

## Candidate Profile
**SIDDHARTH NAMA**
Software Engineer Intern | Kota, India

**Why I am fit for this role:**
I bring strong full-stack experience from my internships at the Haryana Government (C4GT) and Mercato Agency, where I built scalable systems serving thousands of users. My technical proficiency in Django, React, and Database Management aligns perfectly with TruEstate's requirements. I have a proven track record of delivering clean, maintainable code and handling end-to-end development lifecycles.

**Connect:**
- [LinkedIn](https://linkedin.com/in/siddharth-nama)
- [GitHub](https://github.com/Siddharth-Nama)
- [LeetCode](https://leetcode.com/siddharth-nama)
- Email: siddharthnama.work@gmail.com
- Phone: +91-8000694996

## Setup Instructions
1. **Clone the repo:**
   ```bash
   git clone https://github.com/Siddharth-Nama/TruEstate_Assignment.git
   cd TruEstate_Assignment
   ```

2. **Backend Setup:**
   ```bash
   cd backend
   python -m venv venv
   source venv/bin/activate  # or venv\Scripts\activate on Windows
   pip install -r requirements.txt
   python manage.py migrate
   python manage.py runserver
   ```
   *Note: Place `Sales_Data.csv` in `backend/data/` and run `python manage.py import_sales` to load data.*

3. **Frontend Setup:**
   ```bash
   cd frontend
   npm install
   npm run dev
   ```
