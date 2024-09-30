import '../styles/globals.css'

// every page goes inside the component and returns from here
function MyApp({ Component, pageProps }) {
  return (
    <>
      {/* the code here implement all over the app */}
      <p>header</p>
        <Component {...pageProps} />
      <p>footer</p>
    </>
  )
}

export default MyApp
