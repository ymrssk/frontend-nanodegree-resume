var work = {
	'jobs': [
		{
			'employer': 'Keio University',
			'title': 'Project Assistant Professor',
			'location': 'Yokohama, Japan',
			'dates': 'October, 2013 - Current',
			'description': 
				'Managed a project of 50kg size micro-satellite project UNIFORM-1 as a project manager and led project to successful mission result.\
				Currently managing students\' micro-satellite project as a mentor while providing lecturer of\
				\'Spacecraft System Design\', \'Space Systems Engineering\' and \'Hands-on Training of Satellite System\'.'
		},
		{
			'employer': 'Wakayama University',
			'title': 'Project Assistant Professor',
			'location': 'Wakayama, Japan',
			'dates': 'September, 2010 - September 2013',
			'description':
				'Led attitude control subsystem team of three micro-satellite projects.\
				During the development, I developed attitude and orbit simulator for three micro-satellites by using MATLAB/Simulink, C, LabVIEW.\
				I also tested attitude control algorithm with software-in-the-loop and hardware-in-the-loop environment\
				as well as some hardware such as reaction wheels, magnetic torquers, sun sensor, gyro, magnetometer, star tracker and GPS.'
		}
	],
	'display': function(){
		for (var i in work.jobs){
			$('#workExperience').append(HTMLworkStart);
			var formattedEmployer 		= HTMLworkEmployer.replace('%data%', work.jobs[i].employer);
			var formattedTitle 			= HTMLworkTitle.replace('%data%', work.jobs[i].title);
			var formattedEmployerTitle 	= formattedEmployer + formattedTitle;
			var formattedDates 			= HTMLworkDates.replace('%data%', work.jobs[i].dates);
			var formattedLocation 		= HTMLworkLocation.replace('%data%', work.jobs[i].location);
			var formattedDescription 	= HTMLworkDescription.replace('%data%', work.jobs[i].description);
			$('.work-entry:last').append(formattedEmployerTitle)
			.append(formattedLocation)
			.append(formattedDates)
			.append(formattedDescription);
		};
	}
};
var projects = {
	'projects': [
		{
			'title': 'Small Satellites',
			'dates': '2011 - 2014',
			'description': 'Developed 3 microsatellites',
			'images': ['images/uniform-800.jpg']
		},
		{
			'title': 'Drones',
			'dates': '2012-2013',
			'description': 'Developed object dropping drone',
			'images': ['images/drone-800.jpg']
		},
		{
			'title': 'IoT Sensor Network',
			'dates': '2014-2015',
			'description': 'Developed IoT field sensor network',
			'images': ['images/den-800.jpg']
		},
		{
			'title': 'Electrical Vehicle',
			'dates': '2007',
			'description': 'Developped an electrical vehicle',
			'images': ['images/ev-800.jpg']
		}
	],
	'display': function(){
		for(var i in projects.projects){
			$('#projects').append(HTMLprojectStart);
			var formattedTitle 			= HTMLprojectTitle.replace('%data%', projects.projects[i].title);
			var formattedDates 			= HTMLprojectDates.replace('%data%', projects.projects[i].dates);
			var formattedDescription 	= HTMLprojectDescription.replace('%data%', projects.projects[i].description);
			var formattedImages 		= HTMLprojectImage.replace('%data%', projects.projects[i].images);
			$('.project-entry:last').append(formattedTitle)
			.append(formattedDates)
			.append(formattedDescription)
			.append(formattedImages);
		};
	}
};
var bio = {
	'name': 'Shusaku Yamaura',
	'role': 'Web Developper',
	'contacts': {	
		'mobile': '111-111-1111',
		'email': 'aaa@gmail.com',
		'github': 'ymrssk',
		'twitter': 'noTwitterAccount', 
      	'location': 'Yokohama'
	},
	'welcomeMessage': '\'Making the simple complicated is commonplace; making the complicated simple, awesomely simple, that\'s creativity.\'\
						by Charles Mingus',
	'skills': ['C/C++', 'HTML/CSS', 'MATLAB/Simulink', 
				'LabVIEW', 'SysML', 'JavaScript', 'Python'],
	'biopic': 'images/fry.jpg',
	'display': function(){
		var formattedName 		= HTMLheaderName.replace('%data%', bio.name);
		var formattedRole 		= HTMLheaderRole.replace('%data%', bio.role);
		var formattedMobile 	= HTMLmobile.replace('%data%', bio.contacts.mobile);
		var formattedEmail 		= HTMLemail.replace('%data%', bio.contacts.email);
		var formattedTwitter 	= HTMLtwitter.replace('%data%', bio.contacts.twitter);
		var formattedGithub 	= HTMLgithub.replace('%data%', bio.contacts.github);
		var formattedLocation 	= HTMLlocation.replace('%data%', bio.contacts.location);
		var formattedBioPic 	= HTMLbioPic.replace('%data%', bio.biopic);
		var formattedWelcome 	= HTMLwelcomeMsg.replace('%data%', bio.welcomeMessage);
		$('#header').prepend(formattedRole)
		.prepend(formattedName);
		$('#topContacts').append(formattedMobile)
		.append(formattedEmail)
		.append(formattedGithub)
		.append(formattedTwitter)
		.append(formattedLocation);
		$('#header').append(formattedBioPic)
		.append(formattedWelcome)
		.append(HTMLskillsStart);
		for(i in bio.skills){
			var formattedSkill = HTMLskills.replace('%data%', bio.skills[i]);
			$('#skills').append(formattedSkill);
		};
		$('#footerContacts').append(formattedMobile)
		.append(formattedEmail)
		.append(formattedGithub)
		.append(formattedTwitter)
		.append(formattedLocation);
	}
};
var education = {
	'schools': [
		{
			'name': 'Georgia Institute of Technology',
			'location': 'Atlanta, GA',
			'degree': 'Master of Science',
			'majors': 'Aerospace Engineering',
			'dates': 2010,
			'url': 'http://www.gatech.edu/'
		},
		{
			'name': 'Yokohama National University',
			'location': 'Yokohama',
			'degree': 'Bachelor of Science',
			'majors': 'Industrial Engineering',
			'dates': 2008,
			'url': 'http://www.ynu.ac.jp/english/index.html'
		}
	],
	'onlineCourses': [
		{
			'title': 'Front-end Web Developpers',
			'school': 'Udacity',
			'date': 2015,
			'url': 'https://www.udacity.com'
		}
	],
	'display': function(){
		for (var i in education.schools){
			var formattedSchoolName 	= HTMLschoolName.replace('%data%', education.schools[i].name);
			var formattedSchoolDegree 	= HTMLschoolDegree.replace('%data%', education.schools[i].degree);
			var NameAndDegree 			= formattedSchoolName + formattedSchoolDegree; 
			var formattedSchoolDates 	= HTMLschoolDates.replace('%data%', education.schools[i].dates);
			var formattedSchoolLocation = HTMLschoolLocation.replace('%data%', education.schools[i].location);
			var formattedSchoolMajor 	= HTMLschoolMajor.replace('%data%', education.schools[i].majors);
			$('#education').append(HTMLschoolStart);
			$('.education-entry:last').append(NameAndDegree)
			.append(formattedSchoolDates)
			.append(formattedSchoolLocation)
			.append(formattedSchoolMajor);
		};
		$('#education').append(HTMLonlineClasses);
		for (var i in education.onlineCourses){
			var formattedOnlineTitle 	= HTMLonlineTitle.replace('%data%', education.onlineCourses[i].title);
			var formattedOnlineSchool 	= HTMLonlineSchool.replace('%data%', education.onlineCourses[i].school);
			var TitleAndSchool			= formattedOnlineTitle + formattedOnlineSchool;
			var formattedOnlineDates 	= HTMLonlineDates.replace('%data%', education.onlineCourses[i].date);
			var formattedOnlineURL 		= HTMLonlineURL.replace('%data%', education.onlineCourses[i].url);
			$('#education').append(HTMLschoolStart);
			$('.education-entry:last').append(TitleAndSchool)
			.append(formattedOnlineDates)
			.append(formattedOnlineURL);
		};
	}
};
work.display();
projects.display();
bio.display();
education.display();
$('#mapDiv').append(googleMap);