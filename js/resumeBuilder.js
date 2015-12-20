var work = {
	"jobs": [
		{
			"employer": "Keio University",
			"title": "Project Assistant Professor",
			"location": "Yokohama, Japan",
			"dates": "October, 2013 - Current",
			"description": 
				"Managed a project of 50kg size micro-satellite project UNIFORM-1 as a project manager and led project to successful mission result.\
				Currently managing students' micro-satellite project as a mentor while providing lecturer of\
				\"Spacecraft System Design\", \"Space Systems Engineering\" and \"Hands-on Training of Satellite System\"."
		},
		{
			"employer": "Wakayama University",
			"title": "Project Assistant Professor",
			"location": "Wakayama, Japan",
			"dates": "September, 2010 - September 2013",
			"description":
				"Led attitude control subsystem team of three micro-satellite projects.\
				During the development, I developed attitude and orbit simulator for three micro-satellites by using MATLAB/Simulink, C, LabVIEW.\
				I also tested attitude control algorithm with software-in-the-loop and hardware-in-the-loop environment\
				as well as some hardware such as reaction wheels, magnetic torquers, sun sensor, gyro, magnetometer, star tracker and GPS."
		}
	],
	"display": function(){
		for (index in work.jobs){
			$("#workExperience").append(HTMLworkStart);
			var formattedEmployer 		= HTMLworkEmployer.replace("%data%", work.jobs[index].employer);
			var formattedTitle 			= HTMLworkTitle.replace("%data%", work.jobs[index].title);
			var formattedEmployerTitle 	= formattedEmployer + formattedTitle;
			var formattedDates 			= HTMLworkDates.replace("%data%", work.jobs[index].dates);
			var formattedLocation 		= HTMLworkLocation.replace("%data%", work.jobs[index].location);
			var formattedDescription 	= HTMLworkDescription.replace("%data%", work.jobs[index].description);
			$(".work-entry:last").append(formattedEmployerTitle);
			$(".work-entry:last").append(formattedLocation);
			$(".work-entry:last").append(formattedDates);
			$(".work-entry:last").append(formattedDescription);
		};
	}
};
var project = {
	"projects": [
		{
			"title": "Small Satellites",
			"dates": "2011 - 2014",
			"description": "Developed 3 microsatellites",
			"images": "images/uniform-800.jpg"
		},
		{
			"title": "Drones",
			"dates": "2012-2013",
			"description": "Developed object dropping drone",
			"images": "images/drone-800.jpg"
		},
		{
			"title": "IoT Sensor Network",
			"dates": "2014-2015",
			"description": "Developed IoT field sensor network",
			"images": "images/den-800.jpg"
		},
		{
			"title": "Electrical Vehicle",
			"dates": "2007",
			"description": "Developped an electrical vehicle",
			"images": "images/ev-800.jpg"
		}
	],
	"display": function(){
		for(i in project.projects){
			$("#projects").append(HTMLprojectStart);
			var formattedTitle 			= HTMLprojectTitle.replace("%data%", project.projects[i].title);
			var formattedDates 			= HTMLprojectDates.replace("%data%", project.projects[i].dates);
			var formattedDescription 	= HTMLprojectDescription.replace("%data%", project.projects[i].description);
			var formattedImages 		= HTMLprojectImage.replace("%data%", project.projects[i].images);
			$(".project-entry:last").append(formattedTitle);
			$(".project-entry:last").append(formattedDates);
			$(".project-entry:last").append(formattedDescription);
			$(".project-entry:last").append(formattedImages);
		};
	}
};
var bio = {
	"name": "Shusaku Yamaura",
	"role": "Web Developper",
	"contacts": {	
		"mobile": "111-111-1111",
		"email": "aaa@gmail.com",
		"github": "ymrssk",
		"twitter": "noTwitterAccount", 
      	"location": "Yokohama"
	},
	"welcomeMessage": "\"Making the simple complicated is commonplace; making the complicated simple, awesomely simple, that's creativity.\"\
						by Charles Mingus",
	"skills": ["C/C++", "HTML/CSS", "MATLAB/Simulink", 
				"LabVIEW", "SysML", "JavaScript", "Python"],
	"biopic": "images/fry.jpg",
	"display": function(){
		var formattedName 		= HTMLheaderName.replace("%data%", bio.name);
		var formattedRole 		= HTMLheaderRole.replace("%data%", bio.role);
		var formattedMobile 	= HTMLmobile.replace("%data%", bio.contacts.mobile);
		var formattedEmail 		= HTMLemail.replace("%data%", bio.contacts.email);
		var formattedTwitter 	= HTMLtwitter.replace("%data%", bio.contacts.twitter);
		var formattedGithub 	= HTMLgithub.replace("%data%", bio.contacts.github);
		var formattedLocation 	= HTMLlocation.replace("%data%", bio.contacts.location);
		var formattedBioPic 	= HTMLbioPic.replace("%data%", bio.biopic);
		var formattedWelcome 	= HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
		$("#header").prepend(formattedRole);
		$("#header").prepend(formattedName);
		$("#topContacts").append(formattedMobile);
		$("#topContacts").append(formattedEmail);
		$("#topContacts").append(formattedGithub);
		$("#topContacts").append(formattedTwitter);
		$("#topContacts").append(formattedLocation);
		$("#header").append(formattedBioPic);
		$("#header").append(formattedWelcome);
		$("#header").append(HTMLskillsStart);
		for(i in bio.skills){
			var formattedSkill = HTMLskills.replace("%data%", bio.skills[i]);
			$("#skills").append(formattedSkill);
		};
	}
};
var education = {
	"schools": [
		{
			"name": "Georgia Institute of Technology",
			"location": "Atlanta, GA",
			"degree": "Master of Science",
			"majors": "Aerospace Engineering",
			"dates": 2010,
			"url": "http://www.gatech.edu/"
		},
		{
			"name": "Yokohama National University",
			"location": "Yokohama",
			"degree": "Bachelor of Science",
			"majors": "Industrial Engineering",
			"dates": 2008,
			"url": "http://www.ynu.ac.jp/english/index.html"
		}
	],
	"onlineCourses": [
		{
			"title": "Front-end Web Developpers",
			"school": "Udacity",
			"date": 2015,
			"url": "https://www.udacity.com"
		}
	],
	"display": function(){
		for (i in education.schools){
			var formattedSchoolName 	= HTMLschoolName.replace("%data%", education.schools[i].name);
			var formattedSchoolDegree 	= HTMLschoolDegree.replace("%data%", education.schools[i].degree);
			var NameAndDegree 			= formattedSchoolName + formattedSchoolDegree; 
			var formattedSchoolDates 	= HTMLschoolDates.replace("%data%", education.schools[i].dates);
			var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", education.schools[i].location);
			var formattedSchoolMajor 	= HTMLschoolMajor.replace("%data%", education.schools[i].majors);
			$("#education").append(HTMLschoolStart);
			$(".education-entry:last").append(NameAndDegree);
			$(".education-entry:last").append(formattedSchoolDates);
			$(".education-entry:last").append(formattedSchoolLocation);
			$(".education-entry:last").append(formattedSchoolMajor);
		};
		$("#education").append(HTMLonlineClasses);
		for (i in education.onlineCourses){
			var formattedOnlineTitle 	= HTMLonlineTitle.replace("%data%", education.onlineCourses[i].title);
			var formattedOnlineSchool 	= HTMLonlineSchool.replace("%data%", education.onlineCourses[i].school);
			var TitleAndSchool			= formattedOnlineTitle + formattedOnlineSchool;
			var formattedOnlineDates 	= HTMLonlineDates.replace("%data%", education.onlineCourses[i].date);
			var formattedOnlineURL 		= HTMLonlineURL.replace("%data%", education.onlineCourses[i].url);
			$("#education").append(HTMLschoolStart);
			$(".education-entry:last").append(TitleAndSchool);
			$(".education-entry:last").append(formattedOnlineDates);
			$(".education-entry:last").append(formattedOnlineURL);
		};
	}
};

