import React, { useState } from "react";
import { Feedback } from "../models/Feedback";
import CircularProgress from "@mui/material/CircularProgress";
import { ReportService } from "../services/ReportService";
import { toast } from "react-toastify";

interface Caller{
    onClose: Function;
  }

export const FeedbackForm: React.FC<Caller> = ({onClose}):JSX.Element => {
  const [form, setForm] = useState<Feedback>({
    email_address: "",
    name: "",
    product_service: "",
    rating: 0,
    review: "",
  });
  const [loading, isLoading] = useState<boolean>();

  const addReview = () => {
    isLoading(true);
    new ReportService()
      .addReview(form)
      .then((res) => {
        toast.success("Feed back given");
        onClose(false)
      })
      .catch(() => toast.error("An error occured"))
      .finally(() => isLoading(false));
  };

  return (
    <div className="z-40 px-8 pt-5 ">
      <h1 className="text-3xl text-center mb-6 font-semibold text-slate-700">Feed back form</h1>
      <form id="loginForm">
        <div className="mb-[22px]">
          <input
            id="email"
            onChange={(event) =>
              setForm({ ...form, email_address: event.target.value })
            }
            type="email"
            placeholder="Email"
            className="w-full px-5 py-3 text-base transition bg-transparent border rounded-md outline-none border-stroke dark:border-dark-3 text-body-color dark:text-dark-6 placeholder:text-dark-6 focus:border-primary dark:focus:border-primary focus-visible:shadow-none"
          />
        </div>

        <div className="mb-[22px]">
          <input
            id="name"
            type="text"
            onChange={(event) => setForm({ ...form, name: event.target.value })}
            placeholder="Name"
            className="w-full px-5 py-3 text-base transition bg-transparent border rounded-md outline-none border-stroke dark:border-dark-3 text-body-color dark:text-dark-6 placeholder:text-dark-6 focus:border-primary dark:focus:border-primary focus-visible:shadow-none"
          />
        </div>

        <div className="mb-[22px]">
          <input
            id="product"
            type="text"
            onChange={(event) =>
              setForm({ ...form, product_service: event.target.value })
            }
            placeholder="Product service"
            className="w-full px-5 py-3 text-base transition bg-transparent border rounded-md outline-none border-stroke dark:border-dark-3 text-body-color dark:text-dark-6 placeholder:text-dark-6 focus:border-primary dark:focus:border-primary focus-visible:shadow-none"
          />
        </div>

        <div className="mb-[22px]">
          <input
            id="rating"
            type="number"
            min={0}
            max={10}
            onChange={(event) =>
              setForm({ ...form, rating: parseInt(event.target.value) })
            }
            placeholder="Rating"
            className="w-full px-5 py-3 text-base transition bg-transparent border rounded-md outline-none border-stroke dark:border-dark-3 text-body-color dark:text-dark-6 placeholder:text-dark-6 focus:border-primary dark:focus:border-primary focus-visible:shadow-none"
          />
        </div>

        <div className="mb-[22px]">
          <textarea
            id="review"
            rows={4}
            onChange={(event) =>
              setForm({ ...form, review: event.target.value })
            }
            placeholder="Type review here"
            className="w-full px-5 py-3 text-base transition bg-transparent border rounded-md outline-none border-stroke dark:border-dark-3 text-body-color dark:text-dark-6 placeholder:text-dark-6 focus:border-primary dark:focus:border-primary focus-visible:shadow-none"
          />
        </div>

        <div className="mb-9">
          {loading ? (
            <div className="text-center">
                <CircularProgress color="success" />
            </div>
          ) : (
            <input
              type="button"
              onClick={addReview}
              value="Send"
              className="w-full px-5 py-3 text-base text-white transition duration-300 ease-in-out border rounded-md cursor-pointer border-primary bg-primary hover:bg-blue-dark"
            />
          )}
        </div>

        <p id="response"></p>
        <div className="flex justify-center items-center">
          <div
            id="loader"
            className="loader"
            style={{ margin: "10px 0" }}
          ></div>
        </div>
      </form>
    </div>
  );
}
