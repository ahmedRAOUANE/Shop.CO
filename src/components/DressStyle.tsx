import Link from 'next/link'

// imgs
import casual from "@/assets/casual.png";
import formal from "@/assets/formal.png";
import party from "@/assets/party.png";
import gym from "@/assets/gym.png";

const DressStyle = () => {
    return (
        <section className='container' style={{ marginTop: "3em" }}>
            <div className="dress-style paper box column outline">
                <h2 className='text-center'>BROWSE BY dress STYLE</h2>
                <div className="cards-container full-width">
                    <Link href={"#"} className="paper no-shadow" style={{ backgroundImage: `url(${casual.src})` }}>
                        <h3 className='full-width text-start disable-guitters'>Casual</h3>
                    </Link>
                    <Link href={"#"} className="paper no-shadow" style={{ backgroundImage: `url(${formal.src})` }}>
                        <h3 className='full-width text-start disable-guitters'>Formal</h3>
                    </Link>
                    <Link href={"#"} className="paper no-shadow" style={{ backgroundImage: `url(${party.src})` }}>
                        <h3 className='full-width text-start disable-guitters'>Party</h3>
                    </Link>
                    <Link href={"#"} className="paper no-shadow" style={{ backgroundImage: `url(${gym.src})` }}>
                        <h3 className='full-width text-start disable-guitters'>Gym</h3>
                    </Link>
                </div>
            </div>
        </section>
    )
}

export default DressStyle