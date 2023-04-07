import React, { FC } from "react";
import { useNavigate, useParams } from "react-router-dom";
import DetailsList from "../components/DetailsList";
import { IoArrowBack } from "react-icons/io5";

type Params = {
  name: string;
};

const Details: FC = () => {
  const navigate = useNavigate();
  const { name } = useParams<Params>();

  return (
    <div>
      <button className="back-btn" onClick={() => navigate(-1)}>
        <IoArrowBack /> Back
      </button>
      {name && <DetailsList name={name} navigate={navigate} />}
    </div>
  );
};

export default Details;
