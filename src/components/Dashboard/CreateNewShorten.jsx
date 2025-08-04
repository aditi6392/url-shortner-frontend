import React, { useState } from 'react'
import { useStoreContext } from '../../contextApi/ContextApi';
import { useForm } from 'react-hook-form';
import TextField from '../TextField';
import { Tooltip } from '@mui/material';
import { RxCross2 } from 'react-icons/rx';
import api from '../../api/api';
import toast from 'react-hot-toast';

const CreateNewShorten = ({ setOpen, refetch }) => {
  const { token } = useStoreContext();
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      originalUrl: "",
    },
    mode: "onTouched",
  });

  const createShortUrlHandler = async (data) => {
    setLoading(true);
    try {
      const { data: res } = await api.post("/api/urls/shorten", data, {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Authorization: "Bearer " + token,
        },
      });

      const shortenUrl = `${import.meta.env.VITE_REACT_FRONT_END_URL}/s/${res.shortUrl}`;
      navigator.clipboard.writeText(shortenUrl).then(() => {
        toast.success("Short URL Copied to Clipboard", {
          position: "bottom-center",
          className: "mb-5",
          duration: 3000,
        });
      });

      reset();
      setOpen(false);
    } catch (error) {
      toast.error("Create ShortURL Failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex justify-center items-center">
      <div className="bg-white rounded-lg shadow-lg sm:w-[450px] w-[360px] relative pt-8 pb-5 sm:px-8 px-4">
        <form onSubmit={handleSubmit(createShortUrlHandler)}>

          <h1 className="text-2xl font-semibold text-slate-800 mb-4">
            Create New Shorten Url
          </h1>

          <hr className="mt-2 sm:mb-5 mb-3 text-slate-950" />

          <div>
            <TextField
              label="Enter URL"
              required
              id="originalUrl"
              placeholder="https://example.com"
              type="url"
              message="Url is required"
              register={register}
              errors={errors}
            />
          </div>

          <button
            className="bg-blue-600 font-semibold text-white w-32 py-2 transition-colors rounded-md my-3"
            type="submit"
          >
            {loading ? "Loading..." : "Create"}
          </button>

          {!loading && (
            <Tooltip title="Close">
              <button
                disabled={loading}
                onClick={() => setOpen(false)}
                className="absolute right-2 top-2"
              >
                <RxCross2 className="text-slate-800 text-3xl" />
              </button>
            </Tooltip>
          )}
        </form>
      </div>
    </div>
  );
};

export default CreateNewShorten;