work.display();
project.display();
bio.display();
education.display();
$('#mapDiv').append(googleMap);


/*
$("#main").append(internationalizeButton);
function inName(namae){
	var nameArray = namae.trim().split(" ");
	var intFirst = nameArray[0].charAt(0).toUpperCase() + nameArray[0].substring(1).toLowerCase();
	var intLast = nameArray[1].toUpperCase();
	var intName = intFirst + " " + intLast;
	return intName;
};
console.log(bio.name);
inName(bio.name);
*/


/*
$("#main").append("Shusaku Yamauraaaaaaaaaaaaaaaa");

var awesomeThoughts;
awesomeThoughts = "I am Shusaku and I am awesome!";
console.log(awesomeThoughts);

var other = awesomeThoughts.replace("awesome", "fun");
$("#main").append(other);
*/
/*
var formattedName;
var formattedRole;
var name = "Shusaku Yamaura"
var role = "web developer"
formattedName = HTMLheaderName.replace("%data%", name);
formattedRole = HTMLheaderRole.replace("%data%", role);

$("#header").append(formattedName);
$("#header").append(formattedRole);
*/
/*
var skills = ["Java", "HTML", "C", "MATLAB"];
var a = skills.length;
$("#main").append(a);
*/
/*
var skills = ["Java", "HTML", "C", "MATLAB"];
var bio = {	"name": 	"Shusaku",
			"role": 	"Web Developer", 
			"contact": 	"ymr@gmail.com",
			"picture": 	"http://hogehoge.jp",
			"welcome": 	"Hello people!",
			"skill": 	skills
			};
formattedName = HTMLheaderName.replace("%data%", bio.name);
formattedRole = HTMLheaderRole.replace("%data%", bio.role);
formattedContact = HTMLemail.replace("%data%", bio.contact);
formattedPicture = HTMLemail.replace("%data%", bio.picture);
formattedMessage = HTMLbioPic.replace("%data%", bio.welcome);
formattedSkill = HTMLbioPic.replace("%data%", bio.skill);

$("#header").prepend(formattedName);
$("#header").prepend(formattedRole);/*
$("#header").append(formattedContact);
$("#header").append(formattedPicture);
$("#header").append(formattedMessage);
$("#header").append(formattedSkill);
*/

/*
var bio = {
	"name": "Shusaku"
};

bio.position = "Assistant Professor";
bio.employer = "Keio University";
bio.years = 2;
bio.place = "Yokohama";

bio["school"] = "Georgia Institute of Technology";
bio["gradYear"] = 2010;
bio["city"] = "Atlanta";

$("#main").append(bio.name);
$("#main").append(bio.position);
$("#main").append(bio.employer);
$("#main").append(bio.years);
$("#main").append(bio.place);
$("#main").append(bio["school"]);
$("#main").append(bio["gradYear"]);
$("#main").append(bio["city"]);
*/
/*
var "education" = {
	"school": "Georgia Tech",
	"city": "Atlanta",
	"majors": "Aerospace Engineering"
}
*/
