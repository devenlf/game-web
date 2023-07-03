import React, { useMemo, useRef } from 'react'
import { Stage, Sprite, Container } from '@pixi/react';
import back from '@/assets/back.png'
import cat from '@/assets/sprite12.png'
import dog from '@/assets/sprite7.png'
import ribbit from '@/assets/sprite10.png'
import meat from '@/assets/sprite5.png'
import guantou from '@/assets/sprite6.png'
import rot from '@/assets/sprite8.png'




const BearPage: React.FC = () => {
  const food = useMemo(() => { 
    return {
      meat: [{
        img:meat,
        type: 'meat',
        positions: [{ x: 0, y: 0 }, { x: 50, y: 0 }, {x:-50, y:0}]
      }],
      guantou: [{
        img:guantou,
        type: 'guantou',
        positions: [{ x: 0, y: 0 }, { x: 50, y: 0 }, {x:-50, y:0}]
      }],
    }
  }, [meat]) 
  return ( 
    <Stage width={1400} height={800}>
        <Sprite
        image={back}
        width={1400}
        height={800}
      />
      {food.meat.map(({ img, positions}) =>
        <Container position={[150, 150]}>
          {positions.map((item) =>
            <Sprite
                  image={img}
                  width={80}
                  height={80}
                  x={item.x}
                  y={item.y}
                />)}
            
          </Container>
      )}
      {food.guantou.map(({ img, positions}) =>
        <Container position={[420, 150]}>
          {positions.map((item) =>
            <Sprite
                  image={img}
                  width={80}
                  height={80}
                  x={item.x}
                  y={item.y}
                />)}
            
          </Container>
        )}
       <Sprite
          image={ rot}
          width={220}
          height={220}
          x={900}
          y={500}
          />
       <Sprite
          image={ cat}
          width={180}
          height={180}
          x={300}
          y={500}
        />
       <Sprite
          image={dog}
          width={200}
          height={200}
          x={600}
          y={500}
        />
       <Sprite
          image={ ribbit}
          width={220}
          height={220}
          x={900}
          y={500}
          />
      </Stage>
  );
};

export default BearPage;
