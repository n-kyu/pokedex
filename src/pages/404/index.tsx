import { Container, FlexBox, PokedexView } from "../../components";

const Error404 = () => {
    return (
        <Container>
            <FlexBox 
            align="center" 
            justify="center" 
            direction="row"
            >
                <img alt="Pokemon banette gif"
                src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/354.gif"
                />
                <img alt="Pokemon mismagius gif"
                src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/429.gif"
                />
                <img alt="Pokemon gengar gif"
                src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/94.gif"
                />
            </FlexBox>
            <PokedexView 
            align="center" 
            justify="center" 
            direction="column"
            >
                <h3>Página não encontrada!</h3>
                <span>Apenas fantasmas por aqui...</span>
            </PokedexView>
        </Container>
    );
};

export default Error404;