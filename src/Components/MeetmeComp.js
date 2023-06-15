import {useState} from 'react';
function MeetmeComp()
{
    const [Name, setName]=useState("JayaPrabha");
    const [Gender, setGender]=useState("Female");
    const [Contact,setContact]=useState("1234509");
    const [Email, setEmail]=useState("prbhjy@gmail.com");
    const [Image, setImage]=useState("images/Me.jpg");
    const UpdateData=()=>{
        fetch("https://randomuser.me/api/").then(response=>response.json())
        .then(result=>{ setName(result.results[0].name.title + result.results[0].name.first + result.results[0].name.last);
                        setGender(result.results[0].gender);
                        setContact(result.results[0].phone);
                        setEmail(result.results[0].email);
                        setImage(result.results[0].picture.large);
                        
                        });
    }
    return(
        
        <>
        <div className="row1">
                <div> MEET ME  </div>
            </div>
            <div className="row2" >
                <div id="glow">                    
                    <img src={Image} alt="Meet ME Pic" />
                </div>
                <div id="glow" className="row2div">
                    <p>Hello Everyone!!</p>                    
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus architecto 
                    numquam mollitia reprehenderit suscipit cumque quo qui delectus, error ullam dolorem. 
                    Quae autem iusto nisi, esse soluta repellat aut fugiat.
                    <br/> <br/>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus architecto 
                    numquam mollitia reprehenderit suscipit cumque quo qui delectus, error ullam dolorem. 
                    Quae autem iusto nisi, esse soluta repellat aut fugiat.
                    <br/> <br/>  
                    <div className="Bio">
                        <div>
                            Name{''}:<br/>
                            Gender{''}:<br/>
                            Contact{''}:<br/>
                            Email{''}:<br/>
                            
                        </div>                 
                    
                        <div id="Bio">
                            {Name} <br/>
                            {Gender} <br/>
                            {Contact} <br />
                            {Email} <br />
                            
                        </div>
                    </div>
                    <div>
                        <input type="button" value="Download" id="button1" />{''}<input type="button" value="Contact Me" id="button2" />
                        <br/>
                        <button id="button3" onClick={UpdateData}>Meet Next</button>
                    </div>
                 
                </div>
            </div>
        </>

    );

}

export default MeetmeComp;