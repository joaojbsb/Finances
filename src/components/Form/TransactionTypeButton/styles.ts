import { RectButton } from 'react-native-gesture-handler';
import { Feather } from '@expo/vector-icons';
import { RFValue } from 'react-native-responsive-fontsize';
import styled, {css} from 'styled-components/native';


interface IconProps{
    type: 'up' | 'down';
}

interface ContainerProps{
    isActive: boolean;
    type: 'up' | 'down';
}

export const Container = styled.View<ContainerProps>`
    width: 48%;

    border-radius: 5px;
    border-width:  ${({isActive}) => isActive ? 0 : 1.5}px;
    border-style: solid;
    border-color:${({ theme }) => theme.colors.text};



    ${({ isActive, type}) => isActive && type === 'up' && css`
        background-color: ${({ theme }) => theme.colors.sucess_light};
    `}

    ${({ isActive, type}) => isActive && type === 'down' && css`
        background-color: ${({ theme }) => theme.colors.attention_light};
    `}
`;

export const Button = styled(RectButton)`
    flex-direction: row;
    align-items: center;
    justify-content: center;
    padding: 16px 16px;
`;

export const Icon = styled(Feather)<IconProps>`
    font-size: ${RFValue(24)}px;
    margin-right: 12px;
    color: ${({ theme, type }) => type === 'up' ? theme.colors.succes : theme.colors.attention};
`;

export const Title = styled.Text`
    font-size: ${RFValue(14)}px;
    font-family: ${({ theme }) => theme.fonts.regular};
    color: ${({ theme }) => theme.colors.text_dark};
`;

