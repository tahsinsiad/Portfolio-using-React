import React, {Component} from 'react'; 
import {Grid, Cell, List, ListItem,ListItemContent} from 'react-mdl';
class Contact extends Component{
    render(){
        return(
            <div className="contact-body">
                <Grid className="contact-grids">
                    <Cell col={6}>
                        <h2>Tahsin Ahmed Khan
                        </h2>
                        <img 
                       src="https://scontent.fdac12-1.fna.fbcdn.net/v/t1.0-9/46502364_2328472520558665_6261050431862996992_n.jpg?_nc_cat=103&_nc_oc=AQlRy2QZVxZg91e1Y2WzpCrIflI5S2OvtkhCZLRcv2ivRNRRQ-Avkas1eRFxJj3sqzM&_nc_ht=scontent.fdac12-1.fna&oh=cb6a700164756c8b11885d5248d4135c&oe=5D974321"
                       alt="avatar"
                       style={{height: '250px'}} />

                       <p style={{width:'75%', margin: 'auto', paddingTop: '1em'}}> Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                       Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
                       It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>

                    </Cell>
                    <Cell col={6}>
                        <h2>Contact Me</h2>
                        <hr/>
                        
                        <div className="contact-list">

                        <List>
                            <ListItem>
                                <ListItemContent style={{fontSize:'30px', fontFamily:'Anton'}}>
                                    <i className="fa fa-phone-square" aria-hidden="true"/>
                                    +8801777332071
                                </ListItemContent>
                            </ListItem>
                            
                            <ListItem>
                                <ListItemContent style={{fontSize:'30px', fontFamily:'Anton'}}>
                                    <i className="fa fa-fax" aria-hidden="true"/>
                                    +8801777332071
                                </ListItemContent>
                            </ListItem>
                            
                            <ListItem>
                                <ListItemContent style={{fontSize:'30px', fontFamily:'Anton'}}>
                                    <i className="fa fa-envelope" aria-hidden="true"/>
                                    tahsinsiad27@gmail.com
                                </ListItemContent>
                            </ListItem>
                            
                            <ListItem>
                                <ListItemContent style={{fontSize:'30px', fontFamily:'Anton'}}>
                                    <i className="fa fa-skype" aria-hidden="true"/>
                                    /tahsinSiad
                                </ListItemContent>
                            </ListItem>
                            
                            
                        </List>

                        </div>

                        

                    </Cell>
                </Grid>

            </div>
        )
    }
}

export default Contact;