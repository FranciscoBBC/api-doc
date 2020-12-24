import React from "react";
import TextEditor from "@components/TextEditor";

const EditRoute = ({ routeId }) => {
  return <TextEditor>{routeId}</TextEditor>;
};

export const getServerSideProps = ({ query }) => {
  const routeId = query.id;

  return {
    props: { routeId }
  };
};

export default EditRoute;
