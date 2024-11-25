import { FaBed, FaBath, FaRulerCombined, FaMapMarker } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";

const PropertyCard = ({ property }) => {
  return (
    <div className="rounded-xl shadow-md relative">
      <Image
        src={`/images/properties/${property.images[0]}`}
        alt={property.name}
        width={800} // Desired width (in pixels)
        height={600} // Desired height (in pixels)
        priority={true} // Use for important images
      />
      <div className="p-4">
        <div className="text-left md:text-center lg:text-left mb-6">
          <div className="text-gray-600">{property.type}</div>
          <h3 className="text-xl font-bold">{property.name}</h3>
        </div>
        <h3 className="absolute top-[10px] right-[10px] bg-white px-4 py-2 rounded-lg text-blue-500 font-bold text-right md:text-center lg:text-right">
          {(property.rates.monthly ? `$${property.rates.monthly}/month` : "") ||
            (property.rates.weekly ? `$${property.rates.weekly}/week` : "") ||
            (property.rates.nightly ? `$${property.rates.nightly}/night` : "")}
        </h3>

        <div className="flex justify-center gap-4 text-gray-500 mb-4">
          <p>
            <FaBed /> 3<span className="md:hidden lg:inline">Beds</span>
          </p>
          <p>
            <FaBath /> 2<span className="md:hidden lg:inline">Baths</span>
          </p>
          <p>
            <FaRulerCombined />
            {property.square_feet}
            <span className="md:hidden lg:inline">sqft</span>
          </p>
        </div>

        <div className="flex justify-center gap-4 text-green-900 text-sm mb-4">
          {property.rates.nightly ? (
            <p>
              <i className="fa-solid fa-money-bill"></i> Nightly
            </p>
          ) : (
            ""
          )}
          {property.rates.weekly ? (
            <p>
              <i className="fa-solid fa-money-bill"></i> Weekly
            </p>
          ) : (
            ""
          )}
          {property.rates.monthly ? (
            <p>
              <i className="fa-solid fa-money-bill"></i> Monthly
            </p>
          ) : (
            ""
          )}
        </div>

        <div className="border border-gray-100 mb-5"></div>

        <div className="flex flex-col lg:flex-row justify-between mb-4">
          <div className="flex align-middle gap-2 mb-4 lg:mb-0">
            <FaMapMarker className="text-lg text-orange-700" />
            <span className="text-orange-700">
              {`${property.location.city} ${property.location.state}`}
            </span>
          </div>
          <Link
            href={`/properties/${property._id}`}
            className="h-[36px] bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg text-center text-sm"
          >
            Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;
