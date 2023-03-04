import '@/styles/globals.css'
import {ThemeProvider} from "next-themes"
import Context from "@/pages/StateContext"


export default function App({ Component, pageProps }) {

  return (
      <>
          <Context>
              <ThemeProvider enableSystem={true} attribute="class">
                  <Component {...pageProps}/>
              </ThemeProvider>
          </Context>
      </>

  )
}
