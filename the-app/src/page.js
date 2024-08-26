export default function Page() {

    // var userdata = 0;
    // var tfqdata= 0;
    // var stdata = 0;
    // var typedata = 0;
    
  
    function storequestion({userdata, typedata, tfqdata, stdata}) {
      var store = document.getElementById("useranswer").value;
      console.log(store)
      console.log(userdata, typedata, tfqdata, stdata);
      return;
    };
  
    const askquestion = {
      userdata: 0,
      typedata: 0,
      tfqdata: 0,
      stdata: 0
    };
    

    function changeUser(userdata) {
        askquestion.userdata += 1;
        switch (askquestion.userdata) {
            case 0:
                console.log("Student");
            break;
            case 1:
                console.log("Teacher");
            break;
            case 2: 
                console.log("Admin");
            break;
            case 3:
              askquestion.userdata = 0;
              console.log("Student");
            break;
        };
    }

    function changeSubject(tfqdata) {
      askquestion.tfqdata += 1;
      switch (askquestion.tfqdata) {
        case 0:
            console.log("English")
          break;
        case 1: 
              console.log("Math")
        break;
        case 2:
              console.log("Science")
        break;
        case 3:
              console.log("Social Studies")
        break;
        case 4:
          askquestion.tfqdata = 0;
          console.log("English");
        break;
        
      };

    }


    
    function handleButton() {
      storequestion(askquestion);
      return;
    }
  
    function handleButton1() {
        changeUser(askquestion.userdata);
    }

    function handleButton2() {
      changeSubject(askquestion.tfqdata);
  }
    return (
        <div>
          <h1>Welcome To The Website</h1>
          <h2>Question:</h2>
          <h3>What is the MEANING of life?</h3>
          <input type="text" id="useranswer" placeholder="..."></input>
          <button type="button" onClick={handleButton1} class="userbutton">Change User</button>
          <button type="button" onClick={handleButton2} class="subjectbutton">Change Subject</button>
          <button type="button" onClick={handleButton} class="submit" >Submit Answer</button>

          
        </div>
      );
}