import { ThemeProvider } from 'styled-components';
import { BrowserRouter } from 'react-router-dom'
import { defaultTheme } from './styles/themes/default';
import { Router } from './Router';

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        {/* Aqui ficará o Contexto principal*/}
          <Router />
      </BrowserRouter>
    </ThemeProvider>
  )
}