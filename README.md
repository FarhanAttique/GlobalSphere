# Frappe Backend Developer Test

## Overview
This repository contains my submission for the **Frappe Backend Developer Test**, covering setup, API development, data management, performance optimization, and debugging.

## Tasks

### **1. Frappe Application Setup**
- Installed dependencies and Frappe.
- Created a new site and app.
- Linked the app and started the server.
- Setup details in [SETUP.md](./SETUP.md).

### **2. API Development**
- Built RESTful APIs for `Task` DocType:
  - `POST /task.create`, `GET /task.read`, `PUT /task.update`, `DELETE /task.delete`
- Secured with token-based authentication.

### **3. Data Management**
- Designed a **Project Management Schema** with:
  - **Project** (details, deadlines)
  - **Task** (linked to Project, assigned to Users)
  - **User** (task management)
  - **Comments** (task updates)

### **4. Performance Optimization**
- Optimized API calls for speed.
- Implemented **Redis caching** for frequent queries.

### **5. Debugging**
- Resolved a bug/performance issue in a provided Frappe app.
- Debugging process in [DEBUGGING.md](./DEBUGGING.md).

## Installation & Usage
1. Clone repo: `git clone https://github.com/GlobalSphere.git`
2. Follow **SETUP.md**.
3. Start server: `bench start`

## Contact
📧 farhanatique44@gmail.com  
📂 [GitHub](https://github.com/FarhanAttique)

**Thanks for reviewing!** 🚀

