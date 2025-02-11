import Hero from '../components/homepage/Hero'
import UpcomingEvents from '../components/homepage/UpcomingEvents'
import FeaturedNews from '../components/homepage/FeaturedNews'
import ShowcaseProjects from '../components/homepage/ShowcaseProjects'
import ProudPartners from '../components/homepage/ProudPartners'
import styles from './HomePage.module.css'

function HomePage() {
  return (
    <div className={styles.homepage}>
      <Hero />
      <UpcomingEvents />
      <FeaturedNews />
      <ShowcaseProjects />
      <ProudPartners />
    </div>
  )
}

export default HomePage 