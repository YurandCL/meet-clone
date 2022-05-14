import Theme from 'styles/themes'
import { ThemeStore } from 'context/ThemeStore'

function MyApp({ Component, pageProps}) {

  return (
    <ThemeStore>
      <Theme>
        <Component {...pageProps} />
      </Theme>
    </ThemeStore>
  )
}

export default MyApp
