import Link from 'next/link'

// imgs
import casual from "@/assets/casual.png";
import formal from "@/assets/formal.png";
import party from "@/assets/party.png";
import gym from "@/assets/gym.png";

const linksData = [
    {
        image: casual.src,
        title: "casual"
    },
    {
        image: formal.src,
        title: "formal"
    },
    {
        image: party.src,
        title: "party"
    },
    {
        image: gym.src,
        title: "gym"
    },
]

const DressStyle = () => {
    return (
        <section className='container' style={{ marginTop: "3em" }}>
            <div className="dress-style paper box column outline">
                <h2 className='text-center'>BROWSE BY dress STYLE</h2>
                <div className="cards-container full-width">
                    {linksData.map((link, idx) => (
                        <Link key={idx} href={`category/${link.title}`} className="paper no-shadow" style={{ backgroundImage: `url(${link.image})` }}>
                            <h3 className='full-width text-start disable-guitters'>{link.title}</h3>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default DressStyle