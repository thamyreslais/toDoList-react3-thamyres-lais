import './header2.styles.css'

const Header2 = (props) => {
    return (
       <div className="header2">
         <h1>{props.children}</h1>
         <img src={props.image} alt='ilustracao de mulher' />
       </div>
     )
   }
   
   export default Header2