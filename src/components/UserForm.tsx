"use client";
import React, { useEffect, useState } from "react";

const UserForm = () => {
  const [data, setData] = useState<UserData>({
    firstname: "",
    lastname: "",
    license: "",
    carModel: "",
    carMake: "",
  });

  useEffect(() => {
    const storedData = localStorage.getItem("userData");
    if (storedData) {
      setData(JSON.parse(storedData));
    }
  }, []);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setData({
      ...data,
      [name]: value,
    });
  };

  function handleSubmit(event: React.MouseEvent<HTMLButtonElement>) {
    event.preventDefault();
    localStorage.setItem("userData", JSON.stringify(data));
  }

  function handleDelete(event: React.MouseEvent<HTMLButtonElement>) {
    event.preventDefault();
    localStorage.removeItem("userData");
  }

  return (
    <div className="flex flex-col items-center min-h-screen">
      <form className="max-w-md mx-auto">
        <label htmlFor="firstname" className="block mb-2">
          First name
        </label>
        <input
          type="text"
          id="firstname"
          name="firstname"
          value={data.firstname}
          onChange={(event) => handleChange(event)}
          className="border border-gray-300 rounded-md px-3 py-2 mb-2"
          required
        />
        <label htmlFor="lastname" className="block mb-2">
          Last name
        </label>
        <input
          type="text"
          id="lastname"
          name="lastname"
          value={data.lastname}
          onChange={(event) => handleChange(event)}
          className="border border-gray-300 rounded-md px-3 py-2 mb-2"
          required
        />
        <label htmlFor="license" className="block mb-2">
          License plate
        </label>
        <input
          type="text"
          id="license"
          name="license"
          value={data.license}
          onChange={(event) => handleChange(event)}
          className="border border-gray-300 rounded-md px-3 py-2 mb-2"
          required
        />
        <label htmlFor="carModel" className="block mb-2">
          Car model
        </label>
        <input
          type="text"
          id="carModel"
          name="carModel"
          value={data.carModel}
          onChange={(event) => handleChange(event)}
          className="border border-gray-300 rounded-md px-3 py-2 mb-2"
          required
        />
        <label htmlFor="carMake" className="block mb-2">
          Car make
        </label>
        <input
          type="text"
          id="carMake"
          name="carMake"
          value={data.carMake}
          onChange={(event) => handleChange(event)}
          className="border border-gray-300 rounded-md px-3 py-2 mb-2"
          required
        />
      </form>
      <div className="flex gap-11">
        <button
          onClick={(event) => handleSubmit(event)}
          className="bg-blue-500 text-white px-4 py-2 rounded-md"
        >
          Submit
        </button>
        <button
          onClick={(event) => handleDelete(event)}
          className="bg-red-500 text-white px-4 py-2 rounded-md"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default UserForm;
