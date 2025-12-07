# TruEstate Retail Sales Management System

## Overview
Welcome to my submission for the **TruEstate SDE Intern Assignment**. I have engineered a high-performance **Retail Sales Management System** that transforms raw sales data into an actionable, interactive dashboard. 
This project isn't just a basic CRUD app—it's a demonstration of scalable architecture, clean design patterns, and a focus on user experience. I built this to handle complex data operations (search, complex filtering, sorting) with ease, replicating the challenges faced in real-world production environments.

## Tech Stack
- **Frontend**: **React (Vite)** for a blazing fast UI, styled with modular **Vanilla CSS** to prove foundational mastery without relying on heavy frameworks.
- **Backend**: **Django** & **Django REST Framework (DRF)** for a robust, secure, and scalable API.
- **Database**: **SQLite** (Dev) with a denormalized schema optimized for read-heavy operations.
- **Tools**: **Git/GitHub** for version control, **Pandas** for efficient data ingestion.

## Why This Project Stands Out?
1. **Architectural Purity**: I maintained a strict separation of concerns. The backend handles heavy lifting (filtering, pagination), keeping the frontend lightweight and snappy. 
2. **Professional-Grade Filtering**: Unlike simple matches, I implemented range filters for Dates and Prices, multi-selects for Categories, and fuzzy search for Tags—all working in harmony.
3. **Optimized Performance**: Server-side pagination ensures that even with 10,000+ records, the browser never lags.
4. **Code Quality**: Zero clutter. No comments. Just clean, self-documenting code with meaningful variable names and modular component structure. 
5. **No Shortcuts**: I avoided "magic" UI libraries. Every component—from the Filter Panel to the Pagination logic—is hand-crafted to meet the specific Figma requirements.

## Implementation Details
- **Search Engine**: A highly performant server-side search using DRF's `SearchFilter`. It instantly parses Customer Names and Phone Numbers (case-insensitive) to find needles in the haystack.
- **Advanced Filtering**: Powered by `django-filter`, the system supports complex queries. You can filter by:
  - **Demographics**: Region, Gender, Age Range
  - **Product**: Category, dynamic Tags (e.g., finding all "Premium" or "Sale" items)
  - **Transactions**: Payment Method, precise Date Ranges
- **Dynamic Sorting**: Users can sort datasets by Date, Quantity, or Name without losing their active search/filter context.
- **Pagination**: implemented a robust limit-offset pagination strategies (10 items/page) to handle large datasets gracefully.

## Candidate Profile: Siddharth Nama
**"I don't just write code; I build solutions that scale."**

Hello! I'm **Siddharth Nama**, a passionate Software Engineer Intern from Kota, India. 
I thrive on solving complex backend challenges and crafting seamless user experiences. My journey involves:
- **Spearheading "Suvidha Manch"** at the Haryana Government (C4GT), where I helped digitize 25,000+ roads.
- **Optimizing performance** at Mercato Agency, creating systems that handle 10,000+ users with ease.
- **Driving innovation** with AI-powered platforms like Scripty and AiProgress.
- **Leading teams** and delivering results under pressure, from managing election portals to restocking systems.

I am fit for this role because I combine **strong technical fundamentals** (Django, React, SQL) with an **ownership mindset**. I treat every assignment like a production release—focusing on edge cases, maintainability, and user impact. I am ready to bring this energy and precision to the TruEstate team!

**Let's Connect:**
- [LinkedIn](https://linkedin.com/in/siddharth-nama)
- [GitHub](https://github.com/Siddharth-Nama)
- [LeetCode](https://leetcode.com/siddharth-nama)
- **Email**: siddharthnama.work@gmail.com
- **Phone**: +91-8000694996

## Setup Instructions
1. **Clone the repository:**
   ```bash
   git clone https://github.com/Siddharth-Nama/TruEstate_Assignment.git
   cd TruEstate_Assignment
   ```

2. **Backend Setup:**
   ```bash
   cd backend
   python -m venv venv
   # Windows
   venv\Scripts\activate
   # Mac/Linux
   source venv/bin/activate
   
   pip install -r requirements.txt
   python manage.py migrate
   python manage.py runserver
   ```
   *> **Note**: Place your `Sales_Data.csv` file inside `backend/data/` and run `python manage.py import_sales` to populate the database.*

3. **Frontend Setup:**
   ```bash
   cd frontend
   npm install
   npm run dev
   ```
