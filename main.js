console.log("start")
//get express
console.log("getting express");
const express = require("express");

//get ejs
console.log("getting ejs");
const ejs = require('ejs');

//make an app by express
console.log("making app via express");
const app = express();

//get mongoose
console.log("getting mongoose");
const mongoose = require('mongoose');

//set up mongoose connection on localhost
//use/make database company
console.log("setting connection to localhost and database company")
mongoose.connect('mongodb://127.0.0.1:27017/company');

//get employees model  via employees.js in models folder where its schema defined
console.log("using employees schema in models folder")
const Employee = require("./models/Employee");

//using port 3000
console.log("Set port as 3000");
const port = 3000;

//set a ejs view engine
console.log('setting ejs view engine');
app.set('view engine', 'ejs');


//make a function to get random
const getRandom = (arr) => {
    console.log("getting a random index");
    let rno = Math.floor(Math.random() * arr.length);
    return arr[rno];
}


//when req is sent to /
app.get('/', (req, res) => {
    
    res.render('index', { foo: 'foooffo' });
});


//when req is sent to /generate
app.get("/generate", async (req, res) => {
    console.log("request recieved on /generate");
    //clear prev
    console.log("clearing previous");
    await Employee.deleteMany({})
    // Generate random data
    
    let randomNames = [
        "rohan", "mphan", "sphan", "df", "ajay", "rahul", "saurabh", "amit", "kumar", "ravi",
        "vishal", "arun", "sumit", "rajesh", "anil", "pankaj", "vicky", "shivam", "kunal", "manoj",
        "naveen", "neeraj", "sonu", "deepak", "harsh", "yash", "akshay", "kamal", "tushar", "sandeep",
        "sandeep", "abhay", "vishal", "vivek", "rahul", "gautam", "manish", "kartik", "pradeep", "piyush",
        "siddharth", "ankit", "prashant", "mukesh", "hitesh", "nitin", "ankur", "garima", "deepika", "priyanka",
        "anjali", "komal", "preeti", "khushboo", "neha", "shikha", "pooja", "sakshi", "sonali", "divya",
        "simran", "surbhi", "kanika", "akanksha", "shivani", "richa", "poornima", "shweta", "vani", "kavita",
        "neetu", "pallavi", "manju", "garima", "priyanka", "kritika", "shubhi", "riya", "poonam", "swati",
        "heena", "tanu", "aarti", "diya", "sonal", "ankita", "neha", "parul", "sangeeta", "aradhna", "puja",
        "savita", "madhuri", "neelu", "komal", "jaya", "devika", "vidya", "nisha", "sunita", "madhavi",
        "nidhi", "muskan", "tanuja", "anita", "tanvi", "rekha", "anushka", "shubhika", "manju", "shivangi"
    ];
    
    let randomLang = [
        "js", "python", "cpp", "html", "css", "java", "ruby", "php", "swift", "kotlin",
        "typescript", "go", "rust", "dart", "elixir", "lua", "perl", "shell", "bash", "r",
        "matlab", "sql", "vhdl", "scala", "fortran", "groovy", "actionscript", "f#", "clojure", "haskell",
        "objective-c", "c#", "visual-basic", "sql", "dart", "groovy", "powershell", "markdown", "xml", "yaml",
        "json", "xml", "cobol", "delphi", "coffee-script", "scheme", "tcl", "sas", "awk", "solidity",
        "assembly", "sml", "vhdl", "verilog", "prolog", "erlang", "chucK", "abc", "rebol", "awk", "xojo",
        "opencl", "cuda", "verilog", "lisp", "ruby", "smalltalk", "ocaml", "mercury", "racket", "pike",
        "actionscript", "vba", "objective-c", "f#", "julia", "nim", "solidity", "d", "zsh", "json", "jade",
        "postscript", "awk", "processing", "rebol", "cypher", "haxe", "prolog", "twig", "scala", "go", "assembly",
        "dart", "bash", "swift", "python", "lua", "rust", "java", "delphi", "pascal", "coffeescript", "typescript"
    ];
    
    let randomCities = [
        "kolkata", "delhi", "mumbai", "hyderabad", "chennai", "bangalore", "pune", "ahmedabad", "surat", "jaipur",
        "lucknow", "kanpur", "nagpur", "patna", "indore", "bhopal", "chandigarh", "ludhiana", "udaipur", "agra",
        "noida", "vijayawada", "visakhapatnam", "mangalore", "coimbatore", "madurai", "jalandhar", "meerut", "rajkot", "faridabad",
        "ghaziabad", "howrah", "hubbali", "kannur", "kochi", "chandrapur", "puducherry", "gwalior", "durg", "ranchi",
        "panipat", "ambala", "moradabad", "jamshedpur", "kolhapur", "belagavi", "siliguri", "warangal", "mysore", "bilaspur",
        "tirunelveli", "tirupati", "korba", "kollam", "bhubaneswar", "kakinada", "madhurai", "baroda", "mangalore", "kottayam",
        "vijayawada", "trivandrum", "aligarh", "satna", "jodhpur", "patiala", "bikaner", "chittoor", "raebareli", "surat",
        "hazaribagh", "asansol", "kushinagar", "warangal", "kanpur", "nagapattinam", "bilaspur", "jabalpur", "srinagar", "bhatinda",
        "puducherry", "shimla", "port blair", "dhanbad", "moradabad", "gandhinagar", "sonipat", "imphal", "raichur", "jammu",
        "kashmir", "jamshedpur", "bhilai", "sangli", "aurangabad", "baramati", "pune", "belgaum", "vapi", "daman",
        "vapi", "vijayanagar", "kalaburagi", "gandhinagar", "gaya", "nagapattinam", "dibrugarh", "agra", "churu", "sonipat"
    ];
    
    //run a loop 
    console.log("runnig a loopp");
    for (let index = 0; index < 5; index++) {

        //creating employee data using Employee.create 
        //Employe model is through models folder
        console.log("creating employee data");
        let e = await Employee.create({
            name: getRandom(randomNames),
            salary: Math.floor(Math.random() * 220000),  // Corrected random salary generation
            language: getRandom(randomLang),
            city: getRandom(randomCities),
            isManager: Math.random() > 0.5  
        });
        //saving employee data
        console.log("saving employee data");
        await e.save();
    }
    //send the response
    console.log("sending response");
    res.send("Data generated successfully");
});


//set the app to listen on port
console.log("listening on port");
app.listen(port, () => {
    console.log(`example app listening on port ${port}`);
});
