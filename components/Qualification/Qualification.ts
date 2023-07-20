
export type Certificate_type = {
    name : string,
    img : string
    compelete : boolean
    progress : number
  }
  

export const Certificate_Array : Certificate_type[]= [
    {name: 'HTML',
    img : '/about/about_certificate/HTML.png',
    compelete : true,
    progress : 100},
    {name: 'CSS',
    img : '/about/about_certificate/CSS.png',
    compelete : true,
    progress : 100},
    {name: 'Java Script',
    img : '/about/about_certificate/JS.png',
    compelete : false,
    progress : 60},
    {name: 'React',
    img : '/about/about_certificate/React.png',
    compelete : false,
    progress : 50},
    {name: 'Type Script',
    img : '/about/about_certificate/Ts.png',
    compelete : false,
    progress : 30},
]