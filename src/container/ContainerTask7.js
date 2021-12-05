import React, { useEffect, useState } from "react";
import { Task7 } from "../components/Task7";
import utils from "../libs/utils";

export const ContainerTask7 = (props) => {
  const [data, setData] = useState([]);
  //Global
  useEffect(() => {
    setData(
      utils.instance.calculateScoreGlobal(props.data, props.user, () => true)
    );
  }, []);

  return (
    <div>
      <Task7 data={data} user={props.user} />
    </div>
  );
};
