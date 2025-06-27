### Note: Our plan is to create a similar crm system. like odoo have.

# 🚀 Smart CRM – A Modern, Open-Source CRM

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg?style=for-the-badge)](https://opensource.org/licenses/MIT)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=for-the-badge)](CONTRIBUTING.md)
[![GitHub Discussions](https://img.shields.io/github/discussions/vedantbhavsar/open-crm?style=for-the-badge&label=Discussions)](https://github.com/vedantbhavsar/open-crm/discussions)

This is the beginning of **Open CRM**: a developer-first, open-source Customer Relationship Management system built for the modern web. The goal is to create a powerful, self-hostable, and beautiful CRM that teams and individuals will love to use.

The project has been initialized with a solid foundation. **Now is the perfect time to get involved and shape its future.**

## The Vision

We are building a CRM that is:

- **Developer-First:** With a clean codebase, modern tooling, and a focus on extensibility, contributing should be a joy.
- **Truly Open-Source:** No paid tiers, no feature-gating. All features will be available under the MIT license. Fork it, customize it, own your data.
- **Modern & Performant:** Leveraging the best of the React and Node.js ecosystems to create a fast, responsive, and reliable user experience.

## The Roadmap: Planned Features

This is what we plan to build. Your contributions can help bring this list to life.

#### Core Functionality

- [ ] **Authentication:** Secure user login (email/password, social logins).
- [ ] **Contact Management:** CRUD for leads, contacts, and companies.
- [ ] **Deal Management:** Visual sales pipelines with customizable stages.
- [ ] **Task & Activity Management:** Assign and track tasks, log calls, and schedule meetings.

#### Collaboration & Productivity

- [ ] **Team Management:** Invite members and manage roles (Admin, Manager, Sales).
- [...and more]

#### Advanced Features

- [ ] **Dashboard & Analytics:** Key metrics, charts, and revenue forecasting.
- [ ] **Global Search:** A single, powerful search bar to find anything.
- [ ] **Public API:** A REST API for third-party integrations.

## The Foundation: Technology Stack

The initial project structure is built on a solid, modern foundation designed for scalability and a great developer experience.

- **Framework:** ▲ **Next.js 14** (App Router)
- **Language:** T **TypeScript**
- **Database:** 🐘 **PostgreSQL** with **Prisma** ORM
- **Styling:** 🎨 **Tailwind CSS** with **ShadCN UI**
- **Authentication:** 🔐 **NextAuth.js**
- **Forms & Validation:** 📋 **React Hook Form** & **Zod**
- **Deployment:** ▲ **Vercel**

## 🤝 We're Looking for Contributors!

This project is in its infancy, and you can make a significant impact. We welcome contributors of all skill levels.

**How you can help:**

- **Build a core feature:** Pick an unchecked item from the roadmap.
- **Set up UI components:** Help build out the component library with ShadCN UI.
- **Improve the developer experience:** Enhance documentation, scripts, or testing.
- **Discuss the architecture:** Join the [Discussions](https://github.com/suryawansh/smart-crm/discussions) and help shape the technical direction.

## 🛠️ Getting Started (for Development)

Ready to contribute? Here’s how to get the project running locally.

### 1. Clone the Repository

```bash
git clone https://github.com/suryawansh/smart-crm.git
cd open-crm
```

### 2. Install Dependencies

We recommend using `pnpm`.

```bash
pnpm install
```

### 3. Set Up Environment Variables

Create a `.env.local` file by copying the example.

```bash
cp .env.example .env.local
```

You'll need to provide:

- `DATABASE_URL`: Your PostgreSQL connection string.
- `NEXTAUTH_SECRET`: A secret key for session encryption.

### 4. Set Up the Database

The easiest way to run PostgreSQL locally is with Docker.

```bash
# Start the PostgreSQL container (a docker-compose.yml is included)
docker-compose up -d

# Apply the database schema
pnpm prisma migrate dev
```

### 5. Run the Development Server

```bash
pnpm dev
```

The app will be available at `http://localhost:3000`.

## Project Structure

The boilerplate is set up with a logical structure to make development intuitive.

```
/app             # Next.js App Router pages and layouts
/components      # Shared UI components (built with ShadCN UI)
/lib             # Utility functions and shared libraries
/prisma          # Prisma schema, migrations, and seeds
/types           # Global TypeScript type definitions
/middleware.ts   # Middleware for authentication and authorization
```

## License

This project is licensed under the **MIT License**. See the [LICENSE](./LICENSE) file for details.
