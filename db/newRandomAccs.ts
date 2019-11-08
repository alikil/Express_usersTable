import {name,internet} from "faker";
const acc = [ 
  { 
    FirstName: name.firstName(), 
    LastName: name.lastName(), 
    Something: name.jobTitle(),
    Email: internet.email(),
    Pass: internet.password()  
  },
  { 
    FirstName: name.firstName(), 
    LastName: name.lastName(), 
    Something: name.jobTitle(),
    Email: internet.email(),
    Pass: internet.password()  
  },
  { 
    FirstName: name.firstName(), 
    LastName: name.lastName(), 
    Something: name.jobTitle(),
    Email: internet.email(),
    Pass: internet.password()  
  },
  { 
    FirstName: name.firstName(), 
    LastName: name.lastName(), 
    Something: name.jobTitle(),
    Email: internet.email(),
    Pass: internet.password()  
  },
  { 
    FirstName: name.firstName(), 
    LastName: name.lastName(), 
    Something: name.jobTitle(),
    Email: internet.email(),
    Pass: internet.password()  
  },
]
export {acc}