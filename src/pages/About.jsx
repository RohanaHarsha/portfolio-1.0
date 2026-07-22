import { useNavigate } from 'react-router-dom';
import '../CSS/About.css';
import RotatingText from '../components/RotatingText/RotatingText.jsx';

export default function About() {
    const navigate = useNavigate();

    const handleNavigateToProjects = () => {
        navigate('/projects');
    }

    const roles = [
        'Odoo technical support',
        'SAP technical Support',
        'Data | BI Analyst'
    ];

    return (
        <section className="about-diagonal">
            <div className="about-content">
                <div className="intro-section">
                    <span className="greeting">Hi, I'm</span>
                    <h1 className="name-title">Rohana Harsha</h1>

                    <div className="role-container">
                        <span className="role-prefix">Roles that I'm interested in</span>
                        <div className="rotating-role">
                            <RotatingText
                                texts={roles}
                                mainClassName="role-text"
                                staggerFrom="last"
                                initial={{ y: "100%" }}
                                animate={{ y: 0 }}
                                exit={{ y: "-120%" }}
                                staggerDuration={0.03}
                                splitLevelClassName="role-letter"
                                transition={{ type: "spring", damping: 25, stiffness: 300 }}
                                rotationInterval={2500}
                            />
                        </div>
                    </div>
                </div>

                <p className="about-description">
                    I'm Rohana Wickramarathna, a recent BSc (Hons) Industrial Information Technology graduand 
                    from Uva Wellassa University. I'm building a career at the intersection of business and 
                    technology, willing to start with a foundation in analytics or whatever role fits to get me to my end goal, 
                    which is growing toward becoming an ERP Technical Consultant. 
                    During my internship at the National Science Foundation of Sri Lanka, 
                    I independently built an internal ERP system and handled network administration, 
                    which shaped my interest in how organizations actually run their systems, 
                    not just how the code behind them works.
                </p>

                <div className="quick-stats">
                    <div className="stat-item">
                        <span className="stat-number">6 months</span>
                        <span className="stat-label">Years Experience</span>
                    </div>
                    <div className="stat-item">
                        <span className="stat-number">4</span>
                        <span className="stat-label">Projects Completed</span>
                    </div>
                </div>

                <div className="cta-group">
                    <button onClick={handleNavigateToProjects} className="cta-button primary">
                        <span>View My Work</span>
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                            <path d="M7 3L14 10L7 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                        </svg>
                    </button>
                    <a href="/resume" className="cta-button secondary">
                        <span>Download Resume</span>
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                            <path d="M10 3V13M10 13L6 9M10 13L14 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                            <path d="M3 17H17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                        </svg>
                    </a>
                </div>
            </div>

            <div className="about-image-section">
                <div className="image-wrapper">

                    <img
                        src="/Profile/profile.png"
                        alt="Rohana Harsha"
                        onError={(e) => {
                            e.target.src = 'https://via.placeholder.com/400x600/141414/eaeaea?text=Profile';
                        }}
                    />
                </div>
            </div>
        </section>
    );
}