import React from 'react';

import img from './components/img/mifoto.jpg.jpg'; 

import {Header} from './components/Header';
import {Profile} from './components/Profile';
import {AcademicBackground} from './components/AcademicBackground';
import {Experience} from './components/Experience';
import {Skills} from './components/Skills';
import {Interests} from './components/Interests';
import {Languages} from './components/Languages';

function App() {
  const profileData = {
      name: "Santiago valencia ocampo",
      profession: "desarrollador backend",
      address: "colombia-armenia",
      email: "baneku.3015@gmail.com",
      website: "github: https://github.com/m0rs1ng1001",
      phone: "3103730211",
      avatar: img,
      profile: "soy una persona dispuesta a aprender cosas nuevas, responsable a entregas, tengo conocimientos de backend en C#,python,javascript y node.js y en fronted con html y react, me gustaria enfocarme como backend en los proyectos",
    academic: [
      {
        degree: "Tecnologo en Analisis y Desarrollo de Software.",
        description: "mi estudio se basa en aprender desarrollo de software, manejo de base de datos y documentacion de proyectos",
        institution: "Sena",
        startDate: "Julio 2021",
        endDate: "precencial"
      }
    ],
    experience: [
      {
        company: "Sena",
        endDate: "presencial",
        jobDescription: "crear proyectos para satisfacer la necesidad del cliente",
        jobTitle: "Backend y Frontend",
        startDate: "Julio 2021"
      }
    ],
    skills: [
      {
        name: "bases de datos",
        percentage: "80%"
      }
    ],
    interest: ["React", "frontend"],
    languages: [
      {
        name: "Spanish",
        percentage: "100%"
      },
      {
        name: "English",
        percentage: "30%"
      }
    ]
  };


  return (
    <div className="container mx-auto p-4 bg-blue-200">
      <Header
        name={profileData.name}
        profession={profileData.profession}
        avatar={profileData.avatar} 
        address={profileData.address}
        email={profileData.email}
        website={profileData.website}
        phone={profileData.phone}
      />  
      <Profile profile={profileData.profile} />
      <Experience experience={profileData.experience} />

      <div className="flex w-full">
        <div className="w-1/2 pr-4">
          <AcademicBackground academic={profileData.academic} />
          <Interests interests={profileData.interest} />
        </div>
        
        <div className="w-1/2 pr-4">
          <Languages languages={profileData.languages} />
          <Skills skills={profileData.skills} />
        </div>
      </div>

    </div>
  );
}

export default App;