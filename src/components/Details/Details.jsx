import { useLoaderData } from "react-router-dom";


const Details = () => {
    const loadedEquipment = useLoaderData();
    console.log(loadedEquipment);
    return (
        <div className="container mt-16 lg:mt-32">
            <h2 className="text-center font-bold text-lg md:text-xl lg:text-2xl">Details</h2>

            <div className="max-w-3xl mx-auto border rounded-lg shadow-lg p-6 bg-white mt-5">
    <img
      src={loadedEquipment.image}
      alt={loadedEquipment.item_name}
      className="rounded-t-lg w-3/5 mx-auto object-cover "
    />
    <h3 className="text-xl font-bold mt-4">{loadedEquipment.itemName}</h3>
    <p className="text-gray-500 text-sm mt-1 md:text-lg">
      <strong>Category:</strong> {loadedEquipment.category}
    </p>
    <p className="text-gray-700 mt-4">{loadedEquipment.description}</p>
    <p className="mt-4 text-lg font-semibold text-green-600">
      Price: {loadedEquipment.price}
    </p>
    <p className="mt-2">
      <strong>Rating:</strong> {loadedEquipment.rating}
      <div className="rating ">
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
  <input
    type="radio"
    name="rating-2"
    className="mask mask-star-2 bg-orange-400"
    defaultChecked />
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
</div>
    </p>
    <p className="mt-2">
      <strong>Customization Options:</strong>
      <span className="text-blue-600">{loadedEquipment.customization}</span>
    </p>
    <p className="mt-2">
      <strong>Processing Time:</strong> {loadedEquipment.delivery}
    </p>
    <p className="mt-4">
      <strong>Stock Status:</strong>{" "}
      <span
        className={`${
          loadedEquipment.stock > 10 ? "text-green-600" : "text-red-600"
        }`}
      >
        {loadedEquipment.stock} units available
      </span>
    </p>
  </div>
        </div>
    );
};

export default Details;