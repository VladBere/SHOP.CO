interface StarsProps {
  rating: number | undefined;
}

export const Stars: React.FC<StarsProps> = ({ rating }) => {
  const width = (((rating ? rating : 0) / 5) * 125).toFixed(0) + "px";

  return (
    <div
      className={"flex text-yellow-400 gap-1 overflow-hidden max-w-[125px]"}
      style={{ width: width }}
    >
      <img src="/src/assets/svgs/star.svg" alt="" />
      <img src="/src/assets/svgs/star.svg" alt="" />
      <img src="/src/assets/svgs/star.svg" alt="" />
      <img src="/src/assets/svgs/star.svg" alt="" />
      <img src="/src/assets/svgs/star.svg" alt="" />
    </div>
  );
};
