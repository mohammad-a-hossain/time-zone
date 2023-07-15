import React, { useEffect, useState } from "react";
import { getOffsets, getTimeZone } from "../utils/timezone";
import { TIMEZONE_OFFSET } from "../constant/timezone";

export const ClockForm = ({
  values = { title: "", timezone: "UTC", offset: 0 },
  handleClock,
  title = true,
  edit = false,
}) => {
  const [formValues, setFormValues] = useState({ ...values });

  useEffect(() => {
    if (TIMEZONE_OFFSET[formValues.timezone]) {
      setFormValues((prev) => ({
        ...prev,
        offset: TIMEZONE_OFFSET[formValues.timezone],
      }));
    }
  }, [formValues.timezone]);

  const handleChange = (e) => {
    let { name, value } = e.target;
    if (name === "offset") {
      value = Number(value) * 60;
    }
    setFormValues((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleClock(formValues);
  };
  return (
    <div>
      <form
        onSubmit={handleSubmit}
        style={{ display: "flex", flexDirection: "column" }}
      >
        <div style={{ border: "1px solid green" }}>
          <label htmlFor="title">enter your title</label> <br />
          <input
            style={{ border: "1px solid grey", padding: "4px" }}
            type="text"
            id="title"
            name="title"
            value={formValues.title}
            onChange={handleChange}
            disabled={!title}
          />
        </div>

        <div style={{ border: "1px solid blue" }}>
          <label htmlFor="title">enter timezone</label>
          <br />
          {/* <input type='text' id='timezone' name='timezone' value={formValues.timezone} onChange={handleChange} /> */}
          <select
            id="timezone"
            name="timezone"
            onChange={handleChange}
            value={formValues.timezone}
          >
            {getTimeZone().map((tz) => (
              <option key={tz} value={tz}>
                {tz}
              </option>
            ))}

          </select>
        </div>

        <div style={{ border: "1px solid red" }}>
          <label htmlFor="title">enter offset</label>
          <br />

          {/*  <input type='number' id='offset' name='offset' value={formValues.offset} onChange={handleChange} /> */}
          <select
            name="offset"
            onChange={handleChange}
            value={formValues.offset / 60}
          >
            {getOffsets().map((offset) => (
              <option key={offset} value={offset}>
                {offset}
              </option>
            ))}
          </select>
        </div>

        <button style={{ color: "black" }}>{edit ? "update" : "create"}</button>
      </form>
    </div>
  );
};
