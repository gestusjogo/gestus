import styled from "styled-components"
import bg_casa from "../../assets/images/bg_casa.jpg"
import jonas from "../../assets/images/jonas.png"

const Login = ()=> {
    return(
        <>
            <Backgorund id="myCanvas" 
                style={{
                    backgroundImage: `url(${bg_casa})`,
                    backgroundPosition: 'center',
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat' 
            }}>
            </Backgorund>
            <Menu/>
            <Character src={jonas}/>
        </>
    )
}
const Backgorund = styled.div`
    
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    margin: auto;
    width: 100%;
    height: 100%;
    -webkit-filter: blur(15px);
    -moz-filter: blur(15px);
    -o-filter: blur(15px);
    -ms-filter: blur(15px);
    filter: blur(15px);
    z-index: -1;
   
`
const Character = styled.img`
    
    position: absolute;
    
    bottom: 0;
    left: 0;
    margin: auto;
    width: auto;
    height: 80%;
    z-index: 10;
    
   
`
const PlayButton = styled.button`
    
`
const Menu = styled.div`
    background-color: red;
    width: 300px;
    height: 300px;
    position: absolute;
    right: 100px;
    bottom: 100px;
    z-index: 20;
`
export default Login