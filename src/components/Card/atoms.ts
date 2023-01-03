import { TPokemonType } from './../../interface/index';
import { FlexBox } from './../Flexbox/index';
import styled from "styled-components";

interface TAtomPokemonType {
    type: TPokemonType;
}

export const Container = styled(FlexBox)`
    max-width: 225px;
    background-color: ${(props) => props?.theme?.colors?.neutral?.pure}
    border-radius: 5px;
    box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px;
    padding: 10px;
    max-height: 320px;
`;

export const PokemonSpot = styled(FlexBox)<TAtomPokemonType> `
    background-color: ${(props) => props?.theme?.colors.types?.[props?.type]};
    border-radius: 100%;
    width: 160px;
    height: 160px;
`;

export const PokemonSprite = styled.img`
    height: 200px;
    width: 200px;
`

export const PokemonText = styled.span<TAtomPokemonType>`
    color: ${(props) => props?.theme?.colors.types?.[props?.type]};;
    font-size: 1.25em;
    font-weight: bold;
`