import styled from "styled-components"
import bg_menu from "../../assets/images/bg_menu.png"

const Login = ()=> {
    return(
        <Container>
            <div id="myCanvas" 
                style={{
                    backgroundImage: `url(${bg_menu})`,
                    backgroundPosition: 'center',
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat' 
                }}>

            </div>
        </Container>
    )
}
const Container = styled.div`
    #myCanvas{
        position: absolute;
        top: 0;
        bottom: 0;
        right: 0;
        left: 0;
        margin: auto;
        width: 100%;
        height: 100%;
    }

`
export default Login