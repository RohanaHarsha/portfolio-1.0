import { useNavigate } from 'react-router-dom';
import '../CSS/About.css';
import TextPressure from '../components/TextPressure';





export default function About() {
    const navigate = useNavigate();

    const handleNavigateToProjects = () => {
        navigate('/pages/projects');
    }
    
    return (
        <section className="about-diagonal">
            <div className="about-content">
                <div className="animated-text-container">
                    <TextPressure
                        text={"Rohana"+"  "+"Harsha"}
                        flex={true}
                        alpha={false}
                        stroke={false}
                        width={true}
                        weight={true}
                        italic={true}
                        textColor="#ffffff"
                        strokeColor="#ff0000"
                        minFontSize={36}
                    />
                </div>

                <h1 className="main-title">Software Engineer</h1>

                <p className="about-description">
                    I build fast, maintainable web interfaces using React.
                    I focus on clarity, performance, and clean component design.
                </p>

                <button onClick={handleNavigateToProjects} className="cta-button">
                    View Projects
                </button>
            </div>
            
            <div className="about-image-section">
                <div className="image-wrapper">
                    <img 
                        src="/public/profile/profile.jpg" 
                        alt="Your Name" 
                        onError={(e) => {
                            e.target.src = 'https://via.placeholder.com/400x600/141414/eaeaea?text=Your+Photo';
                        }}
                    />
                </div>
            </div>
        </section>
    );
}