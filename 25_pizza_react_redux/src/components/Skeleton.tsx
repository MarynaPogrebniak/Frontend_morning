import React from 'react'
import ContentLoader from 'react-content-loader';

const Skeleton: React.FC = () => {
  return (
    <ContentLoader
    // скорость анимации загрузки (по умолчанию 2)
        speed={2}
    // задает ширину заглушки ( 400 )
        width={280}
    // задает высоту заглушки (160)
        height={520}
    // viewBox определяет прямоугольную область просмотра (0 0 400 160)
        viewBox=' 0 0 280 520'
    // цвет фона заглушки (#f3f3f3)
        backgroundColor='#f3f3f3'
    // цвет переднего плана заглушки (цвет самой анимации, #ecebeb)
        foregroundColor='#ecebeb'    
    >
            {/* Круг */}
        {/* 
            cx - определяет горизонтальную координату круга относительно
                 верхнего левого угла заглушки
            cy - определяет вертикальную координату круга относительно
                 верхнего левого угла заглушки
            r  - задает радиус круга
        */}
        <circle cx='139' cy='139' r='139'/>
            {/* Прямоугольники */}
        {/* 
            x      - задает горизонтальную позицию (отступ) прямоугольника 
                относительно верхнего левого угла заглушки
            y      - задает вертикальную позицию (отступ) прямоугольника 
                относительно верхнего левого угла заглушки
            rx     - задает радиус скругления углов горизонтальных сторон прямоугольника 
                (схож со свойством border-radius)
            ry     - задает радиус скругления углов вертикальных сторон прямоугольника 
                (схож со свойством border-radius)
            width  - ширина прямоугольника
            height - высота прямоугольника
        */}
        <rect x={0} y={315} rx={10} ry={10} width={280} height={24}/>
        <rect x={0} y={355} rx={10} ry={10} width={280} height={88}/>
        <rect x={0} y={480} rx={10} ry={10} width={88} height={27}/>
        <rect x={130} y={470} rx={30} ry={30} width={150} height={47}/>
    </ContentLoader>
  )
};

export default Skeleton