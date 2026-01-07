import '../CSS/About.css';
import TextPressure from '../components/TextPressure';

export default function About() {
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

                <h1 className="main-title">Software Developer</h1>

                <p className="about-description">
                    I build fast, maintainable web interfaces using React.
                    I focus on clarity, performance, and clean component design.
                </p>

                <a href="#projects" className="cta-button">
                    View Projects
                </a>
            </div>
            
            <div className="about-image-section">
                <div className="image-wrapper">
                    <img 
                        src="/public/profile/profile.png" 
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