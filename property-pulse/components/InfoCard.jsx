const InfoCard = ({
  forWho,
  description,
  buttonInfo,
  bgColor,
  buttonColor,
  hoverColor,
}) => {
  return (
    <>
      <div className={`${bgColor} p-6 rounded-lg shadow-md`}>
        <h2 className="text-2xl font-bold">{forWho}</h2>
        <p className="mt-2 mb-4">{description}</p>
        <a
          href="/properties.html"
          className={`inline-block ${buttonColor} text-white rounded-lg px-4 py-2 hover:${hoverColor}`}
        >
          {buttonInfo}
        </a>
      </div>
    </>
  );
};

export default InfoCard;
