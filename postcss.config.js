module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
}

export const API_BASE = process.env.REACT_APP_API_BASE || "http://localhost:5000/api";