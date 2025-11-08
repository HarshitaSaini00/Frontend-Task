# EZ Labs Assignment - Contact Form Application

A responsive single-page web application built with React and Vite, featuring a contact form integrated with a REST API.

## 🚀 Features

- **Responsive Design**: Optimized for multiple device sizes (480p, 720p, 1080p, iPad, MacBook)
- **Contact Form**: Clean and modern form with validation
- **API Integration**: Seamless integration with backend API
- **Form Validation**: 
  - Empty form submission prevention
  - Email format validation
  - Real-time error messages
- **Success Feedback**: Displays "Form Submitted" message on successful submission

## 📋 Prerequisites

Before running this project, make sure you have the following installed:

- **Node.js** (v16 or higher) - [Download here](https://nodejs.org/)
- **npm** (comes with Node.js) or **yarn**

## 🛠️ Installation

1. **Clone or navigate to the project directory**
   ```bash
   cd "C:\Users\harsh\Desktop\Fronttend Task"
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

## ▶️ Running the Application

### Development Mode

Start the development server:

```bash
npm run dev
```

The application will be available at `http://localhost:5173` (or another port if 5173 is busy).

Open your browser and navigate to the URL shown in the terminal.

### Build for Production

To create a production build:

```bash
npm run build
```

The built files will be in the `dist` folder.

### Preview Production Build

To preview the production build locally:

```bash
npm run preview
```

## 📁 Project Structure

```
Fronttend Task/
├── index.html          # HTML entry point
├── package.json        # Project dependencies and scripts
├── vite.config.js      # Vite configuration
├── README.md          # This file
└── src/
    ├── main.jsx       # React entry point
    ├── App.jsx        # Main application component
    └── styles.css     # Global styles and responsive design
```

## 🔌 API Information

### Endpoint
- **Base URL**: `https://vernanbackend.ezlab.in`
- **Full API URL**: `https://vernanbackend.ezlab.in/api/contact-us/`
- **Method**: `POST`
- **Content-Type**: `application/json`

### Request Body
```json
{
  "name": "Amit",
  "email": "hsatyamrav@gmail.com",
  "phone": "908765498",
  "message": "kjhgcgj"
}
```

### Response (Success - 200)
```json
{
  "id": 49,
  "name": "Amit",
  "email": "hsatyamrav@gmail.com",
  "phone": "908765498",
  "message": "kjhgcgj",
  "created_at": "2025-10-10T05:27:59.371578Z",
  "updated_at": "2025-10-10T05:27:59.371598Z"
}
```

### Required Fields
- `email` (required, validated for format)

## 📱 Responsive Breakpoints

The application is optimized for the following screen sizes:

- **480p (Mobile)**: ≤ 480px width
- **720p**: ≤ 1280px width
- **1080p**: ≤ 1920px width
- **iPad (2732x2048)**: ≥ 1800px width
- **MacBook (1440x823)**: 1360px - 1500px width

## ✅ Form Validation

- **Empty Fields**: All fields (name, email, phone, message) are required
- **Email Format**: Validates email format using regex pattern
- **Real-time Feedback**: Error messages appear below invalid fields
- **Submission Prevention**: Form cannot be submitted with invalid data

## 🎨 Technologies Used

- **React 18.3.1** - UI library
- **Vite 5.4.8** - Build tool and dev server
- **CSS3** - Styling with custom properties and media queries

## 📝 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build

## 🔧 Development

### VS Code Setup

1. Open the project folder in VS Code
2. Open the integrated terminal (`` Ctrl+` `` or `View > Terminal`)
3. Run `npm install` to install dependencies
4. Run `npm run dev` to start the development server
5. The app will automatically reload when you make changes

## 📄 License

This project is created as part of an assignment for EZ Labs.

## 👤 Author

Created for EZ Labs Assignment

---

**Note**: Make sure you have a stable internet connection as the application makes API calls to `https://vernanbackend.ezlab.in`.

