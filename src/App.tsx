import { ThemeProvider } from 'styled-components';
import { BrowserRouter } from 'react-router-dom'
import { defaultTheme } from './styles/themes/default';

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        {/* Aqui ficará o Contexto principal*/}
        <>
          <>{/* Aqui ficarão as rotas */}</>
        </>
      </BrowserRouter>
    </ThemeProvider>
  )
}