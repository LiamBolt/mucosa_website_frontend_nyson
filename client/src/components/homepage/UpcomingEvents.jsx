import styles from './UpcomingEvents.module.css'
import {Link} from 'react-router-dom'

function EventCard({ title, date, location, description }) {
  return (
    <div className={styles.eventCard}>
      <div className={styles.dateBox}>
        <span className={styles.month}>{date.month}</span>
        <span className={styles.day}>{date.day}</span>
      </div>
      <div className={styles.eventInfo}>
        <h3 className={styles.eventTitle}>{title}</h3>
        <p className={styles.eventLocation}>{location}</p>
        <p className={styles.eventDescription}>{description}</p>
        <button className={styles.registerButton}>Register Now</button>
      </div>
    </div>
  )
}

function UpcomingEvents() {
  const events = [
    {
      title: "Tech Career Workshop",
      date: { month: "MAR", day: "15" },
      location: "Main Campus, Room 205",
      description: "Join industry experts for insights into tech career paths and opportunities."
    },
    {
      title: "Coding Bootcamp",
      date: { month: "MAR", day: "22" },
      location: "Computer Lab 3",
      description: "Intensive hands-on session on web development fundamentals."
    },
    {
      title: "Hackathon 2024",
      date: { month: "APR", day: "05" },
      location: "Innovation Hub",
      description: "24-hour coding challenge to solve real-world problems."
    }
  ]

  return (
    <section className={styles.eventsSection}>
      <div className={styles.container}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.title}>Upcoming Events</h2>
          <p className={styles.subtitle}>Join us in our upcoming tech events and workshops</p>
        </div>
        <div className={styles.eventsGrid}>
          {events.map((event, index) => (
            <EventCard key={index} {...event} />
          ))}
        </div>
        <div className={styles.viewMore}>
          <Link to="/events">
          <button className={styles.viewMoreButton}>View All Events</button>
          </Link>
        </div>
      </div>
    </section>
  )
}

export default UpcomingEvents 