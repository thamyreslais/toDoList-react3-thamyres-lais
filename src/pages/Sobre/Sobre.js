import {useState, useEffect} from 'react'
import { BsArrowReturnRight} from 'react-icons/bs'
import { TiSocialGithub, TiSocialLinkedin} from 'react-icons/ti'

import Menu from "../../components/Menu/Menu"
import Header2 from "../../components/Header2/Header2"
import ImageSobre from "../../assets/sobre.svg"
import Footer from "../../components/Footer/Footer"

import './sobre.styles.css'

const Sobre = () => {
    const [repos, setRepos] = useState([])

    useEffect(() => {
        async function pegaDados() {
            const response = await fetch('https://api.github.com/users/thamyreslais/repos')
            const data = await response.json()

            setRepos(data)
        }
        pegaDados()
    }, [])


    return(
        <>
            <Menu/>
            <Header2 image={ImageSobre}>Um pedacinho de mim</Header2>
            <div className='main'>
                <img src = "https://media-exp1.licdn.com/dms/image/C4D03AQFKkHR7PCQnYQ/profile-displayphoto-shrink_800_800/0/1638563676883?e=1643846400&v=beta&t=crNlQgyRJ5DADbnU2oGPRqaL5jDooOUkl0enjZlObd4" alt="Foto Thamyres"/>
                <div>
                    <h2>Thamyres Lais</h2>
                    <p>Cursando Ciências do consumo na UFRPE</p>
                    <p>Cursando programação para front-end na Reprograma</p>
                    <p>Jovem aprendiz como operadora de loja</p>
                    <p>Amante de livros, novos conhecimentos, séries e animes</p>
                </div>
            </div>

            <div className='Repositorios'>
                <div className='title-card'>
                    <h2>Minhas produções no Github</h2>
                </div>    
                <div className='card-container'>
                    
                    {repos.map(repo=>
                        <div key= {repo.id} className='card'>
                            <h3>{repo.name}</h3>
                            <a href={repo.html_url} target='_blank' rel='noreferrer' class='enter-repo'> <BsArrowReturnRight size={16} color='black'/></a>


                        </div>
                        )}
                </div>

            </div>

            <div className='redes-sociais'>
                <p className='contato'>Para entrar em contato comigo:</p>
                <div>
                    <a href= "https://github.com/thamyreslais" target= "_blank" rel = "noreferrer">
                        <TiSocialGithub size={90} color= "rgb(56, 56, 56"/>
                    </a>
                    <a href= "https://www.linkedin.com/in/thamyres-lais-59695a20a/" target= "_blank" rel = "noreferrer">
                        <TiSocialLinkedin size={90} color= "rgb(56, 56, 56"/>
                    </a>
                </div>
            </div>
            <Footer/>
        </>
    )
}

export default Sobre