import React from 'react';
import {connect} from 'react-redux';
import {createForm} from '../../actions/formActions';
import firebase from '../../config/firebase';
import {Redirect} from 'react-router-dom';
class Form extends React.Component{
    state={
        name:"",
        email:"",
        phone:"",
        curr_address:"",
        per_address:"",
        dob:"",
        gender:"",
        father_name:"",
        mother_name:"",
        qualification:"",
        profession:"",
        mem_dur:"",
        mem_fee:"",
        doc_type:"",
        doc_no:"",
        accept:"",
        same_per:false,
        image:"",
        image2:"",
        url:"",
        url2:"",
        next:"none",
        hide:"block",
        next2:"none",
        hide2:"block",
        previewurl:"",
        previewurl2:"",
        redirectToReferrer:false,
        redirectToReferrer2:false,
    }
    handleChange=(e)=>{
        this.setState({
            [e.target.id]:e.target.value
        });
    }
    handleImageChange=(e)=>{
        if (e.target.files[0]) {
            const image = e.target.files[0];
            const imageSize=image.size/1024;
            let reader = new FileReader();
            console.log(image);
            if(image.type ==="image/jpeg" && imageSize <"300")
            {
                reader.onloadend = () => {
                    this.setState({
                      image: image,
                      previewurl: reader.result
                    });
                  }
                  reader.readAsDataURL(image)
            }
            else{
                this.setState(() => ({image:null}));
            }
          }
    }
    handleImageChange2=(e)=>{
        if (e.target.files[0]) {
            const image2 = e.target.files[0];
            const imageSize2=image2.size/1024;
            let reader = new FileReader();
            console.log(image2);
            if(image2.type ==="image/jpeg" && imageSize2 <"300")
            {
                reader.onloadend = () => {
                    this.setState({
                      image2: image2,
                      previewurl2: reader.result
                    });
                  }
                  reader.readAsDataURL(image2)
            }
            else{
                this.setState(() => ({image2:null}));
            }
          }
    }
    handlePerAddress=(e)=>{
        if(this.state.same_per)
        {
            this.setState(() => ({
                same_per:false,
                per_address:this.state.per_address
            }));
        }
        else{
            this.setState(() => ({
                same_per:true,
                per_address:this.state.curr_address
            }));
        }
        console.log(this.state.same_per);
    }
    handleNext=(e)=>{
        e.preventDefault();
            this.setState(() => ({
                next:"block",
                hide:"none"
            }));
    }
    handleNext2=(e)=>{
        e.preventDefault();
            this.setState(() => ({
                next2:"block",
                hide2:"none"
            }));
    }
    handleSubmit=(e)=>{
        e.preventDefault();
        const image = this.state.image;
        const image2 = this.state.image2;
        const fileName=this.state.name+this.state.phone;
        const fileName2=this.state.name+this.state.phone+this.state.doc_type;
        firebase.storage().ref(`images/${fileName}`).put(image)
        firebase.storage().ref(`images/${fileName2}`).put(image2)
        firebase.storage().ref('images').child(fileName).getDownloadURL().then(url => {
            console.log(url);
            this.setState(()=>({
                url:url,
                image:fileName,
                redirectToReferrer: true
            }))
        })
        firebase.storage().ref('images').child(fileName2).getDownloadURL().then(url2 => {
            console.log(url2);
            this.setState(()=>({
                url2:url2,
                image2:fileName2,
                redirectToReferrer2: true
            }))
            this.props.createForm(this.state)
        })
        console.log(this.state);
    }
    
