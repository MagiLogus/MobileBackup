import { StatusBar } from 'expo-status-bar';
import { useState, useEffect } from 'react';
import { Container } from './src/components/Container/Container';
import { Count } from './src/components/Container/Count';
import { Title } from './src/components/Title/Title';
import { BtnStyle, TextBtn } from './src/components/Button/Button';
import { ImgTop } from './src/components/Images/Image';

export default function App() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  useEffect(() => {
    console.warn(`Contador atualizado: ${count}`)
  }, [count])

  return (
    <Container>
      <ImgTop
        source={require('./src/images/ampulheta.png')}
      />
      <Title >Contador: {count}</Title>
      <StatusBar style="auto" />
      <Count >
        <BtnStyle onPress={increment} cor="blue">
          <TextBtn  >Incrementar</TextBtn>
        </BtnStyle >
        <BtnStyle onPress={decrement} cor="red" >
          <TextBtn>Decrementar</TextBtn>
        </BtnStyle >
      </Count>
    </Container>
  );
}