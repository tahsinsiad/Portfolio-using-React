import React, {Component} from 'react'; 
import{Grid, Cell} from 'react-mdl';

class LandingPage extends Component{
    render(){
        return(
            <div style={{width: '100%', margin: 'auto'}}>
                <Grid className="landing-grid">
                    <Cell col={12}>
                        <img src="http://hotprintdesign.com/wp-content/uploads/2019/02/Sani-Sebastian.png"
                             alt="avatar"
                             className="avatar"
                        />

                        <div className="banner-text">
                            <h1>Full Stack Web Developer</h1>
                            <hr/>
                            <p>HTML/CSS | Bootstrap | JavaScript | React | React Native | NodeJS | Express | MongoDB</p>

                            <div className="social-links">
                            <a href="https://www.google.com" rel="noopener noreferrer" target="_blank">
                                <i className="fa fa-linkedin-square" aria-hidden="true"/>
                            </a>

                            <a href="https://www.google.com" rel="noopener noreferrer" target="_blank">
                                <i className="fa fa-github-square" aria-hidden="true"/>
                            </a>

                            <a href="https://www.google.com" rel="noopener noreferrer" target="_blank">
                                <i className="fa fa-facebook-square" aria-hidden="true"/>
                            </a>

                            <a href="https://www.google.com" rel="noopener noreferrer" target="_blank">
                                <i className="fa fa-youtube-square" aria-hidden="true"/>
                            </a>
                        </div>

                        </div>

                        
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default LandingPage;