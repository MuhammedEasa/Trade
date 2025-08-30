# Contact Form Next.js Project

![GitHub repo size](https://img.shields.io/github/repo-size/MuhammedEasa/Trade?style=for-the-badge)
![GitHub stars](https://img.shields.io/github/stars/MuhammedEasa/Trade?style=for-the-badge)
![GitHub forks](https://img.shields.io/github/forks/MuhammedEasa/Trade?style=for-the-badge)
![GitHub issues](https://img.shields.io/github/issues/MuhammedEasa/Trade?style=for-the-badge)
![GitHub license](https://img.shields.io/github/license/MuhammedEasa/Trade?style=for-the-badge)

---

# Contact Form Next.js

Welcome to the **Contact Form Next.js** project! This is a modern, responsive contact form built with Next.js and React, designed to provide a seamless user experience for connecting with expert brokers and starting your trading journey.

---

## 🚀 Project Overview

This project features a beautifully styled contact form that collects user information such as name, email, mobile number, and trading goals. It includes:

- **Client-side validation** for form inputs (name, email, phone).
- **Responsive design** with a clean, elegant UI using CSS variables and animations.
- **Toast notifications** for success and error messages using `react-hot-toast`.
- **Form submission** to a backend endpoint (configurable via environment variables).
- **Success message with countdown** and automatic form reset.
- **Accessibility and usability** enhancements for a smooth user experience.

---

## 🎨 UI & Styling

- Uses CSS Modules for scoped styling.
- Color theme based on warm cream tones with subtle gradients.
- Smooth fade-in/out animations for form and success messages.
- Responsive grid layout for input fields.
- Loading spinner on submit button during form submission.

---

## 🛠️ Technologies Used

- **Next.js** (React framework for server-side rendering and static site generation)
- **React** (Functional components with hooks)
- **TypeScript** (Static typing for safer code)
- **react-hot-toast** (For toast notifications)
- **CSS Modules** (Scoped CSS styling)
- **Fetch API** (For form submission)

---

## 📁 Project Structure

```
/contact-form-nextjs
├── src
│   ├── components
│   │   ├── ContactForm.tsx       # Main contact form component
│   │   └── ContactForm.module.css # Scoped styles for the form
│   ├── app
│   │   └── globals.css            # Global CSS variables and styles
│   └── app
│       └── page.tsx               # Main page rendering the form
├── .env.local                    # Environment variables (not committed)
├── package.json                 # Project dependencies and scripts
└── README.md                    # This file
```

---

## ⚙️ Setup & Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/MuhammedEasa/Trade.git
   cd Trade/contact-form-nextjs
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Create a `.env.local` file in the root directory and add your form submission endpoint URL:

   ```
   NEXT_PUBLIC_FORMSUBMIT_URL=https://your-form-submit-endpoint.com/api/submit
   ```

4. Run the development server:

   ```bash
   npm run dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser to see the form.

---

## 🧑‍💻 Usage

- Fill in your full name (required).
- Provide either an email address or a mobile number (at least one required).
- Optionally, add your trading goals.
- Submit the form.
- On success, a confirmation message will appear with a countdown before the form resets.
- On failure, a toast notification will alert you to try again.

---

## 🎯 Features for Developers

- **TypeScript interfaces** for form data and errors.
- **Client-side validation** with clear error messages.
- **Toast notifications** for better UX.
- **Loading state** management during form submission.
- **Automatic form reset** with countdown timer.
- **CSS variables** for easy theming and customization.

---

## 📦 Scripts

- `npm run dev` - Start the development server.
- `npm run build` - Build the production version.
- `npm start` - Start the production server.

---

## 🤝 Contributing

Contributions are welcome! Please open issues or pull requests for improvements or bug fixes.

---

## 📜 License

This project is licensed under the MIT License.

---

## 🎨 Visual Preview

![Contact Form Preview](https://user-images.githubusercontent.com/yourusername/contact-form-nextjs-preview.png)

---

## 🔗 GitHub Repository

[![GitHub Repo](https://img.shields.io/badge/GitHub-Repository-black?style=for-the-badge&logo=github)](https://github.com/MuhammedEasa/Trade)

---

Thank you for checking out the Contact Form Next.js project! If you have any questions or feedback, feel free to reach out.
