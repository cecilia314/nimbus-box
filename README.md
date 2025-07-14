# 🌥️ Nimbus Box - Cloud Storage App

A modern, full-stack cloud storage application built with Next.js and Appwrite. Upload, organize, and manage your files with a beautiful, responsive interface.

![Nimbus Box Hero](public/readme/hero.png)

## 🚀 Features

- 📁 **File Management**: Upload, organize, and delete files across multiple categories
- 🔐 **Email OTP Authentication**: Secure authentication using one-time passwords
- 📱 **Responsive Design**: Beautiful UI that works on desktop and mobile
- 🎨 **Modern Interface**: Built with Tailwind CSS and shadcn/ui components
- 📊 **Dashboard Analytics**: Visual charts showing storage usage by file type
- 🔍 **Search Functionality**: Debounced search with real-time results
- 🎯 **Drag & Drop**: Intuitive file uploading with react-dropzone

## 🛠️ Tech Stack

### Frontend

- **Next.js 15** - React framework with App Router
- **TypeScript** - Type-safe JavaScript
- **Tailwind CSS** - Utility-first CSS framework
- **shadcn/ui** - Reusable component library
- **Recharts** - Data visualization

### Backend & Services

- **Appwrite** - Backend-as-a-Service
  - Authentication (Email OTP)
  - Database (NoSQL)
  - Storage (File uploads)

### Key Libraries

- **[React Dropzone](https://react-dropzone.js.org/)** - File upload handling
- **[use-debounce](https://github.com/xnimorz/use-debounce)** - Search optimization
- **[Zod](https://zod.dev/)** - Schema validation
- **[Sonner](https://sonner.emilkowal.ski/)** - Toast notifications

## 📚 What I Learned

### 1. **TypeScript Interfaces & Type Definitions**

- Created `index.d.ts` to declare global interfaces for component props
- Ensured type safety across the entire application
- Learned how proper typing prevents runtime errors and improves code maintainability

```typescript
// index.d.ts
declare type FileType = 'document' | 'image' | 'video' | 'audio' | 'other';

declare interface UploadFileProps {
  file: File;
  ownerId: string;
  accountId: string;
  path: string;
}
```

### 2. **Email OTP Authentication with Appwrite**

- Implemented secure, passwordless authentication
- Email OTP provides a balance between security and user experience
- Understanding when to use OTP vs OAuth2 vs traditional passwords

**Why OTP?** While OAuth2 or strong passwords might be more secure for production apps, OTP authentication is:

- User-friendly (no password to remember)
- Good for learning authentication flows
- Suitable for apps where convenience is prioritized

### 3. **Client vs Server Components ('use client' vs 'use server')**

- **Client Components**: Handle interactivity, browser APIs, event listeners
- **Server Components**: Data fetching, server-side rendering, better performance
- **Server Actions**: Secure server-side functions for mutations

```tsx
'use client'; // For interactive components
export function FileUploader() {
  // Browser APIs, event handlers, state
}

('use server'); // For server-side operations
export async function uploadFile() {
  // Database operations, file system access
}
```

### 4. **React Dropzone Hook**

- HTML5-compliant drag & drop functionality
- File type validation and size restrictions
- Progress tracking and error handling

### 5. **Debouncing for Search Performance**

- Implemented search debouncing to reduce API calls
- Improved user experience with real-time search feedback
- Learned performance optimization techniques

### 6. **File Upload & Storage Management**

- Handling large file uploads (up to 50MB)
- Progress tracking and error recovery
- File type categorization and validation

### 7. **Next.js App Router & Server Actions**

- Modern Next.js patterns with App Router
- Server Actions for secure, type-safe mutations
- Understanding of rendering strategies (SSR, CSR, SSG)

### 8. **State Management & Form Handling**

- React Hook Form for complex form validation
- Zod schemas for runtime type checking
- Toast notifications for user feedback

## 🖼️ Screenshots

### Dashboard

![Dashboard](public/readme/dashboard-screen.png)

### Images Screen

![File Upload](public/readme/images-screen.png)

### Authentication

![Auth](public/readme/authentication.png)

## 🚀 Getting Started

### Prerequisites

- **Node.js** 18+ and npm
- **Appwrite Account** (free tier available)

### 1. Clone the Repository

```bash
git clone https://github.com/cecilia314/nimbus-box
cd nimbus-box
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Set Up Appwrite

1. Go to [Appwrite Console](https://cloud.appwrite.io/)
2. Create a new project
3. Set up the following services:

#### Database Setup

- Create a database
- Create collections:
  - **Users Collection** with attributes:
    - `email` (string)
    - `fullName` (string)
    - `avatar` (URL)
    - `accountId` (string)
  - **Files Collection** with attributes:
    - `name` (string)
    - `type` (string)
    - `size` (integer)
    - `url` (URL)
    - `extension` (string)
    - `owner` (string)
    - `accountId` (string)
    - `users` (array)
    - `bucketFileId` (string)

#### Storage Setup

- Create a storage bucket
- Configure file upload permissions

#### Authentication Setup

- Enable Email/Password authentication
- Configure OTP settings

### 4. Environment Variables

Copy `.example.env.local` and create a `.env.local` file in the root directory:

### 5. Run the Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see the application.

## 📁 Project Structure

```
nimbus-box/
├── src/
│   ├── app/                # Next.js App Router
│   │   ├── (auth)/         # Authentication pages
│   │   ├── (root)/         # Main application pages
│   │   └── globals.css     # Global styles with Tailwind v4
│   │   └── layout.tsx
│   ├── components/
│   │   ├── ui/            # shadcn/ui components
│   │   └── ...            # Custom components
│   └── lib/               # Utilities and configurations
│       ├── actions/       # Server actions
│       ├── appwrite/      # Appwrite configuration
│       └── utils.ts       # Helper functions
├── constants/             # Application constants
├── public/                # Static assets
├── index.d.ts             # Global type definitions
└── next.config.ts         # Next.js configuration
```

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- [Appwrite](https://appwrite.io/) for the excellent backend services
- [shadcn](https://ui.shadcn.com/) for the beautiful component library
- [Tailwind CSS](https://tailwindcss.com/) for the utility-first styling approach

---

**Built with ❤️ for learning modern web development**
