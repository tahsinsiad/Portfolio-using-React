import React, {Component} from 'react'; 
import {Grid, Cell} from 'react-mdl';
import Education from './education';
import Experience from './experience';
import Skills from './skills';

class Resume extends Component{
    render(){
        return(
            <div>
           <Grid>
               <Cell col={4}>
                   <div style={{textAlign: 'center'}}>
                   <img 
                       src="https://scontent.fdac12-1.fna.fbcdn.net/v/t1.0-9/46502364_2328472520558665_6261050431862996992_n.jpg?_nc_cat=103&_nc_oc=AQlRy2QZVxZg91e1Y2WzpCrIflI5S2OvtkhCZLRcv2ivRNRRQ-Avkas1eRFxJj3sqzM&_nc_ht=scontent.fdac12-1.fna&oh=cb6a700164756c8b11885d5248d4135c&oe=5D974321"
                       alt="avatar"
                       style={{height: '250px', borderRadius: '50%'}} />
                   </div>

                   <h2 style={{paddingTop:'2em'}}>Tahsin Ahmed Khan</h2>
                   <h4 style={{color: 'grey'}}>Programmer</h4>
                   <hr style={{borderTop:'3px solid #833fb2', width:'50%'}}/>
                   <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                   <hr style={{borderTop:'3px solid #833fb2', width:'50%'}}/>
                   <h5>Address</h5>
                   <p>Road 3, Block C, Mirpur-12</p>
                   <h5>Phone</h5>
                   <p>+8801777332071</p>
                   <h5>Email</h5>
                   <p>tahsinsiad27@gmail.com</p>
                   <h5>Website</h5>
                   <p>mywebsite.com</p>
                   <hr style={{borderTop:'3px solid #833fb2', width:'50%'}}/>
               </Cell>
               <Cell className="resume-right-col" col={8}>
                   <h2>Education</h2>
                   <Education
                    startYear={2015}
                    endYear={2019}
                    schoolName="Khulna Univeraity of Engineering & Technology(KUET)"
                    departmentName="Electronics & Communicaion Engineering(ECE)"
                    result="CGPA (3.00 / 4.00)"

                   />

                   
                   <Education
                    startYear={2012}
                    endYear={2014}
                    schoolName="Govt. Ananda Mohan College"
                    departmentName="Science"
                    result="GPA (5.00 / 5.00)"

                   />

                    <Education
                    startYear={2004}
                    endYear={2012}
                    schoolName="Mymensingh Zilla School"
                    departmentName="Science"
                    result="GPA (5.00 / 5.00)"

                   />
                   <hr style={{borderTop: '3px solid #e22947'}}/>

                   <h2>Experience</h2>
                   <Experience
                    startYear={2019}
                    endYear={2021}
                    jobName="First Job"
                    jobDescription="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
                   />

                    <Experience
                    startYear={2019}
                    endYear={2021}
                    jobName="Second Job"
                    jobDescription="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
                   />
                    
                    <hr style={{borderTop: '3px solid #e22947'}}/>
                   <h2>Skills</h2>
                   <Skills 
                    skill="HTML"
                    progress={100}/>

                    <Skills
                            skill="CSS"
                            progress={90} />

                    <Skills
                            skill="Javascript"
                            progress={75} />

                        

                    <Skills
                            skill="React"
                            progress={60} />

                    <Skills
                            skill="PHP"
                            progress={80} />
               </Cell>
           </Grid> 
           </div>
        )
    }
}

export default Resume;