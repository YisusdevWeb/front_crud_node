import { useForm } from "react-hook-form";

export default function RegisterPage() {
  const { register, handleSubmit } = useForm();
  return (
    <div className="bg-zinc-800 max-w-md w-full p-10 rounded-md m-0 content-center flex flex-col justify-center items-center " >
     <h1 className="text-3xl font-bold">Register</h1>
      <form
        onSubmit={handleSubmit((values) => {
          console.log(values);
        })}
      >
     <label>Username:</label>
        <input type="text" {...register("username", { required: true })}  className="shadow appearance-none border rounded w-full py-2 px-3 text-white-700 leading-tight focus:outline-none focus:shadow-outline" />
        <input type="email" {...register("email", { required: true })}  className="shadow appearance-none border rounded w-full py-2 px-3 text-white-700 leading-tight focus:outline-none focus:shadow-outline" />

        <input type="password" {...register("password", { required: true })}  className="shadow appearance-none border rounded w-full py-2 px-3 text-white-700 leading-tight focus:outline-none focus:shadow-outline" />
        <button type="submit" className="bg-indigo-500 px-4 py-1 rounded-md my-2 disabled:bg-indigo-300">Register</button>
      </form>

      
    </div>
  );
}
