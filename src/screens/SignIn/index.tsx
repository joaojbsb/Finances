import React, { useContext } from "react";
import { RFValue } from "react-native-responsive-fontsize";
import GoogleSvg from '../../assets/google.svg';
import AppleSvg from '../../assets/apple.svg';
import LogoSvg from '../../assets/logo.svg';

import { SignInSocialButton } from '../../components/SignInSocialButton';
import { AuthContext } from "../../AuthContext";

import { Container,TitleWrapper,Header,Title, SignInTitle, Footer, FooterWrapper } from "./styles";

export function SignIn(){
    const data = useContext(AuthContext);

return(

    <Container>
        <Header>
            <TitleWrapper>
                <LogoSvg width={RFValue(120)} height={RFValue(68)} />
                <Title>Controle suas {`\n`}
                    finanças de forma {`\n`}
                    muito simples</Title>
            </TitleWrapper>

            <SignInTitle>
                Faça seu login com {`\n`}
                uma das contas abaixo
            </SignInTitle>
        </Header>

        <Footer>
            <FooterWrapper>
                <SignInSocialButton title='Login com Google' svg={GoogleSvg}  />

                <SignInSocialButton title='Login com Apple' svg={AppleSvg}  />
            </FooterWrapper>
        </Footer>
    </Container>
)

}