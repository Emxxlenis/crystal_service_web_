import { ThemeProvider } from '../src/context/ThemeContext';
import { LanguageProvider } from '../src/context/LangContext';
import '../src/index.css';

export const metadata = {
  title: 'Crystal Service',
  description: 'Servicios profesionales de cristalería',
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>
        <ThemeProvider>
          <LanguageProvider>
            {children}
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
} 