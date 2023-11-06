import Title from "../Shared/Title";
import { NavLink } from "react-router-dom";
import { useForm } from "react-hook-form";

const Update = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);

   
  };
  return (
    <div>
      <Title>
        Update a Book
        <div className="text-xl mt-3 flex justify-center gap-3">
          <NavLink to={"/"}>
            <p>Home</p>
          </NavLink>
          <p>&lt;</p>
          <p className="text-[#f6425f]">Update Book</p>
        </div>
      </Title>

      {/* update book form */}
      <div className="bg-gray-100 mb-5 max-w-7xl mx-auto p-5">
        <section className="contact bg-contact-bg bg-cover bg-center bg-fixed my-10">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="bg-white shadow-md rounded-lg px-8 pt-6 pb-8 mb-4 mx-auto max-w-3xl"
          >
            <h3 className="text-3xl font-bold text-center mb-6">
              Fill up this field to add a books
            </h3>
            <div className="mb-4 flex flex-wrap -mx-3">
              <div className="w-full md:w-1/2 px-3 mb-4">
                <input
                  {...register("name", { required: true })}
                  className="appearance-none block w-full bg-gray-100 text-gray-800 border rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  type="text"
                  placeholder="Books Name"
                />
                {errors.name && <p>This field is required</p>}
              </div>
              <div className="w-full md:w-1/2 px-3">
                <select
                  {...register("category", { required: true })}
                  className="select select-bordered w-full max-w-xs bg-gray-100"
                >
                  <option value="Novel">Novel</option>
                  <option value="History">History</option>
                  <option value="Sci-Fi">Sci-Fi</option>
                  <option value="Drama">Drama</option>
                </select>
                {errors.category && <p>This field is required</p>}
              </div>
            </div>
            <div className="mb-4 flex flex-wrap -mx-3">
              <div className="w-full md:w-1/2 px-3 mb-4">
                <input
                  {...register("image", { required: true })}
                  className="appearance-none block w-full bg-gray-100 text-gray-800 border rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  type="text"
                  placeholder="Book Image"
                />
                {errors.image && <p>This field is required</p>}
              </div>
              <div className="w-full md:w-1/2 px-3">
                <input
                  {...register("quantity", { required: true })}
                  className="appearance-none block w-full bg-gray-100 text-gray-800 border rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  type="number"
                  placeholder="Quantity of the books"
                />
                {errors.quantity && <p>This field is required</p>}
              </div>
            </div>
            <div className="mb-4 flex flex-wrap -mx-3">
              <div className="w-full md:w-1/2 px-3 mb-4">
                <input
                  {...register("author", { required: true })}
                  className="appearance-none block w-full bg-gray-100 text-gray-800 border rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  type="text"
                  placeholder="Author Name"
                />
                {errors.author && <p>This field is required</p>}
              </div>
              <div className="w-full md:w-1/2 px-3">
                <input
                  {...register("rating", { required: true })}
                  className="appearance-none block w-full bg-gray-100 text-gray-800 border rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  type="text"
                  placeholder="Rating of the books"
                />
                {errors.rating && <p>This field is required</p>}
              </div>
            </div>

            <textarea
              {...register("description", { required: true })}
              className="appearance-none block w-full bg-gray-100 text-gray-800 border rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              name="description"
              placeholder="Description"
              id=""
              cols="30"
              rows="10"
            />
            {errors.description && <p>This field is required</p>}
            <input
              type="submit"
              value="Add Book"
              className="btn bg-[#f6425f] w-full text-white px-5 py-2 rounded-md mt-4 hover:bg-[#f9c589]"
            />
          </form>
        </section>
      </div>
    </div>
  );
};

export default Update;
