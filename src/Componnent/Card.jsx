const Card = ({Totaltask}) => {
  return (
    <div className="w-11/12 mx-auto flex-col-1 lg:flex  justify-between item-center py-10">
      <div
        className="w-70 h-40 lg:w-180 lg:h-60 rounded-lg text-white flex flex-col justify-center items-center"
        style={{
          backgroundImage: `
            url('/vector1.png'),
            url('/vector2.png'),
            linear-gradient(to right, #632EE3, #9F62F2)
          `,
        }}
      >
       <h1 className="text-2xl font-semibold">In-Progress</h1>
       <p className="text-4xl font-bold">{Totaltask}</p>
      </div>

      <div  className="w-70 h-40 mt-5 lg:w-180 lg:h-60 rounded-lg text-white flex flex-col justify-center items-center"
        style={{
          backgroundImage: `
            url('/vector1.png'),
            url('/vector2.png'),
            linear-gradient(to right, #54CF68, #00827A)
          `,
        }}>
            <h1 className="text-2xl font-semibold">Resolved</h1>
            <p className="text-4xl font-bold">0</p>
        </div>
    </div>
  );
};

export default Card;
