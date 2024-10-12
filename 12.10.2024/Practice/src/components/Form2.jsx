import React, { useState } from "react";

function Form2() {
  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    country: "India",
    addresh: "",
    comment:false,
    candidates:false,
    offers:false,
    Notification: "",
  });
  function changeHandler(event) {
    const { name, value, checked, type } = event.target;
    setData((prevData) => {
      return { ...prevData, [name]: type === 'checkbox'? checked : value };
    });
  }
  
  function submitHandler(event){
    event.preventDefault()
    console.log(data)
  }

  return (
    <div className="flex justify-center mt-4">
      <div className="">
        <form onSubmit={submitHandler} className="flex flex-col gap-2">
          <div>
            <label htmlFor="firstName">First name</label>
            <br />
            <input
              onChange={changeHandler}
              type="text"
              name="firstName"
              id="firstName"
              value={data.firstName}
              placeholder="enter your first name"
              className="border border-black"
            />
          </div>

          <div>
            <label htmlFor="lastName">Last name</label>
            <br />
            <input
              onChange={changeHandler}
              type="text"
              name="lastName"
              id="lastName"
              value={data.lastName}
              placeholder="enter your last name"
              className="border border-black"
            />
          </div>

          <div>
            <label htmlFor="email">Email addresh</label>
            <br />
            <input
              onChange={changeHandler}
              type="email"
              name="email"
              id="email"
              value={data.email}
              placeholder="enter your email addresh"
              className="border border-black"
            />
          </div>

          <div>
            <label htmlFor="country">Country</label>
            <br />
            <select
              onChange={changeHandler}
              name="country"
              id="country"
              value={data.country}
              className="border border-black"
            >
              <option value="India">India</option>
              <option value="Pak">Pak</option>
              <option value="USA">USA</option>
            </select>
          </div>

          <div>
            <label htmlFor="addresh">Street addresh</label>
            <br />
            <input
              onChange={changeHandler}
              type="text"
              name="addresh"
              id="addresh"
              value={data.addresh}
              placeholder="addresh"
              className="border border-black"
            />
          </div>

          <div>
            <fieldset>
              <legend>By Email</legend>
            </fieldset>
            <div>
              <input
                onChange={changeHandler}
                type="checkbox"
                name="comment"
                id="comment"
                checked={data.comment}
              />
              <label htmlFor="comment">Comments</label>
            </div>
            <div>
              <input
                onChange={changeHandler}
                type="checkbox"
                name="candidates"
                id="candidates"
                checked={data.candidates}
              />
              <label htmlFor="candidates">Candidates</label>
            </div>
            <div>
              <input
                onChange={changeHandler}
                type="checkbox"
                name="offers"
                id="offers"
                checked={data.offers}
              />
              <label htmlFor="offers">Offers</label>
            </div>
          </div>

          <div>
           
            <fieldset>
              <p>Push Notification</p>
            </fieldset>
            <div>
              <input
                onChange={changeHandler}
                value="Everything"
                type="radio"
                name="Notification"
                id="pushEverything"
              />
              <label htmlFor="pushEverything">Everything</label>
              <br />
              <input
                onChange={changeHandler}
                value="same as email"
                type="radio"
                name="Notification"
                id="sameAsEmail"
              />
              <label htmlFor="sameAsEmail">Same as Email</label>
              <br />
              <input
                onChange={changeHandler}
                value="No Push Notification"
                type="radio"
                name="Notification"
                id="noPush"
              />
              <label htmlFor="noPush">No push notification</label>
            </div>
          </div>

          <button className="place-self-start text-white bg-sky-500 px-2 py-1 rounded-md">
            Save
          </button>
        </form>
      </div>
    </div>
  );
}

export default Form2;
