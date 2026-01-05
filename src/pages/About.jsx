import TextPressure from '../components/TextPressure';
import '../CSS/About.css';

export default function About() {
    return (
        <section className="about-diagonal">
            <div className="about-content">
                <div style={{ position: 'relative', height: '300px', paddingBottom: '0px' }}>
                    <TextPressure
                        text="Software"
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
                <h1>Engineer</h1>
                <p>
                    I build fast, maintainable web interfaces using React.
                    I focus on clarity, performance, and clean component design.
                </p>

                <a href="/path-to-your-resume.pdf" download className="download-resume-button">
                    Download Resume
                </a>
            </div>
            
            <div className="about-image">
                <img src="/path-to-your-image.jpg" alt="Your Name" />
            </div>
        </section>
    );
}