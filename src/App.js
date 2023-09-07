import React, { Component } from 'react';
import About from './components/About';
import Experience from './components/Experience';
import Education from './components/Education';
import Skills from './components/Skills';
import Frame from './components/Frameworks';
class App extends Component {
  render() {

    const person = {
      
      name: 'Carlos Zea',
      profession: 'Estudiante de ingenieria de sistemas',
      bio: 'Estudiante de ingeniería de sistemas en la universidad de la costa (CUC),actualmente afianzando conocimientos en desarrollo web y base de datos. En mi proceso universitario he adquirido conocimientos en diversos lenguajes de programación así también habilidades en el liderazgo y formación integra.',
      address: 'Barranquilla, Colombia.',
      social: [
        {name: 'twitter', url: 'https://twitter.com/Andrew052419?t=ry6bOwDy2VyMnvfvyYTSQQ&s=09'},
        {name: 'github', url: 'https://github.com/AndresZea05'},
        {name: 'linkedin', url: 'https://www.linkedin.com/in/carlos-zea-669a94252/'}
      ],
      experience: [
        {company: 'Universidad de la Costa (CUC)', startDate: 'jul. 2022', endDate: 'dic 2022', jobDescription: 'Proyecto de aula del diseño de un software contable para pequeñas y medianas empresas con en fin de ayudar en los procesos contables e informes generales de la empresa. En este proyecto cumplo con el rol de de programador con métodos de desarrollo de software que ayudan al proceso.', jobTitle:'Ingeniería de software.'},
        
        
      ],
      education: [
        {degree: 'Ingenieria de sistemas', institution: 'Universidad de la Costa (CUC)', startDate: 'feb 2020', endDate: 'Actualidad'},
        {degree: 'tecnico en diseño grafico', institution: 'ITSA', startDate: 'mar 2019', endDate: 'nov 2019'},
      ],
     
      skills: [
        {name: 'HTML5', percentage: '95%'},
        {name: 'CSS', percentage: '90%'},
        {name: 'JavaScript', percentage: '75%'},
        {name: 'PHP', percentage: '50%'},
        
       
       
      ] ,
      Frame: [
        {name: 'React', percentage: '75%'},
        {name: 'Angular', percentage: '70%'},
        {name: 'Laravel', percentage: '60%'},
       
         
      ]
    };

    return (
      <header>
        <div className='wrapper'>
          <div className='sidebar'>
            <About
              avatar={person.avatar}
              name={person.name}
              profession={person.profession}
              bio={person.bio}
              address={person.address}
              social={person.social} />
              
          </div>

          <div className='content-wrapper'>
              <div className='content'>
                <Experience experience={person.experience} />
                <Education education={person.education} />
               
                <Skills skills={person.skills} />
                <Frame Frame={person.Frame} />
              </div>
          </div>

        </div>
      </header>
    );
  }
}

export default App;
