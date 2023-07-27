import React from "react";
import EditForm from "./EditForm";

const page = ({ params }: { params: { propertyId: string } }) => {
  {
    console.log(params);
  }
  return (
    <div>
      
      <EditForm />
    </div>
  );
};

export default page;
