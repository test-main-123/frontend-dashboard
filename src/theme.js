const themes = {
  light: {
    background: "#ffffff",
    surface: "#f5f5f5",
    text: "#333333",
    textSecondary: "#666666",
    border: "#e0e0e0",
    positive: "#4caf50",
    negative: "#f44336",
  },
  dark: {
    background: "#1a1a2e",
    surface: "#16213e",
    text: "#eaeaea",
    textSecondary: "#a0a0a0",
    border: "#2a2a4a",
    positive: "#66bb6a",
    negative: "#ef5350",
  },
};

export function getTheme(mode) {
  return themes[mode] || themes.light;
}

export function toggleTheme(current) {
  return current === "light" ? "dark" : "light";
}

export default themes;
