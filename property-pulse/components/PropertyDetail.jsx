import Link from "next/link";
import Image from "next/image";
import {
  FaArrowLeft,
  FaTimes,
  FaBed,
  FaBath,
  FaRulerCombined,
  FaCheck,
} from "react-icons/fa";

const PropertyDetail = ({ property }) => {
  return (
    <>
      {/* <!-- Property Header Image --> */}
      <section>
        <div className="container-xl m-auto">
          <div className="grid grid-cols-1">
            <Image
              src={property ? `/images/properties/${property.images[0]}` : ""}
              alt=""
              className="object-cover h-[400px] w-full"
              width="1800"
              height={"900"}
            />
          </div>
        </div>
      </section>

      {/* <!-- Go Back --> */}
      <section>
        <div className="container m-auto py-6 px-6">
          <Link
            href="/properties"
            className="text-blue-500 hover:text-blue-600 flex items-center"
          >
            <FaArrowLeft className="mr-2" /> Back to Properties
          </Link>
        </div>
      </section>

      <section className="bg-blue-50">
        <div className="container m-auto py-10 px-6">
          <div className="grid grid-cols-1 md:grid-cols-[70%_30%] gap-6 w-full">
            {/* Main Content */}
            <main>
              <div className="bg-white p-6 rounded-lg shadow-md text-center md:text-left">
                <div className="text-gray-500 mb-4">{property.type}</div>
                <h1 className="text-3xl font-bold mb-4">{property.name}</h1>
                <div className="text-gray-500 mb-4 flex align-middle justify-center md:justify-start">
                  <i className="fa-solid fa-location-dot text-lg text-orange-700 mr-2"></i>
                  <p className="text-orange-700">
                    {`${property.location.street} ${property.location.city} ${property.location.state} ${property.location.zipcode}`}
                  </p>
                </div>

                <h3 className="text-lg font-bold my-6 bg-gray-800 text-white p-2">
                  Rates & Options
                </h3>
                <div className="flex flex-col md:flex-row justify-around">
                  <div className="flex items-center justify-center mb-4 border-b border-gray-200 md:border-b-0 pb-4 md:pb-0">
                    <div className="text-gray-500 mr-2 font-bold">Nightly</div>
                    <div className="text-2xl font-bold text-blue-500">
                      {property.rates.nightly ? (
                        `$${property.rates.nightly}/Night`
                      ) : (
                        <FaTimes className="text-red-700" />
                      )}
                    </div>
                  </div>
                  <div className="flex items-center justify-center mb-4 border-b border-gray-200 md:border-b-0 pb-4 md:pb-0">
                    <div className="text-gray-500 mr-2 font-bold">Weekly</div>
                    <div className="text-2xl font-bold text-blue-500">
                      {property.rates.weekly ? (
                        `$${property.rates.weekly}/Week`
                      ) : (
                        <FaTimes className="text-red-700" />
                      )}
                    </div>
                  </div>
                  <div className="flex items-center justify-center mb-4 pb-4 md:pb-0">
                    <div className="text-gray-500 mr-2 font-bold">Monthly</div>
                    <div className="text-2xl font-bold text-blue-500">
                      {property.rates.monthly ? (
                        `$${property.rates.monthly}/Month`
                      ) : (
                        <FaTimes className="text-red-700" />
                      )}
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md mt-6">
                <h3 className="text-lg font-bold mb-6">
                  Description & Details
                </h3>
                <div className="flex justify-center gap-4 text-blue-500 mb-4 text-xl space-x-9">
                  <p>
                    <FaBed /> {property.beds}
                    <span className="hidden sm:inline">Beds</span>
                  </p>
                  <p>
                    <FaBath /> {property.baths}
                    <span className="hidden sm:inline">Baths</span>
                  </p>
                  <p>
                    <FaRulerCombined />
                    {property.square_feet}
                    <span className="hidden sm:inline">sqft</span>
                  </p>
                </div>
                <p className="text-gray-500 mb-4">{property.description}</p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md mt-6">
                <h3 className="text-lg font-bold mb-6">Amenities</h3>

                <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 list-none">
                  {property.amenities.map((amenity) => {
                    return (
                      <li key={amenity}>
                        <FaCheck className="text-green-600 mr-2 mt-3" />
                        {amenity}
                      </li>
                    );
                  })}
                </ul>
              </div>
              {/* <!-- Map --> */}
              <div className="bg-white p-6 rounded-lg shadow-md mt-6">
                <div id="map"></div>
              </div>
            </main>

            {/* Sidebar */}
            <aside className="space-y-4 sticky top-4">
              <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold w-full py-2 px-4 rounded-full flex items-center justify-center">
                <i className="fas fa-bookmark mr-2"></i> Bookmark Property
              </button>
              <button className="bg-orange-500 hover:bg-orange-600 text-white font-bold w-full py-2 px-4 rounded-full flex items-center justify-center">
                <i className="fas fa-share mr-2"></i> Share Property
              </button>

              {/* Contact Form */}
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-6">
                  Contact Property Manager
                </h3>
                <form>
                  <div className="mb-4">
                    <label
                      className="block text-gray-700 text-sm font-bold mb-2"
                      htmlFor="name"
                    >
                      Name:
                    </label>
                    <input
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      id="name"
                      name="name"
                      type="text"
                      placeholder="Enter your name"
                      required
                    />
                  </div>
                  <div className="mb-4">
                    <label
                      className="block text-gray-700 text-sm font-bold mb-2"
                      htmlFor="email"
                    >
                      Email:
                    </label>
                    <input
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      id="email"
                      name="email"
                      type="email"
                      placeholder="Enter your email"
                      required
                    />
                  </div>
                  <div className="mb-4">
                    <label
                      className="block text-gray-700 text-sm font-bold mb-2"
                      htmlFor="phone"
                    >
                      Phone:
                    </label>
                    <input
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      id="phone"
                      name="phone"
                      type="text"
                      placeholder="Enter your phone number"
                    />
                  </div>
                  <div className="mb-4">
                    <label
                      className="block text-gray-700 text-sm font-bold mb-2"
                      htmlFor="message"
                    >
                      Message:
                    </label>
                    <textarea
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 h-44 focus:outline-none focus:shadow-outline"
                      id="message"
                      name="message"
                      placeholder="Enter your message"
                    ></textarea>
                  </div>
                  <div>
                    <button
                      className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline flex items-center justify-center"
                      type="submit"
                    >
                      <i className="fas fa-paper-plane mr-2"></i> Send Message
                    </button>
                  </div>
                </form>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* <!-- Images --> */}
      <section className="bg-blue-50 p-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-2 gap-4">
            {property.images.map((image) => {
              return (
                <div key={image} className="col-span-2">
                  <Image
                    src={property ? `/images/properties/${image}` : ""}
                    alt=""
                    height={10000}
                    width={10000}
                    className="object-cover h-[400px] w-full rounded-xl cursor-pointer"
                  />
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default PropertyDetail;
