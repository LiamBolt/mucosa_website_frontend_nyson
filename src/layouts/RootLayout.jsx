import Footer from '../components/common/Footer'
import Header from '../components/common/Header'

function RootLayout({ children }) {
  return (
    <>
    <Header />
      <main>{children}</main>
      <Footer />
    </>
  )
}

export default RootLayout 