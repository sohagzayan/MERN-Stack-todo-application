import React, { useState } from "react";
import Header from "../components/Header";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { loadingStart, loadingEnd } from "../store/type/type";
import RegisterLoading from "../components/RegisterLoading";
import InAlert from "../components/InAlert";
import useSound from "use-sound";
import ProfileImage from "../assets/profileImage.png";
import Image from "next/image";
import { useEffect } from "react";
import { useRouter } from "next/router";

const Signup = () => {
  // const [play] = useSound(boopSfx);
  const [play] = useSound("/noti.mp3");
  const router = useRouter();

  const [loading, setLoading] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showSuccessAlert, setShowSuccessAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");
  const [selectedFile, setSelectedFile] = useState(null);
  const [avatarPreview, setAvatarPreview] = useState(null);

  // console.log(avatarPreview);

  const dispatch = useDispatch();
  const loadingState = useSelector((current) => current.loadingReducer);

  const onSubmit = async (event) => {
    event.preventDefault();
    setAlertMessage("");
    setLoading(true);
    try {
      const formData = new FormData();
      const form = event.currentTarget;
      const fileInput = Array.from(form.elements).find(
        ({ name }) => name === "file"
      );

      for (const file of fileInput.files) {
        formData.append("file", file);
      }
      // console.log("formData.file", formData.file);
      formData.append("upload_preset", "my-uploads");

      const data = await fetch(
        "https://api.cloudinary.com/v1_1/da0dxyn2l/image/upload",
        {
          method: "POST",
          body: formData,
        }
      ).then((r) => r.json());

      const res = await axios.post("/api/user/signin", {
        email,
        name,
        password,
        avatar: data.secure_url,
      });
      // console.log(res);
      localStorage.setItem("user", JSON.stringify(res.data.user));
      setLoading(false);
      play();
      router.push("/");
    } catch (error) {
      setLoading(false);
      //       console.log(error);
      if (error.response.data.error) {
        setAlertMessage(error.response.data.error);
      }
      //       console.log("error", error.response.data.error);
    }
  };

  useEffect(() => {
    if (!selectedFile) {
      setAvatarPreview(undefined);
      return;
    }

    const objectUrl = URL.createObjectURL(selectedFile);
    setAvatarPreview(objectUrl);
    return () => URL.revokeObjectURL(objectUrl);
  }, [selectedFile]);

  const onSelectFile = (e) => {
    if (!e.target.files || e.target.files.length === 0) {
      setSelectedFile(undefined);
      return;
    }
    setSelectedFile(e.target.files[0]);
  };

  return (
    <>
      <Header />
      {/* <InAlert /> */}
      {loading ? <RegisterLoading /> : null}
      <button onClick={play}>Auto </button>
      <div>
        <div className="bg-light_white shadow-md md:w-[50%] w-[90%] mx-auto mt-16 p-8 rounded-md text-center">
          <form onSubmit={onSubmit} className="flex flex-col  justify-center">
            <h2 className="font-bold mb-3 text-xl">Sign Up</h2>
            <input
              type="text"
              placeholder="Name"
              className="input input-bordered w-full mb-4"
              onChange={(e) => setName(e.target.value)}
              value={name}
              //       required
            />

            <input
              type="email"
              placeholder="Email"
              className="input input-bordered w-full mb-4"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              required
            />

            <input
              type="password"
              placeholder="Password"
              className="input input-bordered w-full mb-4"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              required
            />
            <div className="flex items-center justify-start mb-4">
              {selectedFile ? (
                <img
                  width={50}
                  className=""
                  style={{
                    clipPath: "circle()",
                  }}
                  src={avatarPreview}
                  alt="profile"
                />
              ) : (
                <Image
                  width={50}
                  height={50}
                  alt="profile"
                  src={ProfileImage}
                />
              )}
              <input
                type="file"
                name="file"
                required
                //       placeholder="Password"
                onChange={onSelectFile}
                className="  w-full ml-4"
              />
            </div>

            <span className="text-[#EB3941] mb-2">
              {alertMessage && alertMessage}
            </span>
            <button
              type="submit"
              className={
                loadingState.loading
                  ? "btn bg-[#AAAAAA] text-[#797979]  border-none w-full mb-4 pointer-events-none"
                  : "btn bg-dark_purple border-none w-full mb-4 "
              }
            >
              Sign In
            </button>
          </form>
          <span className="block font-bold text-xl">
            <Link href="/login">Login</Link>
          </span>

          <span className="text-blue">Forget Password</span>
        </div>
      </div>
    </>
  );
};

export default Signup;
