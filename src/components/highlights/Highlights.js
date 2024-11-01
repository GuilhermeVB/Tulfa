import Button from '../button/Button'
import { useRef, useState } from 'react'

function Highlights({ type, heading, paragraph, buttonText, videoUrl, imageUrl, order }) {
    const videoRef = useRef(null)
    const [isPlaying, setIsPlaying] = useState(false)

    const handleVideoClick = () => {
        if (videoRef.current) {
            isPlaying ? videoRef.current.pause() : videoRef.current.play()
        }
        setIsPlaying(!isPlaying)
    }

    return (
        <div className={`highlights_container highlights_container${order}`}>
            <div className="highlights_description">
                <span className="highlights_description_type">{type}</span>
                <h3 className="highlights_description_heading">{heading}</h3>
                <p className="highlights_description_paragraph">{paragraph}</p>
                <Button content={buttonText} color="primary" />
            </div>
            {
                videoUrl ? (
                    <video
                        ref={videoRef}
                        className="highlights_video"
                        onClick={handleVideoClick}
                        controls
                        playsInline
                    >
                        <source src={videoUrl} type="video/mp4" />
                    </video>
                ) : (
                    <img className="highlights_figure" src={imageUrl} alt="" />
                )
            }
        </div>
    );
}

export default Highlights;