    render()
    {
        const {applyError}=this.props;
        var per_value;
        const show = {
            display: this.state.next,
          };
          const show2 = {
            display: this.state.next2,
          };
        const hide = {
            display: this.state.hide,
          };
          const hide2 = {
            display: this.state.hide2,
          };
        var same_per=this.state.same_per;
        if(same_per)
        {
            per_value=this.state.curr_address;
        }
        return(
                <div className="container">
                    <form onSubmit={this.handleSubmit} className="white">
                        <h5 className="grey-text text-darken-3">New Form</h5>
                        <div>
                        <img src={this.state.previewurl || 'http://via.placeholder.com/400x300'} alt="Uploaded images" height="300" width="400"/>
                        <input type="file" onChange={this.handleImageChange} required/>
                        </div>
                        <div className="input-field">
                            <label htmlFor="name">Name</label>
                            <input type="text" id="name" onChange={this.handleChange} required/>
                        </div>
                        <div className="input-field">
                            <label htmlFor="email">Email</label>
                            <input type="email" id="email" onChange={this.handleChange} required/>
                        </div>
                        <div className="input-field">
                            <label htmlFor="phone">Phone</label>
                            <input type="text" id="phone" onChange={this.handleChange} required/>
                        </div>
                        <button onClick={this.handleNext} style={hide}>Next</button>
                       <div style={show} >
                       <div className="input-field">
                            <label htmlFor="curr-address">Current Address</label>
                            <input type="text" id="curr_address" onChange={this.handleChange} required/>
                        </div>
                        <div className="input-field">
                            <label htmlFor="per-address">Permanent Address</label>
                            <input type="checkbox" id="same_per_address" onChange={this.handlePerAddress}/>Same as current address
                            <input type="text" id="per_address" value={per_value} onChange={this.handleChange} required/>
                        </div>
                        <div className="input-field">
                            <label htmlFor="dob">Date of Birth</label>
                            <input type="date" id="dob" onChange={this.handleChange} required/>
                        </div>
                        <div className="input-field">
                            <label htmlFor="ref">Gender</label>
                            <select id="gender" onChange={this.handleChange} required>
                                <option value="male">Male</option>
                                <option value="female">Female</option>
                                <option value="others">Others</option>
                            </select>
                        </div>
                        <div className="input-field">
                            <label htmlFor="father_name">Father's Name</label>
                            <input type="text" id="father_name" onChange={this.handleChange} required/>
                        </div>
                        <div className="input-field">
                            <label htmlFor="mother_name">Mother's Name</label>
                            <input type="text" id="mother_name" onChange={this.handleChange} required/>
                        </div>
                        <div className="input-field">
                            <label htmlFor="qualification">Qualification</label>
                            <input type="text" id="qualification" onChange={this.handleChange} required/>
                        </div>
                        <div className="input-field">
                            <label htmlFor="profession">Profession</label>
                            <input type="text" id="profession" onChange={this.handleChange} required/>
                        </div>
                        <div className="input-field">
                            <label htmlFor="mem_dur">Membership Duration</label>
                            <input type="text" id="mem_dur" onChange={this.handleChange} required/>
                        </div>
                        <div className="input-field">
                            <label htmlFor="mem_fee">Membership Fees</label>
                            <input type="text" id="mem_fee" onChange={this.handleChange} required/>
                        </div>
                        <div className="input-field">
                            <label htmlFor="ref">Reference</label>
                            <input type="text" id="ref" onChange={this.handleChange}/>
                        </div>
                        <div className="input-field">
                            <label htmlFor="ref">Document Type</label>
                            <select id="doc_type" onChange={this.handleChange}>
                                <option value="voter">Voter ID</option>
                                <option value="aadhar">Aadhar</option>
                                <option value="driving">Driving Licence</option>
                                <option value="passport" selected>Passport No.</option>
                                <option value="student" selected>Student ID</option>
                                <option value="noselection" selected>Not Selected</option>
                            </select>
                        </div>
                        <div className="input-field">
                            <label htmlFor="doc_no">Document No.</label>
                            <input type="text" id="doc_no" onChange={this.handleChange}/>
                        </div>
                        <div>
                        <img src={this.state.previewurl2 || 'http://via.placeholder.com/400x300'} alt="Uploaded images" height="300" width="400"/>
                        <input type="file" onChange={this.handleImageChange2} required/>
                        </div>
                        <div>
                            <button style={hide2} onClick={this.handleNext2}>Next</button>
                        </div>
                        <div style={show2}>
                            <p>Terms & Conditions</p>
                            <p>For all AIEF, National/State/Patrons holder the new membership of above mentioned organization one has membership fees and donation as per own capacity and requirements of the organization for spread and promotion of the AIEF.</p>
                            <p>All AIEF executive member, the new membership charges &#x20b9; 200 only.</p>
                            <p>All AIEF post holders members, the new membership charges &#x20b9; 1500 only.</p>
                            <p>If any member of the office bearer of our organization is found guilty of being involved in illegal activities, cheating, duping or misuse of his ID card including the name of the organization, our AIEF will take no reponsibility for that, the administration is free to take legal action against him/her. </p>
                            <input type="checkbox" id="accept" onChange={this.handleChange} required/>  I accept terms and conditions.
                        <div className="input-field">
                            <button type="submit" >Submit</button>
                        </div>
                        </div>
                       </div>
                    </form>
                    <div className="red-text center">{applyError ? <p>{applyError}</p>:null}</div>
                </div>
        )
    }
}
const mapStateToProps=(state)=>{
    return{
        applyError:state.form.applyError
    }
  }
const mapDispatchToProps = (dispatch)=>{
    return{
        createForm:(form)=>dispatch(createForm(form))
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Form);