import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import { CiStar } from "react-icons/ci";

const RatingStars = ({ rate, onlyStars = false }: { rate: number, onlyStars?: boolean }) => {
    const renderStars = (): React.ReactNode => {
        const fullStars = Math.floor(rate); // Full stars count
        const hasHalfStar = rate % 1 >= 0.5; // Determine if a half star is needed
        const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0); // Remaining empty stars

        const stars: React.ReactNode[] = [];

        // Render full stars
        for (let i = 0; i < fullStars; i++) {
            stars.push(<FaStar key={`full-${i}`} color="#FFC633" />);
        }

        // Render half star if applicable
        if (hasHalfStar) {
            stars.push(<FaStarHalfAlt key="half" color="#FFC633" />);
        }

        // Render empty stars
        for (let i = 0; i < emptyStars; i++) {
            stars.push(<CiStar key={`empty-${i}`} color="#ccc" />);
        }

        return stars;
    };

    return (
        <div className="rating-stars box small-gap">
            <span className="box" style={{gap: 0}}>{renderStars()}</span>
            {!onlyStars && <span>{rate}/5</span>}
        </div>
    );
};

export default RatingStars;
