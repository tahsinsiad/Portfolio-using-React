import React, {Component} from 'react'; 
  

class About extends Component{
    render(){
        return(
            <div className="total">
             <div className="about-me"><h1>About ME</h1></div>             
             <p className="para" style={{textAlign:'center', padding:'40px' , fontSize:'23px'}}>I am Tahsin Ahmed Khan, a fresh graduate from Khulna University of Engineering & Technology (KUET). I have completed my B.Sc. in Engineering in Electronics & Communication Engineering (ECE). Academically, I am a Communication Engineer but I want to build my career as Software Developer. I have started problem solving from 2nd year. That time, Intra University Programming Contest was held at our varsity. Our team “KUET_CGPA_Koto” has got 7th position in the contest. Due to some familial issues, I have detached from problem solving for a certain period of time. At the ending of the 3rd year I again start problem solving. I always believe in hard working and keep patience in every situation. </p>
            </div> 
        )
    }
}

export default About;