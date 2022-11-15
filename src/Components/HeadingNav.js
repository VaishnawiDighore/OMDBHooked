import * as React from "react";
import { Stack } from "@mui/material";
import { useState, useEffect } from "react";
import FavMovie from "./FavMovie";
import { Typography } from "@mui/material";
import { Req } from "../utils";
import Masonry from "@mui/lab/Masonry";

const HeadingNav = (_) => {
  const [listItem, setListItem] = useState("");
  const [click, setClick] = useState(false);
  const [start, setStart] = useState(false);
  const [goal, setGoal] = useState("");

  useEffect(
    (_) => {
      if (click === true) {
        if (goal !== undefined) {
          (async (_) => {
            const response = await Req.get(`?s=${goal}`);
            if (response.data.Response === "True") {
              setListItem(response.data.Search);
              setStart(true);
            } else {
              setStart(false);
            }
          })();
        }
      }
      // eslint-disable-next-line
    },[click]
  );

  const submit_input = (_) => {
    if (goal !== "") {
      setClick(true);
      setTimeout((_) => {
        setClick(false);
      }, 5000);
    }
  };

  const input = (e) => {
    const input_value = e.target.value;
    setGoal(input_value);
  };

  return (
    <>
      {start === "false" && click === "true" ? console.log("trigger") : " "}
      <Stack className="main">
        <Typography variant="v6" color="white">
          HOOKED
        </Typography>
      </Stack>
      <Stack direction="row" className="search">
        <input type="text" onKeyUp={input} />
        <button onClick={submit_input}>SEARCH</button>
      </Stack>
      <p
        className={
          start === false && click === true ? "notfound" : "notfound none"
        }
      >
        Not found
      </p>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          marginTop: 20,
        }}
      >
        <Masonry columns={4} spacing={4}>
          {start === true
            ? listItem.map((data, idx) => {
                return <FavMovie key={idx} data={data} />;
              })
            : ""}
        </Masonry>
      </div>
    </>
  );
};

export default HeadingNav;
