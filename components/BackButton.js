import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { colors } from "../services/colorService";
import Link from "next/link";

const BackButton = ({ backUrl, color }) => {
  return (
    <div>
      <Link href={backUrl}>
        <FontAwesomeIcon
          icon={faArrowLeft}
          className={`${
            colors[color]?.text || "text-black"
          } w-6 h-6 hover:h-7 duration-200 cursor-pointer`}
        />
      </Link>
    </div>
  );
};

export default BackButton;
