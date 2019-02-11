class Teacher {
	constructor(){
	this.designation="Teacher";
	this.collegeName="Garware College";	
	}
}

class ComputerScienceTeacher extends Teacher{
	constructor(){
        super();
	    this.mainSubject="ComputerScience";
	}
}
class BusinessIntelligenceTeacher extends Teacher{
    constructor(){
        super();
        this.mainSubject="BusinessIntelligence";
    }
}

var buttonClickOnCS=document.getElementById('CSButton');

buttonClickOnCS.addEventListener("click",myCSFunction);

function myCSFunction(){
  CSTeacher = new ComputerScienceTeacher();
  console.log("Subject Name: ",CSTeacher.mainSubject);
  console.log("Designation: ",CSTeacher.designation);
  console.log("College Name: ",CSTeacher.collegeName);
}

var buttonClickOnBI=document.getElementById('BIButton');

buttonClickOnBI.addEventListener("click",myBIFunction);

function myBIFunction(){
    BITeacher = new BusinessIntelligenceTeacher();
    console.log("Subject Name: ",BITeacher.mainSubject);
    console.log("Designation: ",BITeacher.designation);
    console.log("College Name: ",BITeacher.collegeName);
}
    