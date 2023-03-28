import React from "react";
import "./Newuser.css";
import { Navbar } from "../../components/Navbar/Navbar";

export const Newuser = () => {
  return (
    <>
      <div className="NewUser">
        <Navbar></Navbar>
        <div className="form_P">
          <div class="formbold-main-wrapper">
            <div class="formbold-form-wrapper">
              <form action="https://formbold.com/s/FORM_ID" method="POST">
                <div class="formbold-mb-5">
                  <label for="name" class="formbold-form-label">
                    {" "}
                    Full Name{" "}
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    placeholder="Full Name"
                    class="formbold-form-input"
                  />
                </div>
                <div class="formbold-mb-5">
                  <label for="phone" class="formbold-form-label">
                    {" "}
                    Phone Number{" "}
                  </label>
                  <input
                    type="text"
                    name="phone"
                    id="phone"
                    placeholder="Enter your phone number"
                    class="formbold-form-input"
                  />
                </div>
                <div class="formbold-mb-5">
                  <label for="email" class="formbold-form-label">
                    {" "}
                    Email Address{" "}
                  </label>

                  <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Enter your email"
                    class="formbold-form-input"
                  />
                </div>
                <div class="formbold-mb-5">
                  <label for="email" class="formbold-form-label">
                    {" "}
                    Gender{" "}
                  </label>
                  <select className="formbold-form-input" name="geder" id="">
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="others">Others</option>
                  </select>
                </div>
                <div class="flex flex-wrap formbold--mx-3">
                  <div class="w-full sm:w-half formbold-px-3">
                    <div class="formbold-mb-5 w-full">
                      <label for="date" class="formbold-form-label">
                        {" "}
                        Appointment Date 1{" "}
                      </label>
                      <input
                        type="date"
                        name="date"
                        id="date"
                        class="formbold-form-input"
                      />
                    </div>
                  </div>
                  <div class="w-full sm:w-half formbold-px-3">
                    <div class="formbold-mb-5 w-full">
                      <label for="date" class="formbold-form-label">
                        {" "}
                        Appointment Date 2{" "}
                      </label>
                      <input
                        type="date"
                        name="date"
                        id="date"
                        class="formbold-form-input"
                      />
                    </div>
                  </div>
                </div>
                <div class="formbold-mb-5">
                  <label for="email" class="formbold-form-label">
                    {" "}
                    Graduated From{" "}
                  </label>
                  <select className="formbold-form-input" name="geder" id="">
                    <option value="IIT_Delhi">IIT Delhi</option>
                    <option value="IIT_Kanpur">IIT Kanpur</option>
                    <option value="IIT_Madras">IIT Madras</option>
                    <option value="IIT_Kharagpur">IIT Kharagpur</option>
                  </select>
                </div>

                <div class="formbold-mb-5 formbold-pt-3">
                  <label class="formbold-form-label formbold-form-label-2">
                    Upload Photo
                    <input type="file" id="myFile" name="filename"style={{marginLeft:'2vw'}} ></input>
                  </label>
                  <label class="formbold-form-label formbold-form-label-2">
                    Upload Resume
                    <input type="file" id="myFile" name="filename"style={{marginLeft:'1vw'}} ></input>
                  </label>
                </div>

                <div>
                  <button class="formbold-btn">Book Appointment</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
