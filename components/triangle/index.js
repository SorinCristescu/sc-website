import { TriangleBox } from './styles';

const triangles = Array.from(Array(15), (_, x) => x);

const Triangle = () => {
  return (
    <TriangleBox>
      {triangles.map((triangle, index) => {
        return (
          <div className="plane">
            <div className="triangle"></div>
          </div>
        );
      })}
    </TriangleBox>
  );
};

export default Triangle;
