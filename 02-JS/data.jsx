// JSX ->  JavaScript XML 
// JSX is a syntax extention that lets you write HTML - like code inside JavaScript . it's primitive used in react .

//azile method || waterfall method


// Vanila.js 

    // const h1 = document.createElement("h1");
    // const p = document.createElement("p");


    // h1.setAttribute("class" , "heading");
    // const body = document.querySelector("body");
    // body.append(h1,p);

    // function createElementJS(){

    //     const h1 = document.createElement("h1");
    //     const p = document.createElement("p");


    //     h1.setAttribute("class" , "heading");
    //     const body = document.querySelector("body");
    //     body.append(h1,p);
    // }

    // createElementJS();       // function call



    // Using jsx :
    // 1 rule : first character should be upperCase
    //jsx must return (<div> </div>);
    // jsx call : <CreateElementJS/>


    function CreateElementJS(){

        return(
            <>
            {/* <> -> fragment (wrap multiple div ) -> wrap all html element */}
            <div className = "container">
                <h1>Heading</h1>
                <p>Paragraph</p>
            </div>

            <div className = "container">
                <h1>Heading</h1>
                <p>Paragraph</p>
            </div>


            </>
        );
        
    }

    <CreateElementJS/>




