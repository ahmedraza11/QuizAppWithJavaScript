var QuizIndex = 0;
var Correct = 0;
var question = [
    {
         id: 0,
         ques: "What does HTML stand for?",
         op1: "Hyper Text Markup Language",
         op2: "Home Tool Markup Language",
         op3: "Hyperlinks and Text Markup Language",
         correct: "Hyper Text Markup Language"
    },
    {
         id: 1,
         ques: "HTML is what type of language ?",
         op1: "Scripting Language",
         op2: "Markup Language",
         op3: "Programming Language",
         correct: "Markup Language"
    },
    {
         id: 2,
         ques: " eWhat does HTML stand for?",
         op1: "Hyper Text Markup Language",
         op2: "Home Tool Markup Language",
         op3: "Hyperlinks and Text Markup Language",
         correct: "Hyper Text Markup Language"
    },
    {
         id: 3,
         ques: " HTML uses ?",
         op1: "User defined tags",
         op2: "Pre-specified tags",
         op3: "Fixed tags defined by the language",
         correct: "Fixed tags defined by the language"
    },
    {
         id: 4,
         ques: "The year in which HTML was first proposed _______",
         op1: "1990",
         op2: "1980",
         op3: "1995",
         correct: "1990"
    },
    {
         id: 5,
         ques: "Fundamental HTML Block is known as ___________. ",
         op1: "HTML Body",
         op2: "HTML Tag",
         op3: "HTML Attribute",
         correct: "HTML Tag"
    },
    {
         id: 6,
         ques: "Apart from <b> tag, what other tag makes text bold ?",
         op1: "fat tag",
         op2: "strong tag",
         op3: "black tag",
         correct: "strong tag"
    },
    {
         id: 7,
         ques: "What is the full form of HTML?",
         op1: "Hyper Text Markup Language",
         op2: "Home Tool Markup Language",
         op3: "Hyperlinks and Text Markup Language",
         correct: "Hyper Text Markup Language"
    },
    {
         id: 8,
         ques: "Who is Known as the father of World Wide Web (WWW)? ",
         op1: "Robert Cailliau",
         op2: "Tim Thompson",
         op3: "Tim Berners-Lee",
         correct: "Tim Berners-Lee"
    },
    {
         id: 9,
         ques: "What should be the first tag in any HTML document?",
         op1: "head tag",
         op2: "html tag",
         op3: "title tag",
         correct: "html tag"
    }
    
];
function register() {
    var firstName = document.getElementById("firstName").value;
    var lastName = document.getElementById("lastName").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    
     user = {
        Fname: firstName,
        Lname: lastName,
        email: email,
        password: password
    }
    
    console.log("User Object ");
    console.log(user);
}
window.onload = function () {
   
    
    
    document.getElementById("btn_next").setAttribute("style","display:none");
    document.getElementById("reg_box").style.display="block";
    document.getElementById("questionBar").innerHTML = question[0].ques;
    document.getElementById("option1").innerHTML = question[0].op1;
    document.getElementById("test1").value = question[0].op1;
    document.getElementById("option2").innerHTML = question[0].op2;
    document.getElementById("test2").value = question[0].op2;
    document.getElementById("option3").innerHTML = question[0].op3;
    document.getElementById("test3").value = question[0].op3;
    
}
function validate() {
    var firstName = document.getElementById("firstName").value;
    var lastName = document.getElementById("lastName").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;

    if(firstName == "" || !isNaN(firstName)){
         sweetAlert("Oops...", " FirstName should be letters or not be Empty", "error");
    }
    if(lastName == "" || !isNaN(lastName)){
        sweetAlert("Oops...", " LastName should be letters or not be Empty", "error");
    }
    if(email == "" || !isNaN(email)){
        sweetAlert("Oops...", " Email should be valid or not be Empty", "error");
    }
    if(password == ""){
        sweetAlert("Oops...", "Password should not be Empty", "error");
    }
    
    if(!firstName == "" && !lastName == "" && !email == "" && !password == ""){
        register();
        swal("Good job "+user.Fname+" "+user.Lname+"!", "You are now Successfully Registered!", "success");
        
        document.getElementById("quiz_box").style.display="block";
        document.getElementById("reg_box").style.display="none";
        document.getElementById("head").innerHTML = "Quiz Test";
        document.getElementById("welOne").innerHTML = "Welcome";
        document.getElementById("welTwo").innerHTML = user.Fname +" "+ user.Lname;
        
        swal({
            title: "Lets Started <small>Quickly</small>!",
            text: "Be Ready To Get Started With<span style='color:#F8BB86'>Test<small>zzz</small><span>.",
            html: true
        });
        
    }else{
        sweetAlert("Oops...", "Something Went wrong please check you info", "error");
    }    
}
// function login() {
//     var email = document.getElementById("email").value;
//     var pass = document.getElementById("password").value;
//     var Oemail = user.email;
//     var Opass = user.pass;
//     if(email == Oemail && pass == Opass){
        
        // swal({
        //     title: "Logged in <small>Successfully</small>!",
        //     text: "Be Ready To Start <span style='color:#F8BB86'>Test<small>zzz</small><span>.",
        //     html: true
        // });
//         document.getElementById("login_box").style.display="none";
//     }else{
//         sweetAlert("Oops...",user.email +" = Email or "+user.password+" password is invalid", "error");
//     }
// }
function enableNextBtn() {
    var radioBtn = document.querySelector('input[name="group1"]:checked');
    if(radioBtn){
        document.getElementById("btn_next").setAttribute("style","display:block");
    }
}
function next() {
    QuizIndex = QuizIndex+1;
    var CorrectAns = question[QuizIndex-1].correct;
    var radioSelect = document.querySelector('input[name="group1"]:checked').value;
    
        if(radioSelect == CorrectAns){
            // swal("Good job ", "Correct ", "success");
            Correct++;
        }else{
            //   sweetAlert("Oops...", "Wrong", "error");
            Correct;
        }
   
    if(question[QuizIndex] !== undefined){
        document.getElementById("questionBar").innerHTML = question[QuizIndex].ques;
        document.getElementById("option1").innerHTML = question[QuizIndex].op1;
        document.getElementById("test1").value = question[QuizIndex].op1;
        document.getElementById("option2").innerHTML = question[QuizIndex].op2;
        document.getElementById("test2").value = question[QuizIndex].op2;
        document.getElementById("option3").innerHTML = question[QuizIndex].op3;
        document.getElementById("test3").value = question[QuizIndex].op3;
        
    }else{
        var per = Correct / question.length * 100;
        
        document.getElementById("quiz_box").style.display="none";
        document.getElementById("head").innerHTML = "Result";
        document.getElementById("result").style.display="block";
        if(per > 60){
            document.getElementById("res_head").innerHTML = "Great <span>"+user.Fname+"</span>! You Have Passed";
            document.getElementById("res_head").className = "res_headd";
            
        }else{
            document.getElementById("res_head").innerHTML = "Sorry <span>"+user.Fname+"</span>! You Have Failed";
             document.getElementById("res_head").className = "res_headf";
        }
       
        document.getElementById("res_cor").innerHTML = Correct;
        document.getElementById("res_per").innerHTML = per+"%";
       
        
        
    }
}
