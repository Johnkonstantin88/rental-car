const CustomIcon = ({ name, fill, stroke, width = 16, height = 16 }) => {
  return (
    <svg width={width} height={height} fill={fill} stroke={stroke}>
      <use href={`/sprite.svg#${name}`}></use>
    </svg>
  );
};

export default CustomIcon;
