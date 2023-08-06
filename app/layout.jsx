import '@styles/globals.css'
import Nav from '@components/Nav'
import Provider from '@components/Provider'

export const metadata = {
    title: "AI-verse: BrandonGPT Community",
    description: "Explore, Generate & Distribute the Finest AI Prompts!",
}

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
        <head>
            <link rel="icon" href="/assets/images/ai.png" sizes="any" />
            <meta name="google-signin-client_id" content="12345678-gbgin9h7q69rpjehq1cd2441b4nosnid.apps.googleusercontent.com" />
        </head>
        <body>
            <Provider>
                <div className='main'>
                    <div className="gradient" />
                </div>

                <main className="app">
                    <Nav />
                    {children}
                </main>
            </Provider>
        </body>
    </html>
  )
}

export default RootLayout