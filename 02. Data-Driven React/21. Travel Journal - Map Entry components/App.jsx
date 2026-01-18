import Header from "./components/Header"
import Entry from "./components/Entry"
import travelData from "./data"

/**
 * Challenge:
 * - import the array of data from data.js
 * - map over the array to create an <Entry /> component
 *   for every item in the data array.
 * - display the array of Entry components in place of the current
 *   hard-coded <Entry /> instance.
 */

export default function App() {
    const entries = travelData.map((entry) => {
        return (
            <Entry
                key={entry.id}
                img={{ 
                    src: entry.img.src,
                    alt: entry.img.alt
                }}
                title={entry.title}
                country={entry.country}
                googleMapsLink={entry.googleMapsLink}
                dates={entry.dates}
                text={entry.text}
            />
        )
    })

    return (
        <>
            <Header />
            <main className="container">
                {entries}
            </main>
        </>
    )
}