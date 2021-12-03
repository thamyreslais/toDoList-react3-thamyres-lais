import {BrowserRouter, Switch, Route} from 'react-router-dom'

import Home from '../pages/Home/Home'
import Sobre from '../pages/Sobre/Sobre'

function Rotas () {
    return(
        <BrowserRouter>
            <Switch>
                <Route path = "/" exact component={Home}/>
                <Route path = "/sobre" component={Sobre}/>
            </Switch>
        </BrowserRouter>
    )
}

export default Rotas