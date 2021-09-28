import React from 'react'
import Card from '../UI/Card'
import './UserView.css'
export const UserView = (props) => {
    
    return (
        <>
            <Card>
                <div>
                    <h2>
                        CV Abstractor
                    </h2>
                </div>
                <form>
                    <label>Name</label>
                    <input type='text' />
                    <label>Degree</label>
                    <input type='text'  placeholder='degree'/>
                    <label>CGPA</label>
                    <input type='number' min='2.0' max='4.0' step='0.01' /><br/>
                    <label>CV</label>
                    <input
                        type="file"
                        id="CVFile"
                        name='CVFile'
                        
                        />
                    <h3>Select any two skills</h3>
                    <input type="checkbox" id="Reactjs" name="Reactjs" value="Reactjs" />
                    <label for="vehicle1"> frontend</label><br />
                    <input type="checkbox" id="vehicle2" name="vehicle2" value="nodejs" />
                    <label for="vehicle2"> backend</label><br />
                    <input type="checkbox" id="DB" name="DB" value="DB" />
                    <label for="vehicle3"> Database</label><br />
                    
                    <button> submit</button>
                     
                   





                </form>
            </Card>
        </>
    )
}
