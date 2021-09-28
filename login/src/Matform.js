import React, { useState }from 'react'
import './Matform.css'
import MaterialUIForm from 'react-material-ui-form'
import { TextField } from 'react-material-ui-form/node_modules/@material-ui/core'
import {Select,MenuItem,InputLabel,FormControl,Button } from '@material-ui/core';
import MomentUtils from '@date-io/moment';
import {
  DatePicker,
  MuiPickersUtilsProvider,
}
 from '@material-ui/pickers';



export const Matform = () => {
     const [selectedDate, handleDateChange] = useState(new Date());
    
     window.localStorage.setItem('date',selectedDate._d);
     const atentive=()=>{
         alert('clicked');
}
     console.log(selectedDate._d, "ttee");
     const handlechange=(event)=>{
         console.log(event.target.value);
        window.localStorage.setItem('fullname',event.target.value);
      }

     
     
 const changehandler=(event)=>{
         console.log(event.target.value);
  window.localStorage.setItem('age',event.target.value);
     }
const Chechandler=(event)=>{
 console.log('hi');
  window.localStorage.setItem('snokeer is hobby',event.target.checked);
}
const Checkboxhandle=(event)=>{

  window.localStorage.setItem('cricket is hobby',event.target.checked);
}
const Netflixhandel=(event)=>{

  window.localStorage.setItem('Netflix is hobby',event.target.checked);
}
 const Exploringhandle=(event)=>{

  window.localStorage.setItem('Exploring  is hobby',event.target.checked);
}
 const Fcity=(event)=>{
window.localStorage.setItem('sports',event.target.value);
}
const Scity=(event)=>{
window.localStorage.setItem('capital',event.target.value);
}
const Tcity=(event)=>{
window.localStorage.setItem('third city',event.target.value);
}
const Focity=(event)=>{
window.localStorage.setItem('fourth',event.target.value);
}
const Fiftcity=(event)=>{
window.localStorage.setItem('fith',event.target.value);
}
 
      return (
        <div>
            <div >
                <MaterialUIForm>
                    <TextField label="NamE"      type="text" name="user"  onChange= {handlechange}/>
                    <TextField label="Age" type="number" max="85" min="5"  name="age" onChange= {changehandler} />
                    <br/>
                <div className="check">
                     <label>
        <input
          type="checkbox"
      onChange={Checkboxhandle}
        />
        cricket
      </label>
        <br/>
       <label>
        <input
          type="checkbox"
    onChange={Chechandler}
        />
        Snooker
      </label>
      <br/>
       <label>
        <input
          type="checkbox"
          onChange={Netflixhandel}
      />
        Netflix
      </label>
        <br/>
       <label>
        <input
          type="checkbox"
          onChange={Exploringhandle}
         
         />
        Exploring 
        </label>
        <br/>
        </div>
<MuiPickersUtilsProvider utils={MomentUtils}>
      <DatePicker
    placeholderText="Date of birth"
       value={selectedDate}
        onChange={handleDateChange}
        dateFormat={"yy-mm-dd"}
  minDate={'1995-01-01'}

         />
    </MuiPickersUtilsProvider><br/>

                <FormControl fullWidth>
  <InputLabel>Select City of birth</InputLabel>
  <Select
    labelId="demo-simple-select-label"
//    value={1}
    id="demo-simple-select"
  label="Select City of birth"
  onChange={(e)=> document.getElementById("demo-simple-select").value }
 >
    <MenuItem value="1" onClick={Fcity}>Sialkot</MenuItem>
    <MenuItem value={2} onClick={Scity}>Islamabad</MenuItem>
    <MenuItem value={3} onClick={Tcity}>Rawalpindi</MenuItem>
    <MenuItem value={4} onClick={Focity}>Jehlum</MenuItem>
    <MenuItem value={5} onClick={Fiftcity}>Gujrat</MenuItem>
  </Select>
  <Button onClick={atentive} variant="submit">submit</Button>
</FormControl>

</MaterialUIForm>
 </div>
 </div>
    )
}
