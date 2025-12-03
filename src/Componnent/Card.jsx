const Card = ({ Totaltask, Totalresolved }) => {
  return (
  <div className="w-11/12 mx-auto flex flex-col lg:flex-row justify-center items-center gap-5 py-10">


  <div
    className="w-full lg:w-1/2 h-48 lg:h-60 rounded-xl text-white flex flex-col justify-center items-center"
    style={{
      backgroundImage: `
        url('/vector1.png'),
        url('/vector2.png'),
        linear-gradient(to right, #632EE3, #9F62F2)
      `,
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat"
    }}
  >
    <h1 className="text-2xl font-semibold">In-Progress</h1>
    <p className="text-4xl font-bold">{Totaltask}</p>
  </div>


  <div
    className="w-full lg:w-1/2 h-48 lg:h-60 rounded-xl text-white flex flex-col justify-center items-center"
    style={{
      backgroundImage: `
        url('/vector1.png'),
        url('/vector2.png'),
        linear-gradient(to right, #54CF68, #00827A)
      `,
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat"
    }}
  >
    <h1 className="text-2xl font-semibold">Resolved</h1>
    <p className="text-4xl font-bold">{Totalresolved}</p>
  </div>

</div>

  );
};

export default Card;
