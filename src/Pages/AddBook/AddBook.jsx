import { useForm } from "react-hook-form";
import Title from "../../components/Shared/Title";
import { NavLink } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";
import toast from "react-hot-toast";

const AddBook = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    // console.log(data);

    // send data to server
    axios.post("https://book-minder-library-server.vercel.app/api/v1/books", data, {withCredentials: true})
    .then((res) => {
      if (res.data.insertedId) {
        Swal.fire({
          title: "Success!",
          text: "Product Added Successfully",
          icon: "success",
          confirmButtonText: "Ok",
        }
        );
      }
    })
    .catch(error => {
      console.log(error);
      toast.error("this book is already added, please update a books")
    })
  };

  return (
    <div>
      <Title>
        Add a new Book
        <div className="text-xl mt-3 flex justify-center gap-3">
          <NavLink to={"/"}>
            <p>Home</p>
          </NavLink>
          <p>&lt;</p>
          <p className="text-[#f6425f]"> Add Book</p>
        </div>
      </Title>

      {/* add book form */}
      <div className=" mb-5 max-w-7xl mx-auto p-5">
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
                  className="select select-bordered w-full max-w-xs bg-gray-100 text-black"
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

export default AddBook;
